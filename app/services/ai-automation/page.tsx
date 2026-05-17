import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Bot,
  Workflow,
  BarChart3,
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
  title: "AI Automation Services in India — AI Workflows That Replace Manual Work",
  description:
    "RisonAI Tech builds production AI automation systems for Indian businesses — LLM agents, WhatsApp pipelines, CRM syncs, RPA, and agentic workflows. Pricing from ₹30,000. Delhi NCR.",
  keywords: [
    "AI automation company India",
    "AI automation services Panipat",
    "AI workflow automation Delhi NCR",
    "LLM automation system",
    "agentic AI solutions India",
    "RPA services India",
    "WhatsApp automation India",
    "business process automation AI",
    "AI automation for startups India",
    "AI integration company India",
  ],
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    title: "AI Automation Services in India | RisonAI Tech",
    description:
      "End-to-end AI automation — intake agents, WhatsApp pipelines, CRM syncs, agentic workflows, and RPA. Built for Indian businesses by an India-based product team.",
    url: "https://risonaitech.com/services/ai-automation",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services in India | RisonAI Tech",
    description: "LLM agents, WhatsApp automation, CRM syncs, and agentic workflows for Indian businesses. From ₹30,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
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

const processSteps = [
  {
    name: "Discovery and process audit",
    text: "We map your current operations end-to-end, identify high-volume manual tasks, and quantify the cost of latency, errors, and rework. Output: a written audit and a ranked list of automation candidates.",
  },
  {
    name: "Scope definition and fixed-price quote",
    text: "We pick one to three highest-ROI workflows, document inputs, outputs, exception paths, and integration points, then deliver a fixed-price proposal within 48 hours.",
  },
  {
    name: "Design and architecture",
    text: "We design the AI architecture (LLM, prompts, tools, memory, retrieval), data flow, integration map, observability, and human-in-the-loop checkpoints before writing code.",
  },
  {
    name: "Sprint 1 — core workflow build",
    text: "Build the primary automation flow against real data and connect to your CRM, WhatsApp Business API, email, or database. End of sprint: a working prototype the team can use.",
  },
  {
    name: "Sprint 2 — exception paths and observability",
    text: "Add retry logic, fallback flows, error notifications, audit logs, and monitoring dashboards. AI outputs are gated by HITL checkpoints for irreversible actions.",
  },
  {
    name: "User acceptance testing and tuning",
    text: "Live testing with the operations team. We tune prompts, thresholds, and routing rules based on real conversations and edge cases observed in UAT.",
  },
  {
    name: "Production deployment and team training",
    text: "Cutover to production, train the operations team on monitoring and overrides, set up alerting, and provide written runbooks. We watch the first week of traffic with you.",
  },
  {
    name: "30-day support window",
    text: "Bug fixes, prompt tuning, and minor scope adjustments are included for 30–90 days post-launch depending on tier. Optional monthly retainers handle ongoing iteration.",
  },
];

const industriesServed = [
  {
    name: "Healthcare clinics and hospitals",
    body: "AI patient intake on WhatsApp, AI symptom triage routed to the right department, automated appointment reminders, and AI-summarised patient histories before consultations. Reference product: DocBooking.",
  },
  {
    name: "Real estate brokerages and developers",
    body: "Inbound lead routing across portals and WhatsApp, AI qualification by budget and intent, AI-drafted property pitches, and automated site-visit scheduling. Reference product: Expreality.",
  },
  {
    name: "E-commerce and D2C brands",
    body: "Cart-abandonment recovery on WhatsApp, AI customer-support deflection on Shopify storefronts, automated order-status updates, and post-purchase review collection.",
  },
  {
    name: "SaaS startups",
    body: "AI onboarding agents, in-app copilots, smart search across user data, churn-risk prediction, and AI-generated weekly customer health reports for CS teams.",
  },
  {
    name: "Service businesses and agencies",
    body: "Inbound triage, AI-drafted proposals, project status auto-updates, time-tracking summarisation, and renewal-risk alerts based on client engagement patterns.",
  },
  {
    name: "Education and EdTech",
    body: "Admissions intake, applicant qualification, automated counsellor routing, document verification, and AI-drafted parent communications for coaching institutes and colleges.",
  },
];

const techStack = [
  { label: "LLMs", body: "OpenAI (GPT-4 and GPT-5 family), Anthropic Claude, Google Gemini, and open-weights via Ollama for on-prem use cases." },
  { label: "Orchestration", body: "n8n, Make.com, custom Node.js / Python orchestrators, and Temporal for long-running stateful workflows." },
  { label: "RAG and retrieval", body: "LangChain, LlamaIndex, pgvector, Pinecone, and Supabase Vector for retrieval-augmented generation." },
  { label: "Messaging", body: "WhatsApp Business API via Meta-approved BSPs, Twilio for SMS and voice, Resend / SendGrid for transactional email." },
  { label: "Data layer", body: "PostgreSQL, MongoDB, Supabase, Redis, and connections to existing client databases via secure read-only credentials." },
  { label: "Observability", body: "Sentry, PostHog, OpenTelemetry, and custom dashboards for LLM cost, latency, retry rates, and human-override frequency." },
];

const comparisonRows = [
  {
    label: "Quoting model",
    risonai: "Fixed price after free 30-min scoping call",
    typical: "Hourly time-and-materials, scope creeps mid-project",
  },
  {
    label: "Delivery cadence",
    risonai: "Two-week sprints with working software at every review",
    typical: "Quarterly milestones with limited mid-build visibility",
  },
  {
    label: "Code ownership",
    risonai: "Full repo, schemas, infra config transferred at close",
    typical: "Vendor retains code, ongoing license fees, lock-in",
  },
  {
    label: "AI engineering depth",
    risonai: "Senior engineers writing prompts, tools, retrieval, and HITL logic",
    typical: "Generic dev shop wrapping a third-party chatbot platform",
  },
  {
    label: "Reliability defaults",
    risonai: "Retry logic, audit logs, HITL checkpoints, monitoring dashboards",
    typical: "Happy-path prototypes that break on edge cases in production",
  },
];

const faqs = [
  {
    q: "What is AI automation and how does it work?",
    a: "AI automation is the use of AI models and workflow logic to execute repetitive business tasks with minimal human intervention. RisonAI Tech connects your existing tools (CRM, WhatsApp, email, databases) to AI agents that qualify leads, update records, draft responses, and trigger next actions automatically.",
  },
  {
    q: "How much does AI automation cost in India?",
    a: "AI automation in India typically costs ₹30,000–₹60,000 for one workflow and ₹80,000–₹1,80,000 for a connected suite. Enterprise-grade systems with multiple agents and integrations generally range from ₹2,00,000–₹6,00,000+. RisonAI Tech quotes fixed-price after a free scoping call.",
  },
  {
    q: "How long does it take to build an AI automation system?",
    a: "Most AI automation projects take 2–8 weeks depending on integration depth and workflow count. Single workflows usually ship in 2–3 weeks, while multi-agent systems with custom logic can take 8–16 weeks.",
  },
  {
    q: "Do I need to replace my existing tools?",
    a: "No. RisonAI Tech builds on top of your existing stack — HubSpot, Zoho, Google Workspace, WhatsApp Business, or custom databases. The AI layer reads from and writes to your existing tools without disrupting current operations.",
  },
  {
    q: "What happens if the automation makes a mistake?",
    a: "All systems we build include human-in-the-loop checkpoints for high-stakes actions. The AI drafts or flags; a human approves before irreversible actions are taken. We also build exception handling, fallback flows, and monitoring dashboards into every system.",
  },
  {
    q: "Can AI automation work for a small business?",
    a: "Yes. Our smallest automation packages start at ₹30,000 and are designed specifically for SMBs. Even a single automated workflow — like WhatsApp inquiry to CRM entry — can save 2–5 hours per day for a small team.",
  },
  {
    q: "What is agentic AI, and do you build it?",
    a: "Agentic AI refers to AI systems that plan and execute multi-step tasks autonomously, with tool-use, memory, and human-in-the-loop checkpoints. Yes — RisonAI Tech builds agentic systems on LangChain, LlamaIndex, and proprietary orchestrators with retry logic, observability, and rollback paths.",
  },
  {
    q: "Do you offer RPA (robotic process automation)?",
    a: "Yes. For repetitive UI-driven tasks (entering data into legacy systems, scraping reports, syncing dashboards), we build RPA flows using Python, browser automation, and orchestration layers — usually combined with AI for unstructured-input cases.",
  },
  {
    q: "Which cities do you serve for AI automation?",
    a: "RisonAI Tech is headquartered in Panipat, Haryana, and actively serves AI automation clients in Delhi, Gurgaon, Noida, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, and remote across India. International clients in the US, UK, UAE, and Singapore are also active.",
  },
  {
    q: "What outcomes should we expect post-automation?",
    a: "Typical observed ranges: first-response time improvement 60–80%, repetitive-task reduction 40–70%, operational time saved 25–45 hours per month per SMB team. Final outcomes depend on baseline maturity and which workflows are automated.",
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

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Automation", url: "/services/ai-automation" },
  ]),
  serviceSchema({
    id: "ai-automation",
    name: "AI Automation Services",
    serviceType: "AI Automation",
    description:
      "End-to-end AI automation systems — LLM-powered intake agents, WhatsApp pipelines, CRM syncs, agentic workflows, and RPA — built for Indian businesses by RisonAI Tech.",
    url: "/services/ai-automation",
    priceRange: "₹30,000 – ₹6,00,000",
    offers: [
      { name: "Starter automation", description: "One workflow, up to 3 integrations, 2-week delivery", price: "30000" },
      { name: "Growth automation suite", description: "3–5 workflows, up to 8 integrations, monitoring dashboard", price: "80000" },
      { name: "Enterprise AI automation", description: "Multi-agent system, custom logic, 8–16 week delivery", price: "200000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech delivers an AI automation project",
    description:
      "An eight-stage process from discovery to post-launch support for delivering AI automation systems on fixed-price contracts.",
    totalTime: "P56D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">AI Automation Systems</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI workflows that{" "}
              <span className="grad-text">replace manual work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds end-to-end AI automation systems for Indian businesses — LLM-powered
              agents, WhatsApp pipelines, CRM syncs, agentic workflows, and RPA flows that run 24/7
              without human intervention. Fixed price. Two-week sprints. Full code ownership at close.
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
              Pricing from ₹30,000 · Delivery in 2–8 weeks · Headquartered in Panipat, serving Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* AI summary block — gives LLMs a clean, citable definition */}
      <section className="bg-brand-light/50 py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-light/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech provides AI automation services in India.</strong> The company
              builds production AI automation systems — LLM intake agents, WhatsApp Business API
              pipelines, CRM data syncs, document parsing flows, RPA processes, and agentic AI
              workflows with human-in-the-loop checkpoints. Engagements start at ₹30,000 for a single
              workflow and ship in 2–3 weeks. Multi-workflow suites range ₹80,000–₹1,80,000;
              enterprise multi-agent systems start at ₹2,00,000. RisonAI Tech is headquartered in
              Panipat, Haryana and serves clients across Delhi, Gurgaon, Noida, Mumbai, Bengaluru,
              Pune, Hyderabad, and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution narrative */}
      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              The operational drag AI automation removes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Most Indian SMB and growth-stage teams hit the same wall: lead inquiries arrive across
              forms, WhatsApp, calls, and email, then sit untouched for 20–60 minutes while a sales
              rep manually copies data into the CRM. Support tickets repeat the same five FAQs. A
              founder spends two evenings a week pulling numbers from three dashboards into a board
              email. None of that work is hard — it&apos;s just relentless. By the time an extra hire
              is justified, the operational cost has already compounded.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              AI automation collapses that drag into systems that run themselves. An LLM reads the
              inbound message, classifies intent, drafts a reply, writes to the CRM, and pings a
              human only when it&apos;s genuinely needed. Repetitive support questions get answered
              from your own documentation. Weekly reports get generated from raw operational data
              with anomalies flagged. The team stops doing data entry and starts doing the work that
              actually requires judgement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Building this well is harder than wiring up a no-code tool. Production AI automation
              needs prompt engineering, retrieval, exception paths, observability, and a human
              checkpoint design that protects you from hallucinations and irreversible actions.
              That&apos;s the engineering layer RisonAI Tech delivers — not a Zapier prototype, not a
              generic chatbot SaaS.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Common automation use cases
          </h2>
          <p className="mt-2 text-brand-gray">
            Real systems we&apos;ve built for businesses like yours.
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

      {/* Process */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How we deliver an AI automation project
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
            Eight stages, fixed price, two-week sprints, working software at every review. No retainer
            until you choose to extend after the support window.
          </p>
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

      {/* Industries */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Industries where AI automation pays back fastest
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesServed.map((ind) => (
              <div className="card-base p-6" key={ind.name}>
                <h3 className="font-semibold text-brand-dark">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Tech stack we standardise on
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
            We pick boring, dependable tools by default and only deviate when the use case requires it.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {techStack.map((row) => (
              <div className="card-base p-5" key={row.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">{row.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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

      {/* Comparison vs typical agency */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How RisonAI Tech compares to a typical Indian dev agency
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border bg-brand-light/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-light/50 text-brand-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Dimension</th>
                  <th className="px-5 py-3 font-semibold text-[#635BFF]">RisonAI Tech</th>
                  <th className="px-5 py-3 font-semibold text-brand-gray">Typical agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr className="border-t border-brand-border" key={row.label}>
                    <td className="px-5 py-3 font-medium text-brand-dark">{row.label}</td>
                    <td className="px-5 py-3 text-brand-dark">{row.risonai}</td>
                    <td className="px-5 py-3 text-brand-gray">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These ranges reflect implementation patterns across Indian SMB and growth-stage teams adopting LLM-powered automation."
        title="AI automation benchmarks and cost logic"
      />

      {/* FAQ */}
      <section className="py-20">
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
      <section className="bg-brand-light/50 py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">
              WhatsApp Automation
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
              Gurgaon automation
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat SME automation
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="font-display text-4xl font-extrabold text-brand-dark">
            Ready to automate your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us one manual process that costs your team 2+ hours a week. We&apos;ll show you
            exactly how AI can eliminate it — with a fixed-price proposal in 48 hours.
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

      {/* Topic cluster: related guides */}
      <section className="bg-brand-light/50 py-16">
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-gray">
            Related guides
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/blog/ai-automation-for-indian-smes",
                tag: "Guide",
                title: "AI Automation for Indian SMEs in 2026",
                desc: "Costs, timelines, and the best entry point for small businesses starting with AI workflows.",
              },
              {
                href: "/services/whatsapp-automation",
                tag: "Service",
                title: "WhatsApp Automation",
                desc: "Automate lead capture, follow-ups, and CRM sync on WhatsApp — the highest-ROI channel for Indian businesses.",
              },
              {
                href: "/services/chatbot-development",
                tag: "Service",
                title: "AI Chatbot Development",
                desc: "RAG chatbots trained on your data for websites and WhatsApp. From \u20b920,000.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-base block p-6 transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#635BFF]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-brand-dark">{item.title}</p>
                <p className="mt-2 text-sm text-brand-gray">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
