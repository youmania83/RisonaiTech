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
  title: "AI & SaaS Development in Gurgaon — Startup Product Engineering",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Gurgaon startups and scaling tech companies. Cyber City to Sohna Road. Fixed-price delivery.",
  keywords: [
    "AI automation company Gurgaon",
    "SaaS development Gurgaon",
    "Gurgaon startup product development",
    "Cyber City software development",
    "AI development company Gurugram",
    "CRM Gurgaon",
    "WhatsApp automation Gurgaon",
  ],
  alternates: { canonical: "/gurgaon" },
  openGraph: {
    title: "AI Automation & SaaS Development in Gurgaon | RisonAI Tech",
    description:
      "Startup-focused AI and SaaS implementation for Gurgaon product teams — from MVP to multi-tenant scale.",
    url: "https://risonaitech.com/gurgaon",
    images: [{ url: "https://risonaitech.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Gurgaon | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & chatbots for Gurgaon startups and scaling tech companies. Fixed-price delivery.",
    images: ["https://risonaitech.com/og-image.png"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/gurgaon#localbusiness",
  name: "RisonAI Tech — Gurgaon Services",
  url: "https://risonaitech.com/gurgaon",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Gurgaon startups and growth-stage product teams, delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Gurgaon",
    "@id": "https://en.wikipedia.org/wiki/Gurgaon",
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
    latitude: 28.4595,
    longitude: 77.0266,
  },
};

const useCases = [
  {
    label: "SaaS MVP for Cyber City startups",
    body: "Multi-tenant Next.js SaaS with auth, billing (Razorpay + Stripe), admin dashboard, and AI feature modules. MVP shipped in 6–10 weeks; growth multi-tenant in 12–16 weeks.",
  },
  {
    label: "Inside-sales CRM modernisation",
    body: "Gurgaon B2B SaaS sales teams replace HubSpot bloat or Excel pipelines with custom CRMs that AI-summarise inbound emails, score deal health, and auto-draft follow-ups.",
  },
  {
    label: "AI customer support deflection",
    body: "Growth-stage tech companies in DLF Phase 2/3 deploy RAG chatbots trained on product docs that deflect 40–70% of tier-1 support queries with citations and human handoff.",
  },
  {
    label: "AI ops copilots for unicorn-scale teams",
    body: "Internal AI copilots that pull data from Snowflake, dashboards, and Slack to answer ops questions in natural language. Reduces manager-of-managers reporting load.",
  },
  {
    label: "WhatsApp commerce for D2C brands",
    body: "Gurgaon D2C brands run cart-abandonment recovery, in-chat checkout, and post-purchase upsell on the WhatsApp Business API integrated with Shopify and Razorpay.",
  },
  {
    label: "Real estate intelligence platforms",
    body: "Property tech and brokerage platforms built on Next.js + Python with AI location scoring, neighbourhood analytics, and high-touch CRM. Reference build: Expreality.",
  },
];

const reasonsToChoose = [
  "2-week sprint cadence with visible software increments at every review",
  "Fixed-scope pricing and milestone-linked release plan — investor-friendly",
  "40+ product deployments across SaaS, AI automation, and CRM systems",
  "Post-launch support window with optional retainer for growth-stage iteration",
  "Senior engineers on every project — not offshored to junior teams",
  "Source-code, infra, and credentials transferred at project close",
];

const faqs = [
  {
    q: "Is RisonAI Tech a fit for Gurgaon startup teams?",
    a: "Yes. Gurgaon startups usually need fast MVP delivery, clear milestone governance, and reliable post-launch iteration. Our sprint model is built for this pattern and is commonly used by early and growth-stage teams.",
  },
  {
    q: "How much does a Gurgaon SaaS MVP usually cost?",
    a: "Most Gurgaon SaaS MVP builds range from ₹1,20,000 to ₹2,50,000 depending on role complexity, integrations, and compliance needs. Multi-tenant production SaaS often starts around ₹3,00,000 and scales to ₹8,00,000+.",
  },
  {
    q: "How long does delivery take for Gurgaon projects?",
    a: "MVP SaaS builds typically take 6–10 weeks, and workflow automation projects often deploy in 2–6 weeks. Final timelines depend on integration count and approval cycles.",
  },
  {
    q: "What Gurgaon use cases do you see most often?",
    a: "Common Gurgaon engagements include SaaS core platform builds, CRM modernisation for inside sales teams, AI support / chatbot systems for high-growth customer operations, and AI ops copilots for internal data.",
  },
  {
    q: "Do you work with VC-backed teams?",
    a: "Yes. RisonAI Tech regularly delivers for seed and Series A teams in Gurgaon. Fixed-price contracts with milestone deliverables make it easy to budget and report to investors.",
  },
  {
    q: "Can RisonAI Tech work with our existing engineering team?",
    a: "Yes. We can plug into existing teams as a product engineering partner, contribute to a defined module, and hand over with documentation. We can also operate as the sole engineering team where required.",
  },
  {
    q: "Do you offer on-site presence in Gurgaon?",
    a: "Most engagements run remotely. For high-value enterprise contracts, on-site kickoff workshops and quarterly reviews in Gurgaon, DLF Cyber City, or Sohna Road are available on request.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gurgaon", url: "/gurgaon" },
  ]),
  placeSchema({
    name: "Gurgaon (Gurugram)",
    url: "/gurgaon",
    description:
      "RisonAI Tech serves Gurgaon startups and growth-stage product teams with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 28.4595,
    longitude: 77.0266,
  }),
  faqSchemaFromPairs(faqs),
);

export default function GurgaonPage() {
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
              <MapPin className="mr-1" size={12} /> Gurgaon startup corridor
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Gurgaon product teams</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Gurgaon companies optimise for speed-to-market and repeatable operations. RisonAI Tech
              builds SaaS platforms, AI workflows, and CRM layers that support scale without
              operational chaos — from Cyber City unicorns to seed-stage teams on Sohna Road.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Gurgaon build
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
              <strong>RisonAI Tech serves Gurgaon as an AI and SaaS development partner for
              startups and growth-stage tech companies.</strong> Common engagements: SaaS MVP and
              multi-tenant builds (₹1,20,000–₹8,00,000), CRM modernisation for inside-sales teams,
              AI customer-support deflection with RAG, AI ops copilots, and WhatsApp commerce flows
              for D2C brands. Fixed-price contracts with two-week sprint cadence; full source-code
              ownership transfers at project close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Gurgaon use cases we ship most often
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
            Why Gurgaon founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Gurgaon FAQs</h2>
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
            Services available in Gurgaon
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
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">
              WhatsApp Automation
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi page
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat page
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
