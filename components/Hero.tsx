"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

// Lottie + its JSON are deferred behind dynamic import + idle callback so they
// never block LCP. Component only mounts once `animationData` is fetched.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const stats = [
  { title: "Products Shipped", value: "40+" },
  { title: "AI Efficiency", value: "3× Faster" },
  { title: "Uptime SLA", value: "99.9%" },
];

export default function Hero() {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;

    // Skip Lottie entirely if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const loadLottie = () => {
      if (cancelled) return;
      fetch("/lottie/hero.json")
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (!cancelled) setAnimationData(data);
        })
        .catch(() => {});
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    const useIdle = typeof w.requestIdleCallback === "function";
    const timer = useIdle
      ? w.requestIdleCallback!(loadLottie, { timeout: 2500 })
      : window.setTimeout(loadLottie, 1500);

    return () => {
      cancelled = true;
      if (useIdle && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(timer as number);
      } else {
        window.clearTimeout(timer as number);
      }
    };
  }, []);

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

      {/* Lottie AI Flow — deferred, off the critical path */}
      {animationData ? (
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen" aria-hidden>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}

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
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
            Trusted by 40+ Indian Businesses
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            3 client slots open this month
          </span>
        </div>

        <h1
          className="hero-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          Build Systems. <br />
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
            Automate Growth.
          </span>
        </h1>

        <p
          className="hero-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          style={{ animationDelay: "0.18s" }}
        >
          We design AI-powered websites and automation systems that generate
          leads, respond instantly, and scale your business without manual
          effort.
        </p>

        <div
          className="hero-fade-up mt-9 flex flex-wrap gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <LiquidButton size="xxl" asChild>
            <Link href="/contact">
              Book AI Consultation
              <ArrowRight size={18} />
            </Link>
          </LiquidButton>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <Play size={14} className="fill-white" />
            View Demo
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={item.title}
              className="hero-fade-up group relative overflow-hidden rounded-2xl p-6"
              style={{
                animationDelay: `${0.45 + i * 0.1}s`,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
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
