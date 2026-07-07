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
  title: "AI Automation & SaaS Development in Ranchi — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, WhatsApp chatbots, and CRM workflows for Ranchi businesses, Jharkhand startups, and government-adjacent enterprises. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Ranchi",
    "SaaS development Ranchi",
    "AI development Jharkhand",
    "software company Ranchi",
    "WhatsApp automation Ranchi",
    "CRM development Ranchi",
    "chatbot development Ranchi",
    "AI agent development Ranchi",
    "digital transformation Jharkhand",
    "IT company Ranchi",
  ],
  alternates: { canonical: "/ranchi" },
  openGraph: {
    title: "AI Automation & SaaS Development in Ranchi | RisonAI Tech",
    description:
      "AI automation, SaaS platforms, WhatsApp chatbots, and CRM systems for Ranchi startups, healthcare providers, and Jharkhand enterprises. Fixed-price delivery.",
    url: "https://risonaitech.com/ranchi",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Ranchi | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & WhatsApp chatbots for Ranchi startups and Jharkhand businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/ranchi#localbusiness",
  name: "RisonAI Tech — Ranchi Services",
  url: "https://risonaitech.com/ranchi",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Ranchi businesses, healthcare providers, and Jharkhand enterprises — delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Ranchi",
    "@id": "https://en.wikipedia.org/wiki/Ranchi",
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
    latitude: 23.3441,
    longitude: 85.3096,
  },
};

const useCases = [
  {
    label: "Healthcare & hospital automation",
    body: "Ranchi's large healthcare sector — RIMS, private hospitals, and clinics — uses AI for patient intake automation, appointment scheduling via WhatsApp, prescription tracking, and inter-department notification flows.",
  },
  {
    label: "Government-adjacent services & NGOs",
    body: "Jharkhand's tribal welfare organisations, government contractors, and social sector NGOs use SaaS platforms for beneficiary tracking, field data collection, and automated reporting to state and central dashboards.",
  },
  {
    label: "Mining & industrial supply chain",
    body: "Ranchi's position as Jharkhand's capital means strong ties to the mining and industrial sectors. We build supply-chain SaaS, vendor management portals, and compliance documentation automation for these enterprises.",
  },
  {
    label: "Real estate & construction CRM",
    body: "Growing residential and commercial real estate in Ranchi uses AI-powered CRM systems with WhatsApp follow-up automation, site visit scheduling, and lead qualification agents to reduce sales cycle times.",
  },
  {
    label: "Education & EdTech platforms",
    body: "Ranchi's large private schooling and competitive exam coaching sector uses LMS platforms, AI-driven student assessment tools, and automated parent communication systems built on WhatsApp.",
  },
  {
    label: "SME workflow automation",
    body: "Ranchi's growing SME base uses n8n and AI-powered workflows to automate order processing, invoice generation, customer follow-ups, and sales reporting — cutting administrative overhead by 50–70%.",
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
    q: "Does RisonAI Tech work with Ranchi-based businesses?",
    a: "Yes. We serve startups, SMEs, healthcare providers, and growing enterprises in Ranchi and across Jharkhand. Most engagements run fully remote with asynchronous collaboration and sprint review calls.",
  },
  {
    q: "How much does AI automation cost for a Ranchi business?",
    a: "Automation projects start from ₹30,000. Full AI + CRM + WhatsApp automation suites range ₹1,50,000–₹4,00,000 depending on scope. Healthcare integrations (hospital management systems, ABDM APIs) may require additional budget.",
  },
  {
    q: "Can you build a platform for an NGO or social sector project in Jharkhand?",
    a: "Yes. We have experience building beneficiary management systems, field data collection apps, and government reporting dashboards for social sector organisations. We offer discounted rates for registered NGOs and tribal welfare organisations.",
  },
  {
    q: "What Ranchi industries do you serve most?",
    a: "Healthcare and hospitals, education and coaching, real estate and construction, government-adjacent services, mining and industrial supply chain, and SME workflow automation are the most common Ranchi segments we engage with.",
  },
  {
    q: "How long do Ranchi projects typically take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. Healthcare management platforms: 8–14 weeks depending on integration complexity.",
  },
  {
    q: "Do you support Hindi interfaces for Jharkhand markets?",
    a: "Yes. Hindi language support is standard in all chatbots, WhatsApp bots, and notification systems. Santali and other tribal language variants can be incorporated for hyperlocal products targeting rural Jharkhand markets.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Ranchi", url: "/ranchi" },
  ]),
  placeSchema({
    name: "Ranchi",
    url: "/ranchi",
    description:
      "RisonAI Tech serves Ranchi startups, healthcare providers, and Jharkhand enterprises with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 23.3441,
    longitude: 85.3096,
  }),
  faqSchemaFromPairs(faqs),
);

export default function RanchiPage() {
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
              <MapPin className="mr-1" size={12} /> Ranchi · Jharkhand
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Ranchi businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Ranchi is Jharkhand&apos;s capital and a hub for healthcare, mining, government services,
              and a fast-growing private sector. RisonAI Tech builds AI automation, SaaS platforms,
              and CRM systems that help Ranchi businesses digitise operations, reduce manual workload,
              and scale without proportional headcount growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Ranchi build
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
              <strong>RisonAI Tech serves Ranchi and Jharkhand as an AI and SaaS development
              partner.</strong> Common engagements: healthcare automation (patient intake, WhatsApp
              appointment flows), NGO beneficiary management systems, real estate CRM, EdTech
              platforms, and SME workflow automation. Fixed-price contracts from ₹30,000; full
              source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Ranchi use cases we ship most often
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
              Building Digital Infrastructure for Ranchi&apos;s Healthcare, Government, and Industrial Sectors
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Ranchi, the capital of Jharkhand, occupies a unique position in India&apos;s economic landscape — anchored by major healthcare institutions, government services, mineral resource industries, and a rapidly growing private sector. As one of the fastest-developing cities in eastern India, Ranchi is witnessing accelerated adoption of digital tools across sectors that have historically been slow to automate. RisonAI Tech helps Ranchi enterprises build the software infrastructure needed to serve more customers, process more transactions, and operate leaner teams.
              </p>
              <p>
                In healthcare — one of Ranchi&apos;s largest employment sectors — the opportunity for AI automation is substantial. We build patient intake automation systems that collect symptom histories and insurance information via WhatsApp before the appointment, intelligent appointment scheduling agents that eliminate phone-based booking queues, and automated prescription tracking workflows that notify patients when refills are ready. These systems integrate with hospital management software and can be deployed without disrupting existing clinical workflows.
              </p>
              <p>
                For Jharkhand&apos;s government-adjacent services, NGOs, and social sector organisations, we build field data collection platforms, beneficiary management portals, and automated state-level reporting dashboards. These systems reduce the administrative burden on field workers, improve data accuracy, and allow programme managers to track outcomes in real time — without requiring expensive enterprise software licences.
              </p>
              <p>
                Whether you are a healthcare startup in Doranda building a telemedicine platform, a real estate developer in Harmu needing AI-powered lead qualification, or an established coal sector supply-chain business automating procurement workflows, RisonAI Tech delivers transparent pricing and full technology ownership at project close.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Ranchi founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Ranchi FAQs</h2>
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
            Services available in Ranchi
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">AI Automation</Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">AI Agent Development</Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">AI Chatbot Development</Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">WhatsApp Automation</Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">CRM Development</Link>
            <Link className="btn-outline text-sm" href="/services/saas-development">SaaS Development</Link>
            <Link className="btn-outline text-sm" href="/services/resume-screening">AI Resume Screening</Link>
            <Link className="btn-outline text-sm" href="/#case-studies">Case Studies</Link>
            <Link className="btn-outline text-sm" href="/patna">Patna page</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi page</Link>
            <Link className="btn-outline text-sm" href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
