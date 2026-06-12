"use client";

import { Check, X, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const comparisonData = [
  {
    metric: "Financial Cost",
    human: "Monthly salary, PF, TDS u/s 192, and annual bonuses",
    humanGood: false,
    ai: "One-time setup fee + tiny cloud usage bills",
    aiGood: true,
  },
  {
    metric: "Working Hours",
    human: "8 hours/day, 5 days/week (misses night & weekend leads)",
    humanGood: false,
    ai: "24/7/365 availability (instantly replies at 2 AM)",
    aiGood: true,
  },
  {
    metric: "Leaves & Breaks",
    human: "Chai breaks, sick leaves, and emergency holidays",
    humanGood: false,
    ai: "Zero breaks, zero leaves, zero downtime",
    aiGood: true,
  },
  {
    metric: "Training Speed",
    human: "2-4 weeks onboarding + continuous supervision",
    humanGood: false,
    ai: "Instant ingestion of custom business documentation (RAG)",
    aiGood: true,
  },
  {
    metric: "Attrition Risk",
    human: "Notice periods, hiring cycles, and sudden resignations",
    humanGood: false,
    ai: "Zero attrition (runs securely in your own private cloud)",
    aiGood: true,
  },
];

export default function HumanVsAi() {
  const whatsappMsg = encodeURIComponent(
    "Hi RisonAI Tech, I read the Human vs AI employee comparison. I want to discuss hiring an AI employee for my business."
  );

  return (
    <section className="py-20 relative overflow-hidden" id="human-vs-ai" style={{ backgroundColor: "#05070F" }}>
      {/* Accent glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[300px] w-[300px] rounded-full blur-[90px] opacity-10"
        style={{ background: "rgba(14,165,233,0.20)" }}
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Reveal>
              <span className="label-pill mb-4 inline-flex">Efficiency Comparison</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Why Businesses Are Hiring AI Before Another Employee
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 text-white/60 max-w-xl mx-auto text-sm">
                Scale your operational capacity without increasing headcount liabilities. See how an automated AI system compares to manual labor.
              </p>
            </Reveal>
          </div>

          {/* Comparison Card/Table */}
          <Reveal delay={0.2}>
            <div 
              className="rounded-2xl border overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.015)",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/5 text-xs font-bold uppercase tracking-wider text-white/60">
                <div className="col-span-4 md:col-span-3">Comparison</div>
                <div className="col-span-8 md:col-span-4 text-rose-400">Human Employee</div>
                <div className="hidden md:block md:col-span-5 text-[#a78bfa]">AI Employee (System)</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-white/5">
                {comparisonData.map((row) => (
                  <div key={row.metric} className="grid grid-cols-12 gap-4 px-6 py-5 items-start text-xs sm:text-sm">
                    {/* Metric Name */}
                    <div className="col-span-4 md:col-span-3 font-semibold text-white/90">
                      {row.metric}
                    </div>

                    {/* Human Column */}
                    <div className="col-span-8 md:col-span-4 space-y-1">
                      <div className="flex items-start gap-2 text-rose-200/70">
                        <X size={15} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.human}</span>
                      </div>
                    </div>

                    {/* AI Column (On mobile, stacks or shows helper label) */}
                    <div className="col-span-12 md:col-span-5 space-y-1 mt-3 md:mt-0 pt-3 md:pt-0 border-t border-dashed border-white/5 md:border-t-0">
                      <div className="md:hidden text-[9px] font-bold uppercase tracking-wider text-[#a78bfa] mb-1">
                        AI Employee Solution:
                      </div>
                      <div className="flex items-start gap-2 text-indigo-200/80">
                        <Check size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.ai}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA Footer */}
          <div className="mt-8 text-center">
            <Reveal delay={0.25}>
              <div className="inline-flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/918368137724?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} />
                  Hire Your First AI Employee
                </a>
                <span className="text-xs text-white/60">
                  Breakeven in under 90 days · Fixed scoping
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
