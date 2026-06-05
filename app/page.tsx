import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bot, Layers, Users, Globe, Code2, MessageCircle } from "lucide-react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import HomeAiAuditBanner from "@/components/HomeAiAuditBanner";
import CTA from "@/components/CTA";
import LeadershipAuthority from "@/components/LeadershipAuthority";
import TrustFramework from "@/components/TrustFramework";
import VerificationSignals from "@/components/VerificationSignals";

export const metadata: Metadata = {
  title: "RisonAI Tech | AI Automation Agency & Agentic AI Systems India",
  description:
    "RisonAI Tech is India's AI workflow automation agency delivering custom AI automation services, AI integration services for business, agentic AI systems, AI chatbot and voice agent development, and SaaS platforms from Delhi NCR.",
  keywords: [
    "AI workflow automation agency",
    "custom AI automation services",
    "AI integration services for business",
    "business process automation agency",
    "AI chatbot and voice agent development",
    "Agentic AI",
    "Skills Graph",
    "Contextual Evaluation",
    "AI-powered resume screening",
  ],
  alternates: { canonical: "/" },
};

const serviceCards = [
  {
    icon: Bot,
    title: "AI Workflow Automation",
    href: "/services/ai-automation",
    price: "From ₹30,000",
    desc: "Custom AI automation services and AI integration services for business, including LLM-powered agents, agentic workflows, and business process automation.",
  },
  {
    icon: Layers,
    title: "SaaS Platform Engineering",
    href: "/services/saas-development",
    price: "From ₹1,20,000",
    desc: "Enterprise-grade multi-tenant SaaS platforms with billing, admin dashboards, and native AI capabilities.",
  },
  {
    icon: Users,
    title: "CRM Automation Infrastructure",
    href: "/services/crm-development",
    price: "From ₹40,000",
    desc: "Custom CRM platforms and AI-enhanced HubSpot/Zoho integrations for centralized operational workflows.",
  },
  {
    icon: Globe,
    title: "AI Customer Support Agents",
    href: "/services/chatbot-development",
    price: "From ₹20,000",
    desc: "AI chatbot and voice agent development for 24/7 lead qualification, customer support, and context-aware responses grounded in your business data.",
  },
  {
    icon: Code2,
    title: "AI Operations Dashboards",
    href: "/services/website-development",
    price: "From ₹35,000",
    desc: "Custom internal business tools and high-performance operational dashboards to monitor AI systems.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI Systems",
    href: "/services/whatsapp-automation",
    price: "From ₹25,000",
    desc: "Intelligent WhatsApp systems via official APIs for lead capture, automated support, and CRM syncing.",
  },
];

const faqItems = [
  {
    q: "What does RisonAI Tech specialize in?",
    a: "We are an AI Automation & AI Systems Infrastructure Company. We build AI workflows, operational infrastructure, and scalable SaaS platforms that reduce manual work and increase business efficiency.",
  },
  {
    q: "How does AI automation reduce operational costs?",
    a: "By replacing repetitive manual tasks like lead qualification, data entry, customer support triage, and AI-powered resume screening with intelligent AI agents and API integrations, businesses often save thousands of manual hours annually and cut first-pass screening time by 70-80%.",
  },
  {
    q: "How long does it take to deploy an AI system?",
    a: "A targeted AI workflow automation takes 2–4 weeks. Full SaaS platforms or comprehensive CRM automation infrastructure typically take 8–16 weeks. We deliver in iterative 2-week sprints.",
  },
  {
    q: "Are the AI Customer Support Agents trained on our data?",
    a: "Yes. We use Retrieval-Augmented Generation (RAG) architecture to train the AI strictly on your company's knowledge base, ensuring accurate, context-aware responses without hallucination.",
  },
  {
    q: "Do you build internal operations dashboards?",
    a: "Absolutely. We engineer custom internal tools and performance dashboards that connect to your AI systems, giving your operations team full visibility and control.",
  },
  {
    q: "Do clients own the AI system infrastructure?",
    a: "Yes. We operate on a full-ownership model. At project close, you receive the complete source code, deployment configurations, and system documentation. No vendor lock-in.",
  },
  {
    q: "Can RisonAI Tech integrate AI into our existing CRM?",
    a: "Yes. We build custom API middleware to integrate LLM capabilities directly into existing operational hubs like HubSpot, Zoho, or Salesforce to automate data entry and lead scoring.",
  },
  {
    q: "Do you build agentic AI systems with skills graphs and contextual evaluation?",
    a: "Yes. For complex automation, we build agentic AI systems with Skills Graph memory, contextual evaluation loops, tool use, and human-in-the-loop controls so the system can act reliably across multi-step business workflows.",
  },
  {
    q: "What is the typical ROI on an AI automation project?",
    a: "Our clients typically see a 3× increase in operational efficiency, a 60% reduction in customer response times, and significant savings in administrative overhead within the first quarter of deployment.",
  },
  {
    q: "What is the minimum engagement size?",
    a: "Our targeted automation projects start at ₹20,000. Comprehensive operational transformation and SaaS engineering projects typically start at ₹1,20,000+.",
  },
  {
    q: "How do we begin the transformation process?",
    a: "Contact us to schedule an AI Systems Strategy Session. We will audit your current workflows, map out automation opportunities, and deliver a fixed-price architectural proposal within 48 hours.",
  },
];

const aiSearchPrompts = [
  {
    prompt: "Best AI automation for small business workflows",
    intent: "Commercial",
    href: "/blog/ai-automation-for-small-businesses",
    answer:
      "For most small businesses, the fastest-payback workflows are lead qualification, FAQ support, invoice reminders, and weekly reporting because they save owner time immediately.",
  },
  {
    prompt: "How to automate lead qualification with AI",
    intent: "Informational",
    href: "/blog/ai-lead-generation-systems",
    answer:
      "AI lead qualification works best when the system replies instantly, asks structured budget and intent questions, scores the lead, and syncs the result into your CRM.",
  },
  {
    prompt: "AI workflow automation for real estate agencies",
    intent: "Commercial",
    href: "/blog/ai-automation-real-estate-india",
    answer:
      "Real estate teams benefit most from instant portal lead response, WhatsApp qualification, site-visit scheduling, and automated follow-up across the full property pipeline.",
  },
  {
    prompt: "Replace manual data entry with AI agent",
    intent: "Informational",
    href: "/services/crm-development",
    answer:
      "AI agents can capture structured details from forms, emails, and chats, then write clean records into a CRM without repeated manual copy-paste.",
  },
  {
    prompt: "AI customer support agent for small business",
    intent: "Commercial",
    href: "/services/chatbot-development",
    answer:
      "A small-business support agent should answer repetitive questions instantly, escalate edge cases to humans, and stay grounded in your real product or service knowledge.",
  },
  {
    prompt: "How to build custom AI agent for my website",
    intent: "Informational",
    href: "/services/ai-agent",
    answer:
      "A custom website AI agent needs clear business goals, trusted source data, guardrails, handoff logic, and analytics before it should be exposed to customers.",
  },
  {
    prompt: "AI SaaS platform development for startups India",
    intent: "Commercial",
    href: "/services/saas-development",
    answer:
      "Indian startups usually need a multi-tenant SaaS base with billing, RBAC, admin tools, and selective AI features instead of an overbuilt first version.",
  },
  {
    prompt: "Best AI tools for healthcare clinic operations",
    intent: "Commercial",
    href: "/products",
    answer:
      "Clinics usually get the highest ROI from AI-powered appointment booking, WhatsApp reminders, patient intake automation, and support bots connected to their operations stack.",
  },
  {
    prompt: "AI automation ROI for D2C brands",
    intent: "Informational",
    href: "/services/ai-automation",
    answer:
      "D2C ROI typically comes from faster lead response, support deflection, order-status automation, and recovering revenue from repetitive customer communication flows.",
  },
  {
    prompt: "Alternatives to manual CRM data entry AI",
    intent: "Commercial",
    href: "/services/crm-development",
    answer:
      "The best alternative is not another spreadsheet process. It is an AI-assisted CRM flow that captures, enriches, and routes records automatically at intake.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />

      <HomeAiAuditBanner />

      {/* Service quick-links */}
      <section className="bg-grid py-20 sm:py-24" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            Enterprise AI Infrastructure. Built to scale your operations.
          </h2>
          <p className="mt-2 text-white/50 max-w-2xl">
            Operational efficiency delivered through custom AI systems. Fixed pricing, full code ownership, and measurable business outcomes.
          </p>
          <div className="mt-6">
            <Link className="btn-outline !py-2.5" href="/contact">
              Book an AI Systems Strategy Session
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  className="card-base block p-5"
                  href={s.href}
                  key={s.title}
                >
                  <div
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(99,91,255,0.08)",
                      border: "1px solid rgba(99,91,255,0.14)",
                    }}
                  >
                    <Icon className="text-[#a78bfa]" size={18} />
                  </div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-[#a78bfa]">{s.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Services />
      <Products />
      <CaseStudies />
      <VerificationSignals />
      <LeadershipAuthority />
      <TrustFramework />
      <Testimonials />
      <LeadMagnet />

      {/* Storytelling teaser — "The employee who never sleeps" */}
      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="label-pill mb-4 inline-flex">A short story</span>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                The employee who{" "}
                <span className="grad-text">never sleeps</span>.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                He doesn&apos;t ask for a salary hike. He doesn&apos;t take chai
                breaks. He doesn&apos;t resign on a Friday evening. He replies to
                a lead at 2:47 AM while you&apos;re in Manali — and books the
                site visit before you wake up.
              </p>
              <p className="mt-3 text-white/60 leading-relaxed">
                No PF. No TDS u/s 192. No bonus liability. No data leak risk.
                Just one quiet AI workflow that absorbs ₹5 lakh of yearly work
                for less than one month of a junior&apos;s salary.
              </p>
              <Link
                href="/blog/ai-employee-never-sleeps"
                className="mt-6 inline-flex items-center gap-2 btn-primary"
              >
                Read three real stories <ArrowRight size={15} />
              </Link>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(99,91,255,0.06)",
                border: "1px solid rgba(99,91,255,0.18)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] mb-4">
                Human vs AI employee
              </p>
              <ul className="space-y-3 text-sm text-white/75">
                {[
                  "Works 24x7x365 — Diwali, Sunday, 2 AM",
                  "No salary hike conversation, ever",
                  "No TDS, no PF, no ESIC, no gratuity",
                  "No recruitment, no notice period, no attrition",
                  "Loyal by design — runs in your own cloud",
                  "You finally take a real holiday",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="text-[#a78bfa] mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-white/40">
                Most owners break even in under 90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <span className="label-pill mb-4 inline-flex">AI search coverage</span>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Popular AI search prompts we answer directly
              </h2>
              <p className="mt-3 text-white/55 leading-relaxed">
                These are the real commercial and research-style queries buyers use in ChatGPT, Google AI Overviews,
                Perplexity, Gemini, and Copilot when evaluating AI automation partners and use cases.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {aiSearchPrompts.map((item) => (
                <Link
                  className="card-base block p-6 transition-transform duration-200 hover:-translate-y-0.5"
                  href={item.href}
                  key={item.prompt}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-lg leading-snug text-white">{item.prompt}</h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        background: "rgba(99,91,255,0.1)",
                        border: "1px solid rgba(99,91,255,0.2)",
                        color: "#c4b5fd",
                      }}
                    >
                      {item.intent}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.answer}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#a78bfa]">
                    Read the relevant page <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-display text-3xl font-extrabold text-white sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-3 text-white/48">
              Specific answers. No generic filler.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {faqItems.map((faq) => (
                <div className="card-base p-6" key={faq.q}>
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              Why operations leaders choose our AI infrastructure
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "40+ enterprise-grade systems shipped",
                "100% client retention rate since founding",
                "3× average efficiency gain post-automation",
                "Fixed-price architectural contracts",
                "2-week delivery sprints for rapid ROI",
                "Full source code & infrastructure ownership",
                "Automated workflows that run 24/7",
                "Direct access to senior AI engineers",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#a78bfa]" size={18} />
                  <span className="text-sm text-white/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location links */}
      <section className="py-10" style={{ backgroundColor: "#090C18", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-site">
          <p className="text-sm text-white/38">
            Serving clients in{" "}
            <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/delhi">
              Delhi
            </Link>
            {", "}
            <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/gurgaon">
              Gurgaon
            </Link>
            {", "}
            <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/panipat">
              Panipat
            </Link>
            {", Noida, Mumbai, Bengaluru, and across India. Explore "}
            <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/#case-studies">
              proof of work
            </Link>
            {" and "}
            <Link className="text-[#a78bfa] underline underline-offset-2 hover:text-[#c4b5fd] transition-colors" href="/services">
              service benchmarks
            </Link>
            {". Remote-first delivery."}
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
