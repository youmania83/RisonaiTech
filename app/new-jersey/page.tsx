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
  title: "AI Automation & SaaS Development in New Jersey — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, healthcare tech, and enterprise chatbot systems for New Jersey startups and pharma/biotech companies. Fixed-price delivery from $539.",
  keywords: [
    "AI automation company New Jersey",
    "SaaS development New Jersey",
    "AI development NJ",
    "healthcare AI New Jersey",
    "pharma tech New Jersey",
    "software development New Jersey",
    "AI startup New Jersey",
  ],
  alternates: { canonical: "/new-jersey" },
  openGraph: {
    title: "AI Automation & SaaS Development in New Jersey | RisonAI Tech",
    description:
      "AI and SaaS development for New Jersey pharma, healthcare, and startup companies. Production-grade AI systems at India-competitive pricing.",
    url: "https://risonaitech.com/new-jersey",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in New Jersey | RisonAI Tech",
    description: "AI automation, SaaS MVPs, and enterprise chatbots for New Jersey pharma and tech companies. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://risonaitech.com/new-jersey#service",
  name: "RisonAI Tech — New Jersey Services",
  url: "https://risonaitech.com/new-jersey",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, and enterprise chatbot services for New Jersey pharma, healthcare, and technology companies, delivered remotely by RisonAI Tech.",
  areaServed: {
    "@type": "State",
    name: "New Jersey",
    "@id": "https://en.wikipedia.org/wiki/New_Jersey",
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
    latitude: 40.0583,
    longitude: -74.4057,
  },
};

const useCases = [
  {
    label: "Pharma & biotech AI pipelines",
    body: "NJ pharma and biotech companies use RisonAI-built AI systems for literature review automation, clinical document summarisation, regulatory submission workflows, and internal knowledge retrieval agents.",
  },
  {
    label: "Healthcare tech platforms",
    body: "Healthcare providers and health-tech startups in New Jersey build patient intake automation, insurance pre-auth bots, appointment scheduling agents, and HIPAA-compliant data pipelines.",
  },
  {
    label: "Enterprise SaaS for NYC-adjacent markets",
    body: "NJ-based SaaS founders targeting the New York metro corridor get production-grade multi-tenant Next.js platforms with Stripe, SSO, admin dashboards, and AI modules in 8–12 weeks.",
  },
  {
    label: "Logistics & distribution automation",
    body: "New Jersey's large logistics and distribution sector runs dispatch automation, carrier integration, shipment tracking notifications, and invoice reconciliation on RisonAI-built systems.",
  },
  {
    label: "Insurance & financial services AI",
    body: "NJ insurance and financial services firms use AI for claims document processing, automated underwriting support, customer FAQ deflection, and compliance reporting generation.",
  },
  {
    label: "AI agents for professional services",
    body: "NJ law firms, consulting companies, and accounting practices deploy AI knowledge-base agents and document drafting assistants that cut time on routine client deliverables by 40–60%.",
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
    q: "Does RisonAI Tech work with New Jersey companies?",
    a: "Yes. We serve NJ pharma, healthcare, logistics, and technology companies. All engagements are fully remote with async Slack collaboration and live sprint reviews scheduled for Eastern time.",
  },
  {
    q: "How much does AI automation cost for a New Jersey business?",
    a: "AI workflow automation starts from $539. Healthcare or pharma automation with compliance requirements typically ranges $3,000–$10,000 depending on regulatory scope. Enterprise builds are quoted individually.",
  },
  {
    q: "Can you build HIPAA-compliant healthcare AI for a NJ company?",
    a: "Yes. We build HIPAA-aware architectures with encrypted storage, audit logging, and access controls. Healthcare AI builds start from $5,000. We do not provide HIPAA certification but implement the required technical safeguards.",
  },
  {
    q: "What NJ industries do you work with most?",
    a: "Pharma and biotech, healthcare tech, logistics and distribution, insurance and financial services, and professional services (legal, accounting, consulting) are the most common NJ segments we engage with.",
  },
  {
    q: "How do you handle time zone differences with New Jersey?",
    a: "We overlap with EST/EDT via morning async updates and schedule all live reviews during New Jersey business hours. Most NJ clients find the async-first workflow increases focus and delivery speed.",
  },
  {
    q: "Can you handle regulated data environments for NJ pharma companies?",
    a: "Yes. We build with data residency constraints, least-privilege access, encryption at rest and in transit, and audit trails. Specific regulatory validation (21 CFR Part 11) can be scoped as an add-on.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "New Jersey", url: "/new-jersey" },
  ]),
  placeSchema({
    name: "New Jersey",
    url: "/new-jersey",
    description:
      "RisonAI Tech serves New Jersey pharma, healthcare, and tech companies with AI automation, SaaS, and enterprise chatbot development.",
    latitude: 40.0583,
    longitude: -74.4057,
  }),
  faqSchemaFromPairs(faqs),
);

export default function NewJerseyPage() {
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
              <MapPin className="mr-1" size={12} /> New Jersey · USA
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">New Jersey businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              New Jersey is home to the world's largest pharma cluster, a major healthcare tech
              sector, and one of the US's busiest logistics corridors. RisonAI Tech builds
              production-grade AI automation systems, SaaS platforms, and enterprise chatbots for
              NJ companies — at India-competitive pricing with senior-engineer quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start New Jersey build
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
              <strong>RisonAI Tech serves New Jersey as an offshore AI and SaaS development
              partner.</strong> Common engagements: pharma and biotech AI pipelines ($3,000–$10,000),
              HIPAA-compliant healthcare tech, logistics automation, insurance AI, and enterprise SaaS
              ($4,000–$12,000). Fixed-price contracts; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            New Jersey use cases we ship most often
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
              Optimizing Operations for New Jersey's Pharmaceutical, Healthcare, and Logistics Sectors
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                New Jersey occupies a critical position in the global economy, serving as the pharmaceutical and life sciences capital of the world while hosting one of the busiest cargo transit corridors in the United States. From major research hubs in Princeton, Bridgewater, and Summit to the extensive shipping terminals around Newark and Elizabeth, the Garden State's industries run on high data density, complex compliance requirements, and high-velocity shipping schedules. RisonAI Tech provides New Jersey enterprises and mid-market companies with specialized AI automation, HIPAA-aware data architectures, and custom CRM systems designed to streamline daily operations.
              </p>
              <p>
                In the pharmaceutical and biotech industries, researchers and regulatory teams spend hundreds of hours analyzing medical publications, compiling compliance documentation, and reviewing clinical trial notes. We develop custom-trained retrieval-augmented generation (RAG) agents that search internal knowledge bases and regulatory libraries to summarize key findings, compile compliance checklists, and accelerate the drafting of FDA submission paperwork. These tools act as intelligent co-pilots, allowing scientific and legal teams to access information in seconds while maintaining data privacy on secure, sandboxed cloud infrastructure.
              </p>
              <p>
                For the state's massive logistics and supply chain sector, coordinating transport dispatches, verifying bills of lading, and resolving invoice discrepancies are major administrative costs. We build custom dashboards that connect to transportation management systems (TMS) and use AI agents to automate document ingestion. By parsing incoming invoices, matching delivery receipts, and notifying dispatchers of delays over the WhatsApp Business API, we eliminate manual clerical overhead and speed up payment reconciliation pipelines.
              </p>
              <p>
                Whether you are a health-tech startup in Jersey City seeking to build a secure Next.js SaaS platform with HIPAA-aware controls, or an accounting practice in Cherry Hill automating client intake workflows, RisonAI Tech delivers production-grade code. We offer clear, milestone-linked pricing with no hourly billing surprises, accompanied by complete repository ownership and deployment configurations at project handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why New Jersey companies work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">New Jersey FAQs</h2>
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
            Services available in New Jersey
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
