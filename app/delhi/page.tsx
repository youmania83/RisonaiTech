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
  title: "AI Automation Company in Delhi — SaaS, CRM & Chatbot Development",
  description:
    "RisonAI Tech is an AI automation company serving Delhi businesses with AI workflows, SaaS engineering, custom CRM systems, and WhatsApp chatbots. Built for high-volume operations and competitive markets.",
  keywords: [
    "AI automation company Delhi",
    "AI development company Delhi NCR",
    "SaaS development company Delhi",
    "CRM development Delhi",
    "AI chatbot development Delhi",
    "WhatsApp automation Delhi",
    "business automation Delhi",
  ],
  alternates: { canonical: "/delhi" },
  openGraph: {
    title: "AI Automation Company in Delhi | RisonAI Tech",
    description:
      "AI systems for Delhi teams handling high lead volume, sales velocity, and operational scale. Fixed-price delivery, full code ownership.",
    url: "https://risonaitech.com/delhi",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Company in Delhi | RisonAI Tech",
    description: "AI workflows, WhatsApp bots, SaaS & CRM for Delhi businesses. Fixed-price. Starting ₹20,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/delhi#localbusiness",
  name: "RisonAI Tech — Delhi Services",
  url: "https://risonaitech.com/delhi",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS, CRM, and chatbot development services for Delhi businesses, delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Delhi",
    "@id": "https://en.wikipedia.org/wiki/Delhi",
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
    latitude: 28.6139,
    longitude: 77.209,
  },
};

const useCases = [
  {
    label: "Real estate lead triage",
    body: "High-velocity inbound from MagicBricks, 99acres, Housing.com, and WhatsApp routed instantly to the right agent. AI qualification by budget, locality, and intent. Site-visit scheduling without a phone call.",
  },
  {
    label: "Healthcare clinic intake",
    body: "Multi-doctor clinics in South Delhi and Dwarka use WhatsApp for appointment booking, AI symptom triage, and pre-visit form collection. Reception load drops 40–60%.",
  },
  {
    label: "B2B inside-sales follow-up",
    body: "Delhi inside-sales teams running on HubSpot or Zoho get AI-drafted follow-ups, deal-health scoring, and at-risk alerts. SDRs spend more time selling, less time logging.",
  },
  {
    label: "Education and admissions",
    body: "Coaching institutes and colleges in West and North Delhi automate inquiry → counsellor routing → document collection → admission status updates over WhatsApp.",
  },
  {
    label: "D2C / e-commerce ops",
    body: "Delhi-based D2C brands automate cart-abandonment recovery, order-status updates, and post-purchase reviews via WhatsApp Business API + Shopify.",
  },
  {
    label: "Service-business CRM",
    body: "Agencies, law firms, and consultancies replace spreadsheet pipelines with custom CRMs that AI-summarise client emails and flag at-risk renewals.",
  },
];

const reasonsToChoose = [
  "40+ systems shipped in production environments",
  "100% client retention with milestone-led delivery",
  "Typical automation impact: 60–80% faster first response",
  "Transparent INR pricing, fixed-scope contracts, no hourly billing",
  "Full source-code and infrastructure handover at project close",
  "WhatsApp-first communication for fast async updates with Delhi clients",
];

const faqs = [
  {
    q: "What AI services are most relevant for Delhi businesses?",
    a: "Delhi businesses usually see fastest ROI from AI lead-routing automation, WhatsApp follow-up flows, and CRM process automation. These systems reduce response lag in high-competition categories where speed of follow-up directly affects win rates.",
  },
  {
    q: "How much does AI automation cost in Delhi?",
    a: "Most Delhi automation projects start at ₹30,000 for a single workflow and scale based on integrations and workflow depth. Multi-workflow implementations typically range from ₹80,000 to ₹1,80,000.",
  },
  {
    q: "How long does deployment take for Delhi clients?",
    a: "Most Delhi projects deploy in 2–8 weeks depending on complexity. Single workflow automations usually ship in 2–3 weeks, while full CRM plus AI systems can take 8–12 weeks.",
  },
  {
    q: "Which Delhi industries do you support?",
    a: "RisonAI Tech frequently supports Delhi healthcare clinics, real estate teams, education providers, D2C brands, agencies, and service businesses that need conversion-focused automation and operations reliability.",
  },
  {
    q: "Do you visit Delhi clients in person?",
    a: "Most engagements run remotely via Zoom, WhatsApp, and Notion / Slack. For high-value enterprise engagements, on-site kickoff and quarterly reviews in Delhi NCR are available on request.",
  },
  {
    q: "Where is RisonAI Tech headquartered?",
    a: "RisonAI Tech is headquartered at 196, Ground Floor, New RK Puram, Panipat, Haryana 132103 — about 90 km north of central Delhi and well within the NCR catchment for fast remote delivery.",
  },
  {
    q: "Can you build a SaaS for a Delhi-based startup?",
    a: "Yes. SaaS MVPs ship in 6–10 weeks from ₹1,20,000; multi-tenant SaaS with billing and admin in 12–16 weeks from ₹3,00,000. RisonAI Tech has shipped 40+ products, including DocBooking and Expreality, that originated from Delhi NCR founders.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Delhi", url: "/delhi" },
  ]),
  placeSchema({
    name: "Delhi",
    url: "/delhi",
    description:
      "RisonAI Tech serves clients in Delhi with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 28.6139,
    longitude: 77.209,
  }),
  faqSchemaFromPairs(faqs),
);

export default function DelhiPage() {
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
              <MapPin className="mr-1" size={12} /> Delhi operations
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI systems for <span className="grad-text">Delhi scale</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech is an AI automation company serving Delhi NCR. Delhi teams operate in
              high-response environments where speed and consistency decide revenue. We build
              automation systems that compress lead response time, standardise handoffs, and keep
              sales pipelines accurate for healthcare, real estate, education, and service
              businesses across the city.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Plan Delhi rollout
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/#case-studies">
                Review proof of work
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
              <strong>RisonAI Tech serves Delhi as an AI automation and SaaS development
              company.</strong> Active engagements include AI lead-routing for real estate, WhatsApp
              automation for healthcare clinics, AI-enhanced CRM for B2B inside-sales teams, and
              SaaS platforms for Delhi-based startups. Headquartered in Panipat, Haryana with remote
              delivery across Delhi NCR. AI automation projects start at ₹30,000; SaaS MVPs at
              ₹1,20,000; full CRM + AI builds at ₹3,00,000+. Typical first-response improvement after
              automation: 60–80%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Delhi-specific use cases
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
            Why Delhi buyers choose us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Delhi FAQs</h2>
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
            Services available in Delhi
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">
              AI Agent Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">
              WhatsApp Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/website-development">
              Website Development
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon page
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
