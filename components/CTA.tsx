"use client";

import dynamic from "next/dynamic";
import { ArrowRight, MessageCircle } from "lucide-react";

import Reveal from "@/components/Reveal";

const PulseBeams = dynamic(
  () => import("@/components/ui/pulse-beams").then((m) => m.PulseBeams),
  { ssr: false }
);

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
    <section className="section-pad" style={{ backgroundColor: "#05070F" }}>
      <div className="container-site">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #09091f 0%, #110d3a 45%, #0a0e2a 100%)",
              border: "1px solid rgba(99,91,255,0.2)",
              boxShadow: "0 0 0 1px rgba(99,91,255,0.08), 0 40px 100px rgba(99,91,255,0.15)",
            }}
          >
            {/* Grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 50%, rgba(99,91,255,0.4) 0%, transparent 55%),
                  radial-gradient(ellipse at 80% 30%, rgba(14,165,233,0.3) 0%, transparent 50%)
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
                  What problem are you trying to{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    solve?
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mx-auto mt-5 max-w-lg text-sm text-white/60">
                  Select your primary business challenge below. You will connect directly with founder Yogesh on WhatsApp to discuss an automated solution.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 grid gap-3 max-w-md mx-auto">
                  {[
                    { label: "Generate More Leads", msg: "Hi RisonAI Tech, I want to discuss generating more leads with AI automation." },
                    { label: "Automate WhatsApp", msg: "Hi RisonAI Tech, I want to discuss automating our WhatsApp channel with AI." },
                    { label: "Build AI Agent", msg: "Hi RisonAI Tech, I want to discuss building a custom AI agent for our business." },
                    { label: "Replace Manual Data Entry", msg: "Hi RisonAI Tech, I want to discuss replacing manual data entry processes with AI workflows." },
                    { label: "Launch SaaS Product", msg: "Hi RisonAI Tech, I want to discuss launching a custom SaaS platform." }
                  ].map((btn) => (
                    <a
                      key={btn.label}
                      href={`https://wa.me/918368137724?text=${encodeURIComponent(btn.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.01]"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle size={15} className="text-[#25D366] fill-[#25D366] shrink-0" />
                        {btn.label}
                      </span>
                      <ArrowRight size={14} className="text-white/40 group-hover:text-white/80" />
                    </a>
                  ))}
                </div>
                <p className="mt-6 text-xs text-white/40">
                  Direct WhatsApp scoping with founder Yogesh · No obligation · Quotes in 48 hours
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
