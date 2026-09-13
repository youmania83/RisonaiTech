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
  title: "AI Automation & SaaS Development in Chandigarh — RisonAI Tech",
  description:
    "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Chandigarh startups and Punjab–Haryana businesses. Fixed-price delivery from ₹30,000.",
  keywords: [
    "AI automation company Chandigarh",
    "SaaS development Chandigarh",
    "Chandigarh startup technology",
    "AI development Punjab",
    "software company Chandigarh",
    "CRM development Chandigarh",
    "WhatsApp automation Chandigarh",
  ],
  alternates: { canonical: "/chandigarh" },
  openGraph: {
    title: "AI Automation & SaaS Development in Chandigarh | RisonAI Tech",
    description:
      "AI and SaaS implementation for Chandigarh businesses and startups — from MVP to production scale. Fixed-price, milestone-based delivery.",
    url: "https://risonaitech.com/chandigarh",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & SaaS Development in Chandigarh | RisonAI Tech",
    description: "AI automation, SaaS MVPs, CRM & chatbots for Chandigarh startups and Punjab businesses. Fixed-price delivery.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://risonaitech.com/chandigarh#localbusiness",
  name: "RisonAI Tech — Chandigarh Services",
  url: "https://risonaitech.com/chandigarh",
  telephone: "+919310837724",
  email: "hello@risonaitech.com",
  description:
    "AI automation, SaaS development, CRM, and chatbot services for Chandigarh startups and Punjab–Haryana businesses, delivered remotely from RisonAI Tech's Panipat headquarters.",
  areaServed: {
    "@type": "City",
    name: "Chandigarh",
    "@id": "https://en.wikipedia.org/wiki/Chandigarh",
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
    latitude: 30.7333,
    longitude: 76.7794,
  },
};

const useCases = [
  {
    label: "SaaS MVPs for Chandigarh startups",
    body: "Multi-tenant Next.js SaaS platforms with auth, billing (Razorpay), admin dashboards, and AI modules. MVPs shipped in 6–10 weeks for Punjab and Haryana founders targeting pan-India markets.",
  },
  {
    label: "Education & EdTech platforms",
    body: "Chandigarh's dense coaching and private education sector runs on RisonAI Tech-built LMS platforms, AI-driven test prep tools, and WhatsApp-automated admission funnels.",
  },
  {
    label: "Real estate & construction tech",
    body: "Property developers and brokerages in Chandigarh/Mohali use our custom CRM with AI lead scoring, automated follow-up, and WhatsApp-based site visit scheduling.",
  },
  {
    label: "Healthcare workflow automation",
    body: "Private hospitals and clinic chains in the Tricity area (Chandigarh, Mohali, Panchkula) deploy AI appointment bots, patient-follow-up automation, and billing dashboards.",
  },
  {
    label: "Manufacturing & trading ops",
    body: "Punjab's agro-industrial and manufacturing SMEs replace manual order tracking with custom CRM + WhatsApp automation workflows that reduce order errors and speed dispatch.",
  },
  {
    label: "AI customer support chatbots",
    body: "D2C and e-commerce brands headquartered in Chandigarh deploy RAG-based chatbots trained on their product catalogue that deflect 40–70% of tier-1 support queries.",
  },
];

const reasonsToChoose = [
  "2-week sprint cadence with live demos at every review",
  "Fixed-scope pricing and milestone-linked contracts — investor and audit-ready",
  "40+ product deployments across SaaS, AI automation, and CRM systems",
  "Post-launch support window with optional retainer for iteration",
  "Senior engineers on every project — not outsourced to junior teams",
  "Full source-code, infra, and credentials transferred at project close",
];

const faqs = [
  {
    q: "Does RisonAI Tech work with Chandigarh-based businesses?",
    a: "Yes. We regularly serve startups and SMEs in Chandigarh, Mohali, and Panchkula. Most engagements run fully remote with asynchronous collaboration via Slack and sprint review calls.",
  },
  {
    q: "How much does an AI automation project cost in Chandigarh?",
    a: "Workflow automation projects start from ₹30,000 for simple single-channel automations. Full AI automation suites with CRM + WhatsApp + dashboard typically range ₹1,50,000–₹4,00,000 depending on scope.",
  },
  {
    q: "Can you build a SaaS product for a Chandigarh startup?",
    a: "Yes. SaaS MVP builds range from ₹1,20,000–₹2,50,000 and ship in 6–10 weeks. Multi-tenant production-grade SaaS starts around ₹3,00,000. All builds include auth, billing, and admin modules.",
  },
  {
    q: "What industries in Chandigarh do you serve most?",
    a: "Education and EdTech, real estate, healthcare, manufacturing, and D2C consumer brands are the most common Chandigarh segments we engage with.",
  },
  {
    q: "How long do Chandigarh projects typically take?",
    a: "Workflow automation: 2–6 weeks. Chatbot systems: 2–4 weeks. SaaS MVPs: 6–10 weeks. Timelines depend on integration count and feedback cycles.",
  },
  {
    q: "Do you offer on-site presence in Chandigarh?",
    a: "Most work is remote. On-site kickoff meetings or quarterly reviews in Chandigarh/Mohali can be arranged for large-value engagements on request.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Chandigarh", url: "/chandigarh" },
  ]),
  placeSchema({
    name: "Chandigarh",
    url: "/chandigarh",
    description:
      "RisonAI Tech serves Chandigarh startups and Punjab–Haryana businesses with AI automation, SaaS, CRM, and chatbot development.",
    latitude: 30.7333,
    longitude: 76.7794,
  }),
  faqSchemaFromPairs(faqs),
);

export default function ChandigarhPage() {
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
              <MapPin className="mr-1" size={12} /> Chandigarh · Mohali · Panchkula
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI delivery for{" "}
              <span className="grad-text">Chandigarh businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              Chandigarh's Tricity corridor is home to fast-growing startups, ed-tech ventures, and
              Punjab–Haryana SMEs digitising their operations. RisonAI Tech builds SaaS platforms,
              AI workflows, and CRM systems that compound operational efficiency — without months of
              enterprise overhead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Chandigarh build
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
              <strong>RisonAI Tech serves Chandigarh and the Tricity region as an AI and SaaS
              development partner.</strong> Common engagements: SaaS MVP builds (₹1,20,000–₹2,50,000),
              AI automation workflows (₹30,000–₹4,00,000), CRM for real estate and healthcare,
              EdTech platforms, and WhatsApp-based customer operations for D2C and SME clients.
              Fixed-price contracts with two-week sprint cadence; full source-code ownership at close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Chandigarh use cases we ship most often
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
              Catalyzing growth in Chandigarh Tricity's Startup and Service Ecosystems
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-gray">
              <p>
                Chandigarh, designed by Le Corbusier, has evolved far beyond its administrative status as the joint capital of Punjab and Haryana. Today, the Chandigarh Tricity area—including Mohali and Panchkula—stands as one of North India's most prominent technology corridors, attracting a massive wave of SaaS startups, digital marketing agencies, private healthcare institutes, and premium real estate projects. This unique blend of public-sector stability and high-growth private enterprise creates a demanding market where operational scaling is key. RisonAI Tech equips Tricity organizations with robust AI workflows, automated lead capture funnels, and enterprise-grade Next.js SaaS applications.
              </p>
              <p>
                For the region's dense network of EdTech companies and coaching academies in sectors like Sector 34 and Sector 17, admissions pipeline management is a primary operational bottleneck. We design and launch customized WhatsApp enrollment assistants that handle the entire student intake journey automatically. From qualifying leads based on interest and test eligibility to collecting document uploads, dispatching study materials, and updating internal CRM lead statuses, these systems handle thousands of student queries per day with absolute consistency, allowing counselors to focus on direct conversion.
              </p>
              <p>
                Similarly, real estate developers and brokers in Mohali and Panchkula face high volumes of inbound lead traffic from property portals. We build custom-tailored CRMs integrated with AI-driven qualification models that analyze lead behavior, budget parameters, and urgency. These platforms automatically prioritize hot leads, prompt sales agents to follow up, and schedule physical site visits directly through WhatsApp, eliminating manual database upkeep and lead leakage.
              </p>
              <p>
                Whether you are a healthcare facility in Chandigarh looking to automate post-discharge patient check-ins, or a Mohali-based startup aiming to build a secure multi-tenant SaaS MVP in 6 to 10 weeks, RisonAI Tech provides local founders with world-class software development. We deliver fully transparent, fixed-scope contracts and guarantee a full transfer of codebase ownership upon completion, giving you a firm foundation to scale your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Chandigarh founders work with us
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">Chandigarh FAQs</h2>
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
            Services available in Chandigarh
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
