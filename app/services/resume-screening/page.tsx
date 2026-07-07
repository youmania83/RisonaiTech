import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  FileSearch,
  BrainCircuit,
  Network,
  Users,
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
  title: { absolute: "AI Resume Screening & HR Automation India | Skills Graph Matching | RisonAI Tech" },
  description:
    "AI-powered resume screening for HR teams in India — Skills Graph matching, contextual evaluation, ATS integration & recruiter-in-the-loop controls. Cut first-pass screening time by 70–80%. From ₹35,000.",
  keywords: [
    "AI-powered resume screening",
    "resume screening automation India",
    "AI resume screening India",
    "HR automation India",
    "AI hiring automation India",
    "AI recruiting India",
    "AI hiring tool India",
    "hiring automation agency India",
    "automated resume screening software",
    "candidate screening automation",
    "Skills Graph hiring",
    "Contextual Evaluation recruiting",
    "ATS integration India",
    "recruitment automation agency India",
    "business process automation agency",
    "custom AI automation services",
    "AI integration services for business",
  ],
  alternates: { canonical: "/services/resume-screening" },
  openGraph: {
    title: "AI Resume Screening & HR Automation India | Skills Graph Matching | RisonAI Tech",
    description:
      "AI-powered resume screening with Skills Graph matching, contextual evaluation, ATS integration, and recruiter review controls. Save 70–80% of first-pass screening time. From ₹35,000.",
    url: "https://risonaitech.com/services/resume-screening",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Screening & HR Automation India | RisonAI Tech",
    description:
      "Parse resumes, rank candidates, and route recruiter-ready shortlists automatically. 70–80% less first-pass screening time. From ₹35,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "Resume parsing and candidate profile extraction",
  "Skills Graph matching against job requirements",
  "Contextual evaluation of experience, seniority, and domain fit",
  "ATS, spreadsheet, and email integration",
  "Shortlist ranking with recruiter-in-the-loop review",
  "Bias guardrails, audit trails, and scoring transparency",
  "Bulk screening for high-volume roles",
  "Recruiter dashboards and weekly hiring reports",
];

const useCases = [
  {
    icon: FileSearch,
    title: "High-volume candidate triage",
    desc: "For teams receiving hundreds of CVs per week, the system parses resumes, extracts structured experience data, and prioritises the top candidates before a recruiter ever opens the inbox.",
  },
  {
    icon: Network,
    title: "Skills Graph matching",
    desc: "Instead of matching only raw keywords, the system maps job needs to adjacent tools, frameworks, certifications, and role depth using a Skills Graph so good candidates are not missed due to phrasing differences.",
  },
  {
    icon: BrainCircuit,
    title: "Contextual evaluation",
    desc: "The scoring engine evaluates context: recency of experience, project complexity, industry relevance, leadership level, and must-have criteria. This reduces false positives from simplistic keyword-only filters.",
  },
  {
    icon: Users,
    title: "Recruiter-ready shortlist",
    desc: "Recruiters get a ranked shortlist with score explanations, candidate summaries, and escalation flags. Most teams save 70-80% of first-pass screening time without losing human control.",
  },
];

const processSteps = [
  {
    name: "Hiring workflow audit",
    text: "We map your current screening process, ATS stack, role types, rejection rules, and recruiter bottlenecks.",
  },
  {
    name: "Scoring model design",
    text: "We define must-haves, nice-to-haves, red flags, ranking thresholds, and evaluation logic per role family.",
  },
  {
    name: "Skills Graph setup",
    text: "We configure domain-specific skill relationships so the system can interpret equivalent technologies and adjacent experience correctly.",
  },
  {
    name: "Integration build",
    text: "We connect resume sources, ATS tools, email inboxes, or spreadsheets into one screening pipeline with full event logging.",
  },
  {
    name: "Contextual evaluation testing",
    text: "We test the system against real historical resumes and calibrate shortlist quality before production rollout.",
  },
  {
    name: "Launch and recruiter training",
    text: "We deploy the workflow, document review rules, and train recruiters on exception handling and feedback loops.",
  },
];

const faqItems = [
  {
    q: "How much recruiter time can AI-powered resume screening save?",
    a: "Most hiring teams save 70-80% of first-pass screening time because the system automatically parses resumes, filters clear mismatches, ranks strong candidates, and prepares recruiter-ready summaries before manual review begins.",
  },
  {
    q: "What is the difference between keyword filtering and contextual evaluation?",
    a: "Keyword filtering only checks whether exact terms appear on a CV. Contextual evaluation assesses the relevance, recency, seniority, project depth, industry fit, and adjacent skills around those terms. It produces better shortlists and fewer false positives.",
  },
  {
    q: "What is a Skills Graph in hiring automation?",
    a: "A Skills Graph maps relationships between tools, frameworks, domains, and role capabilities. In hiring, it helps the system understand that equivalent or adjacent experience can still satisfy a role requirement even if the candidate used different wording on the resume.",
  },
  {
    q: "Can this integrate with our ATS or spreadsheet-based hiring workflow?",
    a: "Yes. We integrate with ATS tools, email-driven hiring processes, shared spreadsheets, and custom recruiter dashboards so candidate data flows into the systems your team already uses.",
  },
  {
    q: "Do recruiters stay in control of the shortlist?",
    a: "Yes. The system is designed for recruiter-in-the-loop review. You set thresholds, review ranked candidates, override decisions when needed, and maintain an audit trail for compliance and quality control.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI Resume Screening", url: "/services/resume-screening" },
  ]),
  serviceSchema({
    id: "resume-screening",
    name: "AI-Powered Resume Screening",
    serviceType: "AI Resume Screening Automation",
    description:
      "AI-powered resume screening systems with Skills Graph matching, contextual evaluation, ATS integration, and recruiter-in-the-loop controls that save 70-80% of first-pass screening time.",
    url: "/services/resume-screening",
    priceRange: "₹35,000 – ₹2,50,000",
    offers: [
      {
        name: "Starter screening workflow",
        description: "Single-role screening pipeline with resume parsing, scoring, and spreadsheet or email routing.",
        price: "35000",
      },
      {
        name: "ATS-integrated hiring workflow",
        description: "Multi-role screening with ATS integration, recruiter dashboards, and shortlist routing.",
        price: "90000",
      },
    ],
  }),
  howToSchema({
    name: "How we deploy AI-powered resume screening",
    description: "Our 6-step process to build, calibrate, and launch a production-ready resume screening workflow.",
    totalTime: "P21D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function ResumeScreeningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="pb-16 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="label-pill mb-5 inline-flex">AI Resume Screening</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Screen resumes faster. <span className="grad-text">Keep recruiters focused on finalists.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/55">
              AI-powered resume screening with Skills Graph matching, contextual evaluation, ATS integration, and recruiter-in-the-loop controls. Save 70-80% of first-pass screening time.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="btn-primary" href="/contact">
                Book a hiring workflow audit <ArrowRight size={16} />
              </Link>
              <span className="text-sm font-medium text-[#a78bfa]">Starts at ₹35,000</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-base p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon className="text-[#a78bfa]" size={18} />
                </div>
                <h2 className="font-display text-2xl font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              What you get
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/65">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#10B981]" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <FactualDensityBlock
            title="Why this outperforms keyword-only screening"
            intro="The quality difference comes from structured evaluation, not just faster parsing. The workflow ranks candidates against real hiring context while preserving recruiter oversight."
            benchmarks={[
              {
                stat: "Skills Graph matching",
                detail: "Captures equivalent and adjacent experience instead of only exact keyword matches.",
              },
              {
                stat: "Contextual evaluation",
                detail: "Weighs recency, seniority, project scale, and industry fit before ranking a candidate.",
              },
              {
                stat: "Recruiter control",
                detail: "Maintains override control, scoring visibility, and audit history for every screening decision.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Delivery process
            </h2>
            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step.name} className="card-base p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-[#a78bfa]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                      <p className="mt-2 text-white/60 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.q} className="card-base p-5">
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="card-base p-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Turn resume overload into a ranked shortlist.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              We design and deploy AI-powered screening workflows that connect to your real hiring stack, stay auditable, and keep recruiters in control.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="btn-primary" href="/contact">
                Book a free strategy call <ArrowRight size={16} />
              </Link>
              <Link className="btn-outline" href="/services/ai-automation">
                Explore AI automation services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16" style={{ backgroundColor: "#05070F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-white">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation Systems
            </Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">
              AI Agent Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi hiring automation
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon tech recruitment
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Hiring Scoping Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}