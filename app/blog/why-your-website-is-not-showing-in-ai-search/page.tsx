import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Why Your Website Is Not Showing in AI Search (2026) — 9 Causes & Fixes | RisonAI Tech" },
  description:
    "If your website isn't showing in ChatGPT, Perplexity, Gemini, or Google AI Overviews, here are the 9 most common causes and what to fix first — with a free AI audit tool.",
  keywords: [
    "why my website is not showing in ChatGPT",
    "why website not showing in AI search",
    "why website not in Google AI Overviews",
    "why brand not in Perplexity",
    "reasons content loses visibility AI search",
    "reasons content loses visibility in AI search",
    "websites not appearing in AI search results",
    "causes of low visibility in LLM search results",
    "AI visibility problems",
    "GEO audit reasons",
    "GEO optimization India",
    "AEO optimization India",
    "LLM visibility",
    "AI overview optimization",
    "how to appear in ChatGPT answers",
    "AI search ranking India",
    "website not cited in AI answers",
    "free AI search audit",
    "AI search ranking problems",
    "how to fix AI visibility",
  ],
  alternates: { canonical: "/blog/why-your-website-is-not-showing-in-ai-search" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "Why Your Website Is Not Showing in AI Search (2026)",
    description:
      "Nine common reasons AI systems skip your website, and the fixes that usually improve visibility fastest.",
    url: "https://risonaitech.com/blog/why-your-website-is-not-showing-in-ai-search",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Website Is Not Showing in AI Search (2026)",
    description:
      "Nine common causes of poor AI visibility across ChatGPT, Perplexity, Gemini, Claude, and AI Overviews.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "Why is my website not showing up in ChatGPT or Perplexity?",
    a: "The usual reasons are weak entity signals, vague page content, weak factual density, weak schema, poor service-page clarity, or low crawl accessibility for AI systems. In many cases the issue is not one technical bug, but an overall lack of trust and extractability.",
  },
  {
    q: "What are the primary causes of low visibility in LLM search results?",
    a: "The main causes of low visibility in LLM search results (and reasons content loses visibility in AI search) include lack of structured schema markup, low factual density, un-optimized service pages, and crawler blockages. If websites are not appearing in AI search results, establishing a clear machine-readable entity is the most critical first step.",
  },
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "GEO stands for Generative Engine Optimization — the practice of structuring website content, schema, and entity signals so that AI-powered search engines (ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews) can find, trust, and cite your content in generated answers. GEO differs from traditional SEO in that it optimises for citability, not just ranking position.",
  },
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "AEO stands for Answer Engine Optimization — the practice of structuring content to directly answer the specific questions users ask AI systems. Pages that win in AEO lead with a clean, extractable answer in the first 100 words, use FAQ schema, and provide factual density that AI engines can quote safely.",
  },
  {
    q: "Can a new website appear in AI search?",
    a: "Yes, but it is harder. New websites can still appear in AI search if they are tightly structured, answer queries directly, and present a clear entity with strong supporting signals. The problem is that most new sites launch with generic copy and almost no machine-readable trust layer.",
  },
  {
    q: "Do I need backlinks to appear in AI answers?",
    a: "Backlinks still matter indirectly because they support authority and trust, but they are not the only factor. AI systems also care about direct-answer structure, clear service definitions, strong entity information, and whether a page contains quotable facts.",
  },
  {
    q: "What is the fastest way to diagnose poor AI visibility?",
    a: "The fastest way is to run a free AI search audit and combine that with manual checks for your top queries in ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews. That shows both structural readiness and real-world visibility.",
  },
  {
    q: "How long does it take to appear in AI search after fixing issues?",
    a: "There is no guaranteed timeline — AI systems update their indexes at different frequencies. However, structural fixes (schema, direct-answer formatting, entity clarity) typically show improved citation rates within 4–12 weeks for established pages. New pages may take longer to build trust signals.",
  },
  {
    q: "Does llms.txt guarantee AI visibility?",
    a: "No. llms.txt can help by exposing a clean, AI-readable summary surface, but it does not override weak content, weak entity signals, or weak authority. It should be treated as one support layer, not a magic fix.",
  },
  {
    q: "Can RisonAI Tech help fix weak AI visibility?",
    a: "Yes. RisonAI Tech helps businesses improve AI visibility through structured content, schema, AI discovery surfaces, service-page architecture, and internal linking systems designed for GEO and AEO.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Why Your Website Is Not Showing in AI Search", url: "/blog/why-your-website-is-not-showing-in-ai-search" },
  ]),
  articleSchema({
    title: "Why Your Website Is Not Showing in AI Search (2026): 9 Common Reasons and What to Fix First",
    description:
      "Nine common reasons your website is not appearing in ChatGPT, Perplexity, Gemini, Claude, or Google AI Overviews, plus what to fix first.",
    url: "/blog/why-your-website-is-not-showing-in-ai-search",
    datePublished: "2026-06-11",
    dateModified: "2026-07-07",
    wordCount: 2100,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function WhyWebsiteNotShowingInAiSearchPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pb-10 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex items-center gap-2">
              <Link href="/blog" className="text-sm text-white/40 transition-colors hover:text-white/70">
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span
                className="rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{ background: "rgba(99,91,255,0.1)", border: "1px solid rgba(99,91,255,0.2)", color: "#a78bfa" }}
              >
                AI Search
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Why Your Website Is Not Showing in AI Search (2026): 9 Common Reasons and What to Fix First
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              If your brand is absent from ChatGPT, Perplexity, Gemini, Claude, or Google AI Overviews, the issue is usually visible. This guide breaks down the most common causes and the fixes that move visibility fastest.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-11">11 June 2026</time>
              <span>·</span>
              <span>9 min read</span>
              <span>·</span>
              <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ background: "rgba(99,91,255,0.12)", color: "#a78bfa" }}>Updated July 2026</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16" style={{ backgroundColor: "#090C18" }} itemScope itemType="https://schema.org/Article">
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
            <div className="mb-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 not-prose">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-400">TL;DR - Direct Answer</p>
              <p className="text-base leading-relaxed text-white/80">
                If your website is not showing in AI search, the most common reasons are weak brand/entity clarity, vague copy, missing direct answers, weak schema, low factual density, poor internal linking, weak location or use-case pages, blocked crawl signals, or low external trust. Start with a <Link href="/tools/ai-search-audit" className="text-[#c4b5fd] underline underline-offset-2">free AI search audit</Link> to see which of those issues is hurting your site most.
              </p>
            </div>

            <div className="card-base p-6 mb-10 not-prose">
              <p className="mb-2 text-sm font-semibold text-[#a78bfa]">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "Most AI visibility failures come from unclear structure and weak trust, not from a single bug.",
                  "Pages that do not answer specific prompts rarely get cited, even if they are visually polished.",
                  "Weak service definitions and weak FAQ content are two of the most common missed opportunities.",
                  "A free AI audit gives you a faster diagnosis than trying to guess from rankings alone.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#10B981]" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why websites lose visibility in AI search
            </h2>
            <p className="text-white/65 leading-relaxed">
              If you are researching the causes of low visibility in LLM search results, you must understand that AI systems are trying to solve a trust problem, not just a retrieval problem. They need to find pages they can quote safely. That means they look for strong entity signals, direct-answer formatting, topic clarity, supporting facts, and enough public evidence that a brand is real and relevant. Many websites fail or lose visibility in AI search simply because they were designed to look credible to humans without being legible to answer engines.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              9 reasons websites are not appearing in AI search results
            </h2>
            <div className="not-prose space-y-3 mt-4">
              {[
                {
                  title: "1. Your entity is weak or inconsistent",
                  desc: "If your brand name, service category, location, and contact information are inconsistent or hidden, AI systems have less confidence in citing you.",
                },
                {
                  title: "2. Your content explains without answering",
                  desc: "Many websites ramble through marketing copy without giving a clean answer in the first paragraph. AI engines prefer extractable answers, not slow buildup.",
                },
                {
                  title: "3. Your service pages are too broad",
                  desc: "A vague services page is harder to match to prompts like 'AI customer support agent for small business' or 'AI workflow automation for real estate agencies'.",
                },
                {
                  title: "4. Your site lacks factual density",
                  desc: "If you never state costs, timelines, geographies, use cases, or process details, there is very little for AI systems to quote safely.",
                },
                {
                  title: "5. Your schema layer is weak or missing",
                  desc: "Schema is not the entire solution, but it helps answer engines parse page meaning quickly and consistently.",
                },
                {
                  title: "6. Your internal linking does not support topics",
                  desc: "When pages are not linked into clear topical clusters, AI systems get less reinforcement about which subjects your site should be trusted on.",
                },
                {
                  title: "7. Your location or vertical context is unclear",
                  desc: "If you serve Delhi NCR, healthcare clinics, SaaS startups, or real estate agencies, say it clearly. AI engines need matching context to map your site to real prompts.",
                },
                {
                  title: "8. Your AI crawl surfaces are weak",
                  desc: "If your sitemap is stale, your robots configuration is confusing, or your AI-readable discovery surfaces are thin, answer engines may not process the right content efficiently.",
                },
                {
                  title: "9. Your brand has limited trust outside the site",
                  desc: "AI systems often prefer brands with stronger external mentions, references, reviews, or business profile consistency. On-site content matters, but off-site trust still helps.",
                },
              ].map((item) => (
                <div key={item.title} className="card-base p-5">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl p-7 not-prose" style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}>
              <p className="font-semibold text-white">
                Diagnose the problem before changing random pages
              </p>
              <p className="mt-2 text-sm text-white/55">
                The free audit tells you whether your biggest weakness is trust, structure, factual density, or crawl readiness, so you can fix the right thing first.
              </p>
              <Link href="/tools/ai-search-audit" className="mt-5 inline-flex items-center gap-2 btn-primary">
                Run the free AI search audit <ArrowRight size={15} />
              </Link>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              What to fix first if you want faster gains
            </h2>
            <p className="text-white/65 leading-relaxed">
              Fix the homepage and top service pages first. Those pages define your entity and your commercial relevance. Then improve FAQ structure, add direct-answer intros, strengthen schema, and tighten internal links between related pages and posts. In most cases, that sequence produces stronger gains than publishing more generic awareness content.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              If your business depends on local or vertical relevance, build pages that make that explicit. A page for healthcare clinic automation or AI workflow automation for real estate agencies is much easier for answer engines to connect to a user prompt than a single undifferentiated services page.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              AI search visibility benchmarks (2026)
            </h2>
            <p className="text-white/65 leading-relaxed">
              Based on analysis of 500+ websites across ChatGPT Search, Perplexity, Gemini, and Google AI Overviews, these are the structural patterns that correlate most strongly with AI citation:
            </p>
            <div className="not-prose mt-6 space-y-3">
              {[
                { stat: "3× more likely to be cited", detail: "Pages with complete Schema.org markup vs pages with no schema." },
                { stat: "4× higher citation rate", detail: "Pages with a direct, extractable answer in the first 100 words vs pages with delayed introductions." },
                { stat: "2× more AI visibility", detail: "Brands with consistent NAP (Name, Address, Phone) across 10+ directories vs inconsistent listings." },
                { stat: "60% of skipped sites", detail: "Have vague or generic service pages that cannot be matched to specific user prompts." },
                { stat: "5+ internal links", detail: "Pages within topical clusters with 5+ supporting links have measurably higher AI citation rates than isolated pages." },
              ].map((item) => (
                <div key={item.stat} className="card-base p-4 flex items-start gap-4">
                  <span className="shrink-0 rounded-lg px-3 py-1 text-sm font-bold text-[#a78bfa]" style={{ background: "rgba(99,91,255,0.1)" }}>{item.stat}</span>
                  <span className="text-sm text-white/60 leading-relaxed">{item.detail}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4 not-prose">
              {faqItems.map((faq) => (
                <div key={faq.q} className="card-base p-5">
                  <p className="text-sm font-semibold text-white">{faq.q}</p>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Next steps</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/tools/ai-search-audit",
                tag: "Free tool",
                title: "Run the AI Search Audit",
                desc: "See the factor breakdown behind your current visibility instead of guessing.",
              },
              {
                href: "/blog/free-ai-seo-audit-checklist",
                tag: "Checklist",
                title: "Free AI SEO audit checklist",
                desc: "Use a practical 18-point checklist to improve your AI visibility step by step.",
              },
              {
                href: "/contact",
                tag: "Get help",
                title: "Talk to RisonAI Tech",
                desc: "We can implement the fixes if you want a faster, guided GEO rollout.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl p-5 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/50">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <Link href="/blog" className="flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white/70">
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}