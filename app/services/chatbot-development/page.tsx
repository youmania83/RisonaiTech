import type { Metadata } from "next";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Bot,
  Globe,
  BookOpen,
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
  title: "AI Chatbot Development India — RAG, Voice AI & WhatsApp Bots From ₹20,000",
  description:
    "RisonAI Tech builds AI chatbots for websites and WhatsApp — RAG bots trained on your data, voice AI agents, conversational AI, multilingual (English + Hindi), CRM-integrated. From ₹20,000.",
  keywords: [
    "AI chatbot development India",
    "conversational AI India",
    "RAG chatbot India",
    "voice AI agent India",
    "WhatsApp chatbot development India",
    "AI chatbot for website India",
    "chatbot development company Delhi",
    "AI customer support agent India",
    "lead qualification chatbot India",
    "appointment booking chatbot India",
    "multilingual AI chatbot India",
    "AI virtual assistant India",
    "LLM chatbot development India",
    "GPT chatbot development India",
    "chatbot API integration India",
  ],
  alternates: { canonical: "/services/chatbot-development" },
  openGraph: {
    title: "AI Chatbot Development India | RAG, Voice AI & WhatsApp Bots | RisonAI Tech",
    description:
      "Context-aware AI chatbots — RAG bots on your data, voice AI agents, conversational AI for WhatsApp and websites. Lead qualification, booking, and customer support. From ₹20,000.",
    url: "https://risonaitech.com/services/chatbot-development",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Development India | RAG, Voice AI & WhatsApp Bots | RisonAI Tech",
    description: "RAG chatbots, voice AI agents, WhatsApp bots. Lead qual, appointment booking, 24/7 support. From ₹20,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "AI chatbots for websites (chat widget, pop-up, embedded)",
  "WhatsApp AI chatbots via WhatsApp Business API",
  "RAG (retrieval-augmented generation) chatbots trained on your docs",
  "Lead qualification and intake chatbots",
  "Appointment booking bots connected to your calendar",
  "Multilingual support (English + Hindi)",
  "CRM integration — every conversation logged automatically",
  "Handoff to human agent when needed",
  "Analytics dashboard — conversation volume, resolution rate, drop-offs",
  "A/B testing for chatbot flows",
];

const botTypes = [
  {
    icon: MessageSquare,
    title: "WhatsApp Lead Bot",
    desc: "Captures leads from WhatsApp, asks qualifying questions, schedules calls, and syncs to your CRM. Runs 24/7. Replies in under 2 seconds. Built on the WhatsApp Business API — no third-party app required.",
  },
  {
    icon: BookOpen,
    title: "RAG Knowledge Bot",
    desc: "Trained on your documentation, FAQs, product pages, and PDFs. Answers customer questions with source citations. Eliminates 60–80% of repetitive support queries. Stays accurate as your content updates.",
  },
  {
    icon: Bot,
    title: "Appointment Booking Bot",
    desc: "Patients or clients book appointments through WhatsApp or your website without calling. The bot checks availability, confirms slots, sends reminders, and handles rescheduling. Used in DocBooking.",
  },
  {
    icon: Globe,
    title: "Website Conversion Bot",
    desc: "Engages visitors at the right moment — pricing page, exit intent, product pages. Qualifies intent, captures contact info, and routes hot leads to sales instantly. 3× better than contact forms.",
  },
];

const processSteps = [
  {
    name: "Use case definition",
    text: "We pick one of four bot archetypes — lead, RAG, booking, conversion — and define the user journey, success metric, and the smallest viable scope that proves the investment.",
  },
  {
    name: "Knowledge base preparation",
    text: "For RAG bots, we ingest your documentation, FAQs, product pages, and PDFs into a vector store (pgvector / Pinecone). We chunk, clean, and tag content so retrieval is precise.",
  },
  {
    name: "Channel and template setup",
    text: "WhatsApp Business API onboarding via a Meta-approved BSP, template approvals, and website widget design that matches your brand. Channel goes live in staging.",
  },
  {
    name: "Prompt and tool design",
    text: "We design the LLM prompt, tool-use surface (booking, CRM write, calendar lookup), and graceful fallback rules. Hallucination tolerance and brand voice are explicit constraints.",
  },
  {
    name: "Sprint build with real data",
    text: "Build against real conversations, real CRM contacts, and real calendars. Each sprint review uses live transcripts to tune prompts, retrieval, and routing rules.",
  },
  {
    name: "Human handoff and escalation",
    text: "Every chatbot includes a handoff path to a human agent — by intent, by user request, or by failure mode. The handoff carries full context so the human doesn&apos;t restart.",
  },
  {
    name: "Analytics and observability",
    text: "Conversation volume, deflection rate, drop-off points, hallucination flags, latency, and CSAT roll into a dashboard for the ops owner.",
  },
  {
    name: "Launch, training, and ongoing tuning",
    text: "Production cutover, team training, and 30–60 day support window for prompt and retrieval tuning. Optional retainer for ongoing iteration as the knowledge base grows.",
  },
];

const channels = [
  {
    label: "WhatsApp Business API",
    body: "Official Meta-approved API via BSPs. Templates, free-form sessions, image / document attachments, click-to-chat ads, broadcast messaging, and agent handoff.",
  },
  {
    label: "Website chat widget",
    body: "Embedded React widget with Tailwind theming, mobile-friendly UX, exit-intent prompts, page-context awareness, and CRM lead capture without forms.",
  },
  {
    label: "Voice AI agents",
    body: "Outbound and inbound phone agents on Twilio + LLM stacks (limited engagements). Use cases: appointment confirmation, post-purchase NPS, qualified lead callbacks.",
  },
  {
    label: "Embedded in product",
    body: "In-app AI copilots that sit alongside your SaaS UX — answering data questions, drafting actions, summarising activity. Used in Expreality and DocBooking.",
  },
];

const faqs = [
  {
    q: "How much does an AI chatbot cost in India?",
    a: "AI chatbot projects in India usually start at ₹20,000 for basic FAQ coverage and move up based on integrations. A lead qualification or appointment bot typically costs ₹50,000-₹1,20,000, while a full RAG + WhatsApp + CRM stack runs ₹1,20,000-₹3,50,000.",
  },
  {
    q: "What is a RAG chatbot and why does it matter?",
    a: "A RAG chatbot is an AI assistant that answers from your own documents and data instead of guessing from generic model memory. This improves response accuracy, reduces hallucinations, and keeps answers up to date as your content evolves.",
  },
  {
    q: "Can the chatbot work on WhatsApp?",
    a: "Yes. RisonAI Tech builds WhatsApp chatbots using the official WhatsApp Business API. The bot can answer questions, qualify leads, book appointments, and hand off to a human agent — all within WhatsApp. No third-party app required.",
  },
  {
    q: "How long does chatbot development take?",
    a: "Chatbot delivery usually takes 2-8 weeks based on integrations and data complexity. Basic FAQ chatbots take 2-3 weeks, while full RAG bots with WhatsApp and CRM sync take 5-8 weeks.",
  },
  {
    q: "Can the chatbot speak Hindi?",
    a: "Yes. RisonAI Tech builds multilingual chatbots that detect the user's language and respond accordingly. Hindi + English is the most common configuration for Indian businesses; Tamil, Telugu, Marathi, and Bengali are also supported on request.",
  },
  {
    q: "What happens when the chatbot can't answer a question?",
    a: "Every chatbot we build includes a graceful fallback — the bot acknowledges it can&apos;t answer, offers to connect the user to a human, and captures their contact info for follow-up. High-value conversations are escalated automatically with full context.",
  },
  {
    q: "Do you build voice AI agents?",
    a: "Yes, in limited engagements. RisonAI Tech builds outbound and inbound voice AI agents on Twilio + LLM stacks for appointment confirmation, post-purchase NPS, and qualified-lead callbacks. Voice projects start at ₹1,50,000.",
  },
  {
    q: "How do you handle hallucinations?",
    a: "Three layers: RAG retrieval grounds answers in your data; explicit prompts forbid speculation; HITL handoff escalates uncertain queries to humans. Hallucination flags are logged and reviewed weekly during the support window.",
  },
  {
    q: "Can the chatbot integrate with my CRM?",
    a: "Yes. Every chat surface logs against the right contact in HubSpot, Zoho, Salesforce, or your custom CRM. Conversations are summarised, intent is extracted, and the bot suggests the next action for the sales team.",
  },
  {
    q: "What stack do you use?",
    a: "OpenAI GPT-4 / GPT-5, Anthropic Claude, or Google Gemini for the LLM; LangChain or LlamaIndex for orchestration; pgvector or Pinecone for vector retrieval; WhatsApp Business API via Meta-approved BSPs; Next.js + React for website widgets.",
  },
];

const factualBenchmarks = [
  {
    stat: "Typical AI support bots deflect 40-70% of repetitive tier-1 queries.",
    detail: "RAG-backed bots reduce queue pressure by handling policy, pricing, and status questions before agent escalation.",
  },
  {
    stat: "WhatsApp automation often cuts median first reply time by 60-80%.",
    detail: "Always-on AI intake and qualification remove wait times caused by manual availability windows.",
  },
  {
    stat: "Website conversion bots commonly improve lead capture rates by 20-45%.",
    detail: "Contextual prompts and instant qualification outperform static contact forms on high-intent pages.",
  },
  {
    stat: "Production chatbot rollouts typically deploy in 2-8 weeks.",
    detail: "Timeline depends on channel count, knowledge-base quality, and CRM or calendar integration depth.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Chatbot Development", url: "/services/chatbot-development" },
  ]),
  serviceSchema({
    id: "chatbot-development",
    name: "AI Chatbot Development",
    serviceType: "AI Chatbot Development",
    description:
      "Context-aware AI chatbots for websites and WhatsApp — RAG bots trained on your data, multilingual (English + Hindi), CRM-integrated, with graceful human handoff. Built by RisonAI Tech.",
    url: "/services/chatbot-development",
    priceRange: "₹20,000 – ₹3,50,000",
    offers: [
      { name: "Basic FAQ Bot", description: "Pre-defined Q&A chatbot for website with CRM lead capture", price: "20000" },
      { name: "AI Lead Bot", description: "AI-powered chatbot for lead qualification and appointment booking", price: "50000" },
      { name: "RAG Chatbot", description: "Full AI chatbot trained on your docs, with WhatsApp, CRM, analytics", price: "120000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech delivers an AI chatbot project",
    description:
      "An eight-stage process from use-case definition to launch and ongoing tuning for AI chatbot engagements.",
    totalTime: "P56D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function ChatbotDevelopmentPage() {
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
            <span className="label-pill mb-5 inline-flex">AI Chatbot Development</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI chatbots that{" "}
              <span className="grad-text">know your business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds context-aware AI chatbots trained on your business data — for
              websites and WhatsApp. Lead qualification, appointment booking, FAQ answering, and
              customer support that runs 24/7 in English and Hindi, with graceful handoff to humans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Build My Chatbot
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/contact">
                See Demo
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              From <PriceTag service="chatbot" /> · WhatsApp + Website · English + Hindi · Headquartered in Panipat
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
              <strong>RisonAI Tech provides AI chatbot development services in India.</strong> The
              company builds three classes of chatbot: rule-based FAQ bots (₹20,000–₹50,000), AI
              lead bots powered by GPT-4 / Claude / Gemini (₹50,000–₹1,20,000), and RAG chatbots
              trained on the client&apos;s documentation with WhatsApp + CRM integration
              (₹1,20,000–₹3,50,000). All bots support English and Hindi by default, log to HubSpot /
              Zoho / Salesforce / custom CRMs, and include graceful human handoff with full
              conversation context.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            What&apos;s included
          </h2>
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

      {/* Bot Types */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Types of chatbots we build
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {botTypes.map((bt) => {
              const Icon = bt.icon;
              return (
                <div className="card-base p-6" key={bt.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{bt.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{bt.desc}</p>
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
            Our chatbot delivery process
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

      {/* Channels */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Channels we deploy chatbots on
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {channels.map((ch) => (
              <div className="card-base p-5" key={ch.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {ch.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{ch.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">Pricing</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "Basic FAQ Bot",
                price: "₹20,000 – ₹50,000",
                desc: "Pre-defined Q&A chatbot for website. Handles common questions without AI.",
                items: ["Rule-based flows", "Website widget", "CRM lead capture", "2–3 week delivery"],
              },
              {
                tier: "AI Lead Bot",
                price: "₹50,000 – ₹1,20,000",
                desc: "AI-powered chatbot for lead qualification and appointment booking on WhatsApp or website.",
                items: [
                  "LLM-powered responses",
                  "WhatsApp or website",
                  "CRM integration",
                  "3–5 week delivery",
                  "Hindi + English",
                ],
                highlight: true,
              },
              {
                tier: "RAG Chatbot",
                price: "₹1,20,000 – ₹3,50,000",
                desc: "Full AI chatbot trained on your docs, with WhatsApp, CRM, and analytics.",
                items: [
                  "RAG on your data",
                  "WhatsApp + website",
                  "CRM + analytics",
                  "5–8 week delivery",
                  "60-day support",
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
        intro="These metrics reflect common deployment outcomes for WhatsApp, website, and RAG-powered chatbot systems in India."
        title="Chatbot performance and deployment benchmarks"
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
              Delhi chatbot projects
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat SME chatbot use cases
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Start Building
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-site text-center">
          <h2 className="font-display text-4xl font-extrabold text-brand-dark">
            Ready to deploy an AI agent for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us your use case — lead qualification, appointment booking, or customer support.
            We&apos;ll scope and build it in 2–8 weeks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Build My Chatbot
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/services">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Topic cluster: related guides */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-gray">
            Related guides
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/blog/whatsapp-chatbot-for-business-india",
                tag: "Guide",
                title: "WhatsApp Chatbot Cost in India (2026)",
                desc: "What a WhatsApp chatbot for an Indian business actually costs — from \u20b920,000 FAQ bots to \u20b93,50,000 AI agents.",
              },
              {
                href: "/blog/ai-automation-for-indian-smes",
                tag: "Guide",
                title: "AI Automation for Indian SMEs",
                desc: "Best entry point, ROI benchmarks, and a full cost breakdown for SMEs starting with AI in 2026.",
              },
              {
                href: "/services/whatsapp-automation",
                tag: "Service",
                title: "WhatsApp Automation",
                desc: "Production WhatsApp automation beyond basic chatbots — CRM sync, lead pipelines, broadcast campaigns.",
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
