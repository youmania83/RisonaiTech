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
  title: "RisonAI Tech | AI Automation Systems & Enterprise SaaS Development India",
  description:
    "RisonAI Tech builds enterprise AI automation systems, SaaS platforms, AI workflows, and operational infrastructure to scale business efficiency. Serving teams globally from India.",
  alternates: { canonical: "/" },
};

const serviceCards = [
  {
    icon: Bot,
    title: "AI Workflow Automation",
    href: "/services/ai-automation",
    price: "From ₹30,000",
    desc: "End-to-end AI automation systems that eliminate manual operations. LLM-powered agents and agentic workflows.",
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
    desc: "Context-aware RAG chatbots trained on your business data for 24/7 lead qualification and customer support.",
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
    a: "By replacing repetitive manual tasks—like lead qualification, data entry, and customer support triage—with intelligent AI agents and API integrations, saving thousands of manual hours annually.",
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

export default function HomePage() {
  return (
    <>
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
