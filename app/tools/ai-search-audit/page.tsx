import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Gauge, Bot, CheckCircle2 } from "lucide-react";

import AiAuditTool from "@/components/AiAuditTool";

const BASE_URL = "https://risonaitech.com";
const PAGE_URL = `${BASE_URL}/tools/ai-search-audit`;

export const metadata: Metadata = {
  title: { absolute: "Free AI Search Ranking Audit | Check AI Visibility | RisonAI Tech" },
  description:
    "Free AI search ranking audit by RisonAI Tech. Enter your website URL or business name and instantly see how visible your brand is to ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews. Powered by DeepSeek + Anthropic SDK.",
  keywords: [
    "AI search ranking audit",
    "AI visibility score",
    "AI SEO audit",
    "ChatGPT SEO checker",
    "Perplexity ranking checker",
    "Generative engine optimization",
    "GEO audit",
    "LLM visibility",
    "AI search optimization India",
    "answer engine optimization",
    "AEO audit tool",
    "AI search ranking tool",
    "free AI SEO audit",
    "free GEO audit",
    "free AI visibility audit for website",
    "AI search audit tool",
    "website AI visibility checker",
    "free website GEO audit",
    "check website visibility in ChatGPT",
    "how to rank in AI search",
    "free AI search audit for business",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Free AI Search Ranking Audit — RisonAI Tech",
    description:
      "Check your AI visibility score in seconds. See how ChatGPT, Perplexity, Claude and Gemini see your brand — and what to fix.",
    url: PAGE_URL,
    siteName: "RisonAI Tech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Free AI Search Ranking Audit by RisonAI Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Search Ranking Audit — RisonAI Tech",
    description:
      "Enter your URL or business name. Get your AI visibility score in seconds — free.",
    site: "@risonaitech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Structured data ───────────────────────────────────────────────────────
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${PAGE_URL}#tool`,
  name: "AI Search Ranking Audit",
  alternateName: "RisonAI Visibility Score",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (Web)",
  url: PAGE_URL,
  description:
    "Free AI search ranking audit. Enter a website URL or business name and instantly get an AI visibility score across ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews — with prioritised recommendations.",
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  provider: { "@id": `${BASE_URL}/#organization` },
  featureList: [
    "AI visibility score (0–100)",
    "Letter grade (A–F)",
    "Per-factor breakdown with weights",
    "Strengths and gaps detection",
    "Prioritised optimisation recommendations",
    "AI crawler readiness check (robots.txt, schema, factual density)",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Business owners, marketers, founders, SEO professionals",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to run an AI search ranking audit",
  description:
    "Run a free AI visibility audit on RisonAI Tech to see how AI search engines rank your brand.",
  totalTime: "PT30S",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter your website URL or business name",
      text: "Type your domain (e.g. example.com) or your registered business name into the audit box.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Click ‘Get AI Visibility Score’",
      text: "RisonAI’s engine analyses your brand signals across ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review your score and recommendations",
      text: "You get a 0–100 visibility score, a letter grade, scoring factors, strengths, gaps and prioritised next actions.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI search ranking audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI search ranking audit estimates how visible your brand is on AI answer engines like ChatGPT Search, Perplexity, Claude, Gemini and Google AI Overviews. It scores brand authority, structured data, factual density, AI crawler accessibility and topical clarity — then recommends fixes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the AI visibility audit free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The RisonAI Tech AI Search Ranking Audit is 100% free, requires no signup, and returns a score in seconds. We rate-limit to keep it fair.",
      },
    },
    {
      "@type": "Question",
      name: "How is the AI visibility score calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tool evaluates brand authority signals, structured data, AI crawler accessibility (robots.txt, llms.txt, schema.org), topical clarity, geographic specificity and content freshness. Each factor is weighted to produce a 0–100 score and a letter grade.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from traditional SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO ranks you in Google’s 10 blue links. AI Search Optimization (also called GEO or AEO) decides whether ChatGPT, Perplexity, Claude or Gemini cite your brand in their answers. The signals overlap but are not identical — factual density, structured data and brand authority matter more for AI engines.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI engines does the audit cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit reasons about ChatGPT Search, Perplexity, Claude, Google Gemini and Google AI Overviews — the major answer engines as of 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can RisonAI Tech help me improve my score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RisonAI Tech offers AI Search Optimisation (GEO/AEO) engagements where we implement the audit’s recommendations — schema.org rollout, content restructuring, brand authority building and AI crawler enablement. Contact us for a scoped quote.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools/ai-search-audit` },
    { "@type": "ListItem", position: 3, name: "AI Search Ranking Audit", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Free AI Search Audit for Websites: Check Your Visibility in ChatGPT, Perplexity and Google AI Overviews",
  description:
    "Run a free AI search audit for your website and check how visible your brand is across ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews. Learn what the score means and how to improve it.",
  url: PAGE_URL,
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  author: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "RisonAI Tech",
  },
  publisher: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "RisonAI Tech",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  inLanguage: "en-IN",
};

const keyTakeaways = [
  "Use the free audit when you want to know whether ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews can confidently cite your brand.",
  "A low score usually means weak structured data, thin factual content, weak brand mentions, or blocked AI crawlers rather than one isolated SEO issue.",
  "The fastest wins usually come from better FAQ content, entity clarity, schema markup, llms.txt, and pages written in direct-answer format.",
  "This tool is designed for founders, marketers, local businesses, SaaS teams, agencies, clinics, and service businesses that want free AI visibility feedback before paying for consulting.",
];

const auditSignals = [
  {
    name: "Brand authority",
    text: "Whether AI engines can identify your company as a real entity with a clear name, service category, location, and supporting mentions across the web.",
  },
  {
    name: "Structured data",
    text: "Whether your website uses usable schema markup, clear service definitions, FAQ content, and machine-readable signals that help answer engines extract facts quickly.",
  },
  {
    name: "Factual density",
    text: "Whether your pages contain quotable information such as pricing, timelines, numbers, locations, use cases, and direct answers instead of vague marketing copy.",
  },
  {
    name: "AI crawler accessibility",
    text: "Whether bots can reach your key pages and supporting files like robots.txt, sitemap.xml, llms.txt, and other discovery surfaces without friction.",
  },
  {
    name: "Topical clarity",
    text: "Whether a model can tell what you do, who you serve, and which problems you solve from the page structure, headings, metadata, and surrounding content.",
  },
  {
    name: "Geographic specificity",
    text: "Whether your site clearly ties your services to the cities, regions, or countries where you actually want to be discovered in AI answers.",
  },
];

const improvementSteps = [
  {
    step: "1. Make your entity obvious",
    text: "Use the exact business name, service category, founder or organization details, location, and contact information consistently across the site and supporting profiles.",
  },
  {
    step: "2. Add direct-answer content",
    text: "Create pages that answer buyer questions in the first 100 words. AI engines reward passages that can stand alone without requiring extra context.",
  },
  {
    step: "3. Strengthen schema markup",
    text: "Deploy Organization, LocalBusiness, Service, FAQ, Article, and Breadcrumb schema where relevant so AI systems can read page meaning with less ambiguity.",
  },
  {
    step: "4. Improve llms.txt and crawl surfaces",
    text: "Expose a clean llms.txt, an up-to-date sitemap, and accessible robots rules so AI crawlers and retrieval systems can discover your highest-value pages.",
  },
  {
    step: "5. Publish specific proof",
    text: "Include concrete use cases, pricing ranges, implementation steps, benchmarks, screenshots, and FAQs. Specificity increases citation odds far more than generic claims.",
  },
  {
    step: "6. Build supporting mentions",
    text: "Third-party references, business profiles, reviews, and brand mentions help models trust that your company is legitimate and worth citing.",
  },
];

const scoreBands = [
  {
    band: "85–100 (A)",
    text: "Strong authority. Your brand is likely being surfaced for category and comparison queries. The focus is defending relevance and expanding coverage.",
  },
  {
    band: "70–84 (B)",
    text: "Good visibility but inconsistent citation. You probably appear for some prompts but not the highest-value commercial searches yet.",
  },
  {
    band: "55–69 (C)",
    text: "Discoverable but weakly trusted. AI engines can find you, but your pages need more clarity, factual density, and authority signals to earn citations.",
  },
  {
    band: "40–54 (D)",
    text: "Low visibility. Your site likely lacks enough structure, entity context, or topic depth for AI search systems to use confidently.",
  },
  {
    band: "Below 40 (F)",
    text: "Effectively invisible in AI search. This is common for small businesses and new sites, and it usually means foundational GEO work is still missing.",
  },
];

const visibleFaqs = [
  {
    q: "What is a free AI search audit?",
    a: "A free AI search audit checks how visible your website or brand is across AI answer engines such as ChatGPT Search, Perplexity, Claude, Gemini, and Google AI Overviews. It estimates whether your site is easy for these systems to discover, understand, and cite.",
  },
  {
    q: "Who should use this AI visibility audit?",
    a: "This audit is useful for founders, marketers, local businesses, agencies, SaaS teams, clinics, e-commerce brands, and service companies that want to know whether they are appearing in AI-generated answers before spending on a full consulting engagement.",
  },
  {
    q: "Is this different from a normal SEO audit?",
    a: "Yes. A traditional SEO audit focuses on rankings in standard search results. An AI search audit focuses on whether answer engines can extract facts about your business, trust your content, and include your brand in generated responses.",
  },
  {
    q: "How long does the free audit take?",
    a: "The tool returns a visibility score, factor breakdown, and next actions in seconds. It is meant to be a fast first-pass diagnostic rather than a multi-week enterprise audit.",
  },
  {
    q: "What should I do after getting my score?",
    a: "Start with the highest-priority gaps: entity clarity, FAQ content, schema markup, llms.txt, and stronger direct-answer pages. Once the basics are in place, improve citations, third-party mentions, and supporting proof across the site.",
  },
  {
    q: "Can RisonAI Tech fix the issues found in the audit?",
    a: "Yes. RisonAI Tech offers GEO and AEO implementation for businesses that want help improving AI visibility through content restructuring, schema rollout, internal linking, entity optimization, and AI crawler readiness.",
  },
];

export default function AiSearchAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [softwareSchema, howToSchema, faqSchema, breadcrumbSchema, articleSchema],
          }),
        }}
      />

      <section className="relative overflow-hidden bg-white pt-[120px] pb-20 bg-grid">
        {/* Decorative glows — match site style */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full blur-[80px] opacity-25"
          style={{ background: "rgba(99,91,255,0.2)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-40 h-[400px] w-[400px] rounded-full blur-[80px] opacity-15"
          style={{ background: "rgba(14,165,233,0.2)" }}
        />

        <div className="container-site relative">
          {/* ─── Header ───────────────────────────────────────────── */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-pill">
              <Sparkles size={12} />
              Free AI SEO Tool
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              AI Search Ranking Audit
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Enter your website URL or business name — get your AI visibility
              score in seconds. See exactly how ChatGPT, Perplexity, Claude and
              Gemini view your brand, and what to fix first.
            </p>
            {new Date() < new Date("2026-07-18T00:00:00Z") && (
              <div className="mt-6 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <a href="https://launchbuff.com" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
                </a>
              </div>
            )}
          </div>

          {/* ─── Tool ─────────────────────────────────────────────── */}
          <div id="audit-tool" className="mx-auto mt-10 max-w-3xl">
            <AiAuditTool variant="page" />
          </div>

          {/* ─── Trust strip ──────────────────────────────────────── */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Feature
              icon={<Gauge size={16} className="text-indigo-600" />}
              title="Instant score"
              body="0–100 score, A–F grade, factor breakdown — under 10 seconds."
            />
            <Feature
              icon={<Bot size={16} className="text-indigo-600" />}
              title="AI-engine aware"
              body="Reasons about ChatGPT, Perplexity, Claude, Gemini and AI Overviews."
            />
            <Feature
              icon={<ShieldCheck size={16} className="text-indigo-600" />}
              title="No signup, no spam"
              body="Free, anonymous, rate-limited. We don't store your input."
            />
          </div>

          {/* ─── Long-form SEO content (crawler food) ─────────────── */}
          <article
            className="mx-auto mt-20 max-w-3xl space-y-6 text-slate-700"
            itemScope
            itemType="https://schema.org/Article"
          >
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 px-6 py-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
                TL;DR - Direct Answer
              </p>
              <p className="text-base leading-relaxed text-slate-800">
                A free AI search audit shows whether your website is discoverable, understandable, and citable in answer engines like ChatGPT,
                Perplexity, Claude, Gemini, and Google AI Overviews. If your brand is not being cited in AI answers, you are losing high-intent
                traffic before the click ever reaches your site. This page lets you run that audit for free and understand exactly what to fix first.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
              <p className="mb-3 text-sm font-semibold text-indigo-650">Key takeaways</p>
              <ul className="space-y-2">
                {keyTakeaways.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-emerald-600" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Free AI search audit for websites: what it actually tells you
            </h2>
            <p className="leading-relaxed">
              A website can rank in traditional SEO and still be weak in AI search. That happens when answer engines can crawl the page but cannot
              confidently extract who you are, what you do, where you operate, and why your content should be cited. A proper GEO audit closes that
              gap by measuring citation readiness, not just rank position.
            </p>
            <p className="leading-relaxed">
              This matters because more buyers now search in conversational form: <strong className="text-slate-900">best AI automation agency in India</strong>,{" "}
              <strong className="text-slate-900">how to improve AI visibility for my website</strong>, or <strong className="text-slate-900">free audit for ChatGPT rankings</strong>.
              If your site is not structured for those queries, AI engines will answer with someone else.
            </p>

            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              What this AI visibility audit measures
            </h2>
            <p className="leading-relaxed">
              Search is changing. In 2026, more than 30% of high-intent queries
              never reach a results page — users get their answer directly from
              ChatGPT Search, Perplexity, Claude, Google AI Overviews or
              Gemini. If those engines don&apos;t surface your brand, you lose the
              click before it ever existed. This is the problem{" "}
              <strong className="text-slate-900">AI Search Optimization (GEO / AEO)</strong>{" "}
              solves, and this audit is the first step.
            </p>

            <p className="leading-relaxed">
              Our audit estimates how AI answer engines perceive your brand
              along six dimensions: brand authority signals, structured data
              and factual density, AI crawler accessibility, topical clarity,
              geographic specificity (important for Indian businesses), and
              content freshness. It returns a 0–100 score, a letter grade, a
              per-factor breakdown, and prioritised next actions.
            </p>

            <div className="space-y-3 not-prose">
              {auditSignals.map((signal) => (
                <div
                  key={signal.name}
                  className="rounded-xl p-5 bg-slate-50/50 border border-slate-200"
                >
                  <p className="text-sm font-semibold text-slate-900">{signal.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{signal.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Who should run this free GEO audit
            </h2>
            <p className="leading-relaxed">
              This tool is most useful if your business depends on trust-heavy searches where buyers compare options before contacting you. That
              includes local service businesses, SaaS startups, AI agencies, healthcare clinics, real-estate firms, consultants, and e-commerce
              brands with a strong support or education layer.
            </p>
            <p className="leading-relaxed">
              If you already have traffic but want more of it from zero-click discovery and AI-generated answers, this page gives you a fast baseline.
              If you have almost no visibility today, it tells you which foundations to fix before investing in a larger SEO or GEO program.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              How to interpret your score
            </h2>
            <div className="space-y-3 not-prose">
              {scoreBands.map((item) => (
                <div
                  key={item.band}
                  className="rounded-xl p-5 bg-slate-50/50 border border-slate-200"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.band}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-650">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              AI search audit vs traditional SEO audit
            </h2>
            <div className="not-prose overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(99,91,255,0.05)" }}>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Area</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Traditional SEO audit</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">AI search audit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Primary outcome", "Better rankings in search results", "More citations and mentions in AI answers"],
                    ["Main surfaces", "Google and Bing result pages", "ChatGPT, Perplexity, Claude, Gemini, AI Overviews"],
                    ["What matters most", "Keywords, backlinks, indexing, page quality", "Entity clarity, extractability, schema, factual density, crawl readiness"],
                    ["Typical content format", "Optimized landing pages and blogs", "Direct-answer passages, FAQs, entity pages, machine-readable content"],
                    ["Winning metric", "Rank, CTR, organic traffic", "Citation likelihood, answer presence, brand recall in AI outputs"],
                  ].map((row) => (
                    <tr key={row[0]} style={{ borderTop: "1px solid #E2E8F0" }}>
                      <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                      <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                      <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-12 rounded-2xl p-7"
              style={{ background: "rgba(99,91,255,0.05)", border: "1px solid rgba(99,91,255,0.15)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Free audit CTA</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">
                Run the free audit before you spend on GEO consulting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-650">
                If your business site is not yet visible in AI answers, the fastest next step is to benchmark it now, fix the biggest structural gaps,
                and then decide whether you need implementation help. The tool is free, instant, and requires no signup.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="#audit-tool" className="btn-primary">
                  Use the audit above
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/blog/what-is-ai-automation"
                  className="btn-outline"
                >
                  Read more about AI-driven growth
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              How to improve your AI visibility after the audit
            </h2>
            <div className="space-y-3 not-prose">
              {improvementSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl p-5 bg-slate-50/50 border border-slate-200"
                >
                  <p className="text-sm font-semibold text-indigo-600">{item.step}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-650">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently asked questions about the free AI website audit
            </h2>
            <div className="space-y-3 not-prose">
              {visibleFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl p-5 bg-slate-50/50 border border-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-650">{faq.a}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Want help implementing the recommendations?
            </h2>
            <p className="leading-relaxed">
              RisonAI Tech builds AI Search Optimisation programs for Indian
              businesses — schema rollout, content restructuring, brand
              authority building, and llms.txt / AI crawler enablement.
              Engagements start at ₹40,000 for a 30-day sprint.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="btn-primary">
                Talk to RisonAI Tech
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/blog/ai-automation-for-small-businesses"
                className="btn-outline"
              >
                Read the small-business AI playbook
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/ai-automation"
                className="btn-outline"
              >
                Explore AI Automation Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl p-5 bg-slate-50 border border-slate-200/60 shadow-sm">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-semibold text-slate-900">{title}</p>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
