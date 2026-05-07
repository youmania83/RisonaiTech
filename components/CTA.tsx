import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import Reveal from "@/components/Reveal";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { siteConfig } from "@/lib/constants";

const ctaBeams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: { duration: 2.5, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 3, delay: 0.2 },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 5 },
      { cx: 269, cy: 220.5, r: 5 },
    ],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2.5, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 3, delay: 1 },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 5.5 },
      { cx: 568, cy: 200, r: 5 },
    ],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2.5, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 3, delay: 1.6 },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 5.5 },
      { cx: 425.5, cy: 274, r: 5 },
    ],
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: { duration: 2.5, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 3, delay: 0.6 },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 5.5 },
      { cx: 493, cy: 274, r: 5 },
    ],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: { duration: 2.5, repeat: Infinity, repeatType: "loop" as const, ease: "linear", repeatDelay: 3, delay: 1.3 },
    },
    connectionPoints: [
      { cx: 420.5, cy: 6.5, r: 5 },
      { cx: 380, cy: 168, r: 5 },
    ],
  },
];

const ctaGradient = { start: "#a78bfa", middle: "#60a5fa", end: "#ec4899" };

export default function CTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl"
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

            <PulseBeams
              beams={ctaBeams}
              gradientColors={ctaGradient}
              baseColor="rgba(255,255,255,0.06)"
              accentColor="rgba(255,255,255,0.18)"
              width={858}
              height={434}
              className="h-auto bg-transparent px-8 py-16 sm:px-16 lg:px-24"
            >
            <div className="relative z-10 text-center">
              <Reveal delay={0.06}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Limited to 4 new clients per month
                </span>
              </Reveal>

              <Reveal delay={0.12}>
                <h2
                  className="font-display mx-auto max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl"
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
            </PulseBeams>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
