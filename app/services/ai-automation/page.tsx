import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, Bot, Workflow, BarChart3 } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "AI Automation Systems — Build AI Workflows That Replace Manual Work",
  description:
    "RisonAI Tech builds end-to-end AI automation systems for Indian businesses. LLM agents, WhatsApp automation, CRM syncs, and agentic workflows. Pricing from ₹30,000.",
  keywords: [
    "AI automation company India",
    "AI workflow automation Delhi",
    "LLM automation system",
    "WhatsApp automation India",
    "business process automation AI",
    "AI automation for startups India",
  ],
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    title: "AI Automation Systems | RisonAI Tech",
    description:
      "End-to-end AI automation — intake agents, WhatsApp pipelines, CRM syncs, and agentic workflows. Built for Indian businesses.",
    url: "https://risonaitech.com/services/ai-automation",
  },
};

const deliverables = [
  "LLM-powered intake and lead qualification agents",
  "WhatsApp and email automation pipelines",
  "AI-driven CRM data entry and task creation",
  "Document processing and data extraction workflows",
  "Agentic systems with human-in-the-loop controls",
  "Auto-reporting dashboards with AI-generated summaries",
  "Multi-step orchestration with error handling and retries",
  "Custom AI agents trained on your business logic",
];

const useCases = [
  {
    icon: Bot,
    title: "Lead Qualification Agent",
    desc: "AI agent captures inbound leads from website forms, WhatsApp, and email — scores them by intent, enriches with context, and creates CRM tasks automatically. Reduces manual qualification time by 70%.",
  },
  {
    icon: Workflow,
    title: "Patient Intake Automation",
    desc: "For healthcare providers — AI collects patient symptoms, history, and insurance details via WhatsApp before the appointment. Clinic staff receive a structured summary before the patient arrives.",
  },
  {
    icon: Zap,
    title: "Sales Follow-up Automation",
    desc: "AI monitors deal stages in your CRM, drafts personalised follow-up messages, schedules them across channels, and escalates stale deals to the right person automatically.",
  },
  {
    icon: BarChart3,
    title: "Executive Intelligence Reports",
    desc: "AI pulls data from your CRM, ops tools, and databases — generates weekly summaries with highlights, anomalies, and recommended actions. Delivered to your inbox every Monday.",
  },
];

const faqs = [
  {
    q: "What is AI automation and how does it work?",
    a: "AI automation is the use of AI models and workflow logic to execute repetitive business tasks with minimal human intervention. We connect your existing tools (CRM, WhatsApp, email, databases) to AI agents that qualify leads, update records, draft responses, and trigger next actions automatically.",
  },
  {
    q: "How much does AI automation cost in India?",
    a: "AI automation in India typically costs ₹30,000-₹60,000 for one workflow and ₹80,000-₹1,80,000 for a connected suite. Enterprise-grade systems with multiple agents and integrations generally range from ₹2,00,000-₹6,00,000+.",
  },
  {
    q: "How long does it take to build an AI automation system?",
    a: "Most AI automation projects take 2-8 weeks depending on integration depth and workflow count. Single workflows usually ship in 2-3 weeks, while multi-agent systems with custom logic can take 8-16 weeks.",
  },
  {
    q: "Do I need to replace my existing tools?",
    a: "No. We build on top of your existing stack — HubSpot, Zoho, Google Workspace, WhatsApp Business, or custom databases. The AI layer reads from and writes to your existing tools without disrupting current operations.",
  },
  {
    q: "What happens if the automation makes a mistake?",
    a: "All systems we build include human-in-the-loop checkpoints for high-stakes actions. The AI drafts or flags; a human approves before irreversible actions are taken. We also build exception handling, fallback flows, and monitoring dashboards into every system.",
  },
  {
    q: "Can AI automation work for a small business?",
    a: "Yes. Our smallest automation packages start at ₹30,000 and are designed specifically for SMBs. Even a single automated workflow — like WhatsApp inquiry to CRM entry — can save 2–5 hours per day for a small team.",
  },
];

const factualBenchmarks = [
  {
    stat: "Typical WhatsApp + CRM automation reduces first-response time by 60-80%.",
    detail: "Teams moving from manual triage to AI-assisted lead routing usually cut response windows from 20-60 minutes to under 5 minutes.",
  },
  {
    stat: "AI intake workflows save 25-45 operational hours per month for SMB teams.",
    detail: "Automation removes repetitive logging, assignment, and follow-up drafting across sales and support funnels.",
  },
  {
    stat: "Starter automation projects in India often range between INR 30,000 and INR 60,000.",
    detail: "This range usually covers a single high-impact workflow with 1-3 tool integrations and baseline monitoring.",
  },
  {
    stat: "Time to deploy for a production-ready single workflow is usually 2-3 weeks.",
    detail: "Delivery includes requirements mapping, workflow build, QA, deployment, and team handover documentation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">AI Automation Systems</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              AI workflows that{" "}
              <span className="grad-text">replace manual work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We build end-to-end AI automation systems for Indian businesses — LLM-powered agents,
              WhatsApp pipelines, CRM syncs, and agentic workflows that run 24/7 without human
              intervention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Get AI Automation Quote
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/contact">
                Book Free AI Audit
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              Pricing from ₹30,000 · Delivery in 2–8 weeks · Based in Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            What we build
          </h2>
          <p className="mt-2 text-brand-gray">
            Every system is production-grade, integrated with your existing tools, and built to handle
            real business volume.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            Common automation use cases
          </h2>
          <p className="mt-2 text-brand-gray">
            Real systems we've built for businesses like yours.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div className="card-base p-6" key={uc.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{uc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            Pricing
          </h2>
          <p className="mt-2 text-brand-gray">
            Transparent ranges. Final quote after a free 30-minute scoping call.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "Starter",
                price: "₹30,000 – ₹60,000",
                desc: "One automation workflow. Ideal for a single process like lead intake, CRM sync, or auto-reporting.",
                items: ["1 workflow", "Up to 3 tool integrations", "2-week delivery", "30-day support"],
              },
              {
                tier: "Growth",
                price: "₹80,000 – ₹1,80,000",
                desc: "3–5 connected workflows forming an automation suite. Best for sales or operations teams.",
                items: [
                  "3–5 workflows",
                  "Up to 8 integrations",
                  "4–6 week delivery",
                  "60-day support",
                  "Monitoring dashboard",
                ],
                highlight: true,
              },
              {
                tier: "Enterprise",
                price: "₹2,00,000+",
                desc: "Complex multi-agent systems with custom business logic, training data, and advanced orchestration.",
                items: [
                  "Unlimited workflows",
                  "Custom AI agents",
                  "8–16 week delivery",
                  "90-day support",
                  "SLA guarantee",
                ],
              },
            ].map((p) => (
              <div
                className={`card-base p-6 ${p.highlight ? "border-[#635BFF] ring-1 ring-[#635BFF]" : ""}`}
                key={p.tier}
              >
                {p.highlight && (
                  <span className="label-pill mb-3 inline-flex text-xs">Most Popular</span>
                )}
                <h3
                  className="font-display text-xl font-bold text-brand-dark"
                >
                  {p.tier}
                </h3>
                <p
                  className="mt-1 font-display text-2xl font-extrabold text-[#635BFF]"
                >
                  {p.price}
                </p>
                <p className="mt-3 text-sm text-brand-gray">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li className="flex items-center gap-2 text-sm text-brand-dark" key={item}>
                      <CheckCircle2 className="flex-shrink-0 text-[#635BFF]" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These ranges reflect implementation patterns across Indian SMB and growth-stage teams adopting LLM-powered automation."
        title="AI automation benchmarks and cost logic"
      />

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-6" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="container-site">
          <h2
            className="font-display text-2xl font-bold text-brand-dark"
          >
            Related services
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi AI projects
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon automation use cases
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-site text-center">
          <h2
            className="font-display text-4xl font-extrabold text-brand-dark"
          >
            Ready to automate your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us one manual process that costs your team 2+ hours a week. We'll show you exactly
            how AI can eliminate it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Book Free AI Audit
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/services">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
