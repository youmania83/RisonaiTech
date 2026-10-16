import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Compass,
  Layers,
  Database,
  Cpu,
  ShieldAlert,
  FileCode,
  Network,
  Share2,
  TrendingUp,
  LineChart,
  Bot,
  Building2,
  HeartPulse,
  Briefcase,
  ShoppingBag,
  ExternalLink,
  HelpCircle,
  BarChart,
  Sparkles,
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
  title: {
    absolute: "AI Search Visibility (AEO & GEO) Services | Rison AI Tech",
  },
  description:
    "Strengthen your business discoverability across AI-powered search engines with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). Enterprise AI search visibility strategies by Rison AI Tech.",
  keywords: [
    "AI search visibility",
    "AEO services",
    "GEO services",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI SEO services",
    "ChatGPT optimization",
    "Perplexity optimization",
    "Google AI Overviews optimization",
    "enterprise AI search",
    "brand entity optimization",
    "structured data for AI",
    "AI citation readiness",
    "conversational search optimization",
    "topical authority strategy",
    "AI search consulting India",
    "Rison AI Tech",
  ],
  alternates: { canonical: "/services/aeo-geo-optimization" },
  openGraph: {
    title: "AI Search Visibility (AEO & GEO) Services | Rison AI Tech",
    description:
      "Help your business become easier to discover and understand across AI-powered search engines through structured information, technical optimization, and authoritative content.",
    url: "https://risonaitech.com/services/aeo-geo-optimization",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Visibility (AEO & GEO) Services | Rison AI Tech",
    description:
      "Enterprise Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO) by Rison AI Tech. Zero exaggerated claims, pure technical intelligence.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

// ─── AEO Services ─────────────────────────────────────────────────────────────
const aeoServices = [
  {
    icon: Search,
    title: "AI Answer Readiness Audit",
    benefit: "Determine how easily search systems parse your core offerings into concise answers.",
    desc: "We evaluate whether your existing website content, documentation, and pricing structures can be directly extracted by answer engines and conversational systems to fulfill user intent.",
  },
  {
    icon: Compass,
    title: "Conversational Search Intent Analysis",
    benefit: "Capture complex, multi-turn business queries that traditional keyword research misses.",
    desc: "We analyze natural language prompt patterns and conversational syntax used by decision-makers to structure content that answers multi-variable comparison and evaluation queries.",
  },
  {
    icon: Layers,
    title: "Answer-Focused Content Architecture",
    benefit: "Deliver modular content blocks optimized for extraction into direct answers and snippets.",
    desc: "We organize pages into atomic, self-contained semantic units featuring question-first headings, direct explanatory summaries, and tabular comparisons that AI engines can quote with precision.",
  },
  {
    icon: FileCode,
    title: "Structured Data & Schema Implementation",
    benefit: "Provide unambiguous semantic context directly to crawlers and language models.",
    desc: "We implement exhaustive JSON-LD schemas (Organization, ProfessionalService, WebSite, BreadcrumbList, TechArticle, FAQPage, HowTo) to anchor entity properties without ambiguity.",
  },
  {
    icon: Database,
    title: "Technical Crawlability Assessment",
    benefit: "Ensure AI retrieval agents and search bots can index your digital assets without barriers.",
    desc: "We review server performance, headless rendering, robots.txt bot rules (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), and clean sitemap structures to eliminate crawler friction.",
  },
  {
    icon: Sparkles,
    title: "Featured Snippet Opportunity Analysis",
    benefit: "Win high-prominence zero-click real estate on conventional and hybrid SERPs.",
    desc: "We identify high-intent commercial queries where structured definition boxes, lists, and tables have the highest probability of earning featured placement in Google and Bing answer panels.",
  },
  {
    icon: BarChart,
    title: "Answer Visibility Measurement",
    benefit: "Track zero-click snippet captures, direct impressions, and query performance over time.",
    desc: "We monitor how frequently your structured answers are surfaced in answer boxes and direct search results, providing actionable insights for continuous content refinement.",
  },
];

// ─── GEO Services ─────────────────────────────────────────────────────────────
const geoServices = [
  {
    icon: Cpu,
    title: "Generative AI Search Visibility Audit",
    benefit: "Understand how leading LLMs perceive, describe, and cite your brand today.",
    desc: "We run standardized diagnostic prompt batteries across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to baseline current brand representation and source citations.",
  },
  {
    icon: Network,
    title: "Brand Entity Optimization",
    benefit: "Establish a unified, verified digital identity across trusted knowledge ecosystems.",
    desc: "We harmonize brand entity attributes across corporate registries, LinkedIn, Wikipedia/Wikidata, industry directories, and official profiles to reinforce identity confidence for knowledge graphs.",
  },
  {
    icon: TrendingUp,
    title: "Topical Authority Development",
    benefit: "Establish undisputed domain depth that generative models reference as foundational knowledge.",
    desc: "We map comprehensive topical clusters and deep technical knowledge hubs that position your brand as the primary reference authority for your niche.",
  },
  {
    icon: Share2,
    title: "AI Citation Readiness",
    benefit: "Format proprietary insights and technical data so LLMs readily quote them as primary sources.",
    desc: "We restructure research, case methodologies, benchmarks, and technical papers into high-factual-density assets engineered for retrieval-augmented synthesis.",
  },
  {
    icon: FileCode,
    title: "Expert Content & Original Research",
    benefit: "Produce uncopyable primary data that third-party AI models treat as verified factual evidence.",
    desc: "We help leadership teams publish first-party benchmarks, empirical industry surveys, and architecture breakdowns that attract authoritative citations across the web.",
  },
  {
    icon: ExternalLink,
    title: "Digital PR & Trusted Brand Mentions",
    benefit: "Earn genuine third-party endorsements in publications that AI models ingest as training corpus.",
    desc: "We develop legitimate media, guest editorial, and industry publication opportunities that generate contextual co-mentions and validate entity credibility.",
  },
  {
    icon: LineChart,
    title: "AI Search Competitor Analysis",
    benefit: "Uncover which competitors are winning AI citations and reverse-engineer their source advantage.",
    desc: "We analyze competitor mentions and cited URLs across generative responses to identify citation gaps, content deficits, and authoritative co-mention opportunities.",
  },
  {
    icon: Bot,
    title: "Brand Mention & Citation Monitoring",
    benefit: "Systematically track sentiment, accuracy, and citation persistence across AI platforms.",
    desc: "We conduct recurring empirical scans to record when and how your brand is cited, alerting you to factual inaccuracies or emerging competitor shifts in generative answers.",
  },
];

// ─── 6-Stage Methodology ──────────────────────────────────────────────────────
const methodologySteps = [
  {
    name: "Discover",
    stage: "Phase 01",
    desc: "Audit the website, brand entity signals, technical SEO architecture, server logs, and bot accessibility rules to uncover existing visibility barriers.",
  },
  {
    name: "Benchmark",
    stage: "Phase 02",
    desc: "Establish rigorous, empirical baselines across major search engines and AI answer engines for target commercial, technical, and comparison queries.",
  },
  {
    name: "Analyze",
    stage: "Phase 03",
    desc: "Identify critical gaps in information modularity, schema coverage, entity disambiguation, crawl accessibility, and external source credibility.",
  },
  {
    name: "Optimize",
    stage: "Phase 04",
    desc: "Implement prioritized technical fixes, rich JSON-LD schemas, and answer-first content refactoring engineered for seamless parsing by language models.",
  },
  {
    name: "Strengthen Authority",
    stage: "Phase 05",
    desc: "Develop authoritative primary research, expert technical documentation, and legitimate third-party citation footprints across trusted publications.",
  },
  {
    name: "Measure & Refine",
    stage: "Phase 06",
    desc: "Continuously review organic search telemetry, brand mention frequency, source citation consistency, and qualified pipeline conversions to guide ongoing strategy.",
  },
];

// ─── Industry Applications ────────────────────────────────────────────────────
const industryApplications = [
  {
    icon: Cpu,
    industry: "SaaS & Technology Companies",
    scenario: "Evaluation & Architecture Queries",
    exampleQuery: '"Which multi-tenant CRM platforms support HIPAA compliance and self-hosted workflow automation?"',
    impact: "Position your software's security specs, API capabilities, and compliance standards so conversational engines recommend your platform during technical vendor evaluations.",
  },
  {
    icon: Building2,
    industry: "Enterprise & B2B Businesses",
    scenario: "Vendor Comparison & Due Diligence",
    exampleQuery: '"Compare enterprise AI automation providers in India with on-premise deployment and SOC-2 audit logs."',
    impact: "Ensure your corporate entity, enterprise credentials, and service capabilities are accurately understood and cited when procurement teams research potential partners.",
  },
  {
    icon: HeartPulse,
    industry: "Healthcare & Clinic Networks",
    scenario: "Specialized Service & Compliance Inquiries",
    exampleQuery: '"How do modern clinic scheduling systems handle multi-location doctor booking with automated patient reminders?"',
    impact: "Structure medical service descriptions, doctor credentials, and clinic intake procedures into unambiguous schema that answer engines surface for local and regional patients.",
  },
  {
    icon: Briefcase,
    industry: "Real Estate & Property Developers",
    scenario: "High-Value Transaction Research",
    exampleQuery: '"What are the top luxury real estate platforms in Delhi NCR featuring verified inventory and location analytics?"',
    impact: "Make property intelligence, neighborhood scores, and developer portfolios readily accessible to high-intent buyers asking complex, multi-criteria relocation questions.",
  },
  {
    icon: HelpCircle,
    industry: "Professional Services & Advisory",
    scenario: "Expertise Validation & Regulatory Guidance",
    exampleQuery: '"What regulatory frameworks govern corporate AI adoption and data residency in India?"',
    impact: "Showcase advisory frameworks, whitepapers, and practitioner credentials so AI search engines cite your senior consultants as authoritative domain experts.",
  },
  {
    icon: ShoppingBag,
    industry: "E-Commerce & D2C Brands",
    scenario: "Product Recommendation & Feature Verification",
    exampleQuery: '"Which conversational commerce tools integrate directly with WhatsApp Business API and Razorpay?"',
    impact: "Clarify product taxonomy, specification tables, and return policies so generative systems surface your brand during high-intent consumer research.",
  },
];

// ─── Deliverables ─────────────────────────────────────────────────────────────
const deliverablesList = [
  "Comprehensive AI Search Visibility Audit report covering search engines and generative models",
  "AEO opportunity assessment identifying high-probability question and snippet targets",
  "Complete technical SEO and JSON-LD schema engineering package (Organization, Service, FAQ, HowTo)",
  "Cross-web brand entity consistency report with directory and profile recommendations",
  "Topical authority roadmap with prioritized content cluster specifications",
  "Competitor AI visibility and citation source benchmark matrix",
  "Modular implementation guides and code samples for development teams",
  "Monthly AI brand mention telemetry, citation monitoring, and verified performance reporting",
];

// ─── Factual Benchmarks ───────────────────────────────────────────────────────
const factualBenchmarks = [
  {
    stat: "Over 50% of commercial B2B research queries now involve AI-assisted search tools.",
    detail:
      "Buyers increasingly consult ChatGPT, Perplexity, Gemini, and Google AI Overviews before contacting sales or requesting a formal proposal.",
  },
  {
    stat: "High factual density increases AI citation probability by up to 3.4×.",
    detail:
      "Language models prioritize content containing verifiable numbers, clear entity definitions, structured tables, and named methodologies over generic marketing prose.",
  },
  {
    stat: "Comprehensive JSON-LD schema disambiguates brand entities for knowledge graphs.",
    detail:
      "Search and answer engines utilize machine-readable schema to link your website directly to recognized real-world organizations, founders, and services.",
  },
  {
    stat: "Zero third-party agencies can guarantee ranking or citation in LLM outputs.",
    detail:
      "AI models generate probabilistic outputs based on dynamic context windows. Credible optimization focuses on information retrieval fundamentals, not deceptive tricks.",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is AI Search Visibility?",
    a: "AI Search Visibility refers to how easily and accurately your business, solutions, and expertise are discovered, understood, mentioned, and cited across modern AI-powered search and conversational answer experiences. It encompasses both traditional search engines evolving with generative features (like Google AI Overviews) and dedicated answer engines (like ChatGPT Search, Perplexity, Claude, and Gemini).",
  },
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "Answer Engine Optimization (AEO) is the technical and content practice of structuring digital information so search engines, voice assistants, and answer engines can easily parse, interpret, and surface it as a direct answer to specific user questions. AEO emphasizes conversational intent, modular Q&A architecture, rich structured data (JSON-LD), and concise, factual clarity.",
  },
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "Generative Engine Optimization (GEO) focuses on improving a brand's discoverability, entity clarity, topical authority, and citation readiness within generative AI search models. GEO emphasizes establishing unambiguous brand entities, deep topical authority, primary data assets, and credible third-party mentions that language models rely on when synthesizing complex, conversational answers.",
  },
  {
    q: "How do AEO and GEO differ from traditional SEO?",
    a: "Traditional SEO primarily optimizes pages for crawler discovery, indexing, keyword positions, and blue link clicks on search engine results pages. AEO optimizes for direct answer extraction, featured snippets, and voice/assistant queries. GEO optimizes for brand understanding, source credibility, and conversational synthesis across generative AI platforms. Rather than competing, traditional SEO provides the essential technical foundation upon which AEO and GEO build.",
  },
  {
    q: "Can Rison AI Tech help businesses appear in ChatGPT responses?",
    a: "Yes. We help businesses optimize their technical crawlability, brand entity consistency, factual density, and authoritative citation footprint across sources that ChatGPT and other LLMs reference during live web search and model grounding. By structuring your content clearly and building genuine topical authority, your brand becomes substantially more accessible and attractive for language models to cite as a reference.",
  },
  {
    q: "Can AI citations or recommendations be guaranteed?",
    a: "No, and any agency claiming to guarantee citations, recommendations, or rankings across ChatGPT, Perplexity, Gemini, or Google AI Overviews is making an untruthful claim. AI search engines produce probabilistic responses influenced by dynamic prompt phrasing, personalization, context, and evolving retrieval algorithms. Rison AI Tech focuses on technically rigorous, empirical strategies that maximize your citation readiness and discoverability without deceptive promises.",
  },
  {
    q: "How long does AI search optimization take to show results?",
    a: "Technical improvements (such as robots.txt updates, JSON-LD schema implementation, and crawl error resolution) typically take 2 to 4 weeks for search bots and AI crawlers to process. Meaningful shifts in conversational visibility, topical authority, and consistent citation readiness across generative engines generally develop over 60 to 120 days as engines recrawl your assets and index authoritative third-party mentions.",
  },
  {
    q: "Does traditional SEO still matter in the AI era?",
    a: "Absolutely. Traditional SEO is not obsolete; it is the structural bedrock of AI visibility. AI-assisted search engines still depend on fast server response times, mobile responsiveness, clean HTML hierarchy, logical site architecture, and robust crawlability. Without a solid technical SEO foundation, advanced AEO and GEO strategies cannot succeed.",
  },
  {
    q: "How is AI search visibility measured?",
    a: "We measure progress using a combination of verified empirical data and structured observation. Verified metrics include organic search impressions, clicks, click-through rates, qualified discovery traffic, and conversion events from search engines. AI-specific visibility is tracked through standardized prompt testing across target commercial queries, monitoring brand citation frequency, observing sentiment and accuracy, and recording source link attribution.",
  },
  {
    q: "How can a business get started with AI Search Visibility?",
    a: "The most effective starting point is an AI Search Visibility Audit. We inspect your current search and answer presence, evaluate your technical schema and crawlability, test your brand entity representation across ChatGPT, Perplexity, and Gemini, and deliver a prioritized roadmap of technical, structural, and content recommendations.",
  },
];

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Search Visibility (AEO & GEO)", url: "/services/aeo-geo-optimization" },
  ]),
  serviceSchema({
    id: "aeo-geo-optimization",
    name: "AI Search Visibility (AEO & GEO) Optimization Services",
    serviceType: "Answer Engine Optimization and Generative Engine Optimization",
    description:
      "Enterprise AEO and GEO services by Rison AI Tech. Help your business become easier to discover, understand, and cite across AI-powered search engines through structured information, technical optimization, and authoritative content.",
    url: "/services/aeo-geo-optimization",
    priceRange: "₹45,000 – ₹2,50,000",
    offers: [
      {
        name: "AI Search Visibility Audit",
        description:
          "Comprehensive diagnostic of current brand representation across search engines, ChatGPT, Perplexity, Gemini, and Google AI Overviews with technical schema roadmap.",
        price: "45000",
      },
      {
        name: "Full AEO & GEO Implementation",
        description:
          "Complete technical schema engineering, answer-first content restructuring, brand entity harmonization, and citation readiness across digital assets.",
        price: "125000",
      },
      {
        name: "Enterprise AI Visibility & Authority Retainer",
        description:
          "Ongoing monthly topical authority development, primary research publishing, competitor citation monitoring, and continuous retrieval optimization.",
        price: "75000",
      },
    ],
  }),
  howToSchema({
    name: "How Rison AI Tech Delivers AI Search Visibility (AEO & GEO)",
    description:
      "A systematic six-stage methodology to audit, structure, optimize, and measure brand discoverability across AI search engines.",
    totalTime: "P90D",
    steps: methodologySteps.map((m) => ({ name: m.name, text: m.desc })),
  }),
  faqSchemaFromPairs(faqs)
);

export default function AEOGEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ── SECTION A: HERO ── */}
      <section className="relative pb-20 pt-36 bg-grid border-b border-[#E5E7EB]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F9F9F9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Enterprise AI Search Visibility · AEO &amp; GEO
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Make Your Business More Visible in the{" "}
              <span className="text-[#2563EB]">AI-Powered Search Era.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#475569] max-w-3xl mx-auto">
              AI is changing how people discover businesses, evaluate solutions, and find answers.
              Rison AI Tech helps organizations strengthen their visibility across AI-powered search
              experiences through Answer Engine Optimization, Generative Engine Optimization,
              technical intelligence, and authoritative digital content.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="btn-primary w-full sm:w-auto text-center justify-center text-sm px-6 py-3.5 shadow-sm"
                href="/tools/ai-search-audit"
              >
                Request an AI Search Visibility Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                className="btn-outline w-full sm:w-auto text-center justify-center text-sm px-6 py-3.5"
                href="#methodology"
              >
                Explore Our Approach
              </Link>
            </div>

            {/* Credibility & Disclaimer Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#64748B]">
              <ShieldAlert size={14} className="text-[#2563EB] shrink-0" />
              <span>
                Zero exaggerated ranking promises · Rooted in information retrieval, structured data, and enterprise AI engineering
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC POSITIONING BLOCK ── */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="container-site">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                Strategic Service Positioning
              </span>
            </div>
            <p className="font-display text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
              &ldquo;Help your business become easier to discover and understand across AI-powered
              search experiences through structured information, authoritative content, technical
              optimization, and measurable AI visibility strategies.&rdquo;
            </p>
            <p className="mt-3 text-sm text-[#475569] leading-relaxed">
              As an AI Automation and Enterprise AI Solutions firm, Rison AI Tech brings deep
              technical fluency in large language models, retrieval-augmented generation (RAG), and
              knowledge graphs to modern search visibility. We treat AI search not as a marketing
              fad, but as an architectural discipline of data structuring and entity authority.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION B: THE SHIFT TO AI-POWERED DISCOVERY ── */}
      <section className="py-20 bg-white" id="the-shift">
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Market Evolution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              The Shift to AI-Powered Discovery
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Customers, enterprise buyers, and decision-makers are no longer just browsing lists of
              links. They increasingly use conversational, AI-assisted interfaces to conduct
              complex evaluation workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Research Companies & Solutions",
                desc: "Prospects ask generative engines to explain how your platform solves specific organizational challenges before visiting your homepage.",
              },
              {
                title: "Compare Vendors Side-by-Side",
                desc: "Buyers prompt engines for objective feature matrices, compliance certifications, pricing models, and architectural tradeoffs.",
              },
              {
                title: "Ask Detailed Technical Questions",
                desc: "CTOs and engineers query specific integration capabilities, API limits, data residency rules, and deployment timelines.",
              },
              {
                title: "Find Contextual Recommendations",
                desc: "Decision-makers request curated shortlists tailored to exact industry constraints, team sizes, and regional requirements.",
              },
              {
                title: "Evaluate Expertise & Credibility",
                desc: "AI systems analyze external publications, case documentation, and author authority to judge whether your company is a genuine domain leader.",
              },
              {
                title: "Traditional SEO as the Bedrock",
                desc: "AI discovery does not replace SEO. High-performance crawlability, indexability, clean HTML, and core web vitals remain the indispensable foundation.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card-base p-6 border border-[#E5E7EB] hover:border-[#0F172A]">
                <span className="text-xs font-mono font-bold text-[#2563EB]">0{idx + 1}.</span>
                <h3 className="font-display text-lg font-bold text-[#0F172A] mt-2">{item.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION C: AEO vs. GEO vs. SEO ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E5E7EB]" id="comparison">
        <div className="container-site">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              The Three Disciplines
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              AEO vs. GEO vs. SEO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Modern visibility requires understanding how traditional search, direct answer
              engines, and generative synthesis connect. They are complementary disciplines, not
              competing replacements.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Traditional SEO */}
            <div className="card-base p-7 bg-white border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Foundation</span>
                <Search size={20} className="text-[#64748B]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F172A]">Traditional SEO</h3>
              <p className="mt-1 text-xs font-semibold text-[#64748B]">Search Engine Optimization</p>
              <div className="mt-5 space-y-3 text-sm text-[#475569]">
                <p>
                  <strong>Core Focus:</strong> Organic discoverability, technical crawlability,
                  indexing, ranking positions, and capturing relevant organic search traffic.
                </p>
                <p>
                  <strong>Primary Delivery:</strong> Keyword targeting, metadata optimization,
                  backlink authority, technical performance, and on-page internal linking.
                </p>
                <p>
                  <strong>User Interaction:</strong> The searcher reviews a list of ranked blue links
                  and clicks through to explore pages individually.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#E5E7EB] text-xs font-medium text-[#64748B]">
                Status: Fundamental foundation required for all online indexing.
              </div>
            </div>

            {/* AEO */}
            <div className="card-base p-7 bg-white border-2 border-[#2563EB] shadow-sm relative">
              <div className="absolute -top-3 right-6 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                Direct Answers
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Extraction</span>
                <Compass size={20} className="text-[#2563EB]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F172A]">AEO</h3>
              <p className="mt-1 text-xs font-semibold text-[#2563EB]">Answer Engine Optimization</p>
              <div className="mt-5 space-y-3 text-sm text-[#475569]">
                <p>
                  <strong>Core Focus:</strong> Clear answers, conversational search intent, modular
                  question-and-answer architecture, and structured answer-readiness.
                </p>
                <p>
                  <strong>Primary Delivery:</strong> Atomic Q&amp;A blocks, exhaustive JSON-LD
                  schemas, definition boxes, comparison tables, and featured snippet optimization.
                </p>
                <p>
                  <strong>User Interaction:</strong> The user receives immediate, direct answers in
                  featured snippets, voice assistants, and search knowledge panels.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#E5E7EB] text-xs font-medium text-[#2563EB]">
                Status: Captures immediate zero-click and high-intent commercial answers.
              </div>
            </div>

            {/* GEO */}
            <div className="card-base p-7 bg-white border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Synthesis</span>
                <Cpu size={20} className="text-[#0F172A]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F172A]">GEO</h3>
              <p className="mt-1 text-xs font-semibold text-[#0F172A]">Generative Engine Optimization</p>
              <div className="mt-5 space-y-3 text-sm text-[#475569]">
                <p>
                  <strong>Core Focus:</strong> Brand entity clarity, topical authority, source
                  credibility, and citation-readiness in multi-source generative responses.
                </p>
                <p>
                  <strong>Primary Delivery:</strong> Primary research, verified entity footprints,
                  high factual density, quote-ready datasets, and legitimate digital co-mentions.
                </p>
                <p>
                  <strong>User Interaction:</strong> The user engages in a conversational dialogue
                  with an AI assistant that synthesizes answers and cites trusted sources.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#E5E7EB] text-xs font-medium text-[#0F172A]">
                Status: Shapes how generative models understand and cite your brand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTUAL BENCHMARKS SECTION ── */}
      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="Empirical observations regarding search retrieval, language model citation behavior, and entity recognition in 2026."
        title="AI Search Visibility: What Empirical Data Shows"
      />

      {/* ── SECTION D: OUR SERVICES (AEO & GEO) ── */}
      <section className="py-24 bg-white" id="services">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              Our AI Search Visibility Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              We separate our services into two clearly defined, high-impact disciplines. Each service
              is delivered through its practical business value rather than generic technical jargon.
            </p>
          </div>

          {/* Service Group 1: AEO Services */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5E7EB]">
              <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                  Answer Engine Optimization (AEO) Services
                </h3>
                <p className="text-sm text-[#64748B]">
                  Structuring information for direct answer extraction, featured snippets, and conversational query resolution.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aeoServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.title} className="card-base p-6 border border-[#E5E7EB]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-9 w-9 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#2563EB]">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h4 className="font-display text-base font-bold text-[#0F172A]">{svc.title}</h4>
                    <p className="mt-2 text-xs font-semibold text-[#2563EB] leading-snug">
                      Value: {svc.benefit}
                    </p>
                    <p className="mt-3 text-sm text-[#475569] leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Group 2: GEO Services */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5E7EB]">
              <div className="h-10 w-10 rounded-xl bg-[#0F172A]/10 flex items-center justify-center text-[#0F172A]">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                  Generative Engine Optimization (GEO) Services
                </h3>
                <p className="text-sm text-[#64748B]">
                  Improving entity authority, knowledge representation, and citation readiness across generative search models.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {geoServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.title} className="card-base p-6 border border-[#E5E7EB]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-9 w-9 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#0F172A]">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h4 className="font-display text-base font-bold text-[#0F172A]">{svc.title}</h4>
                    <p className="mt-2 text-xs font-semibold text-[#0F172A] leading-snug">
                      Value: {svc.benefit}
                    </p>
                    <p className="mt-3 text-sm text-[#475569] leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Technical Disclaimer */}
          <div className="mt-14 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ShieldAlert size={24} className="text-amber-600 shrink-0 mt-1 sm:mt-0" />
            <p className="text-sm leading-relaxed text-amber-900">
              <strong>Transparent Policy:</strong> No agency or engineer can guarantee recommendations,
              citations, or specific rankings across ChatGPT, Gemini, Perplexity, Claude, or Google AI
              Overviews. We do not claim to own or control third-party AI algorithms. We engineer the
              technical, structural, and factual foundations that maximize your likelihood of being
              accurately recognized and cited.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION E: OUR AI-DRIVEN METHODOLOGY ── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E5E7EB]" id="methodology">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Proven Framework
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              Our AI-Driven Methodology
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              A systematic six-stage process designed to eliminate visibility blind spots, structure
              proprietary knowledge, and establish enduring authority in conversational search.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.map((step, idx) => (
              <div key={step.name} className="card-base p-7 bg-white border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    {step.stage}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">Stage {idx + 1} of 6</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A]">{step.name}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-[#64748B]">
            * Delivery incorporates automated telemetry tracking, schema validation scripts, and LLM diagnostic prompts.
          </div>
        </div>
      </section>

      {/* ── SECTION F: INDUSTRY APPLICATIONS ── */}
      <section className="py-24 bg-white" id="industries">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Domain Depth
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              Industry Applications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              How conversational queries manifest across specialized sectors, and how structured
              authority positions organizations to capture high-intent commercial interest.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryApplications.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.industry} className="card-base p-7 border border-[#E5E7EB] flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#2563EB] mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0F172A]">{ind.industry}</h3>
                    <p className="text-xs font-semibold text-[#64748B] mt-1">{ind.scenario}</p>
                    <div className="mt-4 p-3 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB] text-xs font-mono text-[#0F172A] italic">
                      {ind.exampleQuery}
                    </div>
                    <p className="mt-4 text-sm text-[#475569] leading-relaxed">{ind.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION G: DELIVERABLES & MEASUREMENT ── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E5E7EB]" id="deliverables">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Deliverables */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                What You Receive
              </span>
              <h2 className="font-display text-3xl font-extrabold text-[#0F172A] mt-2">
                Agreed Deliverables
              </h2>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Structured documentation, production-ready code, and transparent audit findings
                delivered during the engagement:
              </p>
              <ul className="mt-6 space-y-3.5">
                {deliverablesList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#334155]">
                    <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurement Framework */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                Measurement Framework
              </span>
              <h2 className="font-display text-3xl font-extrabold text-[#0F172A] mt-2">
                Empirical vs. AI Metrics
              </h2>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                We clearly distinguish verified analytics evidence from sampled model observations:
              </p>

              <div className="mt-6 space-y-4">
                <div className="card-base p-5 bg-white border border-[#E5E7EB]">
                  <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Verified Empirical Indicators
                  </h4>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    Tracked through Search Console, analytics telemetry, and server logs:
                  </p>
                  <ul className="mt-2 text-xs text-[#475569] space-y-1 list-disc list-inside">
                    <li>Organic search impressions and clicks</li>
                    <li>Click-through rates (CTR) on direct answer queries</li>
                    <li>Qualified organic sessions and inquiry form conversions</li>
                    <li>Technical crawl bottlenecks and schema syntax errors resolved</li>
                  </ul>
                </div>

                <div className="card-base p-5 bg-white border border-[#E5E7EB]">
                  <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Sampled AI Observations &amp; Sentiment
                  </h4>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    Evaluated through structured diagnostic prompt batteries:
                  </p>
                  <ul className="mt-2 text-xs text-[#475569] space-y-1 list-disc list-inside">
                    <li>Observed brand mentions in ChatGPT, Perplexity, and Gemini prompt runs</li>
                    <li>Source citation persistence and cited destination URLs</li>
                    <li>Factual accuracy of model summaries describing your offerings</li>
                    <li>Competitor co-mention share across commercial discovery prompts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION H: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 bg-white" id="faq">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              Everything You Need to Know About AI Search Visibility
            </h2>
            <p className="mt-4 text-base text-[#475569]">
              Straightforward answers to the most common questions about AEO, GEO, and modern search discoverability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-5 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card-base p-6 border border-[#E5E7EB]">
                <h3 className="font-display text-base font-bold text-[#0F172A] leading-snug">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION I: FINAL CTA & AUDIT ── */}
      <section className="py-20 bg-[#0F172A] text-white" id="audit-request">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-6">
              Take the First Step
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Your Visibility for the Next Era of Search.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Discover how your business appears across search engines and AI-powered answer
              experiences. Identify visibility gaps and build a practical roadmap for stronger digital
              discoverability.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#0F172A] transition-colors hover:bg-slate-100"
                href="/tools/ai-search-audit"
              >
                Request Your AI Search Visibility Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                href="/contact"
              >
                Speak with an AI Architect
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Fixed-fee audits · Enterprise confidential · Scoped by founder Yogesh Kumar Wadhwa
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES & INTERNAL LINKS ── */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="container-site">
          <h2 className="font-display text-xl font-bold text-[#0F172A] mb-6">
            Related Services in the AI Digital Intelligence Ecosystem
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-outline text-xs sm:text-sm" href="/services/ai-consulting">
              AI Strategy Consulting
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/services/ai-automation">
              AI Workflow Automation
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/services/ai-agent">
              Autonomous AI Agents
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/services/website-development">
              Website Development &amp; SEO Architecture
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/services/crm-development">
              CRM &amp; Workflow Automation
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/tools/ai-search-audit">
              Free AI Search Ranking Audit Tool
            </Link>
            <Link className="btn-outline text-xs sm:text-sm" href="/contact">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
