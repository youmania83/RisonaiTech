import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Gauge,
  Search,
  LayoutTemplate,
} from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";
import {
  breadcrumbSchema,
  howToSchema,
  serviceSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Development India — Fast, SEO-Optimized Websites for Growth",
  description:
    "RisonAI Tech builds high-performance Next.js websites for Indian startups and SMBs — Core Web Vitals, AI-search ready, conversion-focused. From ₹35,000. Delhi NCR.",
  keywords: [
    "website development company India",
    "Next.js website development India",
    "SEO website development Delhi",
    "AI search optimization India",
    "GEO generative engine optimization India",
    "conversion focused website development",
    "high performance website development",
    "Core Web Vitals optimization India",
  ],
  alternates: { canonical: "/services/website-development" },
  openGraph: {
    title: "Website Development India | RisonAI Tech",
    description:
      "Premium Next.js websites engineered for Core Web Vitals, AI-search visibility, and conversions — from focused landing pages to multi-page business websites.",
    url: "https://risonaitech.com/services/website-development",
  },
};

const deliverables = [
  "High-performance websites using Next.js and modern architecture",
  "SEO foundations: metadata, schema-ready structure, and crawl-friendly URLs",
  "GEO (generative engine optimization) for ChatGPT, Perplexity, Gemini",
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
    desc: "We build lightweight front-ends with optimized images, caching, and code-splitting so pages load fast even on weaker mobile networks. Target metrics: LCP < 2.5s, INP < 200ms, CLS < 0.1.",
  },
  {
    icon: Search,
    title: "SEO and AI-search ready",
    desc: "Every page ships with semantic HTML, JSON-LD schema (Organization, LocalBusiness, Service, FAQ, Breadcrumb), llms.txt for AI crawlers, and metadata strategy to rank on Google and surface in ChatGPT, Perplexity, Gemini answers.",
  },
  {
    icon: LayoutTemplate,
    title: "Conversion-focused UX",
    desc: "We design page flows that reduce drop-off and improve lead capture with clear hierarchy, content blocks, friction-aware CTAs, and WhatsApp-first contact paths optimised for Indian buyers.",
  },
  {
    icon: Globe,
    title: "Scalable website systems",
    desc: "From marketing sites to full content ecosystems, we create structures your team can expand without re-platforming in six months. CMS integrations let non-technical teams ship content.",
  },
];

const processSteps = [
  {
    name: "Audit and goals",
    text: "We audit your existing site (or competitor set) for performance, SEO, AI-search visibility, and conversion friction. Output: a written audit and a ranked list of fixes by ROI.",
  },
  {
    name: "Information architecture and content map",
    text: "We design the URL structure, page-level intent map, and internal linking topology before any visual design. Pages are scoped around the questions buyers actually ask.",
  },
  {
    name: "Wireframes and content briefs",
    text: "Low-fidelity wireframes for each page, with content briefs that specify the headline, supporting paragraphs, CTAs, and FAQ block your copywriter (or ours) will fill in.",
  },
  {
    name: "Visual design and brand application",
    text: "Visual design in Figma — typography, colour, imagery, animation rules — applied consistently across every template. Approved before implementation.",
  },
  {
    name: "Build on Next.js with SEO + GEO defaults",
    text: "Implementation on Next.js with TypeScript and Tailwind. Built-in: metadata, JSON-LD schema, llms.txt, sitemap, robots, OpenGraph, Twitter cards, and breadcrumb navigation.",
  },
  {
    name: "Performance tuning and accessibility pass",
    text: "Image optimisation, code-splitting, font loading strategy, caching, and accessibility (WCAG AA) review. Lighthouse and PageSpeed scores tuned to 90+ on real devices.",
  },
  {
    name: "Lead capture and CRM wiring",
    text: "Forms, WhatsApp click-to-chat, CRM integration (HubSpot / Zoho / custom), and lead notification flows. AI-drafted reply suggestions for inbound leads optional.",
  },
  {
    name: "Launch, monitoring, and handover",
    text: "Production deploy on Vercel, Search Console + Bing Webmaster Tools setup, analytics (PostHog / GA4), monitoring (Sentry), and handover documentation for the marketing team.",
  },
];

const aiSeoPlaybook = [
  {
    label: "JSON-LD schema graph",
    body: "Every page emits the right schemas: WebSite, Organization, LocalBusiness, Service, FAQ, BreadcrumbList, HowTo where applicable. AI engines parse this graph to understand entities and relationships.",
  },
  {
    label: "llms.txt and llms-full.txt",
    body: "Curated AI-readable files at /llms.txt and /llms-full.txt define the entity, services, pricing, and citation guidance. Used by ChatGPT, Perplexity, Claude, Gemini for accurate citations.",
  },
  {
    label: "Entity-rich, structured content",
    body: "Short paragraphs, clear headings, FAQ blocks, comparison tables, and statistics. AI engines prefer answer-shaped content over fluff. Every page answers what / why / who / how.",
  },
  {
    label: "Semantic clusters and internal linking",
    body: "Hub pages link to spoke pages with anchor text that reflects the underlying entity. Topic clusters help search engines and LLM crawlers understand authority and relevance.",
  },
  {
    label: "Core Web Vitals and crawl health",
    body: "LCP < 2.5s, INP < 200ms, CLS < 0.1 by default. Clean canonical URLs, robots.txt, sitemap.xml, and HTTP security headers — making the site easy for Googlebot, Bingbot, and AI crawlers.",
  },
  {
    label: "Conversational FAQ architecture",
    body: "FAQs written in natural-language Q&A style, with FAQPage schema, so they surface directly in Google AI Overviews, ChatGPT answers, and Bing Copilot responses.",
  },
];

const websiteTypes = [
  {
    label: "Landing page",
    body: "One focused page for an offer, campaign, or product. 1–2 week delivery. ₹35,000–₹75,000.",
  },
  {
    label: "Business / service website",
    body: "5–10 pages with services, locations, FAQs, lead capture, and CMS for blog. 3–5 week delivery. ₹75,000–₹1,50,000.",
  },
  {
    label: "Multi-location / multi-service site",
    body: "Programmatic SEO structure with location pages, service pages, and case studies. 4–8 week delivery. ₹1,50,000–₹2,50,000.",
  },
  {
    label: "Headless CMS website",
    body: "Sanity / Contentful / Strapi-driven content with marketing-team editable templates. 4–8 week delivery. ₹1,20,000–₹2,50,000.",
  },
  {
    label: "AI-native website",
    body: "Embedded AI chat, AI-powered search, AI-generated personalised landing pages, and llms.txt + GEO defaults. ₹1,50,000–₹3,50,000.",
  },
  {
    label: "Website redesign",
    body: "Replatform from WordPress / Wix to Next.js with full URL mapping, redirects, and SEO migration plan. ₹75,000–₹2,50,000.",
  },
];

const faqs = [
  {
    q: "How much does website development cost in India?",
    a: "A high-quality business website typically ranges from ₹35,000 to ₹1,50,000 based on page count, CMS needs, and integration complexity. Conversion-focused multi-page builds usually sit in the ₹75,000 to ₹2,50,000 range. AI-native websites with embedded chat and personalisation start at ₹1,50,000.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most website projects are delivered in 2-8 weeks. A focused landing page can ship in 1-2 weeks, while a full content and service website usually takes 4-8 weeks. Programmatic SEO sites with 50+ pages take 6-10 weeks.",
  },
  {
    q: "Will my website be SEO-optimized from day one?",
    a: "Yes. RisonAI Tech implements technical SEO basics during development: clean URL structure, JSON-LD schema, sitemap, robots, OpenGraph, semantic HTML, image optimization, and Core Web Vitals tuning. We also include llms.txt for AI search engines.",
  },
  {
    q: "What is GEO (generative engine optimization)?",
    a: "GEO is the practice of structuring a website so AI search engines (ChatGPT, Perplexity, Claude, Gemini) can understand, cite, and recommend the business in AI-generated answers. RisonAI Tech bakes GEO defaults into every site: structured schema graph, llms.txt, entity-rich content, and FAQPage markup.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "Both, based on goals and budget. We can start with a premium baseline and customize heavily, or build fully custom interfaces where conversion strategy requires it. Template-based builds are faster; custom builds win on differentiation.",
  },
  {
    q: "Can you redesign my existing website without losing rankings?",
    a: "Yes. We plan URL mapping, redirects, metadata migration, and performance checks before launch to protect rankings and avoid SEO regression. We also re-submit the new sitemap to Search Console and monitor 30 days post-launch for crawl issues.",
  },
  {
    q: "Will the site be easy to manage after launch?",
    a: "Yes. RisonAI Tech provides editable content workflows (CMS integrations, text-content patterns, image swap UX) and handover docs so your team can update text, pages, and media without developer dependency.",
  },
  {
    q: "Do you write the website copy?",
    a: "Optional. We can write conversion-focused copy ourselves or work with your in-house copywriter using our content briefs. Copywriting adds 1–2 weeks and ₹15,000–₹50,000 to scope depending on page count.",
  },
  {
    q: "What CMS do you support?",
    a: "Sanity (default), Contentful, Strapi, Payload CMS, and headless WordPress. We also build custom CMS layers when content models are unique (real-estate listings, healthcare directories, multi-location sites).",
  },
  {
    q: "Will my site rank in ChatGPT and Perplexity answers?",
    a: "Visibility in AI-generated answers depends on three things: structured data (JSON-LD), citation-friendly content (entity definitions, FAQs, statistics), and external authority signals (mentions, backlinks). RisonAI Tech handles the on-site half completely; the off-site half compounds over months of content publishing.",
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

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Website Development", url: "/services/website-development" },
  ]),
  serviceSchema({
    id: "website-development",
    name: "Website Development",
    serviceType: "Website Development",
    description:
      "High-performance Next.js websites engineered for Core Web Vitals, SEO, AI-search visibility (GEO), and conversions — built by RisonAI Tech for Indian businesses.",
    url: "/services/website-development",
    priceRange: "₹35,000 – ₹3,50,000",
    offers: [
      { name: "Landing page", description: "Focused single-page build, 1–2 week delivery", price: "35000" },
      { name: "Business website", description: "5–10 page site with CMS, 3–5 week delivery", price: "75000" },
      { name: "Multi-location / AI-native website", description: "Programmatic SEO + GEO, 4–8 week delivery", price: "150000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech ships a high-performance website",
    description:
      "An eight-stage process from audit to launch and handover for Next.js website projects.",
    totalTime: "P56D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">Website Development</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              Websites engineered for{" "}
              <span className="grad-text">speed, SEO, and AI search</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds high-performance, SEO-optimized Next.js websites that help your
              business rank on Google, surface in ChatGPT and Perplexity answers, and convert
              visitors into leads. From focused landing pages to full multi-page business platforms.
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
              From ₹35,000 · 2–8 week delivery · SEO + GEO + performance focused
            </p>
          </div>
        </div>
      </section>

      {/* AI summary block */}
      <section className="bg-[#fafbff] py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech provides website development services in India.</strong> The
              company builds Next.js + TypeScript + Tailwind websites with built-in SEO (JSON-LD
              schema, sitemap, robots, OG, semantic HTML), GEO defaults (llms.txt, entity-rich
              content, FAQPage markup), and Core Web Vitals tuning (LCP &lt; 2.5s, INP &lt; 200ms,
              CLS &lt; 0.1). Landing pages start at ₹35,000 (1–2 weeks); business websites
              ₹75,000–₹1,50,000 (3–5 weeks); multi-location and AI-native sites ₹1,50,000–₹3,50,000
              (4–8 weeks).
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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
          <h2 className="font-display text-3xl font-bold text-brand-dark">
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

      {/* Website types */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Website types we build
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((wt) => (
              <div className="card-base p-5" key={wt.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {wt.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{wt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-search / GEO playbook */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How we build for AI search (GEO) by default
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
            Generative engine optimization is the practice of structuring a site so AI search
            engines can understand, cite, and recommend it. Every site we ship includes the
            following.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {aiSeoPlaybook.map((row) => (
              <div className="card-base p-5" key={row.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {row.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our website delivery process
          </h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, idx) => (
              <li className="card-base p-5" key={step.name}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  Step {idx + 1}
                </p>
                <h3 className="mt-1 font-semibold text-brand-dark">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Get Free Website Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
