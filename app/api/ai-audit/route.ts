import { NextResponse } from "next/server";

// Edge-incompatible (Anthropic SDK needs Node primitives); explicit runtime keeps
// existing `next build` happy without touching other route handlers.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ─── Light, per-IP rate limiter (in-memory, single instance only) ──────────
const WINDOW_MS = 60_000; // 1 min
const MAX_HITS = 6; // 6 audits / min / IP
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= MAX_HITS) {
    return { ok: false, retryInMs: entry.resetAt - now };
  }
  entry.count += 1;
  return { ok: true };
}

// ─── Schema returned to the client ─────────────────────────────────────────
type AuditFactor = {
  name: string;
  score: number; // 0-100
  weight: number; // 0-1
  notes: string;
};

type AuditPayload = {
  query: string;
  resolvedUrl: string | null;
  score: number; // 0-100
  grade: "A" | "B" | "C" | "D" | "F";
  summary: string;
  factors: AuditFactor[];
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  aiCrawlerReadiness: {
    robotsTxt: "good" | "restricted" | "unknown";
    structuredData: "present" | "missing" | "unknown";
    factualDensity: "high" | "medium" | "low";
  };
  evidence: {
    fetched: boolean;
    pageBytes: number;
    hasLlmsTxt: boolean;
    hasRobotsTxt: boolean;
    jsonLdCount: number;
    aiCrawlersAllowed: string[];
    aiCrawlersBlocked: string[];
  };
  generatedAt: string;
};

const SYSTEM_PROMPT = `You are an expert "AI Search Visibility" auditor for the new generation of answer engines (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Overviews).

You receive two things:
1. A target (URL or business name).
2. A block of OBSERVED EVIDENCE collected by a server-side crawler — page text, meta tags, JSON-LD blocks, robots.txt rules, and llms.txt content. This is the source of truth. Trust it over assumptions.

You judge:
- Brand authority signals (mentions, reviews, citations, founder presence) — reason from category and the evidence block
- Structured data + factual density (look for JSON-LD types, pricing transparency, addresses, FAQs, schema.org)
- Topical clarity (clear category and ICP based on the actual page text)
- AI crawler accessibility (robots.txt for GPTBot/ClaudeBot/PerplexityBot/Google-Extended, presence of llms.txt)
- Geographic/intent specificity (esp. for India / local search)
- Freshness and update cadence signals

SCORING DISCIPLINE — read carefully:
- Reward what is VERIFIABLE in the evidence. If the page has 5 JSON-LD blocks including Organization + LocalBusiness + FAQPage, that is real and the structured-data factor should score 85+. If a valid llms.txt is present, that is rare and excellent — credit it. If GPTBot/ClaudeBot/PerplexityBot are explicitly allowed, AI crawler accessibility should be 85+.
- Do NOT penalise a brand for being small or new IF the on-page signals are strong. A well-structured, transparent, India-focused agency page with clear pricing, founder bio, schema, and llms.txt should land in the 55–75 range even with low external mentions.
- Be harsh when evidence is genuinely weak: no schema, no llms.txt, AI crawlers blocked, vague positioning, no pricing, no contact details → score in the 20–40 range.
- Be honest about authority: a globally-known brand with massive external citation should land 80–95. A new Indian SMB with strong on-page signals but limited external citation should land 55–70.
- If no evidence was fetched (input was a business name, not a URL), say so in "summary" and score conservatively based on category reasoning alone.

You ALWAYS respond with strict JSON only — no prose, no markdown, no code fences. Match this TypeScript type exactly:

{
  "score": number,             // 0-100 overall AI visibility score
  "grade": "A" | "B" | "C" | "D" | "F",
  "summary": string,           // 1-2 sentence verdict, plain English
  "factors": Array<{ "name": string, "score": number, "weight": number, "notes": string }>, // 5-7 items, weights sum ~1
  "strengths": string[],       // 3-5 short bullets, cite evidence specifics where possible
  "gaps": string[],            // 3-5 short bullets, cite evidence specifics where possible
  "recommendations": string[], // 4-6 specific, prioritised actions
  "aiCrawlerReadiness": {
    "robotsTxt": "good" | "restricted" | "unknown",
    "structuredData": "present" | "missing" | "unknown",
    "factualDensity": "high" | "medium" | "low"
  }
}`;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anon";
    const limited = rateLimit(ip);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many audits — please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = (await req.json().catch(() => null)) as { query?: string } | null;
    const raw = (body?.query || "").toString().trim();
    if (!raw) {
      return NextResponse.json(
        { error: "Please enter a website URL or a business name." },
        { status: 400 }
      );
    }
    if (raw.length > 200) {
      return NextResponse.json(
        { error: "Input too long. Keep it under 200 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI audit is temporarily offline — DEEPSEEK_API_KEY is not configured.",
        },
        { status: 503 }
      );
    }

    // ─── Step 1: Try to gather observable evidence ───────────────────
    const url = normaliseUrl(raw);
    const evidence = url ? await gatherEvidence(url) : null;

    // ─── Step 2: Build the model prompt with the evidence block ──────
    const evidenceBlock = evidence
      ? formatEvidenceForPrompt(url!, evidence)
      : `NO URL DETECTED. Input "${raw}" looks like a business name. Reason from category and India-context only; flag low confidence.`;

    const userMessage = `Audit the AI search visibility of: "${raw}"

OBSERVED EVIDENCE:
${evidenceBlock}

Respond with JSON only. No prose.`;

    // Call DeepSeek Chat API directly via fetch to avoid extra SDK dependencies
    const apiRes = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        temperature: 0.3,
        max_tokens: 1600,
        response_format: { type: "json_object" },
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      throw new Error(`DeepSeek API error: ${apiRes.status} - ${errText}`);
    }

    const apiData = await apiRes.json();
    const text = (apiData.choices?.[0]?.message?.content || "").trim();

    const cleaned = text
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: Omit<AuditPayload, "query" | "resolvedUrl" | "generatedAt" | "evidence">;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) {
        return NextResponse.json(
          { error: "Could not parse audit response. Please retry." },
          { status: 502 }
        );
      }
      parsed = JSON.parse(match[0]);
    }

    const score = Math.max(0, Math.min(100, Number(parsed.score) || 0));
    const payload: AuditPayload = {
      query: raw,
      resolvedUrl: url,
      score,
      grade: (parsed.grade ?? gradeFromScore(score)) as AuditPayload["grade"],
      summary: String(parsed.summary || "").slice(0, 400),
      factors: Array.isArray(parsed.factors) ? parsed.factors.slice(0, 8) : [],
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.slice(0, 6) : [],
      gaps: Array.isArray(parsed.gaps) ? parsed.gaps.slice(0, 6) : [],
      recommendations: Array.isArray(parsed.recommendations)
        ? parsed.recommendations.slice(0, 8)
        : [],
      aiCrawlerReadiness: parsed.aiCrawlerReadiness ?? {
        robotsTxt: "unknown",
        structuredData: "unknown",
        factualDensity: "medium",
      },
      evidence: {
        fetched: !!evidence,
        pageBytes: evidence?.pageBytes ?? 0,
        hasLlmsTxt: evidence?.hasLlmsTxt ?? false,
        hasRobotsTxt: evidence?.hasRobotsTxt ?? false,
        jsonLdCount: evidence?.jsonLdBlocks.length ?? 0,
        aiCrawlersAllowed: evidence?.aiCrawlersAllowed ?? [],
        aiCrawlersBlocked: evidence?.aiCrawlersBlocked ?? [],
      },
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json(payload, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Audit failed.", detail: message },
      { status: 500 }
    );
  }
}

function gradeFromScore(s: number): AuditPayload["grade"] {
  if (s >= 85) return "A";
  if (s >= 70) return "B";
  if (s >= 55) return "C";
  if (s >= 40) return "D";
  return "F";
}

// ─── Evidence collection ───────────────────────────────────────────────────

const USER_AGENT =
  "RisonAI-AuditBot/1.0 (+https://risonaitech.com/tools/ai-search-audit; like Mozilla/5.0)";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
  "YouBot",
] as const;

type Evidence = {
  finalUrl: string;
  pageBytes: number;
  title: string;
  metaDescription: string;
  headings: string[];
  textSample: string;
  jsonLdBlocks: string[];
  hasRobotsTxt: boolean;
  robotsTxt: string;
  hasLlmsTxt: boolean;
  llmsTxt: string;
  aiCrawlersAllowed: string[];
  aiCrawlersBlocked: string[];
};

function normaliseUrl(input: string): string | null {
  const trimmed = input.trim();
  // Looks like a URL if it has a dot and no whitespace, or starts with http(s)
  if (/\s/.test(trimmed)) return null;
  if (!/\./.test(trimmed)) return null;
  try {
    const withProto = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const u = new URL(withProto);
    // Basic sanity — must have a TLD
    if (!u.hostname.includes(".")) return null;
    return u.origin; // strip path/query/hash → audit the brand, not a sub-page
  } catch {
    return null;
  }
}

async function fetchWithTimeout(
  url: string,
  timeoutMs: number,
  maxBytes: number
): Promise<{ ok: boolean; text: string; bytes: number; status: number }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,text/plain,*/*",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    if (!res.ok || !res.body) {
      return { ok: false, text: "", bytes: 0, status: res.status };
    }
    // Stream up to maxBytes — avoid downloading 5MB pages
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let total = 0;
    while (total < maxBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      total += value.byteLength;
      if (total >= maxBytes) break;
    }
    try {
      await reader.cancel();
    } catch {
      /* ignore */
    }
    const buf = new Uint8Array(total);
    let offset = 0;
    for (const c of chunks) {
      buf.set(c.subarray(0, Math.min(c.byteLength, total - offset)), offset);
      offset += c.byteLength;
    }
    const text = new TextDecoder("utf-8", { fatal: false }).decode(buf);
    return { ok: true, text, bytes: total, status: res.status };
  } catch {
    return { ok: false, text: "", bytes: 0, status: 0 };
  } finally {
    clearTimeout(timer);
  }
}

async function gatherEvidence(origin: string): Promise<Evidence | null> {
  // Fetch in parallel — keep total ceiling under 6s
  const [page, robots, llms] = await Promise.all([
    fetchWithTimeout(origin + "/", 5000, 250_000),
    fetchWithTimeout(origin + "/robots.txt", 3000, 20_000),
    fetchWithTimeout(origin + "/llms.txt", 3000, 30_000),
  ]);

  if (!page.ok) return null;

  const html = page.text;
  const title = extractFirst(html, /<title[^>]*>([\s\S]*?)<\/title>/i).slice(0, 200);
  const metaDescription = extractAttr(
    html,
    /<meta[^>]+name=["']description["'][^>]*>/i,
    "content"
  ).slice(0, 400);

  // Pull the first few H1/H2/H3 — gives a sense of topical clarity
  const headings = [
    ...html.matchAll(/<h([123])[^>]*>([\s\S]*?)<\/h\1>/gi),
  ]
    .map((m) => stripTags(m[2]).trim())
    .filter(Boolean)
    .slice(0, 12);

  // JSON-LD blocks
  const jsonLdBlocks = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ]
    .map((m) => m[1].trim())
    .filter(Boolean);

  // Rough text body sample — strip scripts/styles, collapse whitespace
  const textSample = stripHtml(html).slice(0, 4000);

  // robots.txt parsing for AI crawlers
  const { allowed, blocked } = parseRobotsForAiCrawlers(robots.text || "");

  return {
    finalUrl: origin,
    pageBytes: page.bytes,
    title,
    metaDescription,
    headings,
    textSample,
    jsonLdBlocks,
    hasRobotsTxt: robots.ok && robots.text.length > 0,
    robotsTxt: (robots.text || "").slice(0, 4000),
    hasLlmsTxt: llms.ok && llms.text.length > 50,
    llmsTxt: (llms.text || "").slice(0, 4000),
    aiCrawlersAllowed: allowed,
    aiCrawlersBlocked: blocked,
  };
}

function formatEvidenceForPrompt(url: string, e: Evidence): string {
  const summarisedJsonLd = e.jsonLdBlocks
    .map((b, i) => {
      // Try to extract the @type for compactness
      const types = [...b.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
      return `  Block ${i + 1}: @type=[${types.join(", ") || "?"}], length=${b.length} chars`;
    })
    .slice(0, 12)
    .join("\n");

  const parts: string[] = [];
  parts.push(`URL: ${url}`);
  parts.push(`Bytes fetched: ${e.pageBytes}`);
  parts.push(`Title: ${e.title || "(none)"}`);
  parts.push(`Meta description: ${e.metaDescription || "(none)"}`);
  parts.push(
    `Top headings (h1-h3): ${e.headings.length ? e.headings.slice(0, 8).join(" | ") : "(none)"}`
  );
  parts.push(`JSON-LD blocks present: ${e.jsonLdBlocks.length}`);
  if (summarisedJsonLd) parts.push(summarisedJsonLd);
  parts.push(`Has robots.txt: ${e.hasRobotsTxt ? "yes" : "no"}`);
  parts.push(`Has llms.txt: ${e.hasLlmsTxt ? "yes" : "no (rare — most sites don't)"}`);
  parts.push(
    `AI crawlers explicitly allowed in robots: ${
      e.aiCrawlersAllowed.length ? e.aiCrawlersAllowed.join(", ") : "(none)"
    }`
  );
  parts.push(
    `AI crawlers explicitly blocked: ${
      e.aiCrawlersBlocked.length ? e.aiCrawlersBlocked.join(", ") : "(none)"
    }`
  );
  if (e.hasLlmsTxt) {
    parts.push(`llms.txt sample (first 1500 chars):\n${e.llmsTxt.slice(0, 1500)}`);
  }
  parts.push(`Visible page text sample (first 2500 chars):\n${e.textSample.slice(0, 2500)}`);
  return parts.join("\n");
}

// ─── Small parsing helpers (regex-based, no extra deps) ────────────────────
function extractFirst(input: string, re: RegExp): string {
  const m = input.match(re);
  return m ? stripTags(m[1] || "").trim() : "";
}
function extractAttr(input: string, tagRe: RegExp, attr: string): string {
  const m = input.match(tagRe);
  if (!m) return "";
  const attrRe = new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i");
  const a = m[0].match(attrRe);
  return a ? a[1].trim() : "";
}
function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, "");
}
function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRobotsForAiCrawlers(robotsText: string): {
  allowed: string[];
  blocked: string[];
} {
  const allowed: string[] = [];
  const blocked: string[] = [];
  if (!robotsText) return { allowed, blocked };

  // Split into groups by blank lines / new User-agent
  const lines = robotsText.split(/\r?\n/);
  let currentAgents: string[] = [];
  // For each agent we collect their directives
  const agentRules: Record<string, { allow: string[]; disallow: string[] }> = {};

  for (const rawLine of lines) {
    const line = rawLine.split("#")[0].trim();
    if (!line) {
      currentAgents = [];
      continue;
    }
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "user-agent") {
      currentAgents = currentAgents.concat([value]);
    } else if (key === "allow" || key === "disallow") {
      for (const agent of currentAgents) {
        const slot = (agentRules[agent] = agentRules[agent] || {
          allow: [],
          disallow: [],
        });
        if (key === "allow") slot.allow.push(value);
        else slot.disallow.push(value);
      }
    }
  }

  for (const crawler of AI_CRAWLERS) {
    const rule = agentRules[crawler];
    if (!rule) continue; // Not mentioned — neither allowed nor blocked explicitly
    const blocksAll = rule.disallow.includes("/");
    const allowsAll = rule.allow.includes("/");
    if (blocksAll && !allowsAll) blocked.push(crawler);
    else if (allowsAll || rule.allow.length > 0 || rule.disallow.length === 0)
      allowed.push(crawler);
  }
  return { allowed, blocked };
}
