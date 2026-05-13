import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

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
  generatedAt: string;
};

const SYSTEM_PROMPT = `You are an expert "AI Search Visibility" auditor for the new generation of answer engines (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Overviews).

Given a URL or a business name, you estimate how likely AI search engines are to surface this brand when users ask category-relevant questions. You judge based on:
- Brand authority signals (mentions, reviews, citations, founder presence)
- Structured data + factual density of likely content
- Topical clarity (clear category and ICP)
- AI crawler accessibility (robots, llms.txt, schema.org)
- Geographic/intent specificity (esp. for India / local search)
- Freshness and update cadence signals

You ALWAYS respond with strict JSON only — no prose, no markdown, no code fences. Match this TypeScript type exactly:

{
  "score": number,             // 0-100 overall AI visibility score
  "grade": "A" | "B" | "C" | "D" | "F",
  "summary": string,           // 1-2 sentence verdict, plain English
  "factors": Array<{ "name": string, "score": number, "weight": number, "notes": string }>, // 5-7 items, weights sum ~1
  "strengths": string[],       // 3-5 short bullets
  "gaps": string[],            // 3-5 short bullets
  "recommendations": string[], // 4-6 specific, prioritised actions
  "aiCrawlerReadiness": {
    "robotsTxt": "good" | "restricted" | "unknown",
    "structuredData": "present" | "missing" | "unknown",
    "factualDensity": "high" | "medium" | "low"
  }
}

Be honest. A weak unknown brand should score in the 20-45 range. A well-known brand with strong digital presence in the 70-90 range. Never invent specific stats — if you don't know, say so in "notes".`;

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

    // DeepSeek exposes an Anthropic-compatible endpoint, so we point the
    // official Anthropic SDK at it. This keeps our SDK surface area identical
    // to other Anthropic-based features we may add later.
    const client = new Anthropic({
      apiKey, // SDK uses x-api-key header; DeepSeek accepts this on the /anthropic route
      baseURL: "https://api.deepseek.com/anthropic",
    });

    const userMessage = `Audit the AI search visibility of: "${raw}".

If this looks like a URL, infer the brand and category from it. If it's a business name, reason about category, geography (assume India unless obvious otherwise), and category competitors.

Respond with JSON only. No prose.`;

    const response = await client.messages.create({
      model: "deepseek-chat",
      max_tokens: 1400,
      temperature: 0.4,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    // Pull the first text block out of the response
    const text = response.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();

    // Strip ```json fences if the model added them anyway
    const cleaned = text
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let parsed: Omit<AuditPayload, "query" | "generatedAt">;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      // Last-resort: extract the largest {...} block
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) {
        return NextResponse.json(
          { error: "Could not parse audit response. Please retry." },
          { status: 502 }
        );
      }
      parsed = JSON.parse(match[0]);
    }

    // Coerce / clamp to keep the UI safe
    const score = Math.max(0, Math.min(100, Number(parsed.score) || 0));
    const payload: AuditPayload = {
      query: raw,
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
