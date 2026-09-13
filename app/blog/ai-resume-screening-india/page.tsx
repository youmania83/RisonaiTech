import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { articleSchema, breadcrumbSchema, faqSchemaFromPairs, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "AI Resume Screening for HR Teams in India: Score CVs and Shortlist Candidates 90% Faster | RisonAI Tech",
  },
  description:
    "AI-powered HR resume screening helps recruiters parse CVs, score candidate fit, and shortlist top applicants automatically. Save up to 90% of first-pass screening time without manually reviewing every resume.",
  keywords: [
    "AI resume screening India",
    "HR resume screening powered by AI",
    "AI CV screening",
    "candidate scoring AI",
    "resume shortlist automation",
    "AI hiring automation India",
    "ATS resume screening",
    "HR automation India",
  ],
  alternates: { canonical: "/blog/ai-resume-screening-india" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "AI Resume Screening for HR Teams in India",
    description:
      "No need to manually screen every CV. Use AI to score candidates, shortlist the best fits, and save up to 90% of screening time.",
    url: "https://risonaitech.com/blog/ai-resume-screening-india",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Screening for HR Teams in India",
    description:
      "AI scores CVs, shortlists candidates, and saves up to 90% of first-pass recruiter screening time.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "How much time can AI resume screening save for HR teams?",
    a: "Most hiring teams save 70-90% of first-pass screening time because the AI parses each CV, applies scoring rules, and prepares a shortlist before a recruiter starts manual review.",
  },
  {
    q: "Can AI resume screening score candidates instead of just matching keywords?",
    a: "Yes. A stronger system scores candidate fit using role requirements, skills, experience depth, recency, and relevant context. That is much better than simple keyword filtering.",
  },
  {
    q: "Will recruiters still control the final shortlist?",
    a: "Yes. The system is best used as recruiter-in-the-loop automation. AI handles the repetitive first pass, and recruiters review the shortlisted candidates before interviews move forward.",
  },
  {
    q: "Can AI resume screening integrate with ATS or spreadsheets?",
    a: "Yes. We can connect the screening workflow to ATS tools, email inboxes, shared spreadsheets, and custom recruiter dashboards so candidate data stays in your existing hiring process.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "AI Resume Screening India", url: "/blog/ai-resume-screening-india" },
  ]),
  articleSchema({
    title: "AI Resume Screening for HR Teams in India: Score CVs and Shortlist Candidates 90% Faster",
    description:
      "How AI-powered HR screening parses CVs, scores candidate fit, and prepares recruiter-ready shortlists automatically.",
    url: "/blog/ai-resume-screening-india",
    datePublished: "2026-06-09",
    dateModified: "2026-06-18",
    wordCount: 1450,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function AiResumeScreeningIndiaPage() {
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
                style={{
                  background: "rgba(99,91,255,0.1)",
                  border: "1px solid rgba(99,91,255,0.2)",
                  color: "#a78bfa",
                }}
              >
                HR Automation
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              HR Resume Screening Powered by AI: Score CVs and Shortlist Candidates 90% Faster
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-white/60">
              No need to manually screen every CV. AI can parse resumes, score each candidate against the role,
              and create a shortlist for recruiters automatically.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-09">9 June 2026</time>
              <span>·</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16" style={{ backgroundColor: "#090C18" }} itemScope itemType="https://schema.org/Article">
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">
            <div className="not-prose mb-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-400">TL;DR</p>
              <p className="text-base leading-relaxed text-white/80">
                AI resume screening reduces first-pass hiring work by parsing CVs automatically, scoring each candidate
                against your job criteria, and generating a recruiter-ready shortlist. For high-volume hiring teams,
                this can save up to 90% of manual screening time.
              </p>
            </div>

            <div className="card-base not-prose mb-10 p-6">
              <p className="mb-2 text-sm font-semibold text-[#a78bfa]">What the system does</p>
              <ul className="space-y-2">
                {[
                  "Reads and parses every incoming CV automatically",
                  "Scores candidate fit against the job role",
                  "Flags strong, weak, and edge-case applicants",
                  "Builds a shortlist for recruiter review",
                  "Pushes decisions into ATS, email, or Sheets workflows",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#10B981]" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mb-4 mt-10 font-display text-2xl font-bold text-white">
              Why manual resume screening slows hiring
            </h2>
            <p className="text-base leading-relaxed text-white/65">
              Most HR teams do the same first-pass process manually: open each CV, scan for key skills, compare years
              of experience, reject obvious mismatches, and then build a shortlist in a spreadsheet or ATS. When a role
              gets hundreds of applicants, that work consumes hours or days before the first interview is even scheduled.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              The problem is not just speed. Manual screening is inconsistent. Different recruiters prioritize different
              details, strong candidates get missed because they use different wording, and weak candidates still waste
              time because someone has to open the file and decide.
            </p>

            <h2 className="mb-5 mt-12 font-display text-2xl font-bold text-white">
              How AI resume screening works
            </h2>
            <div className="not-prose mt-4 space-y-3">
              {[
                {
                  layer: "1. Parse the CV",
                  desc: "The system extracts name, experience, skills, education, tools, certifications, domain context, and employment signals from every uploaded resume or emailed CV.",
                },
                {
                  layer: "2. Match against the role",
                  desc: "Each candidate is compared against the job description, mandatory skills, experience range, and role-specific criteria defined by your hiring team.",
                },
                {
                  layer: "3. Score candidate fit",
                  desc: "AI assigns a score based on actual role fit, not only raw keywords. Strong systems consider recency, depth of experience, adjacent skills, and role relevance.",
                },
                {
                  layer: "4. Shortlist automatically",
                  desc: "Top candidates are grouped into a recruiter-ready shortlist, while low-fit applications are filtered out or flagged for lower-priority review.",
                },
                {
                  layer: "5. Route into your workflow",
                  desc: "Shortlisted candidates are pushed into your ATS, recruiter dashboard, email workflow, or spreadsheet so the hiring team can move directly to review and outreach.",
                },
              ].map((item) => (
                <div key={item.layer} className="card-base p-5">
                  <p className="text-sm font-bold text-[#a78bfa]">{item.layer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-white">
              What good candidate scoring looks like
            </h2>
            <p className="text-base leading-relaxed text-white/65">
              Weak screening systems only match keywords. Good screening systems score candidates using context: years of
              relevant experience, level of ownership, similarity of previous roles, domain exposure, tool depth, and
              evidence that the candidate has actually done the kind of work the role demands.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              That matters because a recruiter does not just want a list of resumes containing a keyword. They want the
              best-fit candidates ranked in the order most likely to convert into quality interviews.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-white">
              Where HR teams save the most time
            </h2>
            <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { metric: "CV opening and scanning", impact: "Removed from the manual workflow for most applicants" },
                { metric: "First-pass rejection filtering", impact: "Handled automatically using role-fit logic" },
                { metric: "Shortlist building", impact: "Generated automatically with candidate scores and summaries" },
                { metric: "ATS updates", impact: "Pushed into existing recruiter tools without duplicate entry" },
              ].map((row) => (
                <div key={row.metric} className="card-base p-5">
                  <p className="text-sm font-semibold text-white">{row.metric}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{row.impact}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-white">
              Best use cases for this system
            </h2>
            <ul className="space-y-3 text-white/65">
              <li>High-volume roles where recruiters receive hundreds of applications per week.</li>
              <li>Teams hiring across multiple similar roles that need consistent scoring logic.</li>
              <li>Recruitment agencies that need faster shortlists for clients.</li>
              <li>Internal HR teams that already use ATS, email, or spreadsheet-based workflows.</li>
            </ul>

            <div className="not-prose mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-[#a78bfa]">Need this for your hiring workflow?</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                We build AI-powered HR screening systems that parse CVs, score candidates, and deliver shortlist-ready
                outputs to recruiters without removing human control from the final decision.
              </p>
              <Link href="/services/resume-screening" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#a78bfa]">
                Explore AI resume screening <ArrowRight size={14} />
              </Link>
            </div>

            <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-white">
              Frequently asked questions
            </h2>
            <div className="not-prose mt-4 space-y-3">
              {faqItems.map((faq) => (
                <div key={faq.q} className="card-base p-5">
                  <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
