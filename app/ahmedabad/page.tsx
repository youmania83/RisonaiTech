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
  title: "AI Automation & SaaS Development in Ahmedabad — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Ahmedabad startups, GIFT City fintechs, and Gujarat enterprises. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Ahmedabad",
    "SaaS development Ahmedabad",
    "GIFT City fintech development",
    "AI development Gujarat",
    "software company Ahmedabad",
    "CRM development Ahmedabad",
    "WhatsApp automation Ahmedabad",
  ],
  alternates: { canonical: "/ahmedabad" },
  openGraph: {
    title: "AI Automation & SaaS Development in Ahmedabad | RisonAI Tech",
    description:
      "AI and SaaS development for Ahmedabad startups, GIFT City fintechs, and Gujarat enterprises. Fixed-price, milestone-based delivery.",
    url: "https://risonaitech.com/ahmedabad",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Ahmedabad | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & chatbots for Ahmedabad startups and Gujarat businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/ahmedabad#localbusiness",
  name: "RisonAI Tech — Ahmedabad Services",
  url: "https://risonaitech.com/ahmedabad",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Ahmedabad startups, GIFT City fintech companies, and Gujarat enterprises — delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Ahmedabad",
    "@id": "https://en.wikipedia.org/wiki/Ahmedabad",
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
    latitude: 23.0225,
    longitude: 72.5714,
  },
};

const useCases = [
  {
    label: "GIFT City fintech platforms",
    body: "Fintech companies at GIFT City use RisonAI-built compliance dashboards, automated KYC/AML workflows, and AI document-processing pipelines to reduce manual review time by 60–80%.",
  },
  {
    label: "SaaS MVPs for Ahmedabad startups",
    body: "Multi-tenant Next.js SaaS platforms with Razorpay billing, admin dashboards, and AI modules. MVPs shipped in 6–10 weeks for Ahmedabad founders targeting pan-India and international markets.",
  },
  {
    label: "Pharma & chemical industry automation",
    body: "Gujarat's large pharma and specialty chemical sector runs batch tracking, regulatory documentation, and supplier quality workflows on RisonAI-built custom systems integrated with ERP.",
  },
  {
    label: "Textile & retail enterprise CRM",
    body: "Textile exporters and retail chains in Ahmedabad use custom CRM with WhatsApp B2B order management, automated follow-up, and distributor relationship tracking at scale.",
  },
  {
    label: "E-commerce & D2C AI systems",
    body: "Ahmedabad-based D2C brands deploy AI-powered product recommendation engines, WhatsApp cart-abandonment recovery flows, and customer support chatbots that reduce operational cost.",
  },
  {
    label: "Real estate & infrastructure tech",
    body: "Property developers and construction firms in Ahmedabad use AI lead scoring CRM, site-visit chatbots, and project progress dashboards to modernise sales and operations.",
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
    q: "Does RisonAI Tech work with Ahmedabad and GIFT City companies?",
    a: "Yes. We serve startups, fintech companies at GIFT City, and established enterprises across Gujarat. Most engagements run fully remote with Slack and sprint review calls.",
  },
  {
    q: "How much does AI automation cost for an Ahmedabad business?",
    a: "Automation projects start from ₹30,000 for simple single-channel workflows. Full AI + CRM + WhatsApp automation suites range ₹1,50,000–₹4,00,000 depending on scope and integrations.",
  },
  {
    q: "Can you build fintech SaaS for GIFT City companies?",
    a: "Yes. We build compliance dashboards, automated document-processing pipelines, and multi-tenant SaaS for regulated environments. GIFT City fintech builds typically start from ₹3,00,000.",
  },
  {
    q: "What Gujarat industries do you work with most?",
    a: "Fintech (GIFT City), pharma and chemicals, textiles and retail, D2C e-commerce, and real estate are the most common Ahmedabad and Gujarat segments we engage with.",
  },
  {
    q: "How long do Ahmedabad projects typically take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. Fintech compliance builds: 8–16 weeks depending on regulatory requirements.",
  },
  {
    q: "Do you support multi-language interfaces for Gujarat markets?",
    a: "Yes. We can build Gujarati and Hindi language support into chatbots, CRM interfaces, and notification systems for businesses targeting local Gujarati-speaking customers.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Ahmedabad", url: "/ahmedabad" },
  ]),
  placeSchema({
    name: "Ahmedabad",
    url: "/ahmedabad",
    description:
      "RisonAI Tech serves Ahmedabad startups, GIFT City fintechs, and Gujarat enterprises with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 23.0225,
    longitude: 72.5714,
  }),
  faqSchemaFromPairs(faqs),
);

export default function AhmedabadPage() {
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
              <MapPin className="mr-1" size={12} /> Ahmedabad · GIFT City · Gujarat
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Ahmedabad businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Ahmedabad is Gujarat's economic powerhouse — home to GIFT City fintech, one of India's
              largest pharma clusters, and a vibrant startup ecosystem. RisonAI Tech builds AI
              automation, SaaS platforms, and enterprise CRM systems that give Ahmedabad businesses a
              decisive operational edge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Ahmedabad build
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
              <strong>RisonAI Tech serves Ahmedabad and Gujarat as an AI and SaaS development
              partner.</strong> Common engagements: GIFT City fintech platforms, SaaS MVP builds
              (₹1,20,000–₹2,50,000), AI automation for pharma and textile industries, WhatsApp
              commerce flows for D2C brands, and CRM for real estate developers. Fixed-price
              contracts; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Ahmedabad use cases we ship most often
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
              Driving Gujarat's Industrial and Fintech Boom with Specialized AI Workflows
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Ahmedabad has long been recognized as Gujarat's primary economic engine, combining a massive historical textile industry with advanced manufacturing, pharmaceuticals, and chemicals. In recent years, the rapid growth of GIFT City (Gujarat International Finance Tec-City) has added a cutting-edge global financial services and fintech dimension to the region. As local businesses strive to meet both domestic demands and international standards, the need for automated operations and robust software architecture is paramount. RisonAI Tech provides Ahmedabad enterprises and GIFT City fintechs with custom AI agents, automated workflow orchestration, and scalable SaaS solutions.
              </p>
              <p>
                In the highly regulated GIFT City environment, fintech startups face stringent compliance requirements, detailed KYC audits, and high volumes of document verification. We help these firms automate the tedious parts of their operations by building custom document-processing pipelines. By utilizing advanced OCR and LLM models, our AI systems can ingest, parse, and verify bank statements, tax documents, and identity certificates in seconds. These pipelines flag irregularities for human review, reducing operational friction while ensuring compliance protocols are strictly followed.
              </p>
              <p>
                For Gujarat's leading pharmaceutical and chemical manufacturing units in industrial zones like Vatva, Naroda, and Changodar, operational precision is critical. We build custom ERP integrations and central dashboards to automate batch tracking, vendor communications, and laboratory quality control checklists. By linking these back-end systems with the WhatsApp Business API, we allow supply chain managers and distributors to receive real-time dispatch alerts, ETA updates, and payment confirmations on their mobile devices, minimizing communication delays and keeping logistics pipelines moving.
              </p>
              <p>
                Whether you are an e-commerce brand based in Prahladnagar seeking to optimize post-purchase support via WhatsApp, or a startup founder in GIFT City looking to ship a compliant SaaS platform in 8 weeks, RisonAI Tech delivers production-ready code with complete transparency. We handover full source-code ownership at project close, giving you complete control over your technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Ahmedabad founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Ahmedabad FAQs</h2>
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
            Services available in Ahmedabad
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
            <Link className="btn-outline text-sm" href="/indore">
              Indore page
            </Link>
            <Link className="btn-outline text-sm" href="/jaipur">
              Jaipur page
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
