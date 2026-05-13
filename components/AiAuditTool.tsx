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
          className="flex flex-1 items-center gap-2 rounded-xl px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(99,91,255,0.22)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <Sparkles size={16} className="text-[#a78bfa]" />
          <input
            id="ai-audit-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={initialPlaceholder}
            maxLength={200}
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
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

      <p className="mt-2 text-xs text-white/40">
        Powered by DeepSeek via Anthropic-compatible SDK · Free · No signup
      </p>

      {/* ─── Error ─────────────────────────────────────────────────────── */}
      {error && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl p-4 text-sm"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.3)",
          }}
        >
          <AlertTriangle size={16} className="mt-0.5 flex-shrink-0 text-red-400" />
          <span className="text-red-200">{error}</span>
        </div>
      )}

      {/* ─── Result ────────────────────────────────────────────────────── */}
      {result && (
        <article
          className="mt-8 rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(99,91,255,0.06) 0%, rgba(14,165,233,0.04) 100%)",
            border: "1px solid rgba(99,91,255,0.22)",
            boxShadow: "0 0 60px rgba(99,91,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Header — score + grade */}
          <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">
                AI Visibility Audit
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                {result.query}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                {result.summary}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <ScoreRing score={result.score} />
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Grade</p>
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
          </div>

          {/* Factors */}
          {result.factors.length > 0 && (
            <section className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Scoring factors
              </h3>
              <ul className="mt-4 space-y-3">
                {result.factors.map((f) => (
                  <li
                    key={f.name}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{f.name}</p>
                      <p className="text-sm font-mono text-white/70">{Math.round(f.score)}/100</p>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/05">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(0, Math.min(100, f.score))}%`,
                          background: "linear-gradient(90deg, #635BFF 0%, #0EA5E9 100%)",
                        }}
                      />
                    </div>
                    {f.notes && (
                      <p className="mt-2 text-xs leading-relaxed text-white/55">{f.notes}</p>
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
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">
                <TrendingUp size={13} />
                Recommendations
              </h3>
              <ol className="mt-4 space-y-2">
                {result.recommendations.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl p-3 text-sm leading-relaxed text-white/80"
                    style={{
                      background: "rgba(99,91,255,0.05)",
                      border: "1px solid rgba(99,91,255,0.16)",
                    }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#635BFF]/20 text-[10px] font-bold text-[#a78bfa]">
                      {i + 1}
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="mt-6 text-[10px] uppercase tracking-wider text-white/30">
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
          stroke="rgba(255,255,255,0.08)"
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
            <stop offset="0%" stopColor="#635BFF" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-xl font-bold leading-none text-white">{Math.round(safe)}</span>
        <span className="mt-0.5 text-[9px] uppercase tracking-wider text-white/40">/ 100</span>
      </div>
    </div>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-white/70"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
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
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
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
          <li key={i} className="text-sm leading-relaxed text-white/75">
            • {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
