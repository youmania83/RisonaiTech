import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI and SaaS Development in Gurgaon for Startups and Product Teams",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Gurgaon startups and scaling tech companies.",
  alternates: { canonical: "/gurgaon" },
  openGraph: {
    title: "RisonAI Tech in Gurgaon | Startup-focused AI delivery",
    description:
      "AI and SaaS implementation for Gurgaon startup and growth-stage product teams.",
    url: "https://risonaitech.com/gurgaon",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/gurgaon#localbusiness",
  name: "RisonAI Tech - Gurgaon Services",
  url: "https://risonaitech.com/gurgaon",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  areaServed: {
    "@type": "City",
    name: "Gurgaon",
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

const faqs = [
  {
    q: "Is RisonAI Tech a fit for Gurgaon startup teams?",
    a: "Yes. Gurgaon startups usually need fast MVP delivery, clear milestone governance, and reliable post-launch iteration. Our sprint model is built for this pattern and is commonly used by early and growth-stage teams.",
  },
  {
    q: "How much does a Gurgaon SaaS MVP usually cost?",
    a: "Most Gurgaon SaaS MVP builds range from INR 1,20,000 to INR 2,50,000 depending on role complexity, integrations, and compliance needs. Multi-tenant production SaaS often starts around INR 3,00,000.",
  },
  {
    q: "How long does delivery take for Gurgaon projects?",
    a: "MVP SaaS builds typically take 6-10 weeks, and workflow automation projects often deploy in 2-6 weeks. Final timelines depend on integration count and approval cycles.",
  },
  {
    q: "What Gurgaon use cases do you see most often?",
    a: "Common Gurgaon engagements include SaaS core platform builds, CRM modernization for inside sales teams, and AI support/chatbot systems for high-growth customer operations.",
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

export default function GurgaonPage() {
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
              <MapPin className="mr-1" size={12} /> Gurgaon startup corridor
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              AI delivery for <span className="grad-text">Gurgaon product teams</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Gurgaon companies usually optimize for speed-to-market and repeatable operations. We build SaaS platforms, AI workflows, and CRM layers that support scale without operational chaos.
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

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-display)" }}>
            Gurgaon business context
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              "Fast GTM cycles require sprint-based product releases",
              "Inside sales teams need CRM hygiene and WhatsApp workflow sync",
              "Investor-backed teams need measurable delivery and documentation",
              "SaaS teams need architecture that supports multitenancy early",
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
          <h2 className="font-display text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-display)" }}>
            Why Gurgaon founders work with us
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "2-week sprint cadence with visible software increments",
              "Fixed-scope pricing and milestone-linked release plan",
              "40+ product deployments across SaaS and AI systems",
              "Post-launch support path for growth-stage iteration",
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
          <h2 className="font-display text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-display)" }}>
            Gurgaon FAQs
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
            <Link className="btn-outline text-sm" href="/services/saas-development">SaaS Development</Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">CRM Development</Link>
            <Link className="btn-outline text-sm" href="/services/ai-automation">AI Automation</Link>
            <Link className="btn-outline text-sm" href="/#case-studies">Case Studies</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
