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
  title: "AI Automation & SaaS Development in New York — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, and enterprise chatbot systems for New York City startups and enterprises. Fixed-price delivery from $539.",
  keywords: [
    "AI automation company New York",
    "SaaS development New York City",
    "AI development NYC",
    "enterprise AI New York",
    "software development New York",
    "AI startup New York",
    "fintech AI New York",
  ],
  alternates: { canonical: "/new-york" },
  openGraph: {
    title: "AI Automation & SaaS Development in New York | RisonAI Tech",
    description:
      "AI and SaaS development for New York City startups and enterprises. Production-grade AI agents, automation pipelines, and SaaS platforms at India-competitive pricing.",
    url: "https://risonaitech.com/new-york",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in New York | RisonAI Tech",
    description: "AI automation, SaaS MVPs, and enterprise chatbots for New York startups. Fixed-price, milestone-based delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://risonaitech.com/new-york#service",
  name: "RisonAI Tech — New York Services",
  url: "https://risonaitech.com/new-york",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, and enterprise chatbot services for New York City startups and enterprises, delivered remotely by RisonAI Tech.",
  areaServed: {
    "@type": "City",
    name: "New York City",
    "@id": "https://en.wikipedia.org/wiki/New_York_City",
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
    latitude: 40.7128,
    longitude: -74.006,
  },
};

const useCases = [
  {
    label: "Fintech AI & compliance automation",
    body: "New York fintech companies use RisonAI-built AI systems for document review, KYC/AML automation, anomaly detection, and regulatory reporting pipelines — reducing compliance team overhead by 50–70%.",
  },
  {
    label: "Enterprise SaaS platforms",
    body: "Multi-tenant Next.js SaaS with Stripe billing, SSO, admin dashboards, and AI modules. NYCbased SaaS founders get production-grade platforms in 8–12 weeks at a fraction of US agency rates.",
  },
  {
    label: "AI customer support systems",
    body: "High-volume NYC businesses deploy AI chatbots and support deflection agents trained on internal knowledge bases — cutting Tier-1 ticket volume by 60% and reducing support costs.",
  },
  {
    label: "Media & content AI pipelines",
    body: "New York media companies and publishers use AI content summarisation, automated metadata tagging, and editorial workflow automation to increase output without expanding headcount.",
  },
  {
    label: "Real estate tech platforms",
    body: "NYC property companies build AI lead scoring CRM, automated listing enrichment, and tenant communication bots that streamline acquisition and management workflows.",
  },
  {
    label: "Startup AI MVP builds",
    body: "Pre-seed and seed-stage NYC founders get production AI agents, conversational tools, and data pipelines shipped fast — with IP ownership and no lock-in to proprietary platforms.",
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
    q: "Does RisonAI Tech work with New York City companies?",
    a: "Yes. We serve NYC startups, fintech companies, media businesses, and enterprises across all five boroughs and the wider NY metro area. All engagements are fully remote with async Slack communication and live sprint review calls.",
  },
  {
    q: "How much does AI automation cost for a New York business?",
    a: "AI workflow automation starts from $539. Full automation suites with CRM integration range $2,000–$6,000. Enterprise custom builds are scoped individually. Pricing is typically 60–70% below comparable US agencies.",
  },
  {
    q: "Can you build a fintech SaaS platform for a New York company?",
    a: "Yes. Fintech SaaS builds start from $4,000 and include auth, Stripe billing, compliance-ready audit logging, and AI modules. Regulatory and compliance-adjacent features are scoped based on specific requirements.",
  },
  {
    q: "What NYC industries do you work with most?",
    a: "Fintech and financial services, media and content platforms, real estate tech, enterprise SaaS, and VC-backed startups are the most common New York segments we engage with.",
  },
  {
    q: "How do you handle time zone differences with New York?",
    a: "We overlap with EST/EDT working hours via morning async updates and schedule all live reviews during New York business hours. Most NYC clients find the async-first workflow increases focus and delivery speed.",
  },
  {
    q: "Can RisonAI Tech sign NDAs and contracts for US projects?",
    a: "Yes. We sign NDAs and service agreements under Indian law with US-compatible terms. Many NYC founders work with us through standard contractor agreements or vendor contracts.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "New York", url: "/new-york" },
  ]),
  placeSchema({
    name: "New York City",
    url: "/new-york",
    description:
      "RisonAI Tech serves New York City startups and enterprises with AI automation, SaaS, and enterprise chatbot development.",
    latitude: 40.7128,
    longitude: -74.006,
  }),
  faqSchemaFromPairs(faqs),
);

export default function NewYorkPage() {
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
              <MapPin className="mr-1" size={12} /> New York City · USA
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">New York businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              New York City is the world's premier hub for fintech, media, real estate tech, and
              enterprise SaaS. RisonAI Tech builds production-grade AI automation systems, SaaS
              platforms, and enterprise chatbots for NYC companies — at India-competitive pricing
              with no compromise on engineering quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start New York build
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
              <strong>RisonAI Tech serves New York City as an offshore AI and SaaS development
              partner.</strong> Common engagements: fintech AI and compliance automation ($2,000–
              $8,000), enterprise SaaS platforms ($4,000–$12,000), AI customer support systems,
              media content pipelines, real estate tech, and startup MVP builds. Fixed-price contracts;
              full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            New York use cases we ship most often
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

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why New York founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">New York FAQs</h2>
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
            Services available in New York
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
            <Link className="btn-outline text-sm" href="/new-jersey">
              New Jersey page
            </Link>
            <Link className="btn-outline text-sm" href="/london">
              London page
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
