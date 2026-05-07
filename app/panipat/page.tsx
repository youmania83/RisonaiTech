import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Services in Panipat for SMEs and Traditional Businesses",
  description:
    "RisonAI Tech supports Panipat SMEs with practical AI automation, CRM workflows, and chatbot systems that reduce manual effort and improve response speed.",
  alternates: { canonical: "/panipat" },
  openGraph: {
    title: "RisonAI Tech in Panipat | AI for SMEs",
    description:
      "Practical AI adoption for Panipat SMEs, service businesses, and traditional operators digitizing workflows.",
    url: "https://risonaitech.com/panipat",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/panipat#localbusiness",
  name: "RisonAI Tech - Panipat Services",
  url: "https://risonaitech.com/panipat",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
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
    latitude: 29.3909,
    longitude: 76.9635,
  },
  areaServed: {
    "@type": "City",
    name: "Panipat",
  },
};

const faqs = [
  {
    q: "Can AI automation work for Panipat SMEs with small teams?",
    a: "Yes. Panipat SMEs often get the fastest ROI by automating one bottleneck process first, such as lead intake, order updates, or customer support triage. Even a single workflow can save multiple team hours each week.",
  },
  {
    q: "How much does AI implementation cost for Panipat businesses?",
    a: "Most Panipat SME automation projects start around INR 30,000 for a focused workflow. Broader process automation with CRM and messaging integrations typically ranges from INR 80,000 to INR 1,80,000.",
  },
  {
    q: "How long does AI rollout take for traditional businesses?",
    a: "A focused rollout typically takes 2-4 weeks when data and process owners are available. Multi-workflow implementation with team onboarding often takes 4-8 weeks.",
  },
  {
    q: "What Panipat sectors do you commonly support?",
    a: "We regularly support local service operators, healthcare providers, distributors, and growing SMEs transitioning from spreadsheet-heavy processes to structured systems.",
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

export default function PanipatPage() {
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
              <MapPin className="mr-1" size={12} /> Panipat SMEs
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI adoption for <span className="grad-text">Panipat businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Panipat businesses are digitizing operations quickly, but many teams still rely on manual follow-up and fragmented data. We build practical AI systems that improve speed, consistency, and profitability without heavy process disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Plan Panipat implementation
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/services">
                Explore service stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Panipat-specific use cases
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              "WhatsApp-based order and inquiry automation for local operators",
              "CRM workflow setup for small sales teams with limited bandwidth",
              "Appointment and reminder systems for clinics and service providers",
              "Management dashboards replacing weekly manual spreadsheet reviews",
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
            Why Panipat teams partner with us
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Execution designed for lean teams and practical constraints",
              "Small-scope entry projects with clear ROI measurement",
              "Training and handover included for non-technical operators",
              "Support model for iterative automation expansion",
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
            Panipat FAQs
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
            <Link className="btn-outline text-sm" href="/services/crm-development">CRM Development</Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">Chatbot Development</Link>
            <Link className="btn-outline text-sm" href="/#case-studies">Case Studies</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
