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
      style={{ backgroundColor: "#05070F", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Soft glow accents — match site visual language */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-20 h-[360px] w-[360px] rounded-full blur-[80px] opacity-30"
        style={{ background: "rgba(99,91,255,0.30)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full blur-[80px] opacity-20"
        style={{ background: "rgba(14,165,233,0.30)" }}
      />

      <div className="container-site relative">
        <Reveal>
          <div
            className="mx-auto max-w-4xl rounded-2xl p-6 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,91,255,0.08) 0%, rgba(14,165,233,0.05) 100%)",
              border: "1px solid rgba(99,91,255,0.22)",
              boxShadow:
                "0 0 80px rgba(99,91,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex flex-col items-start gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a78bfa]"
                style={{
                  background: "rgba(99,91,255,0.10)",
                  border: "1px solid rgba(99,91,255,0.22)",
                }}
              >
                <Sparkles size={12} />
                New · Free AI SEO tool
              </span>
              <h2
                id="ai-audit-heading"
                className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl"
              >
                AI Search Ranking Audit
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Enter your website URL or business name — get your AI
                visibility score in seconds. See how ChatGPT, Perplexity,
                Claude and Gemini view your brand.
              </p>
            </div>

            <div className="mt-7">
              <AiAuditTool variant="inline" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45">
              <span>✓ Free</span>
              <span>✓ No signup</span>
              <span>✓ Results in under 10 seconds</span>
              <Link
                href="/tools/ai-search-audit"
                className="ml-auto inline-flex items-center gap-1 text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
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
