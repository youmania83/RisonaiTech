import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import {
  breadcrumbSchema,
  placeSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Automation & SaaS Development in London — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, and enterprise chatbot systems for London startups and enterprises. Production-grade delivery from £449.",
  keywords: [
    "AI automation company London",
    "SaaS development London",
    "AI development UK",
    "fintech AI London",
    "enterprise AI London",
    "software development London",
    "AI startup London UK",
  ],
  alternates: { canonical: "/london" },
  openGraph: {
    title: "AI Automation & SaaS Development in London | RisonAI Tech",
    description:
      "AI and SaaS development for London fintech, insurtech, and enterprise startups. Production-grade AI systems at India-competitive pricing.",
    url: "https://risonaitech.com/london",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in London | RisonAI Tech",
    description: "AI automation, SaaS MVPs, and enterprise chatbots for London fintech and tech companies. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://risonaitech.com/london#service",
  name: "RisonAI Tech — London Services",
  url: "https://risonaitech.com/london",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, and enterprise chatbot services for London fintech, enterprise, and startup companies, delivered remotely by RisonAI Tech.",
  areaServed: {
    "@type": "City",
    name: "London",
    "@id": "https://en.wikipedia.org/wiki/London",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "196, Ground Floor, New RK Puram",
    addressLocality: "Panipat",
    addressRegion: "Haryana",
    postalCode: "132103",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278,
  },
};

const useCases = [
  {
    label: "Fintech & insurtech AI systems",
    body: "London's world-leading fintech ecosystem uses RisonAI-built AI for open banking data enrichment, fraud detection pipelines, automated underwriting support, and FCA-compliant audit trails.",
  },
  {
    label: "Enterprise SaaS platforms",
    body: "London-based B2B SaaS founders get production-grade Next.js multi-tenant platforms with Stripe billing, SSO, admin analytics, and AI modules — deployed in 8–12 weeks at a fraction of London agency rates.",
  },
  {
    label: "Legal tech AI automation",
    body: "UK law firms and legal tech startups use AI contract review agents, document summarisation pipelines, and client intake chatbots — cutting Tier-1 solicitor time on routine documents by 50–60%.",
  },
  {
    label: "Retail & e-commerce AI",
    body: "London retail and D2C brands build AI product recommendation engines, customer service deflection bots, inventory demand forecasting, and post-purchase engagement automation.",
  },
  {
    label: "PropTech platforms",
    body: "London proptech companies build AI-assisted property valuation tools, tenant screening automation, landlord-tenant chatbots, and listing enrichment pipelines on scalable Next.js + AI stacks.",
  },
  {
    label: "Startup AI MVP builds",
    body: "Pre-seed and seed-stage London founders get production AI agents, RAG knowledge bases, conversational tools, and data pipelines shipped fast with full IP ownership and no platform lock-in.",
  },
];

const reasonsToChoose = [
  "2-week sprint cadence with live demos at every review",
  "Fixed-scope pricing and milestone-linked contracts — investor and audit-ready",
  "40+ product deployments across SaaS, AI automation, and CRM systems",
  "Post-launch support window with optional retainer for growth iteration",
  "Senior engineers on every project — not outsourced to junior teams",
  "Full source-code, infra, and credentials transferred at project close",
];

const faqs = [
  {
    q: "Does RisonAI Tech work with London companies?",
    a: "Yes. We serve London fintech, legal tech, enterprise SaaS, and startup companies. All engagements are fully remote with async Slack communication and live sprint reviews scheduled during UK business hours.",
  },
  {
    q: "How much does AI automation cost for a London business?",
    a: "AI workflow automation starts from £449. Full AI + CRM + chatbot suites typically range £1,500–£5,000. Enterprise builds are scoped individually. Pricing is typically 60–70% below comparable UK agencies.",
  },
  {
    q: "Can you build a fintech SaaS platform for a London company?",
    a: "Yes. Fintech SaaS builds start from £3,500 and include auth, Stripe billing, compliance-ready audit logging, and AI modules. FCA-adjacent features can be scoped based on specific regulatory requirements.",
  },
  {
    q: "What London industries do you work with most?",
    a: "Fintech and insurtech, legal tech, enterprise SaaS, proptech, retail and e-commerce, and VC-backed early-stage startups are the most common London segments we engage with.",
  },
  {
    q: "How do you handle time zone differences with London?",
    a: "We overlap with GMT/BST working hours via late-afternoon async updates and schedule all live reviews during London business hours. The timezone is more forgiving for India-UK collaboration than India-US.",
  },
  {
    q: "Can RisonAI Tech sign UK-compliant contracts and NDAs?",
    a: "Yes. We sign NDAs and service agreements under Indian law with UK-compatible terms covering IP ownership, confidentiality, and data handling. Most London founders work with standard contractor or vendor agreements.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "London", url: "/london" },
  ]),
  placeSchema({
    name: "London",
    url: "/london",
    description:
      "RisonAI Tech serves London fintech, legal tech, and enterprise companies with AI automation, SaaS, and enterprise chatbot development.",
    latitude: 51.5074,
    longitude: -0.1278,
  }),
  faqSchemaFromPairs(faqs),
);

export default function LondonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">
              <MapPin className="mr-1" size={12} /> London · UK
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">London businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              London is Europe's premier fintech capital and one of the world's most important hubs
              for legal tech, proptech, and enterprise SaaS. RisonAI Tech builds production-grade AI
              automation systems, SaaS platforms, and enterprise chatbots for London companies — at
              India-competitive pricing with no compromise on engineering quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start London build
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/products">
                See shipped products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI summary block */}
      <section className="bg-brand-light/50 py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-light/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech serves London as an offshore AI and SaaS development
              partner.</strong> Common engagements: fintech and insurtech AI systems (£1,500–£8,000),
              enterprise SaaS platforms (£3,500–£12,000), legal tech AI, proptech platforms, and
              retail AI. Fixed-price contracts; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            London use cases we ship most often
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div className="card-base p-5" key={uc.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {uc.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Deep-Dive */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-6">
              Empowering London's Global Financial, Legal, and Tech Hubs with Premium AI Engineering
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                As Europe's premier financial center and a leading global cradle for technology and legal innovation, London hosts one of the world's most dynamic and competitive commercial environments. From fintech scale-ups in Canary Wharf and Shoreditch's Tech City to prestigious law firms in the City of London and Temple, businesses are constantly challenged to increase operational velocity, optimize resource allocation, and adapt to evolving compliance landscapes. RisonAI Tech provides London founders and enterprise teams with production-grade AI agents, compliant data workflows, and custom-engineered SaaS platforms.
              </p>
              <p>
                In the city's heavily regulated fintech and insurtech sectors, managing transaction volumes and compliance audits requires meticulous attention to detail. We build automated data enrichment pipelines that ingest open banking feeds, parse financial transaction logs, and run automated anomaly detection. These pipelines assist compliance officers in accelerating KYC and AML checks while generating comprehensive, FCA-ready audit trails. By offloading routine validation work to secure AI pipelines, firms significantly reduce operational friction while maintaining a robust security posture.
              </p>
              <p>
                For London's established legal sector and legal-tech innovators, drafting documents and reviewing contracts can consume massive amounts of professional time. We engineer domain-specific AI agents using state-of-the-art LLMs and retrieval structures (RAG). These systems scan through vast contract databases, highlight anomalous clauses, and draft standard lease agreements or service contracts in seconds, reducing initial review times by up to 60% and enabling legal teams to focus on strategic client advisory.
              </p>
              <p>
                Whether you are a B2B SaaS startup seeking to launch a robust MVP with Stripe billing and multi-tenant support in 8 to 12 weeks, or a PropTech team automating landlord-tenant communications, RisonAI Tech delivers exceptional code. Our offshore delivery model combines fixed, milestone-based pricing with direct time-zone overlap, giving you elite engineering quality and complete repository ownership at project close.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why London founders work with us
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasonsToChoose.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">London FAQs</h2>
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

      <section className="py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Services available in London
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">
              AI Agent Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/new-york">
              New York page
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
