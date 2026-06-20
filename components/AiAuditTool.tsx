"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, Sparkles, TrendingUp, AlertTriangle, CheckCircle2, Bot, Shield, Globe2 } from "lucide-react";

type AuditFactor = {
  name: string;
  score: number;
  weight: number;
  notes: string;
};

type AuditResult = {
  query: string;
  resolvedUrl?: string | null;
  score: number;
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
  evidence?: {
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

const gradeColor: Record<AuditResult["grade"], string> = {
  A: "#22c55e",
  B: "#84cc16",
  C: "#eab308",
  D: "#f97316",
  F: "#ef4444",
};

const readinessLabel = (val: string) => val.charAt(0).toUpperCase() + val.slice(1);

type Variant = "page" | "inline";

export default function AiAuditTool({
  variant = "page",
  initialPlaceholder = "Enter your website URL or business name",
}: {
  variant?: Variant;
  initialPlaceholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditResult | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please retry.");
      } else {
        setResult(data as AuditResult);
      }
    } catch {
      setError("Network error. Please check your connection and retry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={variant === "page" ? "w-full" : "w-full"}>
      {/* ─── Form ──────────────────────────────────────────────────────── */}
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
        aria-label="AI search ranking audit form"
      >
        <label htmlFor="ai-audit-query" className="sr-only">
          Website URL or business name
        </label>
        <div
          className="flex flex-1 items-center gap-2 rounded-xl px-4 py-3 bg-white"
          style={{
            border: "1px solid #CBD5E1",
            boxShadow: "0 1px 2px rgba(15,23,42,0.02)",
          }}
        >
          <Sparkles size={16} className="text-[#4F46E5]" />
          <input
            id="ai-audit-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={initialPlaceholder}
            maxLength={200}
            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="btn-primary justify-center whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Analyzing…
            </>
          ) : (
            <>
              Get AI Visibility Score
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>

      <p className="mt-2 text-xs text-slate-500">
        Powered by DeepSeek via Anthropic-compatible SDK · Free · No signup
      </p>

      {/* ─── Example Report (Shown before submit to reduce uncertainty) ─── */}
      {!result && !loading && !error && (
        <div 
          className="mt-6 rounded-xl p-5 border relative overflow-hidden transition-all duration-300"
          style={{
            background: "#FFFFFF",
            borderColor: "#E2E8F0",
            boxShadow: "0 1px 3px rgba(15,23,42,0.02), 0 4px 16px rgba(15,23,42,0.015)",
          }}
        >
          <div className="absolute top-3 right-4 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
            Example Report
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Example Target</p>
              <p className="text-lg font-bold text-slate-900">yourcompany.com</p>
              <p className="text-xs text-slate-500 max-w-sm">This is a preview of the report generated instantly upon submission.</p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Score Ring Mock */}
              <div className="relative h-14 w-14">
                <svg width="56" height="56" viewBox="0 0 56 56" className="rotate-[-90deg]">
                  <circle cx="28" cy="28" r="23" stroke="rgba(15,23,42,0.05)" strokeWidth="4.5" fill="none" />
                  <circle cx="28" cy="28" r="23" stroke="#4F46E5" strokeWidth="4.5" fill="none" strokeDasharray="144.5" strokeDashoffset="31.8" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-base font-bold text-slate-950 leading-none">78</span>
                  <span className="text-[8px] text-slate-450">/100</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">AI Visibility Score</p>
                <p className="text-base font-bold text-[#84cc16] leading-none mt-1">Grade: B</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg p-2.5 bg-slate-50 border border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-650">ChatGPT Visibility</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-100">High</span>
            </div>
            <div className="rounded-lg p-2.5 bg-slate-50 border border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-650">Perplexity Visibility</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-yellow-50 text-yellow-750 border border-yellow-100">Medium</span>
            </div>
            <div className="rounded-lg p-2.5 bg-slate-50 border border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-650">Gemini Visibility</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-red-50 text-red-700 border border-red-100">Low</span>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100/60 text-xs flex flex-col sm:flex-row gap-1 sm:gap-2">
            <span className="font-bold text-[#4F46E5] shrink-0">Top Recommendation:</span>
            <span className="text-slate-700">Publish service-specific case studies to help AI engines verify your authority.</span>
          </div>
        </div>
      )}

      {/* ─── Error ─────────────────────────────────────────────────────── */}
      {error && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl p-4 text-sm"
          style={{
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <AlertTriangle size={16} className="mt-0.5 flex-shrink-0 text-red-650" />
          <span className="text-red-850 font-medium">{error}</span>
        </div>
      )}

      {/* ─── Result ────────────────────────────────────────────────────── */}
      {result && (
        <article
          className="mt-8 rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(79,70,229,0.03) 0%, rgba(37,99,235,0.02) 100%)",
            border: "1px solid rgba(79,70,229,0.15)",
            boxShadow: "0 4px 20px rgba(15,23,42,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {/* Header — score + grade */}
          <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4F46E5]">
                AI Visibility Audit
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {result.query}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                {result.summary}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <ScoreRing score={result.score} />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Grade</p>
                <p
                  className="font-display text-5xl font-bold leading-none"
                  style={{ color: gradeColor[result.grade] }}
                >
                  {result.grade}
                </p>
              </div>
            </div>
          </header>

          {/* AI crawler readiness chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            <Chip icon={<Bot size={13} />} label={`robots.txt: ${readinessLabel(result.aiCrawlerReadiness.robotsTxt)}`} />
            <Chip icon={<Shield size={13} />} label={`Schema: ${readinessLabel(result.aiCrawlerReadiness.structuredData)}`} />
            <Chip icon={<Globe2 size={13} />} label={`Factual density: ${readinessLabel(result.aiCrawlerReadiness.factualDensity)}`} />
            {result.evidence?.fetched && (
              <Chip icon={<CheckCircle2 size={13} />} label="Live evidence used" />
            )}
          </div>

          {/* Evidence breakdown — only when we actually fetched the site */}
          {result.evidence?.fetched && (
            <div
              className="mt-5 rounded-xl p-4 text-xs text-slate-600"
              style={{
                background: "rgba(15,23,42,0.015)",
                border: "1px solid #E2E8F0",
              }}
            >
              <p className="font-semibold text-slate-700">
                What we observed on {result.resolvedUrl}
              </p>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                <li>• {result.evidence.jsonLdCount} JSON-LD schema block(s)</li>
                <li>• llms.txt: {result.evidence.hasLlmsTxt ? "present" : "missing"}</li>
                <li>• robots.txt: {result.evidence.hasRobotsTxt ? "present" : "missing"}</li>
                <li>• AI crawlers allowed: {result.evidence.aiCrawlersAllowed.length || 0}</li>
                {result.evidence.aiCrawlersBlocked.length > 0 && (
                  <li className="sm:col-span-2 text-orange-600/80">
                    • Blocked AI crawlers: {result.evidence.aiCrawlersBlocked.join(", ")}
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Factors */}
          {result.factors.length > 0 && (
            <section className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Scoring factors
              </h3>
              <ul className="mt-4 space-y-3">
                {result.factors.map((f) => (
                  <li
                    key={f.name}
                    className="rounded-xl p-4"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-800">{f.name}</p>
                      <p className="text-sm font-mono text-slate-600">{Math.round(f.score)}/100</p>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(0, Math.min(100, f.score))}%`,
                          background: "linear-gradient(90deg, #4F46E5 0%, #2563EB 100%)",
                        }}
                      />
                    </div>
                    {f.notes && (
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{f.notes}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Strengths / Gaps */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <CardList
              title="Strengths"
              tone="good"
              icon={<CheckCircle2 size={14} />}
              items={result.strengths}
            />
            <CardList
              title="Gaps"
              tone="warn"
              icon={<AlertTriangle size={14} />}
              items={result.gaps}
            />
          </div>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <section className="mt-8">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4F46E5]">
                <TrendingUp size={13} />
                Recommendations
              </h3>
              <ol className="mt-4 space-y-2">
                {result.recommendations.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl p-3 text-sm leading-relaxed text-slate-700"
                    style={{
                      background: "rgba(79,70,229,0.02)",
                      border: "1px solid rgba(79,70,229,0.12)",
                    }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                      {i + 1}
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="mt-6 text-[10px] uppercase tracking-wider text-slate-400">
            Generated {new Date(result.generatedAt).toLocaleString("en-IN")}
          </p>
        </article>
      )}
    </div>
  );
}

// ─── Subcomponents ───────────────────────────────────────────────────────────
function ScoreRing({ score }: { score: number }) {
  const safe = Math.max(0, Math.min(100, score));
  const circumference = 2 * Math.PI * 30;
  const dash = (safe / 100) * circumference;
  return (
    <div className="relative h-20 w-20">
      <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
        <circle
          cx="40"
          cy="40"
          r="30"
          stroke="rgba(15,23,42,0.05)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="30"
          stroke="url(#auditGrad)"
          strokeWidth="6"
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
        <defs>
          <linearGradient id="auditGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-xl font-bold leading-none text-slate-900">{Math.round(safe)}</span>
        <span className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-400">/ 100</span>
      </div>
    </div>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-slate-650"
      style={{
        background: "rgba(15,23,42,0.02)",
        border: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      {icon}
      {label}
    </span>
  );
}

function CardList({
  title,
  items,
  icon,
  tone,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  tone: "good" | "warn";
}) {
  if (!items?.length) return null;
  const color = tone === "good" ? "#22c55e" : "#f97316";
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
      }}
    >
      <h3
        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em]"
        style={{ color }}
      >
        {icon}
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((s, i) => (
          <li key={i} className="text-sm leading-relaxed text-slate-600">
            • {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
