"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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
    fetch("/lottie/hero.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#05070F] pt-[68px]">
      {/* Animated Gradient Background */}
      <div className="animate-gradient pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 opacity-40 blur-3xl" />

      {/* Lottie AI Flow */}
      {animationData ? (
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 opacity-20 blur-[200px]" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(2,6,23,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="container-site relative z-10 w-full py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md">
            Trusted by 40+ Indian Businesses
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            3 client slots open this month
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Build Systems. <br />
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
            Automate Growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          We design AI-powered websites and automation systems that generate
          leads, respond instantly, and scale your business without manual
          effort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <LiquidButton size="xxl" asChild>
            <Link href="/contact">
              Book AI Consultation
              <ArrowRight size={18} />
            </Link>
          </LiquidButton>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
          >
            <Play size={14} className="fill-white" />
            View Demo
          </Link>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)",
                }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                {item.title}
              </p>
              <h3
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container-site flex flex-wrap items-center gap-x-10 gap-y-3 py-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/45">
            Built for
          </span>
          {[
            "Healthcare Founders",
            "Real Estate Firms",
            "SaaS Startups",
            "D2C Brands",
            "Clinic Chains",
            "PropTech Teams",
          ].map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
