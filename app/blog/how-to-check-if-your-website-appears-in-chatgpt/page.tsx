import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "How to Check If Your Website Appears in ChatGPT and AI Search | RisonAI Tech" },
  description:
    "Learn how to check whether your website appears in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. Includes a free AI visibility audit workflow.",
  keywords: [
    "how to check if website appears in ChatGPT",
    "ChatGPT visibility checker",
    "how to see if my website is in AI search",
    "Perplexity visibility check",
    "Google AI Overviews website audit",
    "free AI visibility audit",
    "AI search ranking audit",
    "how to rank in AI search",
    "website AI visibility score",
    "AI SEO audit tool",
  ],
  alternates: { canonical: "/blog/how-to-check-if-your-website-appears-in-chatgpt" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "How to Check If Your Website Appears in ChatGPT and AI Search",
    description:
      "A practical workflow to check your website's AI visibility across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.",
    url: "https://risonaitech.com/blog/how-to-check-if-your-website-appears-in-chatgpt",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Check If Your Website Appears in ChatGPT and AI Search",
    description:
      "Use this workflow to test your AI visibility and find out why your website is or is not being cited in AI answers.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "How can I check whether my website appears in ChatGPT?",
    a: "You can check whether your website appears in ChatGPT by searching your key commercial and informational queries in ChatGPT Search, then noting whether your brand is cited, linked, or mentioned in the answer. The faster method is to use an AI visibility audit tool that estimates whether your website has the structured data, entity signals, and factual density needed to be cited reliably.",
  },
  {
    q: "Why does my website rank in Google but not appear in AI answers?",
    a: "A website can rank in traditional search and still fail in AI answers because answer engines need more than rank position. They need clear entity signals, direct-answer content, structured data, factual density, and citation-worthy passages. Ranking helps, but it does not guarantee inclusion in AI-generated answers.",
  },
  {
    q: "Which AI search engines should I check?",
    a: "At minimum, check ChatGPT Search, Perplexity, Google AI Overviews, Gemini, and Claude. These systems have different retrieval and citation behavior, so a brand may appear in one and be absent in another. A proper audit compares visibility across all major answer engines rather than assuming one platform represents all of AI search.",
  },
  {
    q: "Is there a free way to audit AI visibility?",
    a: "Yes. RisonAI Tech offers a free AI Search Ranking Audit that lets you enter your domain or business name and see a visibility score, grade, factor breakdown, and prioritized recommendations. It is designed as a fast GEO and AEO baseline for websites that want to attract traffic from AI search.",
  },
  {
    q: "What should I do if my site is invisible in ChatGPT or Perplexity?",
    a: "Start by fixing the basics: entity clarity, FAQ content, service definitions, location context, schema markup, llms.txt, and direct-answer paragraphs for the queries buyers actually ask. If those basics are weak, answer engines usually choose competitor sources that are easier to trust and quote.",
  },
  {
    q: "How often should I check my website's AI visibility?",
    a: "For most businesses, a monthly AI visibility check is enough. If you are publishing new content, launching services, or actively improving your GEO posture, checking every two weeks can help you spot whether your changes are making the site easier for answer engines to cite.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "How to Check If Your Website Appears in ChatGPT", url: "/blog/how-to-check-if-your-website-appears-in-chatgpt" },
  ]),
  articleSchema({
    title: "How to Check If Your Website Appears in ChatGPT and AI Search",
    description:
      "Learn how to check whether your website appears in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews, plus how to improve weak AI visibility.",
    url: "/blog/how-to-check-if-your-website-appears-in-chatgpt",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    wordCount: 1650,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function CheckWebsiteInAiSearchPost() {
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
              How to Check If Your Website Appears in ChatGPT, Perplexity, and Google AI Overviews
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              If your buyers are using AI search, you need to know whether your website is actually being cited. This guide shows how to check your AI visibility manually and how to run a faster free audit.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-13">13 June 2026</time>
              <span>·</span>
              <span>9 min read</span>
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
                To check if your website appears in ChatGPT and AI search, search your highest-value queries in ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews, then note whether your brand is cited or linked. The faster option is to run a <Link href="/tools/ai-search-audit" className="text-[#c4b5fd] underline underline-offset-2">free AI search audit</Link> that estimates whether your site has the trust signals answer engines need.
              </p>
            </div>

            <div className="card-base p-6 mb-10 not-prose">
              <p className="mb-2 text-sm font-semibold text-[#a78bfa]">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "Checking only Google rankings is no longer enough if buyers are getting answers directly from AI tools.",
                  "You should test brand queries, service queries, comparison queries, and problem-solution queries separately.",
                  "A site can rank in SEO but still fail to earn citations in AI search because of weak structure or weak entity signals.",
                  "A free AI visibility audit gives you a faster baseline than doing everything manually.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#10B981]" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why this check matters in 2026
            </h2>
            <p className="text-white/65 leading-relaxed">
              Buyers now ask AI systems questions like &quot;best AI automation agency in India&quot;, &quot;how to automate lead qualification with AI&quot;, or &quot;who builds custom AI agents for websites&quot; before they ever click through to a website. If your brand is missing from those answers, you are losing discovery before your analytics even registers the search.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              That is why visibility checks matter. They tell you whether answer engines understand your entity, trust your pages, and consider your content quote-worthy. Without that check, businesses often keep investing in content that ranks modestly in SEO but never earns citations in AI experiences.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              The manual way to check your AI visibility
            </h2>
            <ol className="mt-4 list-decimal space-y-4 pl-5 text-white/65">
              <li>
                Make a query list. Include your brand name, your main service name, buyer-problem queries, and comparison queries.
              </li>
              <li>
                Search each query in ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews where available.
              </li>
              <li>
                Track whether your brand is mentioned, linked, paraphrased, or absent.
              </li>
              <li>
                Note which competitor sources appear repeatedly. These are usually the websites with stronger structure, stronger authority, or stronger answer formatting.
              </li>
              <li>
                Repeat the same process after major content changes so you can see whether your GEO work is improving real visibility.
              </li>
            </ol>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              The faster method: run a free AI search audit
            </h2>
            <p className="text-white/65 leading-relaxed">
              Manual checking is useful, but it is slow and subjective. A better first step is to use a tool that estimates your citation readiness. The <Link href="/tools/ai-search-audit" className="text-[#c4b5fd] underline underline-offset-2">RisonAI Tech AI Search Ranking Audit</Link> looks at structured data, brand authority, factual density, AI crawler accessibility, topical clarity, and geographic specificity to produce a visibility score and grade.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              That matters because most businesses do not need a mystery solved. They need a prioritized list. If your site is missing FAQ schema, weak on entity clarity, and vague in its service pages, that shows up immediately in an audit and gives you a better starting point than random content changes.
            </p>

            <div className="mt-12 rounded-2xl p-7 not-prose" style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}>
              <p className="font-semibold text-white">
                Want to check your site right now?
              </p>
              <p className="mt-2 text-sm text-white/55">
                Enter your domain or brand name and get a free AI visibility score in seconds. No signup, no sales trap, just a practical baseline.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/tools/ai-search-audit" className="inline-flex items-center gap-2 btn-primary">
                  Run the free AI search audit <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  Need implementation help? <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              What to do if you are not appearing in AI answers
            </h2>
            <div className="not-prose space-y-3 mt-4">
              {[
                {
                  title: "Fix your entity layer",
                  desc: "Make your brand name, services, location, and contact details consistent across the site and linked profiles. AI systems need a clean entity to cite.",
                },
                {
                  title: "Create direct-answer content",
                  desc: "Lead with the answer in the first paragraph. AI systems cite pages that solve the query immediately, not pages that hide the answer under vague marketing copy.",
                },
                {
                  title: "Strengthen schema and FAQs",
                  desc: "Service, FAQ, Article, Breadcrumb, and Organization schema help answer engines parse your content faster and with less ambiguity.",
                },
                {
                  title: "Publish narrower commercial pages",
                  desc: "Pages like 'AI workflow automation for real estate agencies' or 'AI customer support agent for small business' are easier to match to real buyer prompts than one broad services page.",
                },
              ].map((item) => (
                <div key={item.title} className="card-base p-5">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.desc}</p>
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
                desc: "Check your website's AI visibility score, factor breakdown, and next actions in seconds.",
              },
              {
                href: "/blog/why-your-website-is-not-showing-in-ai-search",
                tag: "Guide",
                title: "Why your website is not showing in AI search",
                desc: "Nine common reasons AI engines skip your brand and how to fix each one.",
              },
              {
                href: "/contact",
                tag: "Get help",
                title: "Talk to RisonAI Tech",
                desc: "If the audit shows weak visibility, we can implement GEO fixes across structure, content, and schema.",
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