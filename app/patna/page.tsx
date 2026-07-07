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
  title: "AI Automation & SaaS Development in Patna — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, WhatsApp chatbots, and CRM systems for Patna businesses, Bihar startups, and education-sector enterprises. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Patna",
    "SaaS development Patna",
    "AI development Bihar",
    "software company Patna",
    "WhatsApp automation Patna",
    "CRM development Patna",
    "chatbot development Patna",
    "AI agent development Patna",
    "digital transformation Bihar",
    "IT company Patna",
    "EdTech platform Bihar",
    "AI automation Bihar",
  ],
  alternates: { canonical: "/patna" },
  openGraph: {
    title: "AI Automation & SaaS Development in Patna | RisonAI Tech",
    description:
      "AI automation, SaaS platforms, WhatsApp chatbots, and CRM systems for Patna startups, coaching institutes, and Bihar enterprises. Fixed-price delivery.",
    url: "https://risonaitech.com/patna",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Patna | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & WhatsApp chatbots for Patna startups and Bihar businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/patna#localbusiness",
  name: "RisonAI Tech — Patna Services",
  url: "https://risonaitech.com/patna",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Patna businesses, coaching institutes, and Bihar enterprises — delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Patna",
    "@id": "https://en.wikipedia.org/wiki/Patna",
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
    latitude: 25.5941,
    longitude: 85.1376,
  },
};

const useCases = [
  {
    label: "EdTech & coaching institute platforms",
    body: "Patna is one of India's largest competitive exam coaching hubs — IIT-JEE, UPSC, BPSC, and NEET. We build LMS platforms, AI-driven test evaluation tools, and automated WhatsApp communication systems for student engagement and batch management.",
  },
  {
    label: "Healthcare & clinic automation",
    body: "Patna's healthcare institutions — PMCH, AIIMS Patna, and private hospitals — use AI for patient intake via WhatsApp, appointment scheduling automation, lab report delivery, and follow-up reminder systems.",
  },
  {
    label: "Agriculture & supply chain tech",
    body: "Bihar's agricultural economy is undergoing rapid tech transformation. We build procurement platforms, mandi price aggregation systems, and farmer-to-buyer supply chain portals that digitise grain trading and FPO operations.",
  },
  {
    label: "Real estate CRM & lead automation",
    body: "Patna's growing real estate sector uses AI-powered CRM with WhatsApp lead qualification agents, automated site visit scheduling, follow-up sequences, and sales analytics dashboards to reduce deal cycle times.",
  },
  {
    label: "Government & MSME digital portals",
    body: "Bihar's MSME sector and government contractors build compliance tracking portals, e-procurement dashboards, and loan application management systems that connect with state and central digital infrastructure.",
  },
  {
    label: "Financial services & MFI platforms",
    body: "Micro-finance institutions and rural lending organisations in Bihar use AI-assisted loan origination systems, credit scoring automation, and EMI collection reminder workflows to improve repayment rates and reduce operational costs.",
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
    q: "Does RisonAI Tech work with Patna-based businesses?",
    a: "Yes. We serve coaching institutes, healthcare providers, real estate developers, agricultural tech startups, and growing enterprises in Patna and across Bihar. Most engagements run fully remote with asynchronous collaboration and sprint review calls.",
  },
  {
    q: "How much does AI automation cost for a Patna business?",
    a: "Automation projects start from ₹30,000. Full AI + CRM + WhatsApp automation suites range ₹1,50,000–₹4,00,000 depending on scope. EdTech platforms and healthcare integrations may require additional budget for LMS modules or hospital management system APIs.",
  },
  {
    q: "Can you build a platform for a coaching institute in Patna?",
    a: "Yes. We build coaching institute management platforms with student batch management, automated fee collection via Razorpay, WhatsApp-based doubt resolution bots, AI-scored practice tests, and parent progress dashboards. MVPs are delivered in 6–10 weeks.",
  },
  {
    q: "What Patna industries do you serve most?",
    a: "Education and coaching institutes, healthcare and hospitals, real estate and construction, agriculture and supply chain, government and MSME services, and micro-finance are the most common Patna segments we engage with.",
  },
  {
    q: "How long do Patna projects typically take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. EdTech or healthcare management platforms: 8–14 weeks depending on integration complexity.",
  },
  {
    q: "Do you support Hindi interfaces for Bihar markets?",
    a: "Yes. Hindi language support is standard in all chatbots, WhatsApp bots, and notification systems. Maithili and Bhojpuri language variants can be incorporated for hyperlocal products targeting rural Bihar audiences.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Patna", url: "/patna" },
  ]),
  placeSchema({
    name: "Patna",
    url: "/patna",
    description:
      "RisonAI Tech serves Patna coaching institutes, healthcare providers, and Bihar enterprises with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 25.5941,
    longitude: 85.1376,
  }),
  faqSchemaFromPairs(faqs),
);

export default function PatnaPage() {
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
              <MapPin className="mr-1" size={12} /> Patna · Bihar
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Patna businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Patna is Bihar&apos;s capital and one of India&apos;s largest coaching and education hubs —
              alongside fast-growing healthcare, agri-tech, and government service sectors.
              RisonAI Tech builds AI automation, SaaS platforms, and CRM systems that help
              Patna businesses digitise operations and scale without proportional headcount growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Patna build
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
              <strong>RisonAI Tech serves Patna and Bihar as an AI and SaaS development
              partner.</strong> Common engagements: coaching institute LMS and WhatsApp automation,
              healthcare patient intake systems, real estate CRM with lead qualification agents,
              agricultural procurement platforms, and MSME workflow automation. Fixed-price contracts
              from ₹30,000; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Patna use cases we ship most often
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
              Powering Patna&apos;s Education, Healthcare, and Agriculture Sectors with AI &amp; SaaS
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Patna, the capital of Bihar, holds a distinctive place in India&apos;s service economy. As the country&apos;s largest centre for competitive exam coaching — producing UPSC, IIT-JEE, NEET, and BPSC toppers at scale — Patna&apos;s education sector is undergoing rapid digitalisation. Simultaneously, the city is witnessing accelerated growth in healthcare infrastructure, fintech, government-backed MSME development, and agricultural supply chain technology. RisonAI Tech helps Patna enterprises build the software systems needed to operate at scale in these sectors.
              </p>
              <p>
                For coaching institutes on Bailey Road and Boring Road — Patna&apos;s iconic coaching corridors — the operational challenge is managing thousands of students across multiple batches, courses, and centres. We build batch management SaaS platforms with AI-scored mock test evaluation, automated fee collection via Razorpay, WhatsApp-based doubt resolution bots, and parent engagement dashboards that deliver real-time progress updates. These systems reduce administrative overhead dramatically and improve student retention.
              </p>
              <p>
                In healthcare, AIIMS Patna, PMCH, and the city&apos;s growing network of private hospitals are building digital-first patient experience systems. We build automated patient intake flows where WhatsApp collects symptom histories before the appointment, AI-assisted triage tools that route patients to the correct specialist, and lab result delivery pipelines that notify patients the moment reports are ready — reducing phone-based enquiry loads significantly.
              </p>
              <p>
                Bihar&apos;s agricultural economy presents one of India&apos;s largest untapped opportunities for digital transformation. We build farmer-to-buyer procurement platforms, mandi price aggregation tools, and FPO (Farmer Producer Organisation) management portals that connect producers to better markets — reducing intermediary dependency and improving income visibility for farming communities across the Gangetic plain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Patna founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Patna FAQs</h2>
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
            Services available in Patna
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
            <Link className="btn-outline text-sm" href="/ranchi">Ranchi page</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi page</Link>
            <Link className="btn-outline text-sm" href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
