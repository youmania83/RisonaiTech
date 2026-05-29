import type { Metadata } from "next";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Zap,
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
  title: { absolute: "AI Agent Development India | Agentic AI Systems | RisonAI Tech" },
  description:
    "RisonAI Tech builds production-ready agentic AI systems — autonomous AI agents, voice AI agents, multi-agent pipelines, RAG knowledge agents, and LangGraph-powered orchestration for Indian businesses. From ₹40,000.",
  keywords: [
    "AI agent development India",
    "agentic AI company India",
    "autonomous AI agent India",
    "agentic AI systems India",
    "voice AI agent India",
    "AI agent development Delhi",
    "AI agent company Gurgaon",
    "multi-agent systems India",
    "LangGraph development India",
    "CrewAI development India",
    "OpenAI Agents SDK India",
    "RAG agent development India",
    "AI automation agents India",
    "computer use AI agent India",
    "agentic workflow India",
    "AI system integrator India",
    "autonomous AI for business India",
  ],
  alternates: { canonical: "/services/ai-agent" },
  openGraph: {
    title: "AI Agent Development India | Agentic AI Systems | RisonAI Tech",
    description:
      "Production-ready agentic AI systems — autonomous agents, voice AI agents, multi-agent pipelines, LangGraph orchestration. Built for Indian businesses. From ₹40,000.",
    url: "https://risonaitech.com/services/ai-agent",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development India | Agentic AI Systems | RisonAI Tech",
    description: "Agentic AI systems, voice AI agents, multi-agent pipelines, LangGraph. Fixed price, full code ownership. From ₹40,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "Multi-step reasoning agent pipelines (LangGraph, CrewAI)",
  "Tool-calling agents with web search, code execution & API access",
  "RAG-powered knowledge agents trained on your business data",
  "Autonomous task orchestration with human-in-the-loop controls",
  "Memory systems (short-term, long-term, episodic)",
  "Agent observability, tracing & evaluation dashboards",
  "REST API wrappers for seamless integration into existing apps",
  "WhatsApp & web channel deployment",
  "CI/CD pipelines and cloud deployment (Vercel, AWS, Railway)",
  "LLM provider agnostic — OpenAI, Anthropic, Gemini, Mistral",
];

const highlights = [
  {
    icon: BrainCircuit,
    title: "Reasoning, not just responses",
    desc: "Unlike simple chatbots, our agents plan multi-step action sequences, call tools, evaluate intermediate results, and retry failed steps — just like a human operator would.",
  },
  {
    icon: Cpu,
    title: "Tool-use & real-world actions",
    desc: "Agents we build can browse the web, run code, query databases, call external APIs, send emails, update CRMs, and execute business logic — all autonomously within guardrails.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & oversight built in",
    desc: "Every agent includes human-in-the-loop escalation, action-level audit logs, rate limiting, prompt injection defence, and confidence-gated execution to prevent runaway automation.",
  },
  {
    icon: Zap,
    title: "Shipped in weeks, not months",
    desc: "We scope tightly, build on proven agent frameworks, and deliver working agents in 4–10 weeks. You get the full source code, infrastructure, and documentation on day one.",
  },
];

const processSteps = [
  {
    name: "Agent scoping & task decomposition",
    text: "We map your business task into a well-defined agent spec: inputs, tools required, success criteria, failure modes, and escalation triggers. Output is a written agent design doc.",
  },
  {
    name: "Tool inventory & API integration",
    text: "We audit every system the agent needs to touch — CRMs, databases, APIs, file stores — and build typed, tested tool wrappers for each with proper auth and rate-limit handling.",
  },
  {
    name: "Reasoning framework setup",
    text: "Build the agent's core loop using LangGraph (for stateful graph-based agents) or CrewAI (for multi-agent teams) — with memory, tool routing, and step-level observability.",
  },
  {
    name: "RAG knowledge layer (if required)",
    text: "Ingest and index your documents, FAQs, SOPs, and product data into a vector store (Pinecone, Qdrant, pgvector). Agent retrieves relevant context before every action.",
  },
  {
    name: "Evaluation & red-teaming",
    text: "Run the agent against 50–100 real business scenarios. Measure task completion rate, hallucination rate, and tool-call accuracy. Iterate until production-ready benchmarks are met.",
  },
  {
    name: "Safety & guardrails implementation",
    text: "Add prompt injection defences, output validators, confidence thresholds, action budgets, and human escalation flows. No agent ships without a documented safety checklist.",
  },
  {
    name: "Deployment & channel integration",
    text: "Deploy the agent behind a REST API, connect to your web app, WhatsApp, Slack, or internal dashboard. Full infrastructure handover with runbooks and monitoring dashboards.",
  },
  {
    name: "Handover, docs & 30-day support",
    text: "Full source code, architecture docs, agent evaluation scripts, and 30 days of post-launch support for edge cases and prompt tuning.",
  },
];

const agentTypes = [
  {
    label: "Customer support agents",
    body: "Context-aware agents that handle L1/L2 support, retrieve order history, process refunds, escalate to humans, and close tickets — across web chat and WhatsApp.",
  },
  {
    label: "Lead qualification agents",
    body: "Agents that converse with inbound leads, score them against your ICP criteria, enrich with external data, and push qualified leads to your CRM with meeting links.",
  },
  {
    label: "Research & synthesis agents",
    body: "Agents that browse the web, summarise competitor activity, compile market intelligence reports, and push structured outputs to Notion, Sheets, or Slack.",
  },
  {
    label: "Operations & workflow agents",
    body: "Back-office agents that process documents, update records across systems, generate exception reports, and complete multi-step operational tasks without human intervention.",
  },
  {
    label: "Coding & DevOps agents",
    body: "Agents that write, test, and deploy code changes, triage bug reports, generate PR descriptions, and monitor CI/CD pipelines — reducing developer toil.",
  },
  {
    label: "Multi-agent systems",
    body: "Orchestrated teams of specialised sub-agents — a planner, researcher, writer, and reviewer working together to complete complex tasks that a single agent cannot handle.",
  },
];

const faqPairs: { q: string; a: string }[] = [
  {
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot gives pre-defined or LLM-generated replies in a single turn. An AI agent autonomously plans a sequence of actions, calls external tools (APIs, databases, web search), evaluates results, and iterates until a goal is achieved — much like a human operator.",
  },
  {
    q: "Which frameworks do you use to build AI agents?",
    a: "We primarily use LangGraph for stateful, graph-based single agents and CrewAI for orchestrated multi-agent systems. We also build custom loops with the OpenAI Assistants API and Anthropic's tool-use API depending on the requirements.",
  },
  {
    q: "How much does AI agent development cost in India?",
    a: "A focused single-purpose agent starts at ₹40,000–₹1,20,000 (4–6 weeks). A multi-agent system with RAG, custom tooling, and a dashboard ranges from ₹1,50,000–₹5,00,000 (8–12 weeks). We provide fixed-price quotes after a free scoping call.",
  },
  {
    q: "Can the agent connect to our existing CRM, database, or software?",
    a: "Yes. We build typed tool wrappers for any system with an API — Salesforce, HubSpot, Zoho, custom databases, WhatsApp Business, Google Workspace, Notion, Jira, and more.",
  },
  {
    q: "How do you prevent the agent from making mistakes or going rogue?",
    a: "Every agent includes confidence thresholds, action budgets, output validators, prompt injection defences, and human-in-the-loop escalation triggers. We also run a structured red-teaming phase before deployment.",
  },
  {
    q: "Do I own the code and models?",
    a: "Yes. You receive full source code, infrastructure configuration, evaluation scripts, and documentation. You are not locked into any proprietary platform we build on.",
  },
];

const structuredData = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Agent Development", url: "/services/ai-agent" },
  ]),
  serviceSchema({
    id: "ai-agent",
    name: "AI Agent Development",
    serviceType: "AI Agent Development",
    description:
      "Production-ready autonomous AI agents — multi-step reasoning pipelines, tool-calling agents, RAG knowledge agents, and multi-agent systems for Indian businesses.",
    priceRange: "₹40,000 – ₹5,00,000",
    url: "/services/ai-agent",
  }),
  howToSchema({
    name: "How to get an AI agent built by RisonAI Tech",
    description: "Our 8-step process to build, test, and deploy a production-ready AI agent for your business.",
    steps: processSteps.map((s) => ({ name: s.name, text: s.text })),
  }),
  faqSchemaFromPairs(faqPairs)
);

export default function AIAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section
        className="pb-20 pt-36 bg-grid"
        style={{ backgroundColor: "#05070F" }}
      >
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-pill mb-5 inline-flex">AI Agent Development</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Autonomous AI agents that{" "}
              <span className="grad-text">think, decide, and act</span>
            </h1>
            <p className="mt-6 text-xl text-white/60">
              We build production-grade AI agents — from single-purpose task automation to
              multi-agent systems that handle complex end-to-end workflows without human supervision.
              Fixed price. Full code ownership. From <PriceTag service="ai-agent" />.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a free scoping call <ArrowRight size={16} className="ml-1" />
              </Link>
              <Link href="/services" className="btn-outline">
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Everything included in every agent project
            </h2>
          </div>
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.03] p-4">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#a78bfa]" />
                <span className="text-sm text-white/75">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Why our agents perform in production
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-base p-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20">
                  <Icon size={20} className="text-[#a78bfa]" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factual density block */}
      <FactualDensityBlock
        title="AI agent development in India — facts that matter"
        intro="Production facts about how RisonAI Tech builds and deploys AI agents for Indian businesses."
        benchmarks={[
          { stat: "LangGraph & CrewAI", detail: "Our primary agentic frameworks — stateful, observable, and production-tested." },
          { stat: "50–100 test scenarios", detail: "Every agent goes through a structured red-teaming phase before launch." },
          { stat: "REST API delivery", detail: "Agents deployed behind REST APIs compatible with any existing web app or WhatsApp channel." },
          { stat: "LLM-agnostic", detail: "We build for OpenAI, Anthropic, Gemini, Mistral, and open-source models (Llama)." },
          { stat: "From ₹40,000", detail: "Fixed-price projects for focused single-purpose agents. Full source code ownership." },
          { stat: "Panipat, Delhi NCR", detail: "Based in Panipat, Haryana. Serving Delhi, Gurgaon, and global clients." },
        ]}
      />

      {/* Agent types */}
      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Agent types we build
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agentTypes.map(({ label, body }) => (
              <div key={label} className="card-base p-7">
                <h3 className="font-display text-base font-bold text-white">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-white sm:text-4xl">
            How we build your agent
          </h2>
          <ol className="mx-auto flex max-w-3xl flex-col gap-6">
            {processSteps.map((step, i) => (
              <li key={step.name} className="flex gap-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#635BFF]/15 border border-[#635BFF]/30 text-xs font-bold text-[#a78bfa]">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-white">{step.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="flex flex-col gap-6">
            {faqPairs.map((faq) => (
              <div key={faq.q} className="card-base p-7">
                <dt className="font-semibold text-white">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/60">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to deploy your first AI agent?
            </h2>
            <p className="mt-4 text-white/60">
              Free 30-minute scoping call. We'll define the agent, estimate the cost, and outline
              the delivery timeline — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a free scoping call <ArrowRight size={16} className="ml-1" />
              </Link>
              <Link href="/services/ai-automation" className="btn-outline">
                See AI Automation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
