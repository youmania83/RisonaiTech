import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "WhatsApp Chatbot for Business in India: The Complete 2026 Guide | RisonAI Tech",
  description:
    "How to build a WhatsApp chatbot for your Indian business in 2026 — lead qualification, appointment booking, customer support, and 24/7 response. Costs, timelines, and real examples.",
  keywords: [
    "WhatsApp chatbot for business India",
    "WhatsApp AI chatbot India 2026",
    "WhatsApp agentic bot India",
    "WhatsApp Business API India",
    "WhatsApp automation India 2026",
    "AI WhatsApp bot India",
    "WhatsApp lead generation India",
    "WhatsApp customer support automation India",
    "WhatsApp chatbot development India",
    "how to automate WhatsApp India",
    "cheapest WhatsApp chatbot India",
    "WhatsApp CRM integration India",
  ],
  alternates: { canonical: "/blog/whatsapp-chatbot-for-business-india" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "WhatsApp Chatbot for Business in India: The Complete 2026 Guide",
    description:
      "How to build a WhatsApp chatbot that qualifies leads, books appointments, and handles FAQs 24/7. Costs, timelines, and real examples from Indian businesses.",
    url: "https://risonaitech.com/blog/whatsapp-chatbot-for-business-india",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chatbot for Business in India: The Complete 2026 Guide",
    description: "Build a WhatsApp chatbot that handles leads, appointments, and FAQs 24/7. Costs ₹20k–₹3.5L.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "How much does a WhatsApp chatbot cost in India?",
    a: "A rule-based FAQ chatbot costs ₹20,000–₹50,000. An AI-powered lead qualification bot with CRM integration costs ₹50,000–₹1,20,000. A fully automated RAG chatbot with WhatsApp + website + CRM integration costs ₹1,20,000–₹3,50,000. All prices are fixed, not hourly.",
  },
  {
    q: "Do I need WhatsApp Business API approval to build a chatbot?",
    a: "Yes. You need to apply for WhatsApp Business API access through an official Business Solution Provider (BSP) like Twilio, Wati, or Interakt. We handle the entire application process for our clients. Approval typically takes 3–7 business days.",
  },
  {
    q: "Can a WhatsApp chatbot handle payments in India?",
    a: "Yes. WhatsApp Pay and Razorpay integrations allow chatbots to initiate payment links, confirm transactions, and update order status — all within the WhatsApp conversation. This is particularly powerful for D2C brands and education businesses.",
  },
  {
    q: "What happens when the chatbot can't answer a question?",
    a: "Well-built chatbots have a graceful escalation path: the bot acknowledges it can't answer, collects the user's question, and immediately notifies the right human agent via WhatsApp or your CRM. The agent can take over the conversation with full context.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "WhatsApp Chatbot for Business India", url: "/blog/whatsapp-chatbot-for-business-india" },
  ]),
  articleSchema({
    title: "WhatsApp Chatbot for Business in India: The Complete 2026 Guide",
    description:
      "How to build a WhatsApp chatbot that qualifies leads, books appointments, and handles FAQs 24/7 for Indian businesses.",
    url: "/blog/whatsapp-chatbot-for-business-india",
    datePublished: "2025-05-05",
    dateModified: "2026-05-12",
    wordCount: 1100,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function WhatsappChatbotPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pb-10 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <Link
                href="/blog"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(99,91,255,0.1)",
                  border: "1px solid rgba(99,91,255,0.2)",
                  color: "#a78bfa",
                }}
              >
                WhatsApp Automation
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              WhatsApp Chatbot for Business in India: The Complete 2026 Guide
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              India has 535 million WhatsApp users. Yet most businesses still respond to leads
              manually — or miss them entirely. This guide covers how to build a WhatsApp chatbot
              that qualifies leads, books appointments, and handles FAQs 24/7.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-05-12">12 May 2026</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">

            {/* TL;DR — answer-first block for AI crawlers */}
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">TL;DR — Direct Answer</p>
              <p className="text-white/80 text-base leading-relaxed">
                A WhatsApp chatbot for an Indian business costs ₹20,000–₹3,50,000 depending on
                complexity. A basic FAQ bot costs ₹20,000–₹50,000 and goes live in 2–3 weeks.
                An AI-powered lead qualification bot with CRM integration costs ₹50,000–₹1,20,000.
                You need the WhatsApp Business API (not the free app) — RisonAI Tech handles the
                setup end-to-end.
              </p>
            </div>

            <div className="card-base p-6 mb-10">
              <p className="text-sm font-semibold text-[#a78bfa] mb-2">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "WhatsApp has a 98% open rate vs 20% for email — it's the highest-leverage channel in India",
                  "You need official Business API access (not the free app) to build a real chatbot",
                  "AI chatbots can handle 60–80% of inbound queries without human intervention",
                  "Most WhatsApp chatbot projects go live in 3–6 weeks",
                  "The ROI calculation is almost always positive within the first month",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="text-[#10B981] mt-0.5 flex-shrink-0" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why WhatsApp is the most important channel for Indian businesses
            </h2>
            <p className="text-white/65 leading-relaxed">
              With 535 million active users in India, WhatsApp is not just a messaging app — it is
              the primary communication interface for a majority of Indian consumers and B2B buyers.
              Email open rates in India hover around 18–22%. WhatsApp messages have a 98% open rate
              and are typically read within 3 minutes of receipt.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              For businesses, this means WhatsApp is where leads first reach out, where customers
              ask support questions, and where purchase decisions are made. Yet most businesses
              handle WhatsApp manually — one person replying to hundreds of messages per day, leads
              going cold while they sleep, and no record of conversations in any CRM.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              WhatsApp Business App vs WhatsApp Business API: what you need to know
            </h2>
            <p className="text-white/65 leading-relaxed">
              The free WhatsApp Business App is designed for individuals and very small businesses.
              It supports basic auto-replies and quick replies — but you cannot connect it to a
              chatbot, CRM, or AI system.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              To build a real automation system, you need the <strong className="text-white">WhatsApp Business API</strong> —
              a developer-level integration that allows programmatic sending, receiving, and
              processing of messages. You access it through an official Business Solution Provider
              (BSP). Wati, Interakt, Twilio, and 360dialog are the most commonly used BSPs in
              India.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              4 high-value WhatsApp chatbot use cases for Indian businesses
            </h2>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              1. Lead qualification and routing
            </h3>
            <p className="text-white/65 leading-relaxed">
              A lead writes &quot;Hi, I want to know about your services&quot; on WhatsApp. The chatbot
              engages conversationally — asks for their name, business type, city, and budget range
              — scores their intent, and either books a call directly in your calendar (via
              Calendly integration) or creates a prioritised task in your CRM. Your sales team
              arrives at the call already knowing who they&apos;re talking to.
            </p>
            <p className="text-white/65 leading-relaxed mt-3">
              A real estate client of ours went from a 4-hour average response time to a 90-second
              automated engagement. Their appointment-to-site-visit conversion rate increased by
              61% in the first 6 weeks.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              2. Appointment booking and reminders
            </h3>
            <p className="text-white/65 leading-relaxed">
              Healthcare providers, clinics, salons, legal firms, and coaching businesses all
              struggle with appointment no-shows and manual booking. A WhatsApp chatbot can show
              available slots, confirm bookings, send reminders 24 hours before the appointment,
              and allow rescheduling — all without a receptionist.
            </p>
            <p className="text-white/65 leading-relaxed mt-3">
              DocBooking, our clinic management SaaS product, uses this architecture. Clinics using
              the system report 40–55% reduction in no-show rates.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              3. AI-powered FAQ and support deflection
            </h3>
            <p className="text-white/65 leading-relaxed">
              A RAG (retrieval-augmented generation) chatbot is trained on your product
              documentation, pricing, policies, and past support conversations. When a customer
              asks a question, the bot retrieves the most relevant information from your knowledge
              base and answers in natural language — in English, Hindi, or both.
            </p>
            <p className="text-white/65 leading-relaxed mt-3">
              This handles 60–80% of incoming queries without human involvement. Complex or
              high-stakes queries are escalated with full conversation context so the human agent
              doesn&apos;t have to ask &quot;How can I help you?&quot; again.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              4. Post-purchase and order update flows
            </h3>
            <p className="text-white/65 leading-relaxed">
              D2C brands and e-commerce businesses use WhatsApp automation to send order
              confirmations, shipping updates, delivery confirmations, and review requests — all
              via structured message templates. Response rates to WhatsApp requests (for reviews,
              upsells, and feedback) are 5–10x higher than email equivalents.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              How long does it take and what does it cost?
            </h2>
            <div className="not-prose mt-4 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <table className="w-full text-sm">
                <thead style={{ background: "rgba(255,255,255,0.04)" }}>
                  <tr>
                    <th className="py-3 px-4 text-left text-white/60 font-medium">Chatbot type</th>
                    <th className="py-3 px-4 text-left text-white/60 font-medium">Timeline</th>
                    <th className="py-3 px-4 text-left text-white/60 font-medium">Price range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {[
                    { type: "Rule-based FAQ bot", time: "2–3 weeks", price: "₹20,000–₹50,000" },
                    { type: "AI lead qualification bot", time: "3–5 weeks", price: "₹50,000–₹1,20,000" },
                    { type: "RAG chatbot + CRM integration", time: "5–8 weeks", price: "₹1,20,000–₹3,50,000" },
                    { type: "Full automation suite (all above)", time: "8–12 weeks", price: "₹3,00,000–₹6,00,000" },
                  ].map((row) => (
                    <tr key={row.type} style={{ background: "rgba(255,255,255,0.015)" }}>
                      <td className="py-3 px-4 text-white/70">{row.type}</td>
                      <td className="py-3 px-4 text-white/50">{row.time}</td>
                      <td className="py-3 px-4 text-[#a78bfa] font-medium">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Technical architecture of a production WhatsApp chatbot
            </h2>
            <p className="text-white/65 leading-relaxed">
              A production-grade WhatsApp AI system has six layers:
            </p>
            <ol className="mt-4 space-y-3 not-prose list-none pl-0">
              {[
                { n: "1", label: "BSP Layer", desc: "Wati, Interakt, or Twilio handles WhatsApp API connectivity, template management, and message delivery." },
                { n: "2", label: "Webhook Receiver", desc: "A Node.js or Python service receives incoming messages and routes them to the appropriate handler." },
                { n: "3", label: "Intent Classifier", desc: "An LLM or fine-tuned classifier determines what the user wants — FAQ, booking, sales inquiry, or human escalation." },
                { n: "4", label: "Knowledge / RAG Layer", desc: "A vector database (Pinecone, Qdrant) stores your documentation, enabling semantic search for accurate answers." },
                { n: "5", label: "Action Layer", desc: "Integrations with your CRM (HubSpot, Zoho), calendar (Calendly, Google Calendar), or database to take actions." },
                { n: "6", label: "Observability", desc: "Logging, monitoring, and human-in-the-loop dashboards so your team can review AI actions and intervene when needed." },
              ].map((item) => (
                <li key={item.n} className="card-base p-4 flex gap-3 text-sm">
                  <span
                    className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "rgba(99,91,255,0.2)" }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <span className="text-white font-medium">{item.label}: </span>
                    <span className="text-white/55">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-12 rounded-2xl p-7 not-prose"
              style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}
            >
              <p className="font-semibold text-white">
                Want a WhatsApp chatbot built for your business?
              </p>
              <p className="mt-2 text-sm text-white/55">
                We build production WhatsApp automation systems for Indian businesses. Fixed price,
                full code ownership, deployed in 3–8 weeks. Book a free 30-minute call to scope
                your project.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 btn-primary"
              >
                Get a free scoping call <ArrowRight size={15} />
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

      {/* Topic cluster: next step CTA + related content */}
      <section className="py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            Next steps
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/whatsapp-automation",
                tag: "Service",
                title: "WhatsApp Automation",
                desc: "Get a fixed-price quote for your WhatsApp bot. CRM sync, lead capture, support bots. From \u20b925,000.",
              },
              {
                href: "/services/chatbot-development",
                tag: "Service",
                title: "AI Chatbot Development",
                desc: "RAG chatbots trained on your docs. Website + WhatsApp. From \u20b920,000.",
              },
              {
                href: "/blog/ai-automation-for-indian-smes",
                tag: "Guide",
                title: "AI Automation for Indian SMEs",
                desc: "Beyond WhatsApp: full AI automation roadmap for Indian businesses in 2026.",
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
