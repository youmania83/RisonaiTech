import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Automation for Indian SMEs: What Actually Works in 2025 | RisonAI Tech",
  description:
    "Most AI automation projects fail because businesses automate the wrong things first. The prioritisation framework we use with 40+ Indian clients to get measurable ROI in under 90 days.",
  keywords: [
    "AI automation for small business India",
    "AI workflow automation SME India",
    "business process automation India 2025",
    "AI ROI India",
    "AI automation company India",
    "automation for Indian business",
  ],
  alternates: { canonical: "/blog/ai-automation-for-indian-smes" },
  openGraph: {
    title: "AI Automation for Indian SMEs: What Actually Works in 2025",
    description:
      "The prioritisation framework 40+ Indian businesses use to pick the right automation workflows and see ROI in under 90 days.",
    url: "https://risonaitech.com/blog/ai-automation-for-indian-smes",
  },
};

const faqItems = [
  {
    q: "What is the cheapest AI automation workflow I can start with?",
    a: "A lead qualification agent that reads inbound WhatsApp or form messages, scores intent, and creates a CRM task typically costs ₹30,000–₹50,000 and delivers measurable ROI within weeks. It's the most common starting point for Indian SMEs.",
  },
  {
    q: "How long does it take to automate a business process with AI?",
    a: "A single well-scoped workflow takes 2–3 weeks to build and deploy. A multi-workflow automation suite takes 4–8 weeks. The discovery and scoping phase (1 week) is the most important step — it determines whether the project succeeds.",
  },
  {
    q: "What tools does RisonAI Tech use for AI automation?",
    a: "We use Python, LangChain, OpenAI and Anthropic APIs, n8n for orchestration, WhatsApp Business API, and native CRM APIs (HubSpot, Zoho). For RPA we use Playwright and custom browser agents. Everything is cloud-deployed on AWS or GCP.",
  },
  {
    q: "Do I need a big IT team to run AI automation?",
    a: "No. Most of our SME clients have zero in-house developers. We build systems with monitoring dashboards, alerts, and human-in-the-loop controls so your operations team can manage them without writing code.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "AI Automation for Indian SMEs", url: "/blog/ai-automation-for-indian-smes" },
  ]),
  articleSchema({
    title: "AI Automation for Indian SMEs: What Actually Works in 2025",
    description:
      "Most AI automation projects fail because businesses automate the wrong things first. Here's the prioritisation framework we use with 40+ Indian clients to get measurable ROI in under 90 days.",
    url: "/blog/ai-automation-for-indian-smes",
    datePublished: "2025-04-20",
    dateModified: "2025-05-10",
    wordCount: 1200,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function AiAutomationSMEPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pb-10 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <Link
                href="/blog"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(99,91,255,0.1)",
                  border: "1px solid rgba(99,91,255,0.2)",
                  color: "#a78bfa",
                }}
              >
                AI Automation
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              AI Automation for Indian SMEs: What Actually Works in 2025
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              Most AI automation projects fail because businesses automate the wrong things first.
              Here&apos;s the prioritisation framework we use with 40+ Indian clients to pick the
              right workflows and get measurable ROI in under 90 days.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2025-04-20">20 April 2025</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article
        className="py-16"
        style={{ backgroundColor: "#090C18" }}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">

            <div className="card-base p-6 mb-10 not-prose">
              <p className="text-sm font-semibold text-[#a78bfa] mb-2">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "Automate high-volume, repetitive tasks first — not complex judgment calls",
                  "Lead qualification and follow-up are the highest-ROI starting points for most Indian SMEs",
                  "A ₹40,000 automation can replace ₹3–5 lakh/year in manual staff time",
                  "Human-in-the-loop checkpoints are non-negotiable for irreversible actions",
                  "Most projects see measurable results within 6 weeks of deployment",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="text-[#10B981] mt-0.5 flex-shrink-0" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why most AI automation projects fail
            </h2>
            <p className="text-white/65 leading-relaxed">
              In 2024 and 2025, we audited the failed automation efforts of 12 Indian SMEs before
              they came to us. The #1 reason for failure was not the technology — it was picking
              the wrong process to automate. Businesses tried to automate complex judgment calls
              (like sales negotiations or strategic reporting) when the highest-value opportunity
              was sitting in their inbox: 200 unread WhatsApp messages from leads who had already
              moved on.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              The second most common failure: no human-in-the-loop checkpoint. Fully autonomous
              systems that could take irreversible actions — send emails, update CRM records,
              trigger payments — without a human review step created expensive mistakes that
              eroded trust in the entire automation program.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              The prioritisation framework we actually use
            </h2>
            <p className="text-white/65 leading-relaxed">
              Before writing a single line of code, we score every candidate automation workflow on
              four dimensions:
            </p>
            <ol className="mt-4 space-y-4 list-none pl-0 not-prose">
              {[
                {
                  n: "1",
                  title: "Volume",
                  desc: "How many times does this task happen per week? Anything under 20 times/week is rarely worth automating. At 50+ times/week, the ROI calculation is almost always positive.",
                },
                {
                  n: "2",
                  title: "Rule-based clarity",
                  desc: "Can the steps be written down as a clear if/then decision tree? If a 22-year-old with no context could follow the instructions in 2 hours, AI can do it. If it requires years of institutional knowledge, start elsewhere.",
                },
                {
                  n: "3",
                  title: "Cost of latency",
                  desc: "What happens if this task is done 4 hours late instead of instantly? For lead response, the cost is enormous — Indian B2C conversion rates drop by 80% if response takes more than 5 minutes. For internal reporting, latency is irrelevant.",
                },
                {
                  n: "4",
                  title: "Error reversibility",
                  desc: "If the AI makes a mistake, how bad is it? Sending a slightly wrong WhatsApp message is recoverable. Deleting database records is not. High-irreversibility workflows need human checkpoints, which adds cost and complexity.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="card-base p-5 flex gap-4"
                >
                  <span
                    className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "rgba(99,91,255,0.2)", border: "1px solid rgba(99,91,255,0.3)" }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/55 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              The 5 workflows with the highest ROI for Indian SMEs
            </h2>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              1. Lead qualification and routing (₹30,000–₹60,000)
            </h3>
            <p className="text-white/65 leading-relaxed">
              An AI agent reads inbound messages from WhatsApp, your website contact form, and
              email. It extracts intent, scores urgency, enriches with context (business size,
              industry, location), and creates a prioritised CRM task assigned to the right
              salesperson — in under 30 seconds, 24/7. A healthcare client reduced their lead
              response time from 4 hours to 90 seconds. Their conversion rate increased by 43%.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              2. Follow-up sequence automation (₹25,000–₹50,000)
            </h3>
            <p className="text-white/65 leading-relaxed">
              72% of deals are lost because nobody followed up, not because the prospect wasn&apos;t
              interested. An AI system monitors your CRM for stale deals (no activity in X days),
              drafts a personalised follow-up message based on the deal context, and either sends it
              automatically or queues it for one-click approval. A real estate client recovered
              ₹8,00,000 in stalled deals in the first month.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              3. Document processing and data extraction (₹40,000–₹80,000)
            </h3>
            <p className="text-white/65 leading-relaxed">
              If your team spends time manually reading invoices, purchase orders, medical forms, or
              property documents to extract data into a spreadsheet or CRM, this is low-hanging
              fruit. Modern vision-language models (GPT-4o, Claude 3.5) extract structured data
              from PDFs and images with 95%+ accuracy. One logistics company eliminated 3 hours
              of daily manual data entry.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              4. Customer support deflection (₹20,000–₹45,000)
            </h3>
            <p className="text-white/65 leading-relaxed">
              A RAG (retrieval-augmented generation) chatbot trained on your product documentation,
              FAQs, and past support tickets can handle 60–80% of incoming queries without a human.
              The remaining complex cases are escalated with full context. This works on WhatsApp,
              your website, and internal Slack channels.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              5. Automated reporting and intelligence (₹35,000–₹70,000)
            </h3>
            <p className="text-white/65 leading-relaxed">
              An AI agent pulls data from your CRM, ad accounts, analytics, and operations tools
              every week, generates a structured summary with highlights and anomalies, and delivers
              it to your leadership team by Monday morning. No dashboards to check. No spreadsheets
              to update. Just a clear narrative on what happened and what needs attention.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              What to expect from your first 90 days
            </h2>
            <p className="text-white/65 leading-relaxed">
              A realistic timeline for an Indian SME starting their first AI automation project:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0 not-prose">
              {[
                { week: "Week 1–2", label: "Discovery and scoping", desc: "Process audit, candidate workflow scoring, architecture design, fixed-price proposal." },
                { week: "Week 3–5", label: "Build and integrate", desc: "Core automation built, connected to your CRM/WhatsApp/email, tested against real data." },
                { week: "Week 6", label: "Deploy and monitor", desc: "Live deployment, monitoring dashboards, team training, SLA on response time." },
                { week: "Week 7–12", label: "Optimise and expand", desc: "Refine based on real usage, add exception paths, begin scoping a second workflow." },
              ].map((row) => (
                <li key={row.week} className="card-base p-4 grid grid-cols-[90px_1fr] gap-3 text-sm">
                  <span className="text-[#a78bfa] font-semibold">{row.week}</span>
                  <div>
                    <p className="text-white font-medium">{row.label}</p>
                    <p className="text-white/50 mt-0.5">{row.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-12 rounded-2xl p-7 not-prose"
              style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}
            >
              <p className="font-semibold text-white">
                Ready to identify which processes to automate first?
              </p>
              <p className="mt-2 text-sm text-white/55">
                We offer a free 30-minute process audit call where we map your operations and score
                the top 3 automation candidates by ROI — no obligation.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 btn-primary"
              >
                Book a free audit call <ArrowRight size={15} />
              </Link>
            </div>

            {/* FAQ */}
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

      {/* Back to blog */}
      <section className="py-10" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
