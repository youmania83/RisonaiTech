import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Gauge, Bot } from "lucide-react";

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

export default function AiSearchAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [softwareSchema, howToSchema, faqSchema, breadcrumbSchema],
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[#05070F] pt-[120px] pb-20">
        {/* Decorative glows — match site style */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full blur-[80px] opacity-30"
          style={{ background: "rgba(99,91,255,0.35)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-40 h-[400px] w-[400px] rounded-full blur-[80px] opacity-20"
          style={{ background: "rgba(14,165,233,0.35)" }}
        />

        <div className="container-site relative">
          {/* ─── Header ───────────────────────────────────────────── */}
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a78bfa]"
              style={{
                background: "rgba(99,91,255,0.08)",
                border: "1px solid rgba(99,91,255,0.22)",
              }}
            >
              <Sparkles size={12} />
              Free AI SEO Tool
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              AI Search Ranking Audit
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Enter your website URL or business name — get your AI visibility
              score in seconds. See exactly how ChatGPT, Perplexity, Claude and
              Gemini view your brand, and what to fix first.
            </p>
          </div>

          {/* ─── Tool ─────────────────────────────────────────────── */}
          <div className="mx-auto mt-10 max-w-3xl">
            <AiAuditTool variant="page" />
          </div>

          {/* ─── Trust strip ──────────────────────────────────────── */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Feature
              icon={<Gauge size={16} className="text-[#a78bfa]" />}
              title="Instant score"
              body="0–100 score, A–F grade, factor breakdown — under 10 seconds."
            />
            <Feature
              icon={<Bot size={16} className="text-[#a78bfa]" />}
              title="AI-engine aware"
              body="Reasons about ChatGPT, Perplexity, Claude, Gemini and AI Overviews."
            />
            <Feature
              icon={<ShieldCheck size={16} className="text-[#a78bfa]" />}
              title="No signup, no spam"
              body="Free, anonymous, rate-limited. We don't store your input."
            />
          </div>

          {/* ─── Long-form SEO content (crawler food) ─────────────── */}
          <article className="mx-auto mt-20 max-w-3xl space-y-6 text-white/70">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              What this AI visibility audit measures
            </h2>
            <p className="leading-relaxed">
              Search is changing. In 2026, more than 30% of high-intent queries
              never reach a results page — users get their answer directly from
              ChatGPT Search, Perplexity, Claude, Google AI Overviews or
              Gemini. If those engines don't surface your brand, you lose the
              click before it ever existed. This is the problem
              <strong className="text-white"> AI Search Optimization (GEO / AEO)</strong>{" "}
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

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              How to interpret your score
            </h2>
            <ul className="space-y-3 leading-relaxed">
              <li>
                <strong className="text-white">85–100 (A):</strong> Strong
                authority — you're likely cited by AI engines for category
                queries. Focus on defending the moat.
              </li>
              <li>
                <strong className="text-white">70–84 (B):</strong> Visible but
                inconsistent — you appear for some queries but not the most
                valuable ones. Tighten schema and topical depth.
              </li>
              <li>
                <strong className="text-white">55–69 (C):</strong> Discoverable
                but rarely cited — engines see you, but don't trust you enough
                to quote you. Build factual density and external mentions.
              </li>
              <li>
                <strong className="text-white">40–54 (D):</strong> Largely
                invisible — limited schema, weak brand signals, sparse content.
                Foundational work needed.
              </li>
              <li>
                <strong className="text-white">Below 40 (F):</strong> Effectively
                invisible to AI search. This is where most Indian SMBs are
                today — and where the biggest wins are.
              </li>
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
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
                href="/services/ai-automation"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
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
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/55">{body}</p>
    </div>
  );
}
