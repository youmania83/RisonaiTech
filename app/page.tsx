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
  title: "RisonAI Tech | AI Automation & SaaS Development Company India",
  description:
    "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots that generate revenue and automate businesses. Serving startups, healthcare, and real estate across India.",
  alternates: { canonical: "/" },
};

const serviceCards = [
  {
    icon: Bot,
    title: "AI Automation",
    href: "/services/ai-automation",
    price: "From ₹30,000",
    desc: "LLM agents, WhatsApp automation, CRM syncs, and agentic workflows that replace manual operations.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    href: "/services/saas-development",
    price: "From ₹1,20,000",
    desc: "Multi-tenant SaaS platforms with billing, dashboards, and AI features — MVP to enterprise.",
  },
  {
    icon: Users,
    title: "CRM Development",
    href: "/services/crm-development",
    price: "From ₹40,000",
    desc: "Custom CRM or AI-enhanced HubSpot/Zoho with WhatsApp integration and lead scoring.",
  },
  {
    icon: Globe,
    title: "AI Chatbot",
    href: "/services/chatbot-development",
    price: "From ₹20,000",
    desc: "RAG chatbots trained on your data — website and WhatsApp, in English and Hindi.",
  },
  {
    icon: Code2,
    title: "Website Development",
    href: "/services/website-development",
    price: "From ₹35,000",
    desc: "High-performance, SEO-optimized websites built for speed, scalability, and conversions.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    href: "/services/whatsapp-automation",
    price: "From ₹25,000",
    desc: "Intelligent WhatsApp systems for lead capture, customer support, and automated workflows.",
  },
];

const faqItems = [
  {
    q: "What does RisonAI Tech do?",
    a: "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and websites for startups, healthcare providers, real estate firms, and SMBs across India.",
  },
  {
    q: "How much does AI automation cost in India?",
    a: "A single automation workflow costs ₹30,000–₹60,000. A 3–5 workflow suite costs ₹80,000–₹1,80,000. Enterprise systems with multiple AI agents range from ₹2,00,000–₹6,00,000+.",
  },
  {
    q: "How long does a SaaS MVP take to build?",
    a: "A basic SaaS MVP typically takes 6–10 weeks. A full multi-tenant SaaS with billing and admin dashboards takes 12–20 weeks. We deliver working software in 2-week sprints.",
  },
  {
    q: "Do you build WhatsApp chatbots?",
    a: "Yes. We build AI-powered WhatsApp chatbots via the WhatsApp Business API — trained on your data using RAG for lead qualification, appointment booking, and customer support.",
  },
  {
    q: "Which cities do you serve?",
    a: "We are headquartered in Panipat, Haryana, and serve clients in Delhi, Gurgaon, Noida, Mumbai, Bengaluru, and remotely across India. All projects are delivered remotely.",
  },
  {
    q: "What industries do you specialise in?",
    a: "Healthcare (we built DocBooking), real estate (we built Expreality), startups (40+ products shipped), and SMBs needing AI automation. 100% client retention rate.",
  },
  {
    q: "Do clients own the source code?",
    a: "Yes. Full source code ownership is transferred at project close — repository, database schemas, deployment configs, and documentation. No lock-in.",
  },
  {
    q: "Can RisonAI Tech add AI features to my existing product?",
    a: "Yes. We add AI modules — smart search, LLM chat, auto-generated content, intelligent notifications — to existing web apps and SaaS products without requiring a rebuild.",
  },
  {
    q: "What is the minimum project size?",
    a: "Our smallest projects start at ₹20,000 (simple FAQ chatbot or landing page). Most clients start with a ₹30,000–₹60,000 automation workflow or a ₹1,20,000+ SaaS MVP.",
  },
  {
    q: "How do I start a project with RisonAI Tech?",
    a: "Contact us via WhatsApp, email, or our contact form. We schedule a free 30-minute discovery call, scope the project, and deliver a fixed-price proposal within 48 hours.",
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
            Six services. One goal: grow your revenue.
          </h2>
          <p className="mt-1 text-white/50">
            Fixed pricing. Full code ownership. Delivered in weeks — not months.
          </p>
          <div className="mt-4">
            <Link className="btn-outline !py-2.5" href="/contact">
              Start with a scoped AI sprint
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
              Why high-value clients choose us over larger agencies
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "40+ products shipped — web, mobile, AI, and SaaS",
                "100% client retention rate since founding",
                "3× average efficiency gain post-automation",
                "Fixed-price contracts — no surprise invoices",
                "2-week delivery sprints — see progress every fortnight",
                "Full source code ownership at project close",
                "30–90 day post-launch support included free",
                "WhatsApp-first communication — always reachable",
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
