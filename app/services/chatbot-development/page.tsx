import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare, Bot, Globe, BookOpen } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "AI Chatbot Development India — WhatsApp & Website Chatbots with RAG",
  description:
    "RisonAI Tech builds AI chatbots for websites and WhatsApp — trained on your business data using RAG. Lead qualification, appointment booking, and customer support bots. Delhi NCR.",
  keywords: [
    "AI chatbot development India",
    "WhatsApp chatbot development India",
    "AI chatbot for website India",
    "chatbot development company Delhi",
    "RAG chatbot India",
    "lead qualification chatbot",
    "appointment booking chatbot India",
    "multilingual chatbot India",
  ],
  alternates: { canonical: "/services/chatbot-development" },
  openGraph: {
    title: "AI Chatbot Development India | RisonAI Tech",
    description:
      "Context-aware AI chatbots for websites and WhatsApp — trained on your data using RAG. Starting from ₹20,000.",
    url: "https://risonaitech.com/services/chatbot-development",
  },
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
    desc: "Captures leads from WhatsApp, asks qualifying questions, schedules calls, and syncs to your CRM. Runs 24/7. Replies in under 2 seconds. Built on WhatsApp Business API — no third-party app required.",
  },
  {
    icon: BookOpen,
    title: "RAG Knowledge Bot",
    desc: "Trained on your documentation, FAQs, product pages, and PDFs. Answers customer questions with source citations. Eliminates 60–80% of repetitive support queries. Stays accurate as you update your docs.",
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
    a: "Yes. We build WhatsApp chatbots using the official WhatsApp Business API. The bot can answer questions, qualify leads, book appointments, and hand off to a human agent — all within WhatsApp. No third-party app required.",
  },
  {
    q: "How long does chatbot development take?",
    a: "Chatbot delivery usually takes 2-8 weeks based on integrations and data complexity. Basic FAQ chatbots take 2-3 weeks, while full RAG bots with WhatsApp and CRM sync take 5-8 weeks.",
  },
  {
    q: "Can the chatbot speak Hindi?",
    a: "Yes. We build multilingual chatbots that detect the user's language and respond accordingly. Hindi + English is the most common configuration for Indian businesses.",
  },
  {
    q: "What happens when the chatbot can't answer a question?",
    a: "Every chatbot we build includes a graceful fallback — the bot acknowledges it can't answer, offers to connect the user to a human, and captures their contact info for follow-up. High-value conversations are escalated automatically.",
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

export default function ChatbotDevelopmentPage() {
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
            <span className="label-pill mb-5 inline-flex">AI Chatbot Development</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              AI chatbots that{" "}
              <span className="grad-text">know your business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We build context-aware AI chatbots trained on your business data — for websites and
              WhatsApp. Lead qualification, appointment booking, FAQ answering, and customer support
              that runs 24/7 without a human.
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
              From ₹20,000 · WhatsApp + Website · English + Hindi · Delhi NCR
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
            What's included
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
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
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
        intro="These metrics reflect common deployment outcomes for WhatsApp, website, and RAG-powered chatbot systems in India."
        title="Chatbot performance and deployment benchmarks"
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
          <h2
            className="font-display text-4xl font-extrabold text-brand-dark"
          >
            Ready to deploy an AI agent for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Tell us your use case — lead qualification, appointment booking, or customer support. We'll
            scope and build it in 2–8 weeks.
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
    </>
  );
}
