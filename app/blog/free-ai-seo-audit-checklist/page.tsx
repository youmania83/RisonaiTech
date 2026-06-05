import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Free AI SEO Audit Checklist for 2026 | RisonAI Tech" },
  description:
    "Use this free AI SEO audit checklist to improve your website's visibility in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews before paying an agency.",
  keywords: [
    "free AI SEO audit checklist",
    "free GEO audit checklist",
    "AI visibility checklist",
    "AEO checklist",
    "AI search optimization checklist",
    "ChatGPT SEO checklist",
    "Google AI Overviews checklist",
    "website audit for AI search",
    "free AI audit for website",
    "how to improve AI visibility",
  ],
  alternates: { canonical: "/blog/free-ai-seo-audit-checklist" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "Free AI SEO Audit Checklist for 2026",
    description:
      "18 practical checks to improve your website's visibility in AI search before you spend on a full GEO engagement.",
    url: "https://risonaitech.com/blog/free-ai-seo-audit-checklist",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI SEO Audit Checklist for 2026",
    description:
      "A practical GEO and AEO checklist to improve citations in ChatGPT, Perplexity, Gemini, Claude, and AI Overviews.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "What is an AI SEO audit checklist?",
    a: "An AI SEO audit checklist is a structured list of checks used to evaluate whether a website is ready to be cited in answer engines such as ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. It focuses on structured data, entity clarity, direct-answer content, crawl accessibility, and factual density rather than traditional rankings alone.",
  },
  {
    q: "Can I do a GEO audit without hiring an agency?",
    a: "Yes. Many foundational GEO fixes can be identified internally with a checklist and a free AI visibility audit. Businesses often need agency help later for execution speed, content systems, and technical cleanup, but they do not need to start there.",
  },
  {
    q: "What is the most important part of an AI visibility audit?",
    a: "The most important part is whether your website gives answer engines enough confidence to cite it. That usually comes from a combination of entity clarity, direct answers, structured data, and specific facts that can be quoted safely.",
  },
  {
    q: "How do I know which items to fix first?",
    a: "Fix the items that affect discoverability and trust first: crawl access, brand/entity clarity, FAQ and service structure, and page-level factual density. Those changes usually improve AI visibility faster than publishing more broad content.",
  },
  {
    q: "Should I still care about traditional SEO if I want AI traffic?",
    a: "Yes. Traditional SEO still matters because strong pages and authority often influence AI citations. The difference is that AI search needs more extractable, quote-friendly content and stronger machine-readable signals than classic SEO alone.",
  },
  {
    q: "Is there a tool to speed up this checklist?",
    a: "Yes. The RisonAI Tech AI Search Ranking Audit gives you a score, factor breakdown, and recommendations so you can prioritize which checklist items matter most for your website right now.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Free AI SEO Audit Checklist", url: "/blog/free-ai-seo-audit-checklist" },
  ]),
  articleSchema({
    title: "Free AI SEO Audit Checklist for 2026",
    description:
      "18 practical checks to improve your website's visibility in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews before you pay an agency.",
    url: "/blog/free-ai-seo-audit-checklist",
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    wordCount: 1700,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function FreeAiSeoAuditChecklistPost() {
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
                GEO Checklist
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Free AI SEO Audit Checklist for 2026: 18 Things to Fix Before You Pay an Agency
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              If you want your website to show up in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews, start here. This checklist covers the highest-impact GEO fixes before you spend money on consulting.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-12">12 June 2026</time>
              <span>·</span>
              <span>10 min read</span>
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
                A useful AI SEO audit checklist starts with six basics: clear entity information, direct-answer copy, strong service and FAQ pages, schema markup, crawlable AI discovery files, and enough factual density to be cited safely. If you want a faster baseline, run the <Link href="/tools/ai-search-audit" className="text-[#c4b5fd] underline underline-offset-2">free AI search audit</Link> before working through the checklist manually.
              </p>
            </div>

            <div className="card-base p-6 mb-10 not-prose">
              <p className="mb-2 text-sm font-semibold text-[#a78bfa]">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "GEO is not a replacement for SEO, but it needs a different checklist than classic on-page work.",
                  "Entity clarity and direct-answer formatting often create bigger gains than publishing more generic blogs.",
                  "Most sites do not need 50 fixes. They need the right 5 to 8 fixes applied consistently.",
                  "A free AI audit helps you prioritize this checklist based on your current visibility rather than guesswork.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#10B981]" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              What this checklist is designed to catch
            </h2>
            <p className="text-white/65 leading-relaxed">
              An AI SEO audit checklist is not just a list of SEO hygiene tasks renamed for the current trend cycle. It is meant to answer a more specific question: does your website give answer engines enough clarity, confidence, and structured evidence to cite you in generated answers?
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              If the answer is no, the reason is usually visible. The website may not clearly define the business. It may hide its best answers too deep on the page. It may have weak service definitions, weak FAQs, weak machine-readable structure, or thin proof. This checklist is built to surface exactly those gaps.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              The 18-point free AI SEO audit checklist
            </h2>
            <div className="not-prose space-y-3 mt-4">
              {[
                "Your homepage clearly states what you do, who you serve, and where you operate.",
                "Your service pages answer specific buyer questions instead of only listing features.",
                "Each important page has a strong H1 and matching metadata for the actual query it targets.",
                "Your site includes Organization, Service, FAQ, Article, and Breadcrumb schema where relevant.",
                "You have visible contact, location, and brand information on the site.",
                "Your content includes specific numbers, timelines, examples, or pricing ranges that can be quoted.",
                "Your key pages lead with a direct answer within the first 100 words.",
                "Your FAQs are written as self-contained answers, not vague fragments.",
                "Your robots.txt does not block the important AI crawlers you want to allow.",
                "Your sitemap is current and includes your important commercial pages.",
                "You expose a usable llms.txt or equivalent AI-readable summary surface.",
                "Your internal links help AI systems understand page relationships and topic clusters.",
                "You have pages for major industries, use cases, or locations if those matter to your business.",
                "Your brand name is consistent across your site, social profiles, and citations.",
                "Your content avoids generic filler and instead states concrete distinctions.",
                "You have at least a few pages designed to match real buyer prompts in natural language.",
                "Your site includes proof elements such as shipped products, case studies, reviews, or process detail.",
                "You have a repeatable way to test visibility changes after updating content.",
              ].map((item, index) => (
                <div key={item} className="card-base p-5 flex gap-4">
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "rgba(99,91,255,0.2)", border: "1px solid rgba(99,91,255,0.3)" }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm text-white/65 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl p-7 not-prose" style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}>
              <p className="font-semibold text-white">
                Want the checklist prioritized for your site?
              </p>
              <p className="mt-2 text-sm text-white/55">
                Run the audit first. It will tell you whether your real bottleneck is entity trust, structured data, factual density, topical clarity, or AI crawl readiness.
              </p>
              <Link href="/tools/ai-search-audit" className="mt-5 inline-flex items-center gap-2 btn-primary">
                Run the free AI visibility audit <ArrowRight size={15} />
              </Link>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              What to fix first if your checklist score is weak
            </h2>
            <p className="text-white/65 leading-relaxed">
              Start with the items that improve answer quality and trust fastest. In most cases, that means improving homepage and service-page clarity, tightening your FAQ content, adding or fixing schema, and exposing stronger evidence about who you are and what you do. Only after those are clean should you widen your effort into more topic coverage and external mentions.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              This is where many businesses waste effort. They publish more content without fixing the structure that makes content citable. The result is more pages with the same underlying problem. The better sequence is diagnose first, structure second, scale third.
            </p>

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
                desc: "Get a fast score, factor breakdown, and next actions before you pay for a full engagement.",
              },
              {
                href: "/blog/how-to-check-if-your-website-appears-in-chatgpt",
                tag: "Guide",
                title: "How to check if your site appears in ChatGPT",
                desc: "A practical workflow to test brand visibility across the major answer engines.",
              },
              {
                href: "/contact",
                tag: "Get help",
                title: "Need implementation support?",
                desc: "RisonAI Tech can implement GEO fixes across structure, schema, content, and internal linking.",
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