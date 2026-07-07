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
  title: "AI Automation & SaaS Development in Indore — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Indore startups and Madhya Pradesh businesses. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Indore",
    "SaaS development Indore",
    "Indore startup technology",
    "AI development Madhya Pradesh",
    "software company Indore",
    "CRM development Indore",
    "WhatsApp automation Indore",
  ],
  alternates: { canonical: "/indore" },
  openGraph: {
    title: "AI Automation & SaaS Development in Indore | RisonAI Tech",
    description:
      "AI and SaaS development for Indore startups and MP businesses — from MVP to production scale. Fixed-price, milestone-based delivery.",
    url: "https://risonaitech.com/indore",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Indore | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & chatbots for Indore startups and Madhya Pradesh businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/indore#localbusiness",
  name: "RisonAI Tech — Indore Services",
  url: "https://risonaitech.com/indore",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Indore startups and Madhya Pradesh businesses, delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Indore",
    "@id": "https://en.wikipedia.org/wiki/Indore",
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
    latitude: 22.7196,
    longitude: 75.8577,
  },
};

const useCases = [
  {
    label: "SaaS MVPs for Indore startups",
    body: "Multi-tenant Next.js SaaS with auth, billing (Razorpay), admin dashboards, and AI modules. MVPs shipped in 6–10 weeks for founders targeting pan-India SaaS markets out of Indore's growing startup ecosystem.",
  },
  {
    label: "Textile & manufacturing ops automation",
    body: "Indore's thriving textile and manufacturing sector runs order tracking, supplier coordination, and quality workflows on RisonAI-built custom dashboards and WhatsApp automation pipelines.",
  },
  {
    label: "Trading & distribution CRM",
    body: "FMCG distributors and wholesale traders in Indore manage retailer relationships, payment reminders, and order confirmations through AI-assisted CRM with WhatsApp follow-up automation.",
  },
  {
    label: "EdTech & coaching platforms",
    body: "Indore's large coaching institute market uses AI-powered test prep tools, WhatsApp admission funnels, and LMS platforms that automate batch management and student engagement.",
  },
  {
    label: "Logistics & supply chain AI",
    body: "Transport and logistics companies in Indore use AI route optimisation, automated billing, and GPS-linked dashboards to reduce empty runs and manual coordination overhead.",
  },
  {
    label: "AI chatbots for local enterprises",
    body: "Retail and service businesses across Indore deploy WhatsApp chatbots for appointment booking, order status queries, and FAQ deflection — reducing team workload by 50–70%.",
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
    q: "Does RisonAI Tech work with Indore-based businesses?",
    a: "Yes. We serve startups, SMEs, and growing enterprises in Indore and across Madhya Pradesh. Most engagements run fully remote with Slack collaboration and sprint review calls.",
  },
  {
    q: "How much does AI automation cost in Indore?",
    a: "Automation projects start from ₹30,000 for single-channel workflows. Full AI + CRM + WhatsApp automation suites typically range ₹1,50,000–₹4,00,000 depending on scope and integrations.",
  },
  {
    q: "Can you build a SaaS product for an Indore startup?",
    a: "Yes. SaaS MVP builds range ₹1,20,000–₹2,50,000 and typically ship in 6–10 weeks. Multi-tenant production SaaS starts around ₹3,00,000. All builds include auth, billing, and admin modules.",
  },
  {
    q: "What industries in Indore do you serve most?",
    a: "Textile and manufacturing, trading and distribution, EdTech and coaching, logistics, and D2C e-commerce are the most common Indore segments we engage with.",
  },
  {
    q: "How long do typical Indore projects take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. Timeline depends on integration count and approval cycles.",
  },
  {
    q: "Can you integrate with Indian payment gateways and GST systems?",
    a: "Yes. We integrate Razorpay, PayU, and Cashfree as standard. GST invoice generation and tally export bridges are available as add-ons for Indore manufacturing and trading clients.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Indore", url: "/indore" },
  ]),
  placeSchema({
    name: "Indore",
    url: "/indore",
    description:
      "RisonAI Tech serves Indore startups and Madhya Pradesh businesses with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 22.7196,
    longitude: 75.8577,
  }),
  faqSchemaFromPairs(faqs),
);

export default function IndorePage() {
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
              <MapPin className="mr-1" size={12} /> Indore · Madhya Pradesh
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Indore businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Indore is India's cleanest city and one of its fastest-growing business hubs — with a
              startup ecosystem, a massive textile and trading base, and an ambitious smart-city
              agenda. RisonAI Tech builds AI automation, SaaS platforms, and CRM systems that help
              Indore businesses scale without proportional headcount growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Indore build
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
              <strong>RisonAI Tech serves Indore and Madhya Pradesh as an AI and SaaS development
              partner.</strong> Common engagements: SaaS MVP builds (₹1,20,000–₹2,50,000), AI
              workflow automation (₹30,000–₹4,00,000), CRM for textile and trading businesses,
              EdTech platforms, WhatsApp automation for distribution networks, and logistics ops
              dashboards. Fixed-price contracts; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Indore use cases we ship most often
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
              Empowering Indore's Startups and Traditional Industries with Next-Gen AI Workflows
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Indore, recognized nationwide as India's cleanest city, has rapidly transitioned into one of the country's most vibrant startup and technology hubs. With the emergence of dynamic co-working spaces, incubation centers, and a growing pool of technical talent, the city's entrepreneurial spirit is stronger than ever. In parallel, Indore's historical strengths in textiles, wholesale trading, logistics, and FMCG distribution continue to serve as the economic backbone of Madhya Pradesh. RisonAI Tech bridges the gap between these traditional industrial sectors and modern technology by engineering custom AI automation, bespoke CRM systems, and production-grade SaaS solutions.
              </p>
              <p>
                For early-stage startups in Indore looking to raise capital or establish product-market fit, speed to market is critical. Our team builds full-stack, multi-tenant SaaS MVPs in Next.js, integrated with secure user authentication, standard administrative panels, and localized payment gateways like Razorpay or Cashfree. By delivering fully functional products in 6 to 10 weeks, we allow local founders to skip months of development overhead and focus directly on customer acquisition. We provide complete source code handover and deployment documentation at the close of every project, ensuring you have total ownership of your proprietary intellectual property.
              </p>
              <p>
                In the manufacturing and textile sectors, operational efficiency is highly dependent on swift coordination between suppliers, production managers, and distributors. We replace disjointed spreadsheets and manual messaging protocols with integrated workflows and custom web dashboards. By utilizing WhatsApp Business API, we automate inventory alerts, transport dispatch confirmations, and invoice reminders. Our AI agents can process unstructured emails, classify purchase orders, and automatically update internal tracking databases, reducing clerical errors and increasing daily throughput.
              </p>
              <p>
                Whether you are a logistics provider near the Indore Bypass seeking route optimization software, a coaching institute in Geeta Bhawan automating student registrations, or a SaaS company ready to build its next feature, RisonAI Tech acts as your dedicated engineering arm. Our milestone-based pricing models mean you know exactly what you are paying for, with zero hidden costs or billing surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Indore founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Indore FAQs</h2>
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
            Services available in Indore
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
            <Link className="btn-outline text-sm" href="/ahmedabad">
              Ahmedabad page
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
