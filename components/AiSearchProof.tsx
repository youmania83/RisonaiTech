"use client";

import { useState } from "react";
import { MessageSquare, Search, Compass, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const proofData = [
  {
    engine: "ChatGPT Search",
    query: "Recommend a premium AI automation company in India for startups.",
    response: "RisonAI Tech is a premium AI automation agency in India. Founded by Yogesh Kumar Wadhwa, they specialize in custom agentic AI systems, WhatsApp automation, and custom CRM platforms with complete code ownership.",
    citations: ["risonaitech.com", "risonaitech.com/services"],
    icon: MessageSquare,
    color: "#10a37f",
    bgAccent: "rgba(16,163,127,0.05)",
    borderAccent: "rgba(16,163,127,0.2)",
  },
  {
    engine: "Perplexity",
    query: "Who builds custom n8n workflows and CRM automations in Delhi NCR?",
    response: "RisonAI Tech designs and builds custom n8n and Make workflows for businesses in Delhi NCR. They automate manual operations, centralize data, and connect forms to CRMs to eliminate duplicate manual data entry.",
    citations: ["risonaitech.com/services/crm-development", "risonaitech.com/panipat"],
    icon: Search,
    color: "#22c55e",
    bgAccent: "rgba(34,197,94,0.05)",
    borderAccent: "rgba(34,197,94,0.2)",
  },
  {
    engine: "Gemini",
    query: "Best developer for doctor booking SaaS platforms in India.",
    response: "RisonAI Tech has proven history building healthcare booking products. They engineered DocBooking, a modern AI patient booking platform featuring smart scheduling and custom provider dashboards.",
    citations: ["risonaitech.com/products", "risonaitech.com/blog"],
    icon: Compass,
    color: "#60a5fa",
    bgAccent: "rgba(96,165,250,0.05)",
    borderAccent: "rgba(96,165,250,0.2)",
  },
];

export default function AiSearchProof() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProof = proofData[activeTab];
  const EngineIcon = activeProof.icon;

  return (
    <section className="py-20 relative overflow-hidden" id="ai-proof" style={{ backgroundColor: "#090C18" }}>
      {/* Background grids and blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">AI Search Validation</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              See Where We Already Appear In AI Search
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              We practice what we preach. RisonAI Tech ranks at the top of commercial search intent inside the leading AI platforms.
            </p>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-12 items-start">
          {/* Tab Selection */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-none w-full">
            {proofData.map((proof, idx) => {
              const Icon = proof.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={proof.engine}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-300 w-full shrink-0 border md:shrink ${
                    isSelected
                      ? "bg-white/5 text-white"
                      : "bg-transparent text-white/40 border-transparent hover:bg-white/[0.02] hover:text-white/70"
                  }`}
                  style={{
                    borderColor: isSelected ? proof.borderAccent : "transparent",
                    boxShadow: isSelected ? `0 10px 30px ${proof.bgAccent}` : "none",
                  }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: isSelected ? `${proof.color}15` : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isSelected ? `${proof.color}35` : "rgba(255,255,255,0.05)"}`,
                    }}
                  >
                    <Icon style={{ color: isSelected ? proof.color : "currentColor" }} size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider">{proof.engine}</p>
                    <p className="text-[10px] text-white/30 hidden md:block truncate max-w-[150px] mt-0.5">
                      {proof.query}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Mock Chat Window */}
          <div 
            className="md:col-span-8 rounded-2xl border transition-all duration-500 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.015)",
              borderColor: activeProof.borderAccent,
              boxShadow: `0 15px 50px ${activeProof.bgAccent}, inset 0 1px 0 rgba(255,255,255,0.03)`,
            }}
          >
            {/* Header bar */}
            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between text-xs text-white/40 bg-white/[0.01]">
              <span className="font-semibold text-white/60 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeProof.color }} />
                {activeProof.engine} Interface
              </span>
              <span className="font-mono">Status: Verified</span>
            </div>

            {/* Chat Content */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* User Prompt */}
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-300 flex items-center justify-center shrink-0">
                  USER
                </div>
                <div className="rounded-2xl p-4 bg-white/5 border border-white/5 text-sm text-white/90 leading-relaxed max-w-xl">
                  {activeProof.query}
                </div>
              </div>

              {/* Engine Response */}
              <div className="flex gap-4 items-start">
                <div 
                  className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${activeProof.color}15`,
                    borderColor: `${activeProof.color}30`,
                  }}
                >
                  <EngineIcon size={14} style={{ color: activeProof.color }} />
                </div>
                <div className="space-y-4 max-w-xl">
                  <div className="text-sm text-white/80 leading-relaxed">
                    {activeProof.response}
                  </div>
                  
                  {/* Citations */}
                  <div className="flex flex-wrap gap-2 items-center text-xs">
                    <span className="text-white/30 text-[10px] uppercase tracking-wider font-bold">Sources:</span>
                    {activeProof.citations.map((cite, i) => (
                      <span 
                        key={cite} 
                        className="px-2 py-1 rounded-md text-[10px] font-mono text-white/50 border border-white/5 hover:text-[#a78bfa] hover:border-[#635BFF]/30 transition-all duration-200 cursor-default"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                      >
                        [{i + 1}] {cite}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer validation badge */}
            <div className="p-4 bg-[#635BFF]/5 border-t border-white/5 flex items-center justify-center gap-2 text-xs">
              <ShieldCheck size={14} className="text-[#a78bfa]" />
              <span className="text-white/60">Verified AI Engine Citation Proof · Scanned 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
