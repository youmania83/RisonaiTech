import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Company in Delhi - SaaS, CRM, and Chatbot Development",
  description:
    "RisonAI Tech helps Delhi businesses scale with AI automation, SaaS engineering, CRM systems, and WhatsApp chatbots. Built for high-volume operations and competitive markets.",
  alternates: { canonical: "/delhi" },
  openGraph: {
    title: "RisonAI Tech in Delhi | AI Automation and SaaS Development",
    description:
      "AI systems for Delhi teams handling high lead volume, sales velocity, and operational scale.",
    url: "https://risonaitech.com/delhi",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/delhi#localbusiness",
  name: "RisonAI Tech - Delhi Services",
  url: "https://risonaitech.com/delhi",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  areaServed: {
    "@type": "City",
    name: "Delhi",
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

const faqs = [
  {
    q: "What AI services are most relevant for Delhi businesses?",
    a: "Delhi businesses usually see fastest ROI from AI lead-routing automation, WhatsApp follow-up flows, and CRM process automation. These systems reduce response lag in high-competition categories where speed of follow-up directly affects win rates.",
  },
  {
    q: "How much does AI automation cost in Delhi?",
    a: "Most Delhi automation projects start at INR 30,000 for a single workflow and scale based on integrations and workflow depth. Multi-workflow implementations typically range from INR 80,000 to INR 1,80,000.",
  },
  {
    q: "How long does deployment take for Delhi clients?",
    a: "Most Delhi projects deploy in 2-8 weeks depending on complexity. Single workflow automations usually ship in 2-3 weeks, while full CRM plus AI systems can take 8-12 weeks.",
  },
  {
    q: "Which Delhi industries do you support?",
    a: "We frequently support Delhi healthcare clinics, real estate teams, education providers, and service businesses that need conversion-focused automation and operations reliability.",
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

export default function DelhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">
              <MapPin className="mr-1" size={12} /> Delhi operations
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI systems for <span className="grad-text">Delhi scale</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Delhi teams operate in high-response environments where speed and consistency decide revenue. We build automation systems that compress lead response time, standardize handoffs, and keep sales pipelines accurate.
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

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Delhi-specific use cases
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              "Real estate lead triage for peak inquiry windows",
              "Healthcare appointment intake with WhatsApp reminders",
              "High-volume B2B follow-up automation for inside sales teams",
              "Ops dashboards for management teams tracking response SLAs",
            ].map((item) => (
              <div className="card-base p-5" key={item}>
                <p className="text-sm leading-relaxed text-brand-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Delhi buyers choose us
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "40+ systems shipped in production environments",
              "100% client retention with milestone-led delivery",
              "Typical automation impact: 60-80% faster first response",
              "Transparent INR pricing and source-code transfer",
            ].map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Delhi FAQs
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

      <section className="bg-white py-16">
        <div className="container-site">
          <div className="flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">AI Automation</Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">AI Chatbot Development</Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">CRM Development</Link>
            <Link className="btn-outline text-sm" href="/gurgaon">Gurgaon page</Link>
            <Link className="btn-outline text-sm" href="/panipat">Panipat page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
