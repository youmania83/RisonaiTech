import { ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import HeroLottie from "@/components/HeroLottie";

const stats = [
  { title: "Business Systems Delivered", value: "40+" },
  { title: "Faster Lead Qualification", value: "72%" },
  { title: "Hours Saved Per Month", value: "37" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-[68px]">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Static gradient background — soft and bright in light theme */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-blue-50/20 to-sky-50/20 opacity-70" />
      </div>

      {/* Primary + secondary glow — pure radial gradients, soft light colors */}
      <div
        aria-hidden
        className="glow-pulse pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(79,70,229,0.07) 0%, rgba(37,99,235,0.03) 45%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 10%, rgba(37,99,235,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Lottie AI Flow — deferred background client component */}
      <HeroLottie />

      {/* Vignette — edge softening with pure white fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 50%, transparent 50%, rgba(255,255,255,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="container-site relative z-10 w-full py-24">
        <div className="hero-fade-up mb-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "0s" }}>
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700">
            Trusted by 40+ Businesses
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Only 3 Client Slots Available This Month
          </span>
        </div>

        {/* Removed hero-fade-up animation from H1 to eliminate LCP element render delay */}
        <h1
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl max-w-4xl"
        >
          AI Automation That <br className="hidden md:inline" />
          Works For{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Your Business
          </span>
        </h1>

        <p
          className="hero-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          Deploy AI agents, automate operations, and eliminate repetitive work with enterprise-grade AI solutions. Get a free proposal within 48 hours.
        </p>

        <div
          className="hero-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <LiquidButton size="xxl" asChild>
            <a href="#contact">
              Book Free Consultation
              <ArrowRight size={18} />
            </a>
          </LiquidButton>

          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 shadow-sm"
          >
            See Case Studies
            <ArrowRight size={16} className="text-slate-400" />
          </a>
        </div>

        <div className="hero-fade-up mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500" style={{ animationDelay: "0.38s" }}>
          <span>✓ Fixed Scope</span>
          <span>✓ Full Code Ownership</span>
          <span>✓ Free AI Search Audit Below</span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={item.title}
              className="hero-fade-up group relative overflow-hidden rounded-2xl p-6"
              style={{
                animationDelay: `${0.45 + i * 0.1}s`,
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(15,23,42,0.02), 0 4px 12px rgba(15,23,42,0.015)",
              }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(140% 100% at 0% 0%, rgba(79,70,229,0.05) 0%, transparent 65%)",
                }}
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.title}
              </p>
              <p
                className="mt-3 font-display text-4xl font-bold tracking-tight"
                style={{
                  letterSpacing: "-0.025em",
                  background: "linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block"
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          background: "rgba(255,255,255,0.9)",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 py-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Built for
          </span>
          {[
            "Healthcare Founders",
            "Real Estate Firms",
            "SaaS Startups",
            "D2C Brands",
            "Clinic Chains",
            "PropTech Teams",
          ].map((name, i) => (
            <span key={name} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden h-3 w-px bg-slate-200 sm:block" />
              )}
              <span className="text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
