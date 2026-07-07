import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Lightbulb, Map, Layers, Shield } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";
import {
  breadcrumbSchema,
  howToSchema,
  serviceSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "AI Consulting Company India | AI Strategy & Implementation | RisonAI Tech" },
  description:
    "RisonAI Tech is an AI consulting company in India — AI readiness audits, automation roadmaps, AI strategy for enterprise & SMEs, LLM evaluation, and implementation oversight. Fixed fee from ₹75,000.",
  keywords: [
    "AI consulting company India",
    "AI consulting India",
    "AI consultant India",
    "AI strategy India",
    "AI consulting services India",
    "enterprise AI consulting India",
    "AI advisory India",
    "AI implementation consulting India",
    "AI readiness audit India",
    "AI roadmap India",
    "LLM consulting India",
    "generative AI consulting India",
    "agentic AI consulting India",
    "AI transformation India",
    "AI consulting Delhi NCR",
    "AI consulting Gurgaon",
    "AI consulting Mumbai",
    "AI for business India",
    "AI consulting firm India",
    "AI strategy consulting India",
  ],
  alternates: { canonical: "/services/ai-consulting" },
  openGraph: {
    title: "AI Consulting Company India | AI Strategy & Implementation | RisonAI Tech",
    description:
      "AI readiness audits, automation roadmaps, AI strategy for enterprise & SMEs, LLM evaluation, and AI implementation oversight. Fixed fee from ₹75,000.",
    url: "https://risonaitech.com/services/ai-consulting",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Company India | AI Strategy & Implementation | RisonAI Tech",
    description: "AI readiness audits, automation roadmaps, LLM evaluation, and AI implementation oversight for Indian businesses. From ₹75,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const engagements = [
  {
    icon: Lightbulb,
    title: "AI Readiness Audit",
    desc: "A structured 2-week assessment of your current tools, data, workflows, and team readiness — delivered as a prioritised report showing exactly where AI can generate measurable ROI first.",
  },
  {
    icon: Map,
    title: "AI Automation Roadmap",
    desc: "A 90-day, 6-month, and 12-month AI implementation roadmap tailored to your business model, budget, and existing tech stack. Includes vendor selection, build-vs-buy recommendations, and effort estimates.",
  },
  {
    icon: Layers,
    title: "LLM & Agent Selection Advisory",
    desc: "Hands-on evaluation of LLMs (GPT-4o, Claude Sonnet, Gemini, Llama), agent frameworks (LangGraph, CrewAI, OpenAI Agents SDK), and hosting options — matched to your specific performance, cost, and compliance requirements.",
  },
  {
    icon: Shield,
    title: "AI Implementation Oversight",
    desc: "On-going advisory during AI implementation — architecture review, quality gates, prompt engineering governance, integration testing standards, and performance benchmarking to keep builds on track.",
  },
];

const deliverables = [
  "Structured AI readiness interview across operations, sales, HR, and IT",
  "Current workflow documentation and automation opportunity mapping",
  "ROI-ranked automation priorities with effort-to-impact scores",
  "Vendor and tool recommendations (LLM, orchestration, hosting)",
  "90-day implementation roadmap with milestones and owners",
  "Build-vs-buy recommendation matrix for each priority",
  "Data and infrastructure gap analysis",
  "AI governance and compliance framework for Indian regulatory context",
  "Written deliverable document + Loom walkthrough for each milestone",
  "30-day async Q&A support after final deliverable",
];

const clientTypes = [
  {
    type: "Founders and leadership teams",
    fit: "Want to understand where to invest in AI without wasting budget on the wrong tools or vendors.",
  },
  {
    type: "Operations and process heads",
    fit: "Need a clear view of which workflows can be automated and what the realistic time and cost looks like.",
  },
  {
    type: "Tech teams without AI expertise",
    fit: "Have developers but lack AI/LLM engineering depth — need external advisory to de-risk architecture decisions.",
  },
  {
    type: "Mid-market and enterprise teams",
    fit: "Running evaluation of multiple AI vendors or building a centre of excellence — need independent, unbiased guidance.",
  },
];

const processSteps = [
  {
    name: "Discovery call",
    text: "A free 30-minute call to understand your business, current pain points, and what you want AI to solve. We confirm scope, timeline, and fit before any engagement begins.",
  },
  {
    name: "Stakeholder interviews",
    text: "Structured interviews with key roles (operations, sales, HR, IT). We document how work actually happens today — not how it is supposed to happen on paper.",
  },
  {
    name: "Workflow and data audit",
    text: "We map your current tools, data flows, and process bottlenecks. We identify which workflows have the data quality and volume needed for AI to work reliably.",
  },
  {
    name: "Opportunity scoring",
    text: "Each automation opportunity is scored by ROI potential, implementation complexity, and time-to-value. You get a ranked priority list, not a generic list of AI buzzwords.",
  },
  {
    name: "Vendor and tool evaluation",
    text: "We evaluate LLMs, agent frameworks, orchestration tools, and data platforms — matched to your actual requirements. We have no vendor affiliations, so recommendations are entirely independent.",
  },
  {
    name: "Roadmap delivery",
    text: "A written roadmap delivered as a structured document with 90-day, 6-month, and 12-month phases — including owners, dependencies, budget estimates, and success metrics.",
  },
];

const factualBenchmarks = [
  {
    stat: "AI automation projects fail most often due to poor scoping and wrong tool selection.",
    detail: "An AI readiness audit eliminates the most common root causes of failed AI implementations before any code is written.",
  },
  {
    stat: "ROI on AI consulting typically ranges 8–15× the advisory fee.",
    detail: "By identifying the highest-impact automation opportunity first, consulting engagements prevent wasted spend on low-ROI AI projects.",
  },
  {
    stat: "Most Indian businesses have 3–7 automation opportunities identifiable within 2 weeks.",
    detail: "The readiness audit process consistently surfaces quick wins alongside longer-term transformation priorities.",
  },
  {
    stat: "AI consulting engagements at RisonAI Tech range from ₹75,000 to ₹3,50,000.",
    detail: "Scope depends on company size, number of departments covered, and whether implementation oversight is included.",
  },
];

const faqs = [
  {
    q: "What is AI consulting?",
    a: "AI consulting is the process of helping businesses understand where AI can create measurable value, which tools and approaches fit their needs, and how to implement AI without wasting time and budget on the wrong solutions. A good AI consultant assesses your current processes, identifies automation opportunities, evaluates vendors, and produces a prioritised roadmap — rather than selling you a specific product.",
  },
  {
    q: "How much does AI consulting cost in India?",
    a: "AI consulting engagements at RisonAI Tech range from ₹75,000 for a focused AI readiness audit (2 weeks) to ₹3,50,000 for a full AI transformation roadmap covering multiple departments with implementation oversight. All engagements are fixed fee, quoted after a free discovery call.",
  },
  {
    q: "What is included in an AI readiness audit?",
    a: "An AI readiness audit from RisonAI Tech includes stakeholder interviews, workflow and data documentation, automation opportunity mapping, ROI scoring, vendor recommendations, and a written report with a prioritised action plan. It is designed to give leadership a clear, unbiased view of where AI investment should start.",
  },
  {
    q: "Do you sell specific AI software or tools?",
    a: "No. RisonAI Tech is an independent AI consulting firm with no vendor affiliations or referral arrangements. We recommend the best tool for your specific requirements — whether that is an open-source framework, a commercial API, or a no-code platform. Our only interest is in giving you accurate, unbiased recommendations.",
  },
  {
    q: "Can you help us evaluate different LLMs?",
    a: "Yes. Our LLM and agent selection advisory covers hands-on evaluation of GPT-4o, Claude Sonnet, Gemini Pro, Llama 3, Mistral, and others — benchmarked against your specific tasks, data privacy requirements, cost constraints, and latency needs. We produce a structured comparison report with a final recommendation.",
  },
  {
    q: "What industries do you work with?",
    a: "RisonAI Tech works with businesses across healthcare, real estate, e-commerce, education, financial services, legal, and SaaS. Our AI consulting approach is industry-agnostic — we adapt the framework to your specific processes, regulatory context, and competitive environment.",
  },
  {
    q: "What is the difference between AI consulting and AI development?",
    a: "AI consulting focuses on strategy, prioritisation, and vendor selection — answering the 'what' and 'where' questions. AI development is the actual building of systems. At RisonAI Tech, we offer both, and consulting engagements frequently transition into development once the roadmap is clear and priorities are confirmed.",
  },
  {
    q: "How long does an AI consulting engagement take?",
    a: "An AI readiness audit takes 2–3 weeks. A full AI automation roadmap covering multiple departments takes 4–6 weeks. Implementation oversight engagements are ongoing (monthly retainer) for the duration of the build phase.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Consulting", url: "/services/ai-consulting" },
  ]),
  serviceSchema({
    id: "ai-consulting",
    name: "AI Consulting",
    serviceType: "AI Strategy Consulting",
    description:
      "AI consulting services for Indian businesses — AI readiness audits, automation roadmaps, LLM evaluation, vendor selection, and implementation oversight. Fixed fee engagements from ₹75,000.",
    url: "/services/ai-consulting",
    priceRange: "₹75,000 – ₹3,50,000",
    offers: [
      { name: "AI readiness audit", description: "2-week structured assessment of AI opportunities with prioritised roadmap", price: "75000" },
      { name: "AI automation roadmap", description: "Full AI transformation roadmap covering multiple departments with 90-day, 6-month, and 12-month phases", price: "175000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech runs an AI consulting engagement",
    description: "A six-stage consulting process from discovery call to roadmap delivery for Indian businesses.",
    totalTime: "P42D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs)
);

export default function AIConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="pb-16 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">AI Consulting</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              AI consulting that{" "}
              <span className="grad-text">finds ROI, not buzzwords</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/60">
              RisonAI Tech is an independent AI consulting company in India — no vendor affiliations, no generic playbooks.
              We audit your workflows, score automation opportunities by ROI, and deliver a roadmap your team can actually execute.
              From ₹75,000.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Book a free discovery call <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="#engagements">
                See engagement types
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/40">From ₹75,000 · Fixed fee · Independent advisory · Delhi NCR &amp; remote across India</p>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">AI summary</p>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              <strong className="text-white">RisonAI Tech is an AI consulting company in India</strong> providing AI readiness audits, AI automation roadmaps, LLM evaluation and selection advisory, and implementation oversight for enterprise and SME clients. The firm is independent with no vendor affiliations and serves clients across healthcare, real estate, e-commerce, education, and SaaS in Delhi NCR, Mumbai, Bengaluru, and internationally. AI consulting engagements range from ₹75,000 for a focused AI readiness audit (2–3 weeks) to ₹3,50,000 for a full AI transformation roadmap with implementation oversight (6–8 weeks). RisonAI Tech is headquartered in Panipat, Haryana.
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These findings reflect common patterns observed across AI consulting engagements with Indian businesses in 2025–2026."
        title="AI consulting: what the data says about AI investment decisions in India"
      />

      <section className="py-20" id="engagements" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">AI consulting engagement types</h2>
          <p className="mt-3 max-w-2xl text-white/50">Four ways we work with Indian businesses, from a standalone audit to on-going implementation advisory.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {engagements.map((item) => {
              const Icon = item.icon;
              return (
                <div className="card-base p-6" key={item.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(167,139,250,0.1)" }}>
                    <Icon className="text-[#a78bfa]" size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">What every engagement includes</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#a78bfa]" size={17} />
                <span className="text-sm text-white/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Who this is for</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clientTypes.map((item) => (
              <div className="card-base p-5" key={item.type}>
                <h3 className="font-semibold text-white">{item.type}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">AI consulting pricing in India</h2>
          <p className="mt-3 text-white/50">Fixed fee, quoted after a free 30-minute discovery call.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "AI Readiness Audit",
                price: "₹75,000 – ₹1,25,000",
                delivery: "2–3 weeks",
                highlight: false,
                desc: "Workflow mapping, automation opportunity scoring, vendor recommendations, and a prioritised written roadmap for one business unit.",
                items: ["Stakeholder interviews (up to 5)", "Workflow and data audit", "ROI-ranked opportunity list", "Vendor recommendations", "Written report + Loom walkthrough"],
              },
              {
                tier: "AI Automation Roadmap",
                price: "₹1,50,000 – ₹2,50,000",
                delivery: "4–6 weeks",
                highlight: true,
                desc: "Full AI transformation roadmap covering multiple departments with 90-day, 6-month, and 12-month phases.",
                items: ["Multi-department assessment", "Cross-functional opportunity map", "90-day / 6-month / 12-month roadmap", "Build-vs-buy recommendation matrix", "Budget and timeline estimates"],
              },
              {
                tier: "Implementation Oversight",
                price: "₹75,000 / month",
                delivery: "On-going retainer",
                highlight: false,
                desc: "Monthly advisory during the AI build phase — architecture review, quality gates, prompt governance, and performance benchmarking.",
                items: ["Weekly architecture review calls", "Prompt engineering governance", "Integration testing standards", "Performance benchmarking", "Async Q&A (unlimited)"],
              },
            ].map((p) => (
              <div key={p.tier} className={`card-base p-6 ${p.highlight ? "border-[#a78bfa] ring-1 ring-[#a78bfa]" : ""}`}>
                {p.highlight && <span className="label-pill mb-3 inline-flex text-xs">Most Comprehensive</span>}
                <h3 className="font-display text-lg font-bold text-white">{p.tier}</h3>
                <p className="mt-1 font-display text-xl font-extrabold text-[#a78bfa]">{p.price}</p>
                <p className="mt-1 text-xs text-white/40">{p.delivery}</p>
                <p className="mt-3 text-sm text-white/55">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle2 className="flex-shrink-0 text-[#a78bfa]" size={13} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">How our AI consulting engagement works</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, idx) => (
              <li className="card-base p-5" key={step.name}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#a78bfa]">Step {idx + 1}</p>
                <h3 className="mt-1 font-semibold text-white">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="card-base p-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Start with a free discovery call</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/55">
              30 minutes. No sales pitch. We&apos;ll listen to what you&apos;re trying to solve, confirm whether an audit or roadmap is the right starting point, and explain exactly what you&apos;d get.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="btn-primary" href="/contact">Book free discovery call <ArrowRight size={16} /></Link>
              <Link className="btn-outline" href="/services/ai-automation">Explore AI automation services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#05070F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-white">Related services and locations</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">AI Automation</Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">AI Agent Development</Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">AI Chatbot Development</Link>
            <Link className="btn-outline text-sm" href="/services/voice-ai">Voice AI Agents</Link>
            <Link className="btn-outline text-sm" href="/services/resume-screening">AI Resume Screening</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi AI consulting</Link>
            <Link className="btn-outline text-sm" href="/gurgaon">Gurgaon AI consulting</Link>
            <Link className="btn-outline text-sm" href="/mumbai">Mumbai AI consulting</Link>
            <Link className="btn-outline text-sm" href="/contact">Book free discovery call</Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Related guides</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: "/blog/ai-automation-for-indian-smes", tag: "Guide", title: "AI Automation for Indian SMEs", desc: "The prioritisation framework 40+ Indian businesses use to pick the right workflows and see ROI in under 90 days." },
              { href: "/blog/why-your-website-is-not-showing-in-ai-search", tag: "Guide", title: "AI Visibility for Indian Businesses", desc: "Why your brand is not appearing in ChatGPT, Perplexity, or Gemini — and the fixes that work fastest." },
              { href: "/services/ai-automation", tag: "Service", title: "AI Automation Services", desc: "From AI readiness to deployed automation — autonomous agents, n8n workflows, WhatsApp pipelines, and CRM integrations." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-base block p-6 transition-shadow hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/50">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
