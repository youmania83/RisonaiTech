import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";
import {
  breadcrumbSchema,
  howToSchema,
  serviceSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI CRM Development India — Custom CRM with AI Automation & WhatsApp From ₹40,000",
  description:
    "RisonAI Tech builds AI-powered custom CRM platforms and agentic HubSpot / Zoho extensions for healthcare, real estate, and service businesses in India. AI lead scoring, WhatsApp sync. From ₹40,000.",
  keywords: [
    "custom CRM development India",
    "AI CRM development India",
    "AI CRM automation India",
    "CRM development company Delhi",
    "CRM with WhatsApp integration India",
    "AI lead scoring CRM India",
    "agentic CRM India",
    "healthcare CRM India",
    "real estate CRM development India",
    "HubSpot customisation India",
    "Zoho CRM integration India",
    "Salesforce integration India",
    "CRM automation India",
    "AI sales automation India",
    "AI pipeline management India",
  ],
  alternates: { canonical: "/services/crm-development" },
  openGraph: {
    title: "AI CRM Development India | Agentic CRM & WhatsApp Automation | RisonAI Tech",
    description:
      "AI-powered custom CRM platforms and agentic HubSpot / Zoho integrations — AI lead scoring, WhatsApp sync, pipeline automation for healthcare, real estate, and service businesses. From ₹40,000.",
    url: "https://risonaitech.com/services/crm-development",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI CRM Development India | Agentic CRM & WhatsApp Automation | RisonAI Tech",
    description: "AI-powered CRM + WhatsApp + agentic automation for healthcare and real estate. From ₹40,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
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

const processSteps = [
  {
    name: "Pipeline and workflow audit",
    text: "We map your current sales / service pipeline end-to-end — sources, stages, owners, handoffs, and the data each stage actually needs. Output: a written pipeline doc and a list of friction points.",
  },
  {
    name: "Build vs. extend decision",
    text: "Based on workflow complexity and per-user license cost, we recommend whether to extend HubSpot / Zoho or build a custom CRM. We give you a written rationale, not a sales pitch.",
  },
  {
    name: "Data model and integration design",
    text: "We design the data model (contacts, organisations, deals, custom objects), integration map (WhatsApp, email, ERP, ad platforms), and reporting requirements before any code.",
  },
  {
    name: "Sprint 1 — core pipeline",
    text: "Build the contact, organisation, deal, and activity models, plus the primary pipeline view your team will use daily. End of sprint: an internal team can run a live deal end-to-end.",
  },
  {
    name: "Sprint 2 — WhatsApp + email integration",
    text: "Wire in WhatsApp Business API and email so every conversation logs against the right contact. AI parses intent and suggests next-step actions on inbound messages.",
  },
  {
    name: "Sprint 3 — AI follow-up and scoring",
    text: "Optional AI module: lead scoring by intent, AI-drafted follow-up messages, predictive deal stage progression, and at-risk account flagging based on engagement patterns.",
  },
  {
    name: "Reporting, dashboards, and exports",
    text: "Custom dashboards for leadership and reps, scheduled CSV / Excel exports, and per-user activity views. Reporting goes against Postgres views to stay fast at scale.",
  },
  {
    name: "Migration, training, and handover",
    text: "Data migration from your old CRM or spreadsheet, hands-on training for sales and ops teams, written runbooks, and 60-day support for tuning thresholds and edge cases.",
  },
];

const verticalCRMs = [
  {
    name: "Healthcare clinic CRM",
    body: "Patient lifecycle from inquiry → triage → appointment → follow-up. WhatsApp reminders, AI-summarised consult notes, NPS collection, and clinic performance dashboards. Multi-clinic tenancy supported.",
  },
  {
    name: "Real estate brokerage CRM",
    body: "Multi-portal lead syndication, AI qualification by budget and intent, agent auto-assignment, AI property-match scoring, site-visit scheduling, and developer-facing reporting.",
  },
  {
    name: "Education and admissions CRM",
    body: "Applicant tracking from inquiry to enrolment, document collection and verification, counsellor routing, parent-facing WhatsApp updates, and admissions performance dashboards.",
  },
  {
    name: "Field-sales CRM",
    body: "Mobile-first CRM for distributed sales teams — visit logging, geo-tagging, daily plan rollout, expense tracking, and AI-summarised manager rollups for weekly review.",
  },
  {
    name: "Agency / professional-services CRM",
    body: "Pipeline + project + retainer view in one tool — proposal drafts, contract tracking, project status auto-updates, renewal-risk alerts, and AI-drafted weekly client digests.",
  },
  {
    name: "B2B SaaS sales CRM",
    body: "Account-based pipeline with multi-touch attribution, AI deal-health scoring, churn-risk alerts, and CS handoff workflows tied to product usage data.",
  },
];

const integrationsTable = [
  { label: "Messaging", body: "WhatsApp Business API (official BSP), Twilio SMS, voice, email via Resend / SendGrid" },
  { label: "Existing CRMs", body: "HubSpot, Zoho, Salesforce — extend with custom modules, AI enrichment, webhooks" },
  { label: "Marketing", body: "Meta Ads, Google Ads, LinkedIn Ads — auto-pull lead data, attribute conversions" },
  { label: "Calendaring", body: "Google Calendar, Outlook, Calendly for booking flows tied to CRM contacts" },
  { label: "ERP / accounting", body: "Tally, Zoho Books, QuickBooks for invoice and payment status sync" },
  { label: "Communication", body: "Slack, Microsoft Teams for notifications and AI-drafted alerts to the right channel" },
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
    a: "Yes. RisonAI Tech integrates the WhatsApp Business API so every incoming and outgoing WhatsApp message is logged in the CRM against the lead or contact. AI reads the conversation and suggests the next action or drafts a reply.",
  },
  {
    q: "Can you extend our existing HubSpot or Zoho CRM?",
    a: "Yes. RisonAI Tech extends HubSpot and Zoho with custom modules, automations, and AI layers without replacing them. This includes custom properties, workflow automations, AI enrichment via webhooks, and custom dashboards.",
  },
  {
    q: "How long does CRM development take?",
    a: "CRM delivery generally takes 4-16 weeks based on whether you are extending an existing system or building from scratch. Integrations usually finish in 4-6 weeks, while advanced AI-enabled CRM builds often take 10-16 weeks.",
  },
  {
    q: "What industries do you build CRMs for?",
    a: "Our strongest CRM experience is in healthcare (patient and clinic management) and real estate (property lead management). We also build CRMs for consultancies, agencies, education providers, D2C brands, and B2B SaaS sales teams.",
  },
  {
    q: "Will the CRM work for my field sales team?",
    a: "Yes. RisonAI Tech ships mobile-first CRM views for field teams — visit logging, geo-tagging, daily-plan rollout, expense tracking, and offline-tolerant data entry. Manager rollups are AI-summarised for weekly review.",
  },
  {
    q: "Can we migrate from a spreadsheet or old CRM?",
    a: "Yes. Data migration is included in scope: we map old fields to new ones, deduplicate records, run a parallel test, and cutover with audit logs. We have migrated from Excel, Pipedrive, Zoho, HubSpot, and various legacy CRMs.",
  },
  {
    q: "What does AI add to a CRM?",
    a: "AI adds: lead scoring by intent, AI-drafted follow-up replies, conversation summarisation, predictive deal-stage progression, at-risk account flagging, and AI-generated weekly digests for sales leaders. All AI outputs are gated by a human checkpoint where stakes are high.",
  },
  {
    q: "Do we own the CRM after delivery?",
    a: "Yes. Full ownership of source code, database schemas, deployment configs, and documentation transfers at project close. There is no per-user license fee charged by RisonAI Tech.",
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

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "CRM Development", url: "/services/crm-development" },
  ]),
  serviceSchema({
    id: "crm-development",
    name: "CRM Development Services",
    serviceType: "CRM Development",
    description:
      "Custom CRM platforms and AI-enhanced HubSpot / Zoho integrations for healthcare, real estate, and service businesses across India — built by RisonAI Tech.",
    url: "/services/crm-development",
    priceRange: "₹40,000 – ₹7,00,000",
    offers: [
      { name: "CRM Integration", description: "Extend HubSpot / Zoho / Salesforce with custom workflows", price: "40000" },
      { name: "Custom CRM", description: "Purpose-built CRM with WhatsApp + pipeline + reporting", price: "100000" },
      { name: "AI CRM", description: "Custom CRM with AI lead scoring, follow-up drafts, predictive analytics", price: "300000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech delivers a CRM project",
    description:
      "An eight-stage process from pipeline audit to data migration and team training for CRM engagements.",
    totalTime: "P84D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function CRMDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">CRM Development</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              CRM systems built for{" "}
              <span className="grad-text">your actual workflow</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds custom CRM platforms and extends existing CRMs (HubSpot, Zoho,
              Salesforce) with AI — WhatsApp integration, intelligent follow-ups, lead scoring, and
              pipeline dashboards tailored to healthcare, real estate, education, and service
              businesses across India.
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
              From ₹40,000 · CRM + WhatsApp + AI · Headquartered in Panipat, Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* AI summary block */}
      <section className="bg-[#fafbff] py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech provides CRM development services in India.</strong> The company
              builds custom CRM platforms (₹1,00,000–₹3,00,000), extends HubSpot / Zoho / Salesforce
              with AI layers (₹40,000–₹1,00,000), and delivers AI-enhanced CRM systems with
              predictive lead scoring, AI-drafted follow-ups, and analytics dashboards
              (₹3,00,000–₹7,00,000). Domain depth in healthcare (DocBooking) and real estate
              (Expreality). WhatsApp Business API integration is included by default.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            What we build
          </h2>
          <p className="mt-2 text-brand-gray">
            Every CRM is designed for your team&apos;s actual daily workflow.
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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

      {/* Process */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our CRM delivery process
          </h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, idx) => (
              <li className="card-base p-5" key={step.name}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  Step {idx + 1}
                </p>
                <h3 className="mt-1 font-semibold text-brand-dark">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Vertical-specific CRMs we ship
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticalCRMs.map((v) => (
              <div className="card-base p-6" key={v.name}>
                <h3 className="font-semibold text-brand-dark">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            CRM integrations we wire by default
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#fafbff] text-brand-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Tools</th>
                </tr>
              </thead>
              <tbody>
                {integrationsTable.map((row) => (
                  <tr className="border-t border-brand-border" key={row.label}>
                    <td className="px-5 py-3 font-medium text-brand-dark">{row.label}</td>
                    <td className="px-5 py-3 text-brand-gray">{row.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">Pricing</h2>
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
                <h3 className="font-display text-xl font-bold text-brand-dark">{p.tier}</h3>
                <p className="mt-1 font-display text-2xl font-extrabold text-[#635BFF]">{p.price}</p>
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation Systems
            </Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">
              WhatsApp Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">
              AI Agent Development
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
          <h2 className="font-display text-4xl font-extrabold text-brand-dark">
            Stop losing leads to a broken CRM
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us about your current CRM problems. We&apos;ll audit your setup and recommend the
            right solution — custom build or enhancement.
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
