import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "AI and Automation: How They Work Together to Transform Business | RisonAI Tech" },
  description:
    "AI provides the intelligence. Automation provides the execution. Together they create systems that work 24/7 without human intervention. Here is the full architecture.",
  keywords: [
    "ai and automation",
    "ai with automation",
    "combining ai and automation",
    "ai automation stack",
    "intelligent automation architecture",
    "ai workflow automation",
    "business process automation AI",
    "AI powered workflows India",
    "automation with machine learning",
    "ai integration with business automation",
  ],
  alternates: { canonical: "/blog/ai-and-automation" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "AI and Automation: How They Work Together to Transform Business Operations",
    description:
      "AI provides intelligence; automation provides execution. Together they create systems that work 24/7 without human intervention.",
    url: "https://risonaitech.com/blog/ai-and-automation",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Automation: How They Work Together to Transform Business Operations",
    description:
      "AI provides intelligence; automation provides execution. Together they create systems that work 24/7.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "How do AI and automation work together?",
    a: "AI and automation work together in a three-layer architecture: (1) Triggers and integrations — automation monitors data sources and fires workflows when events occur. (2) AI reasoning — a language model or ML model analyzes the input and makes a decision. (3) Execution — automation carries out the decision by calling APIs, updating records, sending messages, or routing data. Neither layer functions optimally without the other.",
  },
  {
    q: "What is the difference between AI and automation in business?",
    a: "Automation handles structured, rule-based tasks. AI handles judgment, language understanding, and decisions on variable inputs. In a combined system, automation handles the plumbing — connecting systems, routing data, sending messages — while AI handles the thinking: reading intent, classifying documents, generating replies, scoring leads.",
  },
  {
    q: "What is an AI automation stack for Indian businesses?",
    a: "A typical AI automation stack for Indian SMEs includes: n8n or Make.com (workflow orchestration), OpenAI GPT-4o or Claude 3.5 Sonnet (AI reasoning), WhatsApp Business API (customer communication), HubSpot or Zoho CRM (data storage), and PostgreSQL or Supabase (operational database). Total infrastructure cost ranges from ₹10,000–₹25,000 per month.",
  },
  {
    q: "Can AI replace automation completely?",
    a: "No. AI cannot replace automation because AI provides decisions but lacks reliable execution mechanisms on its own. An AI model knows what action to take but needs automation infrastructure — API calls, database writes, messaging triggers — to actually do it. Automation is the hands; AI is the brain. Both are necessary for production business systems.",
  },
  {
    q: "What is an orchestration pattern for AI automation?",
    a: "The most common orchestration pattern is: Trigger (an event fires — form submitted, message received, timer elapsed) → AI Processing (the LLM reads the input and generates a structured decision or response) → Action (automation executes the decision — CRM update, message sent, record created, escalation triggered). Each step is independently replaceable, making the system maintainable.",
  },
  {
    q: "How much does it cost to build an AI + automation system in India?",
    a: "A production AI + automation system for an Indian SME typically costs ₹60,000–₹1,50,000 to build and ₹10,000–₹25,000 per month to run. This includes workflow infrastructure (n8n self-hosted), LLM API costs (OpenAI/Anthropic), CRM integration, and WhatsApp Business API. The ROI is typically achieved within 3–6 months through labor cost savings and increased conversion rates.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "AI and Automation Together", url: "/blog/ai-and-automation" },
  ]),
  articleSchema({
    title: "AI and Automation: How They Work Together to Transform Business Operations",
    description:
      "AI provides intelligence; automation provides execution. Together they create systems that work 24/7 without human intervention.",
    url: "/blog/ai-and-automation",
    datePublished: "2026-06-05",
    dateModified: "2026-06-05",
    wordCount: 1400,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function AiAndAutomationPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pb-10 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(99,91,255,0.1)", border: "1px solid rgba(99,91,255,0.2)", color: "#a78bfa" }}
              >
                AI Automation
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              AI and Automation: How They Work Together to Transform Business Operations
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              AI provides the intelligence. Automation provides the execution. Together they create systems that work 24/7 — handling leads, responding to customers, processing documents, and updating your CRM — without anyone touching a keyboard.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-05">5 June 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article
        className="py-16"
        style={{ backgroundColor: "#090C18" }}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">

            <div className="not-prose rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">TL;DR — Direct Answer</p>
              <p className="text-white/80 text-base leading-relaxed">
                AI and automation are complementary, not competing. <strong className="text-white">Automation</strong> handles execution: triggering workflows, calling APIs, updating CRMs, sending messages. <strong className="text-white">AI</strong> handles reasoning: reading unstructured input, understanding intent, making decisions. The combination — AI + automation — produces systems that operate entirely without human intervention, at any scale, with consistent quality.
              </p>
            </div>

            <div className="card-base p-6 mb-10 not-prose">
              <p className="text-sm font-semibold text-[#a78bfa] mb-2">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "AI is the brain; automation is the body — neither works at full potential without the other",
                  "The standard AI automation pattern: Trigger → AI reasoning → Execution",
                  "Indian SMEs can deploy a full AI + automation stack for ₹10,000–₹25,000/month ongoing cost",
                  "WhatsApp, email, and web forms are the three primary trigger channels for Indian businesses",
                  "ROI is typically achieved in 3–6 months through labor savings and faster lead conversion",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="text-[#10B981] mt-0.5 flex-shrink-0" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why AI needs automation
            </h2>
            <p className="text-white/65 leading-relaxed">
              An AI model on its own is a thinking tool — not an acting tool. If a GPT-4o model reads a customer message and decides &quot;this lead should be booked for a sales call,&quot; nothing happens unless there is an automation layer to actually create the calendar invite, update the CRM, and send the confirmation message.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              Without automation connecting the AI decision to action systems, you get an AI that tells humans what to do — rather than an AI that does it. That is only a marginal improvement over the status quo. The full ROI of AI arrives when it is connected to execution infrastructure.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why automation needs AI
            </h2>
            <p className="text-white/65 leading-relaxed">
              Traditional automation breaks when it encounters anything outside its pre-defined rules. A WhatsApp automation that routes messages by exact keyword matching fails the moment a customer says &quot;hi I want to know about your pricing please,&quot; instead of the exact phrase &quot;pricing.&quot;
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              AI makes automation resilient. Instead of brittle keyword matching, an LLM reads the message, understands the intent, and passes a structured signal — &quot;intent: pricing inquiry, customer type: new lead&quot; — to the automation layer. The automation then executes the appropriate action based on that signal. The system handles infinite natural language variation without reprogramming.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-5">
              The standard AI + automation architecture
            </h2>
            <p className="text-white/65 leading-relaxed">
              Every AI automation system we build at RisonAI Tech follows the same three-layer pattern:
            </p>
            <div className="not-prose mt-5 space-y-3">
              {[
                {
                  step: "Layer 1: Trigger",
                  desc: "An event fires — a WhatsApp message arrives, a form is submitted, a CRM field changes, a timer elapses. The automation platform (n8n) detects it and starts the workflow. This is pure automation: structured, reliable, deterministic.",
                  color: "rgba(16,185,129,0.08)",
                  border: "rgba(16,185,129,0.2)",
                },
                {
                  step: "Layer 2: AI Reasoning",
                  desc: "The trigger data is sent to an LLM (GPT-4o, Claude 3.5, or a fine-tuned model). The AI reads the input — message text, document content, lead information — and produces a structured decision: intent classification, sentiment score, recommended action, generated reply. This is the AI layer.",
                  color: "rgba(99,91,255,0.08)",
                  border: "rgba(99,91,255,0.2)",
                },
                {
                  step: "Layer 3: Execution",
                  desc: "The automation executes the AI's decision — updating the CRM, sending a WhatsApp message, creating a calendar invite, notifying a team member on Slack, generating and emailing a PDF report. This is automation again: precise, fast, and API-driven.",
                  color: "rgba(245,158,11,0.06)",
                  border: "rgba(245,158,11,0.18)",
                },
              ].map((layer) => (
                <div key={layer.step} className="rounded-xl px-5 py-4 border" style={{ background: layer.color, borderColor: layer.border }}>
                  <p className="font-semibold text-sm text-white mb-1">{layer.step}</p>
                  <p className="text-sm text-white/60">{layer.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              Real-world examples from Indian businesses
            </h2>
            <p className="text-white/65 leading-relaxed">
              Here is what this pattern looks like in practice across three common use cases:
            </p>
            <div className="not-prose mt-5 space-y-4">
              {[
                {
                  title: "WhatsApp lead qualification",
                  desc: "Trigger: WhatsApp message received. AI: reads message, classifies intent (new lead / existing customer / support), extracts budget and timeline from conversational text, generates appropriate reply. Execution: creates CRM lead, sends personalized reply, routes high-value leads to sales team Slack.",
                },
                {
                  title: "Automated document processing",
                  desc: "Trigger: PDF invoice or contract uploaded to shared folder. AI: extracts key fields (vendor, amount, date, line items) from unstructured document text. Execution: creates entry in accounting system, flags anomalies, sends approval request to finance manager via email.",
                },
                {
                  title: "Proactive customer re-engagement",
                  desc: "Trigger: timer fires for any customer who has been inactive for 30 days. AI: generates a personalized re-engagement message based on the customer's last purchase history and industry. Execution: sends WhatsApp message, updates CRM with outreach record, schedules follow-up if no response in 48 hours.",
                },
              ].map((ex) => (
                <div key={ex.title} className="card-base p-5">
                  <p className="font-semibold text-sm text-white">{ex.title}</p>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-12 rounded-2xl p-7 not-prose"
              style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}
            >
              <p className="font-semibold text-white">
                Build your first AI + automation system
              </p>
              <p className="mt-2 text-sm text-white/55">
                We design and deploy AI + automation systems for Indian businesses — from WhatsApp lead qualification to full back-office automation. Fixed price. 4–6 week delivery.
              </p>
              <Link href="/services/ai-automation" className="mt-5 inline-flex items-center gap-2 btn-primary">
                View AI automation services <ArrowRight size={15} />
              </Link>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4 not-prose">
              {faqItems.map((faq) => (
                <div key={faq.q} className="card-base p-5">
                  <p className="text-sm font-semibold text-white">{faq.q}</p>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Next steps</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/blog/ai-agents-for-business-automation",
                tag: "Deep Dive",
                title: "AI Agents for Business Automation",
                desc: "Go beyond workflows — learn how autonomous AI agents can handle entire business processes end-to-end.",
              },
              {
                href: "/blog/ai-vs-automation",
                tag: "Explainer",
                title: "AI vs Automation: The Differences",
                desc: "Understand the fundamental distinction before deciding which type of system your business needs.",
              },
              {
                href: "/services/ai-automation",
                tag: "Service",
                title: "AI Automation Services",
                desc: "We design and build combined AI + automation systems. Fixed scope, fixed price.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl p-5 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/50">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
