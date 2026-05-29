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
  title: { absolute: "AI Automation in Panipat | Practical AI for SMEs | RisonAI Tech" },
  description:
    "RisonAI Tech is an AI automation company headquartered in Panipat, Haryana. We help Panipat SMEs and traditional businesses adopt practical AI — WhatsApp automation, CRM, dashboards. From ₹30,000.",
  keywords: [
    "AI automation Panipat",
    "AI company Panipat Haryana",
    "Panipat SME automation",
    "WhatsApp automation Panipat",
    "CRM Panipat",
    "Panipat software company",
    "Haryana AI development",
  ],
  alternates: { canonical: "/panipat" },
  openGraph: {
    title: "AI Automation Company in Panipat | RisonAI Tech",
    description:
      "Practical AI adoption for Panipat SMEs, service businesses, and traditional operators digitizing workflows. Headquartered in Panipat, serving Haryana and Delhi NCR.",
    url: "https://risonaitech.com/panipat",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation in Panipat | RisonAI Tech HQ",
    description: "Practical AI for Panipat SMEs. WhatsApp automation, CRM, SaaS. Headquartered in Panipat. Starting ₹30,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/panipat#localbusiness",
  name: "RisonAI Tech — Panipat Headquarters",
  url: "https://risonaitech.com/panipat",
  telephone: "+918368137724",
  email: "hello@risonaitech.com",
  description:
    "RisonAI Tech is headquartered in Panipat, Haryana, providing AI automation, CRM, chatbot, and SaaS development for SMEs across Panipat and Haryana.",
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
    "@id": "https://en.wikipedia.org/wiki/Panipat",
  },
};

const useCases = [
  {
    label: "WhatsApp inquiry automation",
    body: "Local distributors, retailers, and service operators automate inbound WhatsApp inquiries — order confirmations, FAQ replies, and CRM logging — without growing the response team.",
  },
  {
    label: "Clinic appointment systems",
    body: "Panipat clinics and diagnostic centres adopt WhatsApp booking, AI symptom triage, and reminder flows. Reception load drops and no-show rates improve.",
  },
  {
    label: "SME CRM setup",
    body: "Family-run businesses and growing SMEs replace WhatsApp groups and Excel pipelines with structured CRMs that track every lead and follow-up.",
  },
  {
    label: "Textile and manufacturing dashboards",
    body: "Panipat&apos;s textile and home-furnishing exporters get management dashboards that auto-pull production, dispatch, and order data — replacing weekly manual spreadsheet reviews.",
  },
  {
    label: "Education and coaching automation",
    body: "Coaching institutes use WhatsApp + AI to handle inquiry routing, batch reminders, fee follow-ups, and parent communication.",
  },
  {
    label: "Service-business proposal flows",
    body: "Local service businesses (event planners, contractors, consultants) automate proposal drafting, status updates, and renewal reminders to lift close rates.",
  },
];

const reasonsToChoose = [
  "Headquartered in Panipat — same time zone, same business culture, same language",
  "Execution designed for lean teams and practical constraints",
  "Small-scope entry projects with clear ROI measurement",
  "Training and handover included for non-technical operators",
  "Support model for iterative automation expansion",
  "Transparent INR pricing and fixed-scope contracts",
];

const faqs = [
  {
    q: "Can AI automation work for Panipat SMEs with small teams?",
    a: "Yes. Panipat SMEs often get the fastest ROI by automating one bottleneck process first — lead intake, order updates, customer support triage, or appointment booking. Even a single workflow can save multiple team-hours each week.",
  },
  {
    q: "How much does AI implementation cost for Panipat businesses?",
    a: "Most Panipat SME automation projects start around ₹30,000 for a focused workflow. Broader process automation with CRM and messaging integrations typically ranges from ₹80,000 to ₹1,80,000.",
  },
  {
    q: "How long does AI rollout take for traditional businesses?",
    a: "A focused rollout typically takes 2–4 weeks when data and process owners are available. Multi-workflow implementation with team onboarding often takes 4–8 weeks.",
  },
  {
    q: "What Panipat sectors do you commonly support?",
    a: "RisonAI Tech regularly supports Panipat textile and home-furnishing exporters, healthcare providers, distributors, education / coaching businesses, and growing service SMEs transitioning from spreadsheet-heavy processes.",
  },
  {
    q: "Is your office in Panipat?",
    a: "Yes. RisonAI Tech is headquartered at 196, Ground Floor, New RK Puram, Panipat, Haryana 132103. We support local clients in person on request and serve Delhi, Gurgaon, and other NCR clients remotely.",
  },
  {
    q: "Do you support Hindi-speaking teams?",
    a: "Yes. The team is fluent in Hindi and English. Training, runbooks, and ongoing support can run in Hindi where that&apos;s the team&apos;s working language.",
  },
  {
    q: "Can RisonAI Tech help us digitise without disrupting current operations?",
    a: "Yes. Our SME engagements explicitly preserve existing workflows where they work and only automate what produces measurable savings. No mandatory tech rip-and-replace.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Panipat", url: "/panipat" },
  ]),
  placeSchema({
    name: "Panipat",
    url: "/panipat",
    description:
      "RisonAI Tech is headquartered in Panipat, Haryana. We provide AI automation, CRM, and SaaS development for Panipat SMEs and Haryana businesses.",
    latitude: 29.3909,
    longitude: 76.9635,
  }),
  faqSchemaFromPairs(faqs),
);

export default function PanipatPage() {
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
              <MapPin className="mr-1" size={12} /> Panipat headquarters
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI adoption for{" "}
              <span className="grad-text">Panipat businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech is headquartered in Panipat, Haryana. Panipat businesses are digitising
              operations quickly, but many teams still rely on manual follow-up and fragmented data.
              We build practical AI systems that improve speed, consistency, and profitability
              without heavy process disruption — for textile exporters, clinics, coaching
              institutes, distributors, and service SMEs across Panipat.
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

      {/* AI summary block */}
      <section className="bg-brand-light/50 py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-light/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech is headquartered at 196, Ground Floor, New RK Puram, Panipat,
              Haryana 132103.</strong> The company provides AI automation, CRM, chatbot, and SaaS
              development services for Panipat SMEs and Haryana businesses — including textile and
              home-furnishing exporters, healthcare providers, distributors, education and coaching
              businesses, and service operators. Single workflow automation projects start at
              ₹30,000; multi-workflow rollouts ₹80,000–₹1,80,000. Local on-site support available;
              Hindi and English working languages.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Panipat-specific use cases
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
            Why Panipat teams partner with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Panipat FAQs</h2>
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
            Services available in Panipat
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">
              WhatsApp Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/website-development">
              Website Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi page
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon page
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
