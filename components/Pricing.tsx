"use client";

import { Check, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const packages = [
  {
    name: "AI Starter",
    price: "₹20,000 – ₹40,000",
    description: "Perfect for local businesses and clinic chains looking to automate basic customer capture.",
    features: [
      "WhatsApp Business API Integration",
      "Lead Capture & Qualification Bot",
      "Basic CRM Auto-Sync (HubSpot/Zoho)",
      "Standard FAQ Knowledge Base",
      "Email & Slack notifications",
    ],
    ctaText: "Discuss AI Starter",
    whatsappRef: "AI Starter Package",
    recommended: false,
    color: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.08)",
  },
  {
    name: "Growth Automation",
    price: "₹50,000 – ₹1,50,000",
    description: "Best for scaling startups and real estate firms wanting to automate full pipelines and workflows.",
    features: [
      "Everything in AI Starter",
      "Advanced Multi-Step CRM Workflows",
      "n8n / Make Workflow Engineering",
      "Autonomous AI Agents ( LangGraph )",
      "Document Parsing & Auto-Invoicing",
      "2-Week Delivery Sprint Cycles",
    ],
    ctaText: "Discuss Growth Package",
    whatsappRef: "Growth Automation Package",
    recommended: true,
    color: "linear-gradient(135deg, rgba(99,91,255,0.08) 0%, rgba(14,165,233,0.05) 100%)",
    borderColor: "rgba(99,91,255,0.3)",
  },
  {
    name: "Enterprise AI Systems",
    price: "₹2,00,000+",
    description: "For established businesses needing custom proprietary platforms, SaaS tools, and secure AI.",
    features: [
      "Custom SaaS Platform Engineering",
      "Multi-Agent Collaborative Systems",
      "Private Secure LLM Infrastructure",
      "Advanced Analytics & Dashboards",
      "Dedicated Dev Ops & SLA Support",
      "Full Code & Data Ownership",
    ],
    ctaText: "Discuss Enterprise Systems",
    whatsappRef: "Enterprise AI Systems",
    recommended: false,
    color: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.08)",
  },
];

export default function Pricing() {
  const getWhatsappLink = (pkgName: string) => {
    const text = encodeURIComponent(
      `Hi RisonAI Tech,\n\nI want to discuss a project. I am interested in the ${pkgName} package. Please share details on getting a fixed-price quote.`
    );
    return `https://wa.me/918368137724?text=${text}`;
  };

  return (
    <section className="py-20 relative overflow-hidden" id="pricing" style={{ backgroundColor: "#05070F" }}>
      {/* Background blur glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[400px] w-[400px] rounded-full blur-[100px] opacity-15"
        style={{ background: "rgba(14,165,233,0.30)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-[400px] w-[400px] rounded-full blur-[100px] opacity-15"
        style={{ background: "rgba(99,91,255,0.30)" }}
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">Fixed Pricing</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Transparent, Outcome-Based Investment
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-white/60 max-w-2xl mx-auto">
              No hourly bills. No monthly lock-ins. You receive full code ownership and deployment setup with clear fixed scopes.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <Reveal delay={i * 0.1} key={pkg.name} className="flex">
              <div
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full relative transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 ${
                  pkg.recommended ? "shadow-[0_20px_50px_rgba(99,91,255,0.12)]" : ""
                }`}
                style={{
                  background: pkg.color,
                  border: `1px solid ${pkg.borderColor}`,
                }}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white flex items-center gap-1.5 shadow-md">
                    <Sparkles size={11} />
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="mt-2 text-xs text-white/60 min-h-[40px]">{pkg.description}</p>
                  </div>

                  <div className="py-2 border-y border-white/5">
                    <p className="text-sm font-semibold text-white/60">Investment range</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] mt-1 tracking-tight">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-white/70">
                        <Check size={14} className="text-[#a78bfa] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={getWhatsappLink(pkg.whatsappRef)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary w-full justify-center text-xs font-semibold py-3 ${
                      pkg.recommended
                        ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 border-none text-white"
                        : "btn-outline bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    }`}
                  >
                    <MessageCircle size={14} className="fill-[#25D366] text-[#25D366] border-none" />
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center relative z-10">
          <Reveal delay={0.3}>
            <div className="inline-flex flex-col items-center gap-2">
              <a
                href="https://wa.me/918368137724?text=Hi%20RisonAI%20Tech%2C%20I%20want%20to%20get%20a%20fixed%20quote%20for%20our%20automation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Fixed Quote in 48 Hours
              </a>
              <p className="text-xs text-white/60">
                100% money-back guarantee on delivery timelines · Direct reference calls available
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
