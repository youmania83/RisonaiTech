"use client";

import { useState } from "react";
import { MessageCircle, Info, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function RoiCalculator() {
  const [leadsMissed, setLeadsMissed] = useState(5);
  const [dealValue, setDealValue] = useState(15000);

  // Conservative conversion rate of 15% for missed leads
  const conversionRate = 0.15;
  const monthlyRevenueLoss = Math.round(leadsMissed * dealValue * 30 * conversionRate);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi RisonAI Tech,\n\nI calculated our monthly revenue loss at ${formatCurrency(monthlyRevenueLoss)} based on missing ~${leadsMissed} leads/day with a deal value of ${formatCurrency(dealValue)}. How can your AI systems help us recover this?`
  );

  return (
    <section className="py-20 relative overflow-hidden" id="roi-calculator" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }}
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Reveal>
              <span className="label-pill mb-4 inline-flex">ROI Calculator</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                How Much Is Manual Work Costing Your Business?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Delayed lead responses, manual CRM entry, and missed follow-ups cost Indian businesses lakhs in lost sales. Calculate your leak in 10 seconds.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Inputs Card */}
            <div className="lg:col-span-7 card-base p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-8">
                {/* Leads Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="leads-missed" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      Leads missed or delayed per day
                      <span className="group relative cursor-help">
                        <Info size={13} className="text-slate-400 hover:text-slate-600" />
                        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded bg-white border border-slate-200 p-2 text-[10px] font-normal leading-normal text-slate-700 opacity-0 transition-opacity group-hover:opacity-100 shadow-xl z-50">
                          Leads that go cold because your team responds late, or aren&apos;t captured from WhatsApp / portals at night.
                        </span>
                      </span>
                    </label>
                    <span className="text-lg font-bold text-[#4F46E5]">{leadsMissed} leads</span>
                  </div>
                  <input
                    id="leads-missed"
                    type="range"
                    min="1"
                    max="50"
                    value={leadsMissed}
                    onChange={(e) => setLeadsMissed(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-lg bg-slate-200 appearance-none cursor-pointer accent-[#4F46E5]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>1 lead</span>
                    <span>25 leads</span>
                    <span>50 leads</span>
                  </div>
                </div>

                {/* Deal Value Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="deal-value" className="text-sm font-semibold text-slate-700">
                      Average deal or booking value
                    </label>
                    <span className="text-lg font-bold text-[#4F46E5]">{formatCurrency(dealValue)}</span>
                  </div>
                  <input
                    id="deal-value"
                    type="range"
                    min="1000"
                    max="150000"
                    step="1000"
                    value={dealValue}
                    onChange={(e) => setDealValue(parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-lg bg-slate-200 appearance-none cursor-pointer accent-[#4F46E5]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>₹1,00,000</span>
                    <span>₹75,000</span>
                    <span>₹1,50,000</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                <Sparkles size={14} className="text-[#4F46E5] shrink-0 mt-0.5" />
                <span>Calculations assume a highly conservative 15% conversion rate on missed leads. In many service/healthcare businesses, qualified leads convert at 20-35%.</span>
              </div>
            </div>

            {/* Output Card */}
            <div 
              className="lg:col-span-5 rounded-2xl p-6 sm:p-8 border flex flex-col justify-between relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(79,70,229,0.03) 0%, rgba(37,99,235,0.02) 100%)",
                borderColor: "rgba(79,70,229,0.15)",
                boxShadow: "0 4px 20px rgba(15,23,42,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4F46E5] bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100 inline-block">
                  Estimated monthly loss
                </span>
                
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#ef4444] tracking-tight">
                    {formatCurrency(monthlyRevenueLoss)}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Leakage due to slow manual workflows</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Missed pipeline/month:</span>
                    <span className="font-mono">{formatCurrency(leadsMissed * dealValue * 30)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. response speed lag:</span>
                    <span className="text-orange-600 font-medium">45+ minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI response speed:</span>
                    <span className="text-emerald-600 font-medium">&lt; 10 seconds</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3 relative z-10">
                <a
                  href={`https://wa.me/918368137724?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm font-semibold"
                >
                  <MessageCircle size={16} />
                  Calculate My Automation Savings
                </a>
                <p className="text-[10px] text-center text-slate-500">
                  Redirects to WhatsApp with your calculations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
