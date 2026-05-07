import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Zap, BarChart3, MessageSquare } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "Custom CRM Development India — CRM Systems with AI Integration",
  description:
    "RisonAI Tech builds custom CRM platforms and extends existing CRMs with AI. For healthcare, real estate, and service businesses. WhatsApp integration included. Delhi NCR.",
  keywords: [
    "custom CRM development India",
    "CRM development company Delhi",
    "CRM with WhatsApp integration India",
    "healthcare CRM India",
    "real estate CRM development",
    "HubSpot customisation India",
    "Zoho CRM integration India",
  ],
  alternates: { canonical: "/services/crm-development" },
  openGraph: {
    title: "Custom CRM Development India | RisonAI Tech",
    description:
      "Custom CRM systems and AI-enhanced CRM integrations for healthcare, real estate, and service businesses. WhatsApp + CRM + AI.",
    url: "https://risonaitech.com/services/crm-development",
  },
};

const deliverables = [
  "Custom CRM platform built ground up for your workflow",
  "Lead capture, scoring, and pipeline management",
  "WhatsApp and email integration within CRM",
  "AI-generated follow-up drafts and next-step suggestions",
  "HubSpot, Zoho, and Salesforce extension/integration",
  "CRM + ERP integration layers",
  "Reporting, forecasting, and conversion dashboards",
  "Mobile-friendly CRM for field teams",
  "Automated deal stage progressions",
  "Custom fields, tags, and segment workflows",
];

const useCases = [
  {
    icon: Users,
    title: "Healthcare CRM",
    desc: "Manage patient journeys from first inquiry to treatment. Automated follow-ups, appointment reminders via WhatsApp, patient segmentation, and clinic performance dashboards. We built DocBooking's clinic CRM on this model.",
  },
  {
    icon: BarChart3,
    title: "Real Estate CRM",
    desc: "Track property leads across sources (portals, WhatsApp, referrals). Score by budget and intent. Auto-assign to agents. AI suggests best properties to pitch. Expreality uses this exact system.",
  },
  {
    icon: Zap,
    title: "Service Business CRM",
    desc: "For consultancies, agencies, and service firms — manage proposals, contracts, project timelines, and client communication in one place. AI drafts status updates and flags at-risk accounts.",
  },
  {
    icon: MessageSquare,
    title: "Sales CRM with WhatsApp",
    desc: "Every WhatsApp message from a lead appears in the CRM. AI extracts intent, logs conversation summaries, and suggests the next action. No manual data entry for the sales team.",
  },
];

const faqs = [
  {
    q: "Why build a custom CRM instead of using HubSpot or Zoho?",
    a: "You build a custom CRM when your workflow complexity makes per-user SaaS tools expensive or inefficient. Generic CRMs often require process compromises, while custom systems align exactly to your pipeline and usually recover cost in 12-18 months through better conversion and lower recurring license spend.",
  },
  {
    q: "How much does a custom CRM cost in India?",
    a: "CRM integration projects in India usually start at ₹40,000, while full custom CRM builds typically range from ₹1,00,000 to ₹3,00,000. Advanced CRM systems with AI follow-up and analytics layers generally range from ₹3,00,000 to ₹7,00,000.",
  },
  {
    q: "Can the CRM integrate with WhatsApp?",
    a: "Yes. We integrate the WhatsApp Business API so every incoming and outgoing WhatsApp message is logged in the CRM against the lead or contact. AI reads the conversation and suggests the next action or drafts a reply.",
  },
  {
    q: "Can you extend our existing HubSpot or Zoho CRM?",
    a: "Yes. We extend HubSpot and Zoho with custom modules, automations, and AI layers without replacing them. This includes custom properties, workflow automations, AI enrichment via webhooks, and custom dashboards.",
  },
  {
    q: "How long does CRM development take?",
    a: "CRM delivery generally takes 4-16 weeks based on whether you are extending an existing system or building from scratch. Integrations usually finish in 4-6 weeks, while advanced AI-enabled CRM builds often take 10-16 weeks.",
  },
  {
    q: "What industries do you build CRMs for?",
    a: "Our strongest CRM experience is in healthcare (patient and clinic management) and real estate (property lead management). We also build CRMs for consultancies, agencies, D2C brands, and education providers.",
  },
];

const factualBenchmarks = [
  {
    stat: "Teams using CRM + WhatsApp automation often reduce manual lead logging by 65-85%.",
    detail: "Conversation parsing and auto-field mapping remove repetitive data entry and improve pipeline hygiene.",
  },
  {
    stat: "Custom CRM workflows can improve follow-up compliance by 25-40%.",
    detail: "Automated reminders, stage gating, and AI suggested actions increase response consistency across sales teams.",
  },
  {
    stat: "HubSpot or Zoho license spend can exceed INR 18,000-60,000 per user annually.",
    detail: "Custom CRM economics become attractive when teams need deeper workflow control and multi-channel data sync.",
  },
  {
    stat: "Time to deploy: 4-6 weeks for integrations, 6-16 weeks for full custom CRM.",
    detail: "Scope, migration complexity, and reporting depth are the primary timeline drivers.",
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

export default function CRMDevelopmentPage() {
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
            <span className="label-pill mb-5 inline-flex">CRM Development</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              CRM systems built for{" "}
              <span className="grad-text">your actual workflow</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We build custom CRM platforms and extend existing CRMs (HubSpot, Zoho) with AI —
              WhatsApp integration, intelligent follow-ups, lead scoring, and pipeline dashboards
              tailored to healthcare, real estate, and service businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Get CRM Proposal
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/contact">
                Free CRM Audit
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              From ₹40,000 · CRM + WhatsApp + AI · Based in Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            What we build
          </h2>
          <p className="mt-2 text-brand-gray">
            Every CRM is designed for your team's actual daily workflow.
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
            CRM use cases by industry
          </h2>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "CRM Integration",
                price: "₹40,000 – ₹1,00,000",
                desc: "Extend or automate your existing HubSpot, Zoho, or Salesforce CRM with custom workflows and AI.",
                items: ["CRM workflow automation", "Custom fields & views", "Webhook integrations", "4–6 week delivery"],
              },
              {
                tier: "Custom CRM",
                price: "₹1,00,000 – ₹3,00,000",
                desc: "Purpose-built CRM for your business. WhatsApp integration, pipeline management, reporting.",
                items: [
                  "Full custom build",
                  "WhatsApp integration",
                  "Pipeline & reporting",
                  "6–10 week delivery",
                  "60-day support",
                ],
                highlight: true,
              },
              {
                tier: "AI CRM",
                price: "₹3,00,000 – ₹7,00,000",
                desc: "Custom CRM with AI-powered lead scoring, follow-up drafts, and predictive analytics.",
                items: [
                  "AI lead scoring",
                  "AI follow-up drafts",
                  "Predictive pipeline",
                  "10–16 week delivery",
                  "90-day support",
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
        intro="These ranges are based on CRM modernization patterns for healthcare, real estate, and service businesses across India."
        title="CRM cost, performance, and rollout benchmarks"
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
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation Systems
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon CRM projects
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat SME CRM use cases
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Get Free CRM Audit
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
            Stop losing leads to a broken CRM
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us about your current CRM problems. We'll audit your setup and recommend the right
            solution — custom build or enhancement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Book Free CRM Audit
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/services">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
