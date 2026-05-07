import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers, Code2, ShieldCheck, TrendingUp } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "SaaS Development Company India — Build Your SaaS Product in 8–16 Weeks",
  description:
    "RisonAI Tech builds production-ready SaaS platforms from MVP to enterprise — multi-tenant architecture, subscription billing, admin dashboards, and AI integrations. Based in Delhi NCR.",
  keywords: [
    "SaaS development company India",
    "SaaS development Delhi",
    "SaaS product development Gurgaon",
    "MVP SaaS development India",
    "multi-tenant SaaS India",
    "custom SaaS platform development",
    "SaaS startup development India",
  ],
  alternates: { canonical: "/services/saas-development" },
  openGraph: {
    title: "SaaS Development Company India | RisonAI Tech",
    description:
      "We build production-ready SaaS platforms — multi-tenant, billing-integrated, AI-powered. Serving startups and businesses across India.",
    url: "https://risonaitech.com/services/saas-development",
  },
};

const deliverables = [
  "Multi-tenant SaaS architecture (per-user and per-org isolation)",
  "Subscription and billing integration (Razorpay, Stripe)",
  "Role-based access control and permission systems",
  "Admin dashboards with usage analytics",
  "Scalable REST and GraphQL APIs",
  "React / Next.js front-end with TypeScript",
  "Node.js or Python back-end",
  "PostgreSQL / MongoDB databases with migrations",
  "CI/CD pipelines and cloud deployment (Vercel, AWS, Railway)",
  "AI feature integration (LLM chat, data analysis, auto-reports)",
];

const highlights = [
  {
    icon: Layers,
    title: "Multi-tenant by default",
    desc: "Every SaaS we build is designed for multi-tenancy from day one — per-organisation data isolation, custom domains, and tenant-level configuration. No costly rewrites later.",
  },
  {
    icon: Code2,
    title: "Modern, maintainable stack",
    desc: "React/Next.js + TypeScript front-end. Node.js or Python API. PostgreSQL with structured migrations. Code you can hand to any senior developer and they'll understand immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Security built in",
    desc: "RBAC, encrypted data at rest and in transit, audit logs, CSP headers, rate limiting, and OWASP Top 10 mitigations included in every project — not treated as optional extras.",
  },
  {
    icon: TrendingUp,
    title: "AI-ready architecture",
    desc: "We structure SaaS platforms to integrate AI features cleanly — LLM-generated insights, smart search, auto-fill, and recommendation engines that slot in without architectural debt.",
  },
];

const faqs = [
  {
    q: "How much does SaaS development cost in India?",
    a: "SaaS MVP builds in India typically range from ₹1,20,000 to ₹2,50,000 depending on feature scope and integrations. Full multi-tenant SaaS platforms generally cost ₹3,00,000-₹8,00,000, while enterprise systems with AI modules can exceed ₹8,00,000.",
  },
  {
    q: "How long does it take to build a SaaS product?",
    a: "Most SaaS products are delivered in 6-20 weeks based on product depth and compliance needs. MVPs are commonly completed in 6-10 weeks, while production-grade multi-tenant platforms usually require 12-20 weeks.",
  },
  {
    q: "Can you build the SaaS with billing and subscription management?",
    a: "Yes. We integrate Razorpay for Indian rupee subscriptions and Stripe for international payments. This includes plan management, trial periods, invoicing, and webhook-based entitlement updates.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. All projects include a 30–90 day post-launch support period depending on the tier. After that, we offer monthly retainer support packages for bug fixes, feature additions, and infrastructure management.",
  },
  {
    q: "What if my SaaS idea needs an AI feature?",
    a: "Most SaaS products benefit from AI features — smart search, auto-generated content, data analysis, or intelligent notifications. We design the architecture to support these from the start and add them in the same or a subsequent sprint.",
  },
  {
    q: "Will the SaaS code be owned by me?",
    a: "Yes, you receive full ownership of source code, database schemas, and deployment configurations at project close. We transfer repositories, environment assets, and documentation to eliminate vendor lock-in.",
  },
];

const factualBenchmarks = [
  {
    stat: "MVP SaaS products usually launch in 6-10 weeks with focused scope.",
    detail: "A narrow first release with 1-2 key workflows improves launch speed and lowers rework during validation.",
  },
  {
    stat: "Multi-tenant architecture reduces future rewrite risk by 30-50%.",
    detail: "Building tenant isolation and billing logic early prevents expensive structural migrations at growth stage.",
  },
  {
    stat: "Typical SaaS build costs in India range from INR 1.2L to INR 8L+.",
    detail: "Primary cost drivers are role complexity, integrations, analytics depth, and regulatory constraints.",
  },
  {
    stat: "AI feature modules usually add 15-35% to scope but improve product differentiation.",
    detail: "Smart search, AI copilots, and workflow intelligence often improve retention and activation metrics.",
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

export default function SaasDevelopmentPage() {
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
            <span className="label-pill mb-5 inline-flex">SaaS Development</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              SaaS platforms built to{" "}
              <span className="grad-text">scale from day one</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We architect and build production-ready SaaS platforms — multi-tenant infrastructure,
              subscription billing, admin dashboards, and AI integrations. MVP to enterprise, in 8–16
              weeks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Your SaaS Project
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/products">
                See Products We've Built
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              MVP from ₹1,20,000 · Full SaaS from ₹3,00,000 · Based in Delhi NCR
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks represent common SaaS delivery economics and rollout patterns observed in Indian startup and growth-stage environments."
        title="SaaS build benchmarks: cost, timeline, and architecture"
      />

      {/* What we build */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            What's included
          </h2>
          <p className="mt-2 text-brand-gray">
            Every SaaS we deliver is production-ready — not a prototype.
          </p>
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

      {/* Highlights */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            How we build differently
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div className="card-base p-6" key={h.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Products */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            SaaS products we've built
          </h2>
          <p className="mt-2 text-brand-gray">Real products in production, serving real users.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-base p-6">
              <h3
                className="font-display text-xl font-bold text-brand-dark"
              >
                DocBooking
              </h3>
              <p className="mt-1 text-sm font-medium text-[#0EA5E9]">Healthcare SaaS</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                AI-powered doctor appointment booking platform for clinics and hospitals. Features
                patient intake forms, smart scheduling, AI symptom triage, WhatsApp reminders, and
                clinic-side analytics dashboards.
              </p>
              <p className="mt-3 text-xs text-brand-subtle">Stack: Next.js · Node.js · PostgreSQL · OpenAI</p>
            </div>
            <div className="card-base p-6">
              <h3
                className="font-display text-xl font-bold text-brand-dark"
              >
                Expreality
              </h3>
              <p className="mt-1 text-sm font-medium text-[#635BFF]">Real Estate SaaS</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                Property intelligence platform for qualified buyers and real estate agents. Private
                inventory, AI-driven location scoring, neighbourhood analytics, and high-touch CRM
                workflows.
              </p>
              <p className="mt-3 text-xs text-brand-subtle">Stack: Next.js · Python · PostgreSQL · AI scoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            Pricing
          </h2>
          <p className="mt-2 text-brand-gray">
            Ranges based on scope. We quote exactly after a 30-minute call.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "MVP",
                price: "₹1,20,000 – ₹2,50,000",
                desc: "Core SaaS features, one user role, single-tenant. Validate your idea fast.",
                items: ["Core feature set", "Auth + user management", "6–10 week delivery", "30-day support"],
              },
              {
                tier: "Growth SaaS",
                price: "₹3,00,000 – ₹8,00,000",
                desc: "Multi-tenant, billing, admin dashboard, and API ecosystem.",
                items: [
                  "Multi-tenant architecture",
                  "Razorpay / Stripe billing",
                  "Admin dashboard",
                  "12–16 week delivery",
                  "60-day support",
                ],
                highlight: true,
              },
              {
                tier: "Enterprise",
                price: "₹8,00,000+",
                desc: "Complex SaaS with AI features, custom integrations, and enterprise auth.",
                items: [
                  "SSO / enterprise auth",
                  "AI feature modules",
                  "Custom integrations",
                  "16–24 week delivery",
                  "90-day support + SLA",
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

      {/* FAQ */}
      <section className="bg-[#f7f9fc] py-20">
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

      {/* Internal links */}
      <section className="bg-white py-16">
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
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi SaaS delivery
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon startup builds
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Start Your Project
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
            Have a SaaS idea?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            We'll help you scope it, validate the architecture, and build it to production in weeks — not
            months.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Book Strategy Call
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/products">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
