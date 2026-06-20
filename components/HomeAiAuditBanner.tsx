import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

import AiAuditTool from "@/components/AiAuditTool";
import Reveal from "@/components/Reveal";

/**
 * Compact home-page entry-point for the AI Search Ranking Audit.
 * Same tool as /tools/ai-search-audit, just framed for a single hero slot.
 * Non-invasive: appears between <Hero /> and the rest of the page.
 */
export default function HomeAiAuditBanner() {
  return (
    <section
      id="ai-audit"
      aria-labelledby="ai-audit-heading"
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      {/* Soft glow accents — match site visual language */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-20 h-[360px] w-[360px] rounded-full blur-[80px] opacity-30"
        style={{ background: "rgba(79,70,229,0.10)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full blur-[80px] opacity-20"
        style={{ background: "rgba(37,99,235,0.08)" }}
      />

      <div className="container-site relative">
        <Reveal>
          <div
            className="mx-auto max-w-4xl rounded-2xl p-6 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.03) 0%, rgba(37,99,235,0.02) 100%)",
              border: "1px solid rgba(79,70,229,0.15)",
              boxShadow:
                "0 4px 20px rgba(15,23,42,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <div className="flex flex-col items-start gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5]"
                style={{
                  background: "rgba(79,70,229,0.05)",
                  border: "1px solid rgba(79,70,229,0.15)",
                }}
              >
                <Sparkles size={12} />
                New · Free AI SEO tool
              </span>
              <h2
                id="ai-audit-heading"
                className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
              >
                AI Search Ranking Audit
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-650 sm:text-base">
                Enter your website URL or business name — get your AI
                visibility score in seconds. See how ChatGPT, Perplexity,
                Claude and Gemini view your brand.
              </p>
            </div>

            <div className="mt-7">
              <AiAuditTool variant="inline" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <span>✓ Free</span>
              <span>✓ No signup</span>
              <span>✓ Results in under 10 seconds</span>
              <Link
                href="/tools/ai-search-audit"
                className="ml-auto inline-flex items-center gap-1 text-[#4F46E5] transition-colors hover:text-[#2563EB]"
              >
                Full tool & guide
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
