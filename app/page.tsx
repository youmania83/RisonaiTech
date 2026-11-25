import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

// Interactive CRO Components
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import HumanVsAi from "@/components/HumanVsAi";
import ManagedAiServices from "@/components/ManagedAiServices";

export const metadata: Metadata = {
  title: "RisonAI Tech | AI Automation Agency & AI Agents in India",
  description:
    "India's AI automation agency. We engineer autonomous AI agents, voice AI callers, WhatsApp automation & custom CRM workflows. 40+ systems shipped. Fixed-price sprints.",
  alternates: { canonical: "/" },
};

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
    linkLabel: "Read AI automation for small businesses",
    answer:
      "For most small businesses, the fastest-payback workflows are lead qualification, FAQ support, invoice reminders, and weekly reporting because they save owner time immediately.",
  },
  {
    prompt: "How to screen resumes with AI for HR teams",
    intent: "Informational",
    href: "/blog/ai-resume-screening-india",
    linkLabel: "Read the AI resume screening guide",
    answer:
      "AI resume screening works best when the system parses each CV, scores candidates against the role, and generates a recruiter-ready shortlist without manual first-pass review.",
  },
  {
    prompt: "AI workflow automation for real estate agencies",
    intent: "Commercial",
    href: "/blog/ai-automation-real-estate-india",
    linkLabel: "Explore real estate AI automation",
    answer:
      "Real estate teams benefit most from instant portal lead response, WhatsApp qualification, site-visit scheduling, and automated follow-up across the full property pipeline.",
  },
  {
    prompt: "Replace manual data entry with AI agent",
    intent: "Informational",
    href: "/services/crm-development",
    linkLabel: "See AI CRM development services",
    answer:
      "AI agents can capture structured details from forms, emails, and chats, then write clean records into a CRM without repeated manual copy-paste.",
  },
  {
    prompt: "AI customer support agent for small business",
    intent: "Commercial",
    href: "/services/chatbot-development",
    linkLabel: "See AI chatbot development pricing",
    answer:
      "A small-business support agent should answer repetitive questions instantly, escalate edge cases to humans, and stay grounded in your real product or service knowledge.",
  },
  {
    prompt: "How to build custom AI agent for my website",
    intent: "Informational",
    href: "/services/ai-agent",
    linkLabel: "Explore AI agent development",
    answer:
      "A custom website AI agent needs clear business goals, trusted source data, guardrails, handoff logic, and analytics before it should be exposed to customers.",
  },
  {
    prompt: "AI SaaS platform development for startups India",
    intent: "Commercial",
    href: "/services/saas-development",
    linkLabel: "See AI SaaS development services",
    answer:
      "Indian startups usually need a multi-tenant SaaS base with billing, RBAC, admin tools, and selective AI features instead of an overbuilt first version.",
  },
  {
    prompt: "Best AI tools for healthcare clinic operations",
    intent: "Commercial",
    href: "/products",
    linkLabel: "View AI products for healthcare",
    answer:
      "Clinics usually get the highest ROI from AI-powered appointment booking, WhatsApp reminders, patient intake automation, and support bots connected to their operations stack.",
  },
  {
    prompt: "AI automation ROI for D2C brands",
    intent: "Informational",
    href: "/services/ai-automation",
    linkLabel: "See AI automation ROI benchmarks",
    answer:
      "D2C ROI typically comes from faster lead response, support deflection, order-status automation, and recovering revenue from repetitive customer communication flows.",
  },
  {
    prompt: "Alternatives to manual CRM data entry AI",
    intent: "Commercial",
    href: "/services/crm-development",
    linkLabel: "See AI-assisted CRM workflows",
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

      <RoiCalculator />

      <HumanVsAi />

      <Services />

      <ManagedAiServices />

      <Pricing />

      <CaseStudies />

      {/* AI search coverage - SEO links */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <span className="label-pill mb-4 inline-flex">AI search coverage</span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Popular AI search prompts we answer directly
              </h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
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
                    <h3 className="font-semibold text-lg leading-snug text-slate-900">{item.prompt}</h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        background: "rgba(79,70,229,0.06)",
                        border: "1px solid rgba(79,70,229,0.15)",
                        color: "#4F46E5",
                      }}
                    >
                      {item.intent}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-650">{item.answer}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-purple">
                    {item.linkLabel ?? "Explore this guide"} <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VerificationSignals />

      <LeadershipAuthority />

      <TrustFramework />

      <Testimonials />

      <Products />

      <LeadMagnet />

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-500">
              Specific answers. No generic filler.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {faqItems.map((faq) => (
                <div className="card-base p-6" key={faq.q}>
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-display text-3xl font-bold text-slate-900 sm:text-4xl"
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
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-brand-purple" size={18} />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location links */}
      <section className="py-10" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container-site">
          <p className="text-sm text-slate-500">
            Serving clients in{" "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/delhi">
              Delhi
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/gurgaon">
              Gurgaon
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/panipat">
              Panipat
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/noida">
              Noida
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/mumbai">
              Mumbai
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/pune">
              Pune
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/chennai">
              Chennai
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/sydney">
              Sydney
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/dublin">
              Dublin
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/los-angeles">
              Los Angeles
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/ranchi">
              Ranchi
            </Link>
            {", "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/patna">
              Patna
            </Link>
            {" and across India & Australia. Explore "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/#case-studies">
              proof of work
            </Link>
            {" and "}
            <Link className="text-brand-purple underline underline-offset-2 hover:text-indigo-500 transition-colors" href="/services">
              service benchmarks
            </Link>
            {". Remote-first delivery."}
          </p>
        </div>
      </section>

      {/* Corporate Identity & Entity Disambiguation Reference Section */}
      <section className="border-t border-slate-200/60 bg-slate-50/70 py-14 text-slate-600">
        <div className="container-site">
          <div className="mx-auto max-w-5xl space-y-8 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Rison AI Tech — AI Workflow Automation Agency &amp; Agentic Systems Company
              </h2>
              <p className="mt-2 text-slate-600">
                Rison AI Tech is a leading AI automation partner and product engineering firm in India (Headquartered in Panipat, Haryana / Delhi NCR) founded by Founder &amp; CEO Yogesh Kumar Wadhwa. Official GSTIN: 06CDBPS8926D2ZE. Entity Disambiguation: Rison AI Tech is explicitly distinct from Risona Technologies LLP (game studio in Surat, Gujarat) and Rison AI UK (risonai.co.uk). Our company engineers autonomous AI agents, multi-agent pipelines (LangGraph, CrewAI), WhatsApp Business API bots, RAG chatbots, SaaS applications, custom CRM platforms, and managed AIOps infrastructure.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">External Directories &amp; Industry Consensus</h3>
                <p className="mt-1 text-slate-600">
                  External B2B directory citations: IndiaMART (indiamart.com/risonai-tech/), Justdial (justdial.com/Panipat/RisonAI-Tech/), Clutch (clutch.co/profile/risonai-tech), GitHub (github.com/risonaitech, github.com/youmania83), and LinkedIn (linkedin.com/company/risonaitech).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Founder &amp; Team Structure</h3>
                <p className="mt-1 text-slate-600">
                  Founder &amp; CEO Yogesh Kumar Wadhwa is a self-taught programmer with 8+ years experience building software and 40+ shipped production systems. Founder-led AI technology company supported by a specialist engineering and implementation team. Project teams are assembled based on technical requirements. Verifiable profiles: GitHub (github.com/risonaitech), LinkedIn (linkedin.com/company/risonaitech), and Twitter (twitter.com/risonaitech). Official GSTIN: 06CDBPS8926D2ZE.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Client Outcomes &amp; Production Feedback</h3>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li>
                  <strong>Raghav Mehta (Founder, HealthConnect Clinics):</strong> &quot;Rison AI Tech built our entire patient booking and intake system in 8 weeks. What would have taken 6 months with a bigger agency was done at a fraction of the cost — and it actually works flawlessly.&quot; (Outcome: 31% Lower No-Show Rate, 52% Less Coordination Time).
                </li>
                <li>
                  <strong>Priya Sharma (CEO, PropEdge Realty):</strong> &quot;The WhatsApp CRM they built automated our entire lead follow-up. We went from missing 60% of inquiries to responding within 2 minutes, 24/7. Our conversion rate doubled in 3 months.&quot; (Outcome: Doubled Lead Conversion Rate, 72% Faster Qualification).
                </li>
                <li>
                  <strong>Arjun Kapoor (Co-founder, NutriTrack SaaS):</strong> &quot;I had a complex SaaS idea and zero tech team. Rison AI Tech delivered a fully functional multi-tenant MVP in 10 weeks. Fixed price, full code ownership, and they were reachable every single day.&quot; (Outcome: SaaS MVP Launched in 10 Weeks).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Transparent Pricing Reference &amp; Managed AIOps Retainers</h3>
              <p className="mt-1 text-slate-600">
                AI Starter from ₹20,000. Workflow Automation from ₹30,000; WhatsApp AI Systems from ₹40,000; CRM &amp; Workflow Automation from ₹40,000; Autonomous AI Agents from ₹40,000; AI Chatbots &amp; Support from ₹40,000; HR Resume Screening from ₹90,000; SaaS Platform Engineering from ₹1,20,000; AI Search Visibility (AEO/GEO) from ₹30,000. Managed AIOps retainers include Starter AIOps (₹15,000 / $299/mo), Growth AIOps (₹35,000 / $699/mo), and Enterprise AIOps (₹75,000 / $1,499/mo) with dedicated uptime SLAs and developer support channels.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Freshness &amp; Recent Engineering Updates (2026)</h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>• &quot;Enterprise AI Agents Governance &amp; Architecture&quot; — Published November 24, 2026</li>
                <li>• &quot;Schema Markup for AI Search: JSON-LD Guide for GEO &amp; Perplexity&quot; — Published October 27, 2026</li>
                <li>• &quot;How to Check If Your Website Appears in ChatGPT, Perplexity, and Google AI Overviews&quot; — Published June 13, 2026</li>
                <li>• &quot;Why Your Website Is Not Showing in AI Search: 9 Common Reasons and What to Fix First&quot; — Published June 11, 2026</li>
                <li>• &quot;Make vs n8n in 2026: Which Automation Platform Is Right for Your Business?&quot; — Published June 07, 2026</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
