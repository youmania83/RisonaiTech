"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Sparkles,
  Database,
  Workflow,
  ShieldCheck,
  LineChart,
  Wrench,
  Bot,
  Check,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Cpu,
  Clock,
  ShieldAlert
} from "lucide-react";
import Reveal from "@/components/Reveal";

// Helper function to extract cookie value
function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// 8 Core Features
const features = [
  {
    icon: Activity,
    title: "Continuous AI Monitoring",
    description: "24/7 logging of LLM responses, execution paths, latency bottlenecks, cost anomalies, and API failure alerts."
  },
  {
    icon: Sparkles,
    title: "Prompt Drift & Tuning",
    description: "Prompt engineering calibration to reduce model hallucination, improve accuracy, and lower token costs."
  },
  {
    icon: Database,
    title: "RAG & Vector DB Syncing",
    description: "Ongoing maintenance of vector databases, chunking strategy tuning, and semantic index refreshes as your data changes."
  },
  {
    icon: Workflow,
    title: "n8n & Workflow Maintenance",
    description: "Proactive repair of broken API endpoints, webhook failures, and structural updates to Make or n8n workflow scenarios."
  },
  {
    icon: ShieldAlert,
    title: "AI Security & Guardrails",
    description: "Regular audits for prompt injection vulnerabilities, PII filtering enforcement, and alignment compliance checks."
  },
  {
    icon: LineChart,
    title: "Monthly KPI & ROI Auditing",
    description: "Performance reports tracking support deflection rates, task accuracy, system speeds, and hours saved."
  },
  {
    icon: Wrench,
    title: "API & Middleware Support",
    description: "Fast troubleshooting of custom database bridges, Next.js API endpoints, and CRM database integrations."
  },
  {
    icon: Bot,
    title: "Voice AI Flow Calibration",
    description: "Latency tuning, turn-taking logic updates, and speech-to-text accuracy calibration for voice agents."
  }
];

// Timeline steps
const timelineSteps = [
  {
    step: "01",
    phase: "Instrument & Audit",
    title: "Audit & Connecting Telemetry",
    desc: "We analyze your active AI systems, integrate logging middleware, and run regression tests to establish baseline accuracy and cost metrics."
  },
  {
    step: "02",
    phase: "Active Operations",
    title: "Real-time Telemetry & Logging",
    desc: "Our automated monitoring alerts us immediately of API downtime, hallucination events, token spikes, or n8n runner exceptions."
  },
  {
    step: "03",
    phase: "Weekly Optimizations",
    title: "Tuning, Patching & Vector Refreshes",
    desc: "We regularly update vector search indices, adapt prompts for newly released model variants, and update deprecated library wrappers."
  },
  {
    step: "04",
    phase: "Monthly Reviews",
    title: "ROI Reporting & Strategy Alignment",
    desc: "You receive a clear monthly report outlining task accuracy, hours saved, API costs, and recommendations to scale your automation."
  }
];

// Managed Pricing Plans
const PLANS = {
  starter: {
    IN: { name: "Scale AIOps", price: "₹15,000", period: "/mo", desc: "Perfect for SMBs running 1-2 active AI agents or workflows." },
    INTL: { name: "Scale AIOps", price: "$299", period: "/mo", desc: "Perfect for SMBs running 1-2 active AI agents or workflows." },
    features: [
      "24/7 automated telemetry monitoring",
      "Monthly RAG vector knowledge base sync",
      "48-hour issue resolution SLA",
      "Standard hallucination & output logs",
      "Email & ticket developer support"
    ],
    recommended: false,
    whatsappRef: "Scale AIOps Support Plan"
  },
  growth: {
    IN: { name: "Growth AIOps", price: "₹35,000", period: "/mo", desc: "Best for scaling startups and clinics with multi-step workflows." },
    INTL: { name: "Growth AIOps", price: "$699", period: "/mo", desc: "Best for scaling startups and clinics with multi-step workflows." },
    features: [
      "Everything in Scale AIOps",
      "Weekly prompt calibration & cost optimization",
      "Monthly vector database indexing audit",
      "24-hour response SLA for updates",
      "n8n / Make workflow maintenance",
      "Monthly business-level ROI & accuracy reports",
      "Dedicated Slack channel with team access"
    ],
    recommended: true,
    whatsappRef: "Growth AIOps Support Plan"
  },
  enterprise: {
    IN: { name: "Enterprise AIOps", price: "₹75,000+", period: "/mo", desc: "For companies with mission-critical AI operations or custom SaaS." },
    INTL: { name: "Enterprise AIOps", price: "$1,499+", period: "/mo", desc: "For companies with mission-critical AI operations or custom SaaS." },
    features: [
      "Everything in Growth AIOps",
      "Custom telemetry & analytics dashboard setup",
      "Priority developer support (<4h SLA)",
      "Private model fine-tuning & domain alignment",
      "Voice bot latency & STT tuning",
      "Security compliance & prompt defense audits",
      "Dedicated senior developer resource hours"
    ],
    recommended: false,
    whatsappRef: "Enterprise AIOps Support Plan"
  }
};

export default function ManagedAiServices() {
  const [region, setRegion] = useState<"IN" | "INTL">("IN");

  useEffect(() => {
    const country = getCookie("visitor-country");
    if (country && country !== "IN") {
      setRegion("INTL");
    } else {
      setRegion("IN");
    }
  }, []);

  const getWhatsappLink = (planName: string) => {
    const text = encodeURIComponent(
      `Hi RisonAI Tech,\n\nI want to discuss our AI operations. I am interested in the ${planName} managed service contract. Please share details on onboarding.`
    );
    return `https://wa.me/919310837724?text=${text}`;
  };

  // Structured Data Schema for Managed Services
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://risonaitech.com/#managed-ai-services",
    "name": "Managed AI Services & AIOps Retainers",
    "serviceType": "Managed AI Operations",
    "description": "Continuous monitoring, prompt drift tuning, vector database updates, n8n workflow maintenance, and security auditing for business AI agents and automation pipelines.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://risonaitech.com/#business"
    },
    "areaServed": [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "Australia" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": region === "IN" ? "INR" : "USD",
      "lowPrice": region === "IN" ? "15000" : "299",
      "priceValuationRelationship": "https://schema.org/PriceMinimum"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="section-pad bg-grid cv-auto" id="managed-services" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal>
              <span className="label-pill mb-4 inline-flex">Continuous AIOps Retainers</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Managed AI Operations <br className="hidden sm:inline" />
                <span className="text-slate-500 font-bold">& System Optimization</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                AI workflows degrade. APIs drift, prompts break, and vector knowledge bases go stale.
                We handle the daily operations, security, and optimization of your custom AI systems under clear monthly SLAs.
              </p>
            </Reveal>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <Reveal delay={i * 0.05} key={feat.title} className="flex">
                  <div className="card-base group p-6 flex flex-col justify-between hover:border-slate-400">
                    <div className="space-y-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(17, 17, 17, 0.04)",
                          border: "1px solid rgba(17, 17, 17, 0.08)",
                        }}
                      >
                        <Icon className="text-slate-805" size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-slate-905">
                          {feat.title}
                        </h3>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* KPI Strip */}
          <div className="mt-20 py-8 px-6 border-y border-slate-100 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">99.9%</p>
                <p className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">&lt;200ms</p>
                <p className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">Latency Optimization</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">95%+</p>
                <p className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">RAG Retrieval Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">100%</p>
                <p className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">Code & Config Export</p>
              </div>
            </div>
          </div>

          {/* Timeline / Process */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-pill mb-3 inline-flex">Our Operations Cycle</span>
              <h3 className="font-display text-2xl font-bold text-slate-900">How We Manage Your AI Infrastructure</h3>
            </div>
            
            <div className="relative border-l border-slate-100 ml-4 md:ml-6 space-y-12">
              {timelineSteps.map((step, idx) => (
                <Reveal delay={idx * 0.08} key={step.step} className="relative pl-8 md:pl-10">
                  {/* Circle indicator */}
                  <div className="absolute -left-3.5 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-slate-900 text-[10px] font-bold text-slate-900 shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      {step.phase}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                    <p className="mt-1 text-sm text-slate-550 max-w-2xl leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Pricing Support Plans */}
          <div className="mt-28 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="label-pill mb-3 inline-flex">Pricing Retainers</span>
              <h3 className="font-display text-3xl font-bold text-slate-900">Support Tiers & SLAs</h3>
              <p className="mt-2 text-sm text-slate-500">Cancel or scale your plan month-to-month. No long-term lock-in.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 items-stretch">
              {Object.keys(PLANS).map((key) => {
                const planKey = key as keyof typeof PLANS;
                const activePlan = PLANS[planKey][region];
                const planFeatures = PLANS[planKey].features;
                const isRecommended = PLANS[planKey].recommended;
                const whatsappRef = PLANS[planKey].whatsappRef;

                return (
                  <Reveal delay={0.05} key={key} className="flex">
                    <div
                      className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full relative transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 ${
                        isRecommended ? "shadow-[0_20px_50px_rgba(17,17,17,0.03)] border-slate-900 border-2" : "border border-slate-200"
                      }`}
                      style={{
                        background: "#FFFFFF",
                      }}
                    >
                      {isRecommended && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white flex items-center gap-1.5 shadow-md">
                          Most Active
                        </div>
                      )}

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold text-slate-905">{activePlan.name}</h4>
                          <p className="mt-2 text-xs text-slate-500 min-h-[36px]">{activePlan.desc}</p>
                        </div>

                        <div className="py-2 border-y border-slate-100">
                          <p className="text-xs font-semibold text-slate-400">Monthly support investment</p>
                          <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
                            {activePlan.price}
                            <span className="text-xs text-slate-500 font-normal">{activePlan.period}</span>
                          </p>
                        </div>

                        <ul className="space-y-3">
                          {planFeatures.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <Check size={14} className="text-slate-900 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <a
                          href={getWhatsappLink(whatsappRef)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn-primary w-full justify-center text-xs font-semibold py-3 ${
                            isRecommended
                              ? "bg-slate-900 text-white"
                              : "btn-outline border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm"
                          }`}
                        >
                          <MessageCircle size={14} className="fill-[#25D366] text-[#25D366] border-none" />
                          Discuss Retainer
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Why Operations Leaders Choose Rison AIOps */}
          <div className="mt-28 max-w-4xl mx-auto rounded-3xl border border-slate-200 p-8 sm:p-10" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="text-center md:text-left mb-8">
              <span className="label-pill mb-3 inline-flex">Why Choose Rison AIOps</span>
              <h3 className="font-display text-2xl font-bold text-slate-900">Why Operations Leaders Trust Our AI Retainers</h3>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Check size={16} className="text-slate-800" />
                  Full Infrastructure Ownership
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  Unlike traditional software retainers, you retain full ownership of API credentials, vector databases, source code, and configurations. We operate on your stack.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Check size={16} className="text-slate-800" />
                  Production-Tested Expertise
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  We maintain systems processing real customer conversations and critical CRM records daily. We understand model version changes, token caps, and context budgeting.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Check size={16} className="text-slate-800" />
                  Uptime & Telemetry Safeguards
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  If an API wrapper goes down, our error dashboards notify us automatically. We fix issues before they disrupt your core support queues or CRM database flows.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Check size={16} className="text-slate-800" />
                  Direct Access to Sr. AI Engineers
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  No account managers or ticket handoffs. You communicate directly with our senior developers led by founder Yogesh Kumar Wadhwa on a dedicated Slack channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
