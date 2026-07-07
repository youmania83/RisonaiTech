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
  title: "AI Automation & SaaS Development in Jaipur — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Jaipur startups, tourism tech companies, and Rajasthan enterprises. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Jaipur",
    "SaaS development Jaipur",
    "Jaipur startup technology",
    "AI development Rajasthan",
    "software company Jaipur",
    "CRM development Jaipur",
    "WhatsApp automation Jaipur",
  ],
  alternates: { canonical: "/jaipur" },
  openGraph: {
    title: "AI Automation & SaaS Development in Jaipur | RisonAI Tech",
    description:
      "AI and SaaS development for Jaipur startups, tourism businesses, and Rajasthan enterprises. Fixed-price, milestone-based delivery.",
    url: "https://risonaitech.com/jaipur",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Jaipur | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & chatbots for Jaipur startups and Rajasthan businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/jaipur#localbusiness",
  name: "RisonAI Tech — Jaipur Services",
  url: "https://risonaitech.com/jaipur",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Jaipur startups, tourism tech companies, and Rajasthan enterprises — delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Jaipur",
    "@id": "https://en.wikipedia.org/wiki/Jaipur",
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
    latitude: 26.9124,
    longitude: 75.7873,
  },
};

const useCases = [
  {
    label: "Tourism & hospitality tech",
    body: "Jaipur's hotels, heritage resorts, and tour operators use AI booking assistants, WhatsApp-based inquiry and reservation flows, and automated review collection systems to drive direct bookings.",
  },
  {
    label: "Handicraft & jewellery marketplace platforms",
    body: "Jaipur's iconic jewellery and handicraft exporters build B2B and D2C marketplace platforms on RisonAI-powered Next.js with AI product cataloguing, multi-currency checkout, and export documentation.",
  },
  {
    label: "SaaS MVPs for Jaipur startups",
    body: "Multi-tenant SaaS platforms with auth, Razorpay billing, admin dashboards, and AI modules. MVPs shipped in 6–10 weeks for Jaipur founders in ed-tech, real estate, and retail.",
  },
  {
    label: "Real estate CRM & automation",
    body: "Property developers and brokerages in Jaipur manage buyer journeys, site visits, and follow-ups with AI-assisted CRM and WhatsApp automation that reduces lead leakage.",
  },
  {
    label: "Education & EdTech platforms",
    body: "Jaipur's large private school and coaching sector uses AI-driven student engagement tools, LMS platforms, and WhatsApp-automated parent communication to modernise administration.",
  },
  {
    label: "AI chatbots for retail businesses",
    body: "Jaipur retail chains and local brands deploy WhatsApp chatbots for product queries, order tracking, and appointment booking — cutting customer service overhead significantly.",
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
    q: "Does RisonAI Tech work with Jaipur-based businesses?",
    a: "Yes. We serve startups, SMEs, tourism companies, and growing enterprises in Jaipur and across Rajasthan. Most engagements run fully remote with asynchronous collaboration and sprint review calls.",
  },
  {
    q: "How much does AI automation cost for a Jaipur business?",
    a: "Automation projects start from ₹30,000. Full AI + CRM + WhatsApp automation suites range ₹1,50,000–₹4,00,000 depending on scope. Tourism and hospitality integrations may require additional budget for booking engine APIs.",
  },
  {
    q: "Can you build a marketplace for Jaipur jewellery exporters?",
    a: "Yes. B2B and D2C marketplace builds start from ₹2,50,000 with product catalogue management, international payment support, and export documentation features included.",
  },
  {
    q: "What Jaipur industries do you serve most?",
    a: "Tourism and hospitality, jewellery and handicraft exports, real estate, EdTech and coaching, and retail are the most common Jaipur segments we engage with.",
  },
  {
    q: "How long do Jaipur projects typically take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. Marketplace platforms: 8–14 weeks depending on complexity.",
  },
  {
    q: "Do you support multi-language interfaces for Rajasthan markets?",
    a: "Yes. Hindi language support is standard in chatbots and notification systems. Rajasthani language variants can be incorporated for hyperlocal rural-market products.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jaipur", url: "/jaipur" },
  ]),
  placeSchema({
    name: "Jaipur",
    url: "/jaipur",
    description:
      "RisonAI Tech serves Jaipur startups, tourism businesses, and Rajasthan enterprises with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 26.9124,
    longitude: 75.7873,
  }),
  faqSchemaFromPairs(faqs),
);

export default function JaipurPage() {
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
              <MapPin className="mr-1" size={12} /> Jaipur · Rajasthan
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Jaipur businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Jaipur combines a thriving tourism economy, a world-class jewellery export industry,
              and a fast-growing startup scene. RisonAI Tech builds AI automation, SaaS platforms,
              and CRM systems that help Jaipur businesses digitise operations, reach global markets,
              and scale without proportional headcount growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Jaipur build
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
              <strong>RisonAI Tech serves Jaipur and Rajasthan as an AI and SaaS development
              partner.</strong> Common engagements: tourism and hospitality AI automation, jewellery
              and handicraft marketplace platforms, SaaS MVPs (₹1,20,000–₹2,50,000), real estate
              CRM, and EdTech platforms. Fixed-price contracts; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Jaipur use cases we ship most often
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
              Modernizing Jaipur's Heritage and Export Sectors with High-Impact AI & SaaS Platforms
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Jaipur, the Pink City of India, presents a unique economic landscape where centuries-old traditions meet modern global commerce. As one of the country's premier tourist destinations, the city's hospitality and heritage sectors cater to millions of international and domestic travelers. Concurrently, Jaipur is a globally recognized manufacturing and export epicenter for premium gemstones, fine jewelry, block-printed textiles, and handmade crafts. As competition intensifies, local businesses are increasingly embracing digital transformation. RisonAI Tech helps Jaipur enterprises and startups build custom software infrastructure that automates operations, reaches international audiences, and optimizes conversion rates.
              </p>
              <p>
                In the tourism and hospitality sectors, booking speed and customer interaction quality are key determinants of occupancy rates. We construct automated guest engagement pipelines that integrate directly with property management systems (PMS) and online travel agency (OTA) feeds. Using the WhatsApp Business API, we develop intelligent reservation assistants that guide guests through room availability, customize itinerary packages, collect payment credentials, and distribute automated pre-arrival briefings. Post-departure, these systems automatically solicit and aggregate customer reviews, enhancing the hotel's online reputation with zero administrative effort.
              </p>
              <p>
                For Jaipur's renowned jewelry and handicraft exporters, presenting collections to international buyers requires high visual standards and efficient administrative processing. We build custom B2B and D2C marketplace portals in Next.js, featuring automated product cataloging, multi-currency pricing models, and international payment gateways like Stripe or PayPal. Our AI agents can automatically extract catalog details from designer sketches, generate search-engine-optimized descriptions, and pre-populate export compliance documents, allowing local merchants to scale their global sales pipelines seamlessly.
              </p>
              <p>
                Whether you are an EdTech founder near Malviya Nagar seeking to build a scalable test prep platform, or an established boutique hotel in C-Scheme automating guest communications, RisonAI Tech provides top-tier software engineering. We offer transparent pricing structures and a full transfer of source code and deployment privileges at project completion, ensuring you retain total control over your business infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Jaipur founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Jaipur FAQs</h2>
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
            Services available in Jaipur
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
            <Link className="btn-outline text-sm" href="/ahmedabad">
              Ahmedabad page
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
