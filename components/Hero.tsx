"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HeroVisual from "@/components/HeroVisual";
import { stats as statData } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visible: ((i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  })) as any,
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const items = [
    <span key="label" className="label-pill mb-6 inline-flex">
      Product Engineering · AI Systems
    </span>,
    <h1
      key="h1"
      className="font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-brand-dark sm:text-6xl lg:text-[68px]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      Engineering Digital <span className="grad-text">Products</span> That Scale
    </h1>,
    <p
      key="sub"
      className="max-w-[480px] text-lg leading-relaxed text-brand-gray sm:text-xl"
    >
      We build high-performance web apps, Android apps, and AI automation
      systems for businesses that need premium execution — not experimental
      noise.
    </p>,
    <div key="ctas" className="flex flex-wrap items-center gap-3">
      <Link className="btn-primary" href="/contact">
        Book Strategy Call
        <ArrowRight size={15} />
      </Link>
      <Link className="btn-outline" href="/products">
        View Our Work
      </Link>
    </div>,
    <div
      key="stats"
      className="flex flex-wrap gap-8 border-t border-brand-border pt-8"
    >
      {statData.map((s) => (
        <div key={s.value}>
          <p
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {s.value}
          </p>
          <p className="mt-1 text-sm text-brand-gray">{s.label}</p>
        </div>
      ))}
    </div>,
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-[68px]">
      <div className="container-site">
        <div className="flex min-h-[calc(100vh-68px)] flex-col items-center gap-12 py-16 lg:flex-row lg:gap-0 lg:py-0">

          {/* Left 58% */}
          <div className="flex w-full flex-col justify-center gap-6 lg:w-[58%] lg:pr-16">
            {items.map((item, i) => (
              <motion.div
                animate="visible"
                custom={i}
                initial={mounted ? "hidden" : "visible"}
                key={i}
                variants={fadeUp}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Right 42% */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-[42%]"
            initial={mounted ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual className="h-[360px] w-full lg:h-[520px]" />
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-brand-border">
        <div className="container-site flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-subtle">
            Serving
          </span>
          {["Startups", "D2C Brands", "Healthcare Platforms", "Real Estate Firms", "SaaS Companies", "Growth-stage Teams"].map(
            (name) => (
              <span className="text-sm font-medium text-brand-subtle transition-colors hover:text-brand-gray" key={name}>
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
