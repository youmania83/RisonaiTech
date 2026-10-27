import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCode2, Search, Database, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Schema Markup for AI Search: JSON-LD Guide for GEO & Perplexity | RisonAI Tech" },
  description:
    "Master structured data for Generative Engine Optimization (GEO). Learn how to write Schema.org JSON-LD that Perplexity, ChatGPT, and Google AI Overviews extract for brand citations.",
  keywords: [
    "schema markup for ai search",
    "json ld for perplexity citations",
    "entity optimization ai overviews",
    "knowledge graph structured data geo",
    "llm fact extraction schema",
    "generative engine optimization schema",
    "aeo structured data guide",
    "sameAs entity disambiguation",
    "faq schema for chatgpt search",
    "geo optimization India",
  ],
  alternates: { canonical: "/blog/schema-markup-for-ai-search-geo" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "Schema Markup for AI Search: JSON-LD Guide for GEO & Perplexity",
    description:
      "A developer and technical SEO guide to implementing JSON-LD schema that Large Language Models parse, verify, and cite in AI-generated answers.",
    url: "https://risonaitech.com/blog/schema-markup-for-ai-search-geo",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schema Markup for AI Search: JSON-LD Guide for GEO & Perplexity",
    description:
      "How to use Schema.org graph structures, entity disambiguation, and verified attributes to win citations in Perplexity, Claude, and Google AI Overviews.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "Why is Schema markup critical for AI search engines like Perplexity and ChatGPT?",
    a: "Unlike traditional search crawlers that rely on keyword frequencies and PageRank link graphs, generative AI models (RAG retrieval engines) need high factual confidence before citing a source. Schema.org JSON-LD provides machine-readable entity disambiguation, pricing ranges, author credentials, and verified corporate relationships (sameAs) that eliminate ambiguity during LLM knowledge retrieval.",
  },
  {
    q: "Which Schema types have the biggest impact on AI search visibility (GEO)?",
    a: "The most impactful schemas for Generative Engine Optimization are: 1) Organization (with Wikidata/LinkedIn sameAs entity mapping), 2) Service & ProfessionalService (with priceRange and explicit offers), 3) FAQPage (direct question/answer pairs for conversational retrieval), 4) Article (with author bio, datePublished, and dateModified), and 5) HowTo (step-by-step procedural workflows).",
  },
  {
    q: "What is the importance of the sameAs attribute in AI entity disambiguation?",
    a: "The sameAs property explicitly links your website's organization entity to authoritative third-party knowledge bases (such as Wikidata, Crunchbase, official Wikipedia pages, LinkedIn, and government registries). This allows LLMs to verify your brand's legitimacy and resolve entity conflicts across disparate web sources.",
  },
  {
    q: "Does nested JSON-LD graph architecture perform better than separate script tags?",
    a: "Yes. Bundling your schemas into a single unified @graph array (connecting the Organization as the publisher of the Article, and the provider of the Service) creates an explicit relational knowledge graph. This is dramatically easier for AI search crawlers to traverse than disconnected standalone script blocks.",
  },
  {
    q: "How can I test whether my schema markup is readable by AI search engines?",
    a: "First, validate your JSON-LD syntax using Google's Rich Results Test and Schema.org Validator. Second, run your domain through RisonAI Tech's Free AI Search Ranking Audit tool to evaluate whether your structured data passes the entity clarity and factual density thresholds required by Perplexity, Gemini, and ChatGPT.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Schema Markup for AI Search & GEO", url: "/blog/schema-markup-for-ai-search-geo" },
  ]),
  articleSchema({
    title: "Schema Markup for AI Search: JSON-LD Guide for GEO & Perplexity",
    description:
      "A complete guide on configuring Schema.org JSON-LD to optimize brand visibility, entity disambiguation, and citations across Generative AI search engines.",
    url: "/blog/schema-markup-for-ai-search-geo",
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
    wordCount: 1950,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function SchemaMarkupGeoPost() {
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
                AI Search & GEO
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Schema Markup for AI Search: JSON-LD Guide for GEO & Perplexity
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              How LLMs read structured data during retrieval-augmented generation (RAG), how to build a unified entity knowledge graph, and the exact JSON-LD schemas that trigger citations in AI search.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-10-27">27 October 2026</time>
              <span>·</span>
              <span>11 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16" style={{ backgroundColor: "#090C18" }} itemScope itemType="https://schema.org/Article">
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
            
            {/* Direct Answer Box for AI Overviews / Featured Snippets */}
            <div className="mb-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 not-prose">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-400">Direct Answer: Structured Data for GEO</p>
              <p className="text-sm leading-relaxed text-white/80">
                In <strong>Generative Engine Optimization (GEO)</strong>, Schema.org JSON-LD acts as a machine-readable truth anchor for AI systems like Perplexity, ChatGPT Search, and Google AI Overviews. While traditional SEO uses schema primarily to win rich snippet badges, AI search engines use structured data to verify facts, cross-reference brand entities against external knowledge bases via <code>sameAs</code> arrays, and extract high-confidence answers for conversational citation.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              How Large Language Models Process Web Pages in 2026
            </h2>
            <p>
              When a user asks Perplexity or Google AI Overviews: <em>&quot;What is the best AI automation agency in Delhi NCR for real estate CRM?&quot;</em>, the underlying retrieval engine does not read web pages like a human browser.
            </p>
            <p>
              The crawler fetches the raw HTML, strips stylistic CSS/JS bloat, and passes the parsed document through an entity extractor. If your website presents only vague marketing adjectives (&quot;cutting-edge solutions&quot;, &quot;synergistic digital innovation&quot;), the LLM assigns a low confidence score to your factual assertions and cites a competitor whose data is structured and unambiguous.
            </p>
            <p>
              By contrast, when your website provides a complete, strongly-typed JSON-LD graph explicitly declaring your legal name, physical coordinates, founder entities, pricing ranges, and verified service catalogs, the AI engine can quote your figures with mathematical certainty.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              The 5 Essential Schema Layers for AI Citations
            </h2>

            <div className="not-prose space-y-4 my-6">
              
              <div className="card-base p-6">
                <div className="flex items-center gap-2">
                  <Database className="text-indigo-400" size={18} />
                  <h3 className="text-base font-bold text-white">1. The Organization Schema (Entity Identity)</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  The bedrock of your brand in AI search. Declares your official <code>@id</code> URI, legal name, founding year, founder profiles, and an exhaustive <code>sameAs</code> array linking to LinkedIn, Crunchbase, GitHub, and corporate directories. This establishes disambiguation so ChatGPT doesn&apos;t confuse your brand with unrelated companies.
                </p>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-indigo-400" size={18} />
                  <h3 className="text-base font-bold text-white">2. Service & ProfessionalService Schema (Commercial Offers)</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Crucial for commercial queries. AI search engines frequently respond to questions like &quot;How much does X service cost?&quot; By embedding explicit <code>priceRange</code> and <code>hasOfferCatalog</code> with itemized price points in INR or USD, your brand becomes the direct citation for cost inquiries.
                </p>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="text-indigo-400" size={18} />
                  <h3 className="text-base font-bold text-white">3. FAQPage Schema (Direct Conversational Q&A)</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Perplexity and ChatGPT Search favor Q&A pairings because they map 1-to-1 with prompt-and-response embeddings. High-density FAQs answering specific implementation questions provide immediate retrieval chunks for RAG pipelines.
                </p>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center gap-2">
                  <FileCode2 className="text-indigo-400" size={18} />
                  <h3 className="text-base font-bold text-white">4. Article & TechArticle Schema (Authorship & Freshness)</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  AI engines heavily penalize stale content. Emitting ISO 8601 <code>datePublished</code> and <code>dateModified</code> timestamps combined with an author entity with verified social credentials signals authoritative recency for 2026 queries.
                </p>
              </div>

              <div className="card-base p-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-indigo-400" size={18} />
                  <h3 className="text-base font-bold text-white">5. BreadcrumbList Schema (Hierarchical Topical Depth)</h3>
                </div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Helps LLMs map your site&apos;s topical cluster architecture (e.g. Home &gt; Services &gt; AI Automation &gt; Workflows), demonstrating structured depth in your vertical.
                </p>
              </div>

            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              Real-World Implementation: The Unified Graph Architecture
            </h2>
            <p>
              A common technical mistake is scattering multiple isolated <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code> tags across a page. AI parsers must reconstruct relationships between those floating objects.
            </p>
            <p>
              Instead, industry-leading technical SEO uses the <code>@graph</code> pattern to connect every node into a unified relational graph:
            </p>

            <div className="not-prose my-6 rounded-xl border border-white/10 bg-slate-950 p-5 font-mono text-xs text-white/80 overflow-x-auto">
              <pre>{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://risonaitech.com/#organization",
      "name": "RisonAI Tech",
      "url": "https://risonaitech.com",
      "sameAs": [
        "https://www.linkedin.com/company/risonai-tech",
        "https://twitter.com/risonaitech"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://risonaitech.com/services/aeo-geo-optimization#service",
      "name": "AI Search Visibility (AEO & GEO) Services",
      "provider": { "@id": "https://risonaitech.com/#organization" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "priceRange": "₹45,000 – ₹1,80,000"
      }
    }
  ]
}`}</pre>
            </div>

            <p>
              Notice how the <code>provider</code> in the Service node references the Organization&apos;s exact <code>@id</code>. This tells the LLM with 100% certainty that Rison AI Tech is the verified provider of this specialized service.
            </p>

            <div className="my-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/60 p-6 not-prose">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Search className="text-indigo-400" size={20} />
                Test Your Website&apos;s AI Search Readiness
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Want to know whether your structured data and content are currently visible to ChatGPT, Perplexity, and Claude? Run our free interactive AI Search Ranking Audit.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/tools/ai-search-audit" className="btn-primary text-xs py-2 px-4">
                  Run Free AI Search Audit <ArrowRight size={14} />
                </Link>
                <Link href="/services/aeo-geo-optimization" className="btn-secondary text-xs py-2 px-4">
                  View Enterprise GEO Services
                </Link>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              Common Structured Data Mistakes That Block AI Citations
            </h2>
            <ul>
              <li>
                <strong>Vague or Missing Pricing:</strong> Omitting price ranges forces LLMs to rely on third-party aggregator guesses when answering cost questions.
              </li>
              <li>
                <strong>Failing to Disambiguate with sameAs:</strong> If your company name contains common dictionary words without Wikidata or LinkedIn cross-links, AI engines may confuse your offerings with unrelated international brands.
              </li>
              <li>
                <strong>Mismatch Between On-Page Text and Schema:</strong> If your JSON-LD claims a service costs ₹30,000 but the visible page text says ₹50,000, AI fact-checking engines flag an internal hallucination risk and discard the citation entirely.
              </li>
              <li>
                <strong>Stale Modified Dates:</strong> Pages claiming &quot;2026 Guide&quot; with a <code>dateModified</code> from 2023 will be bypassed by Perplexity in favor of provably fresh sources.
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-6">
              Frequently Asked Questions
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

      {/* Cross-linking to relevant services and related blogs */}
      <section className="py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Next Steps & Related Reading</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/aeo-geo-optimization",
                tag: "Core Service",
                title: "AEO & GEO Optimization Services",
                desc: "Discover how Rison AI Tech helps brands optimize entity signals, content architecture, and AI search rankings.",
              },
              {
                href: "/tools/ai-search-audit",
                tag: "Free Tool",
                title: "AI Search Ranking Audit Tool",
                desc: "Instantly check your website's visibility across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.",
              },
              {
                href: "/blog/free-ai-seo-audit-checklist",
                tag: "Checklist",
                title: "18-Point AI SEO Audit Checklist",
                desc: "Review the full 2026 checklist covering technical crawlability, entity disambiguation, and factual density.",
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
