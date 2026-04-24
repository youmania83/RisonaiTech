import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 lg:px-24"
            style={{
              background: "linear-gradient(135deg, #0a0a0a 0%, #1a1050 60%, #0a0a3a 100%)",
            }}
          >
            {/* Background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 50%, rgba(99,91,255,0.5) 0%, transparent 55%),
                  radial-gradient(ellipse at 80% 30%, rgba(14,165,233,0.4) 0%, transparent 50%)
                `,
              }}
            />

            <div className="relative z-10">
              <Reveal delay={0.06}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Limited to 4 new clients per month
                </span>
              </Reveal>

              <Reveal delay={0.12}>
                <h2
                  className="font-display mx-auto max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to stop doing things{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    manually?
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">
                  Get a fixed-price proposal in 48 hours. Free 30-min strategy
                  call. No hourly billing. No lock-in. Full code ownership.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    href="/contact"
                  >
                    Book Free Strategy Call
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                    href={siteConfig.whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Us Now
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/40">
                  Proposal delivered within 48 hours · No obligation
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
