import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Globe, Gauge, Search, LayoutTemplate } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "Website Development India — Fast, SEO-Optimized Websites for Growth",
  description:
    "RisonAI Tech builds high-performance websites for startups and SMBs in India. SEO-ready, conversion-focused, and engineered for speed. From Rs 35,000.",
  keywords: [
    "website development company India",
    "Next.js website development India",
    "SEO website development Delhi",
    "conversion focused website development",
    "high performance website development",
  ],
  alternates: { canonical: "/services/website-development" },
  openGraph: {
    title: "Website Development India | RisonAI Tech",
    description:
      "Premium website development for speed, SEO, and conversions. Landing pages to full-scale business websites.",
    url: "https://risonaitech.com/services/website-development",
  },
};

const deliverables = [
  "High-performance websites using Next.js and modern architecture",
  "SEO foundations: metadata, schema-ready structure, and crawl-friendly URLs",
  "Conversion-focused landing pages and service pages",
  "Responsive UI across mobile, tablet, and desktop",
  "Content management integrations (Sanity, Contentful, headless CMS)",
  "Technical performance tuning for Core Web Vitals",
  "Lead capture workflows integrated with CRM and WhatsApp",
  "Deployment, monitoring, and handover documentation",
];

const capabilities = [
  {
    icon: Gauge,
    title: "Performance-first engineering",
    desc: "We build lightweight front-ends with optimized images, caching, and code-splitting so pages load fast even on weaker mobile networks.",
  },
  {
    icon: Search,
    title: "SEO-ready architecture",
    desc: "Every page ships with clean semantic structure, indexation-friendly routing, and metadata strategy to rank on competitive terms.",
  },
  {
    icon: LayoutTemplate,
    title: "Conversion-focused UX",
    desc: "We design page flows that reduce drop-off and improve lead capture with clear hierarchy, content blocks, and friction-aware CTAs.",
  },
  {
    icon: Globe,
    title: "Scalable website systems",
    desc: "From marketing sites to full content ecosystems, we create structures your team can expand without re-platforming in six months.",
  },
];

const faqs = [
  {
    q: "How much does website development cost in India?",
    a: "A high-quality business website typically ranges from Rs 35,000 to Rs 1,50,000 based on page count, CMS needs, and integration complexity. Conversion-focused multi-page builds usually sit in the Rs 75,000 to Rs 2,50,000 range.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most website projects are delivered in 2-8 weeks. A focused landing page can ship in 1-2 weeks, while a full content and service website usually takes 4-8 weeks.",
  },
  {
    q: "Will my website be SEO-optimized from day one?",
    a: "Yes. We implement technical SEO basics during development: clean URL structure, metadata setup, structured headings, image optimization, and page speed improvements.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "Both, based on goals and budget. We can start with a premium baseline and customize heavily, or build fully custom interfaces where conversion strategy requires it.",
  },
  {
    q: "Can you redesign my existing website without losing rankings?",
    a: "Yes. We plan URL mapping, redirects, metadata migration, and performance checks before launch to protect rankings and avoid SEO regression.",
  },
  {
    q: "Will the site be easy to manage after launch?",
    a: "Yes. We provide editable content workflows and handover docs so your team can update text, pages, and media without developer dependency.",
  },
];

const factualBenchmarks = [
  {
    stat: "Websites optimized for Core Web Vitals commonly see 10-30% better conversion rates.",
    detail: "Faster load and visual stability reduce abandonment on high-intent pages like pricing and contact.",
  },
  {
    stat: "Mobile latency is one of the top causes of lead-form abandonment.",
    detail: "Performance-focused builds can reduce bounce and improve session depth, especially on paid traffic.",
  },
  {
    stat: "Most SMB website projects in India fall between Rs 35,000 and Rs 2,50,000.",
    detail: "Cost varies by content scope, integrations, and custom UI requirements.",
  },
  {
    stat: "Production-ready marketing websites typically launch in 2-8 weeks.",
    detail: "Timeline depends on page volume, content readiness, and feedback turnaround speed.",
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

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">Website Development</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              Websites engineered for <span className="grad-text">speed and conversions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We build high-performance, SEO-optimized websites that help your business rank, convert,
              and scale. From focused landing pages to full multi-page web platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Build My Website
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/contact">
                Get Free Website Audit
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              From Rs 35,000 · 2-8 week delivery · SEO + performance focused
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks reflect common outcomes observed in performance-focused website rebuilds and new launches."
        title="Website benchmarks: speed, conversion, and delivery"
      />

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            What&apos;s included
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            How we approach websites
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div className="card-base p-6" key={item.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            FAQs
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
