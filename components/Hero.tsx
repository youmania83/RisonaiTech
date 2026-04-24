import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroVisual from "@/components/HeroVisual";
import MotionWrapper from "@/components/MotionWrapper";
import { stats as statData } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[68px]">
      <div className="container-site">
        <div className="flex min-h-[calc(100vh-68px)] flex-col items-center gap-12 py-16 lg:flex-row lg:gap-0 lg:py-0">

          {/* Left 58% */}
          <div className="flex w-full flex-col justify-center gap-6 lg:w-[58%] lg:pr-16">
            <MotionWrapper delay={0} className="mb-2 flex flex-wrap items-center gap-3">
              <span className="label-pill inline-flex">Trusted by 40+ Indian Businesses</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                3 client slots open this month
              </span>
            </MotionWrapper>

            <h1
              className="font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-brand-dark sm:text-6xl lg:text-[68px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <MotionWrapper delay={1} className="block">
                AI Software That Makes Your <span className="grad-text">Business Run</span> Without You
              </MotionWrapper>
            </h1>

            <MotionWrapper delay={2} className="max-w-[500px] text-lg leading-relaxed text-brand-gray sm:text-xl">
              We build custom AI systems, SaaS platforms, and automation workflows for
              Indian startups and SMBs — fixed price, full code ownership, delivered in
              weeks.
            </MotionWrapper>

            <MotionWrapper delay={3} className="flex flex-wrap items-center gap-3">
              <Link className="btn-primary group" href="/contact">
                Get Free Project Estimate
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="btn-outline" href="/products">
                See What We've Built
              </Link>
            </MotionWrapper>

            <MotionWrapper delay={4} className="flex flex-wrap gap-8 border-t border-brand-border pt-8">
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
              <div className="flex items-center gap-2 self-center border-l border-brand-border pl-8 text-sm text-brand-gray">
                <span className="text-xs font-medium text-brand-subtle">Fixed price</span>
                <span className="text-brand-subtle">·</span>
                <span className="text-xs font-medium text-brand-subtle">Full code ownership</span>
                <span className="text-brand-subtle">·</span>
                <span className="text-xs font-medium text-brand-subtle">No hourly billing</span>
              </div>
            </MotionWrapper>
          </div>

          {/* Right 42% */}
          <MotionWrapper delay={2} className="w-full lg:w-[42%]">
            <HeroVisual className="h-[360px] w-full lg:h-[520px]" />
          </MotionWrapper>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-brand-border">
        <div className="container-site flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-subtle">
            Built for
          </span>
          {["Healthcare Founders", "Real Estate Firms", "SaaS Startups", "D2C Brands", "Clinic Chains", "PropTech Teams"].map(
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
