import { ArrowRight, MessageCircle } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import HeroLottie from "@/components/HeroLottie";

const stats = [
  { title: "Business Systems Delivered", value: "40+" },
  { title: "Faster Lead Qualification", value: "72%" },
  { title: "Hours Saved Per Month", value: "37" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#05070F] pt-[68px]">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Static gradient background — no animation to avoid constant GPU repaint of blur-3xl */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-violet-950 to-fuchsia-950 opacity-50" />
      </div>

      {/* Primary + secondary glow — pure radial gradients, no CSS filter blur (avoids two
          compositing layers and the expensive Gaussian blur during initial paint) */}
      <div
        aria-hidden
        className="glow-pulse pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(99,91,255,0.18) 0%, rgba(14,165,233,0.06) 45%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 10%, rgba(14,165,233,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Lottie AI Flow — deferred background client component */}
      <HeroLottie />

      {/* Vignette — edge darkening */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 50%, transparent 50%, rgba(5,7,15,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="container-site relative z-10 w-full py-24">
        <div className="hero-fade-up mb-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "0s" }}>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
            Trusted by 40+ Businesses
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Only 3 Client Slots Available This Month
          </span>
        </div>

        {/* Removed hero-fade-up animation from H1 to eliminate LCP element render delay */}
        <h1
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl max-w-4xl"
        >
          See How ChatGPT, Gemini & <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
            Your Business
          </span>{" "}
          Your Business
        </h1>

        <p
          className="hero-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          Get a free AI Visibility Audit in under 10 seconds and discover how AI search engines rank your company, what they say about you, and where you&apos;re losing customers.
        </p>

        <div
          className="hero-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <LiquidButton size="xxl" asChild>
            <a href="#ai-audit">
              Get Free AI Visibility Report
              <ArrowRight size={18} />
            </a>
          </LiquidButton>

          <a
            href="https://wa.me/918368137724?text=Hi%20RisonAI%20Tech%2C%20Please%20send%20me%20my%20AI%20Visibility%20Report."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <MessageCircle size={16} className="text-[#25D366] fill-[#25D366]" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="hero-fade-up mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45" style={{ animationDelay: "0.38s" }}>
          <span>✓ Free</span>
          <span>✓ No Signup</span>
          <span>✓ Results in 10 Seconds</span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={item.title}
              className="hero-fade-up group relative overflow-hidden rounded-2xl p-6"
              style={{
                animationDelay: `${0.45 + i * 0.1}s`,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(140% 100% at 0% 0%, rgba(99,91,255,0.22) 0%, transparent 65%)",
                }}
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                {item.title}
              </p>
              <p
                className="mt-3 font-display text-4xl font-bold tracking-tight"
                style={{
                  letterSpacing: "-0.025em",
                  background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
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
          background: "rgba(5,7,15,0.75)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 py-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
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
                <span className="hidden h-3 w-px bg-white/12 sm:block" />
              )}
              <span className="text-xs font-medium text-white/50 transition-colors duration-200 hover:text-white/85">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
