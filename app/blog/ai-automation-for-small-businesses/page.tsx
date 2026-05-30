import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { graph, breadcrumbSchema, articleSchema, faqSchemaFromPairs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team) | RisonAI Tech" },
  description:
    "Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook with no technical background required.",
  keywords: [
    "ai automation for small businesses india",
    "ai automation small business 2026",
    "ai tools for small business india",
    "affordable ai automation india",
    "ai automation without tech team",
    "small business automation india",
    "ai for sme india",
    "whatsapp automation small business",
    "ai chatbot small business india",
    "ai automation cost india small business",
    "automate small business workflows india",
    "ai automation playbook india",
  ],
  alternates: { canonical: "/blog/ai-automation-for-small-businesses" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    description:
      "Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook with no technical background required.",
    url: "https://risonaitech.com/blog/ai-automation-for-small-businesses",
    type: "article",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    description:
      "4 automation workflows every small business needs, cost breakdown (₹25,000–₹80,000), and a 90-day implementation roadmap for non-technical owners.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "Can a small business with no IT team implement AI automation?",
    a: "Yes — the majority of AI automation for small businesses is now implemented through agency partnerships or no-code/low-code platforms that require no internal technical expertise. Your team does not write code. You define the workflows, test the outputs, and use the results. An AI automation agency handles setup, integration, and ongoing maintenance. This model is common for small businesses in India with 5–50 employees.",
  },
  {
    q: "What is the minimum budget to start AI automation for a small business in India?",
    a: "The minimum practical investment is ₹25,000–₹40,000 for a single, well-scoped automation (e.g., WhatsApp lead qualification + CRM sync). A complete starter package covering WhatsApp automation, website chatbot, and basic CRM integration typically runs ₹60,000–₹80,000. Monthly operating costs are ₹5,000–₹12,000 for a small-business stack. Most businesses recover this within 60–90 days through time saved and leads recovered.",
  },
  {
    q: "What business processes should a small business automate first?",
    a: "Priority order: (1) Lead response — because the ROI is immediate and measurable. (2) Customer support FAQs — because it reduces owner/staff interruptions without reducing service quality. (3) Appointment or booking confirmation — because manual follow-up is time-intensive and error-prone. (4) Invoice reminders — because late payments cost cash flow. (5) Reporting and summaries — because daily/weekly reports should not require anyone to manually compile them.",
  },
  {
    q: "How is AI automation different from just using software tools?",
    a: "Traditional software tools require humans to operate them — you open the CRM, you send the follow-up, you update the spreadsheet. AI automation connects your tools and handles the trigger-action logic automatically. The difference is elimination of human involvement for each execution. A software tool is a hammer. AI automation is a robot that picks up the hammer and swings it based on rules you define.",
  },
  {
    q: "What does a 90-day AI automation roadmap look like for a small business?",
    a: "Month 1: Audit current manual workflows, select top 2 automation priorities, build and test one automation (e.g., WhatsApp lead qualification). Month 2: Deploy automation, measure results, build second automation (e.g., customer support FAQ chatbot). Month 3: Review both automations, optimise based on real data, plan next automation layer (e.g., invoicing, weekly report). By day 90, most small businesses have 2–3 running automations saving 15–30 staff hours per week.",
  },
  {
    q: "Is WhatsApp automation legal for businesses in India?",
    a: "Yes. WhatsApp Business API is the official, compliant channel for business-scale messaging in India. Businesses must obtain explicit opt-in consent from users before sending automated messages (other than responses to user-initiated conversations). All templates must be pre-approved by Meta. Working with an official WhatsApp Business Solution Provider (BSP) like Interakt, WATI, or Gupshup ensures compliance with Indian regulations and WhatsApp's policies.",
  },
  {
    q: "How do I measure whether AI automation is working for my small business?",
    a: "Track four numbers before and after implementation: (1) Lead response time — did it drop from hours to seconds? (2) Hours saved per week — what tasks are no longer done manually? (3) Leads that were followed up — did 100% of inbound leads get contacted vs your previous rate? (4) Customer support response time — are queries answered in minutes rather than hours? Any positive movement on these four metrics indicates the automation is working.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "AI Automation for Small Businesses", url: "/blog/ai-automation-for-small-businesses" },
  ]),
  articleSchema({
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    description:
      "Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook with no technical background required.",
    url: "/blog/ai-automation-for-small-businesses",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    wordCount: 1700,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function AiAutomationSmallBusinesses() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pb-10 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(99,91,255,0.1)", border: "1px solid rgba(99,91,255,0.2)", color: "#a78bfa" }}
              >
                AI Automation
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook for implementing AI automation with no technical background required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-06-10">10 June 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article
        className="py-16"
        style={{ backgroundColor: "#090C18" }}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container-site">
          <div className="mx-auto max-w-3xl prose prose-invert prose-lg">

            <div className="not-prose rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">TL;DR — Direct Answer</p>
              <p className="text-white/80 text-base leading-relaxed">
                Small businesses can implement AI automation through four workflows: <strong className="text-white">WhatsApp lead qualification</strong>, <strong className="text-white">customer support FAQ automation</strong>, <strong className="text-white">invoice and payment reminders</strong>, and <strong className="text-white">daily/weekly reporting</strong>. Total setup cost: ₹60,000–₹80,000. Monthly operating cost: ₹5,000–₹12,000. Time saved: 15–30 hours per week. No technical background required — an automation agency handles the build.
              </p>
            </div>

            <div className="card-base p-6 mb-10 not-prose">
              <p className="text-sm font-semibold text-[#a78bfa] mb-2">Key takeaways</p>
              <ul className="space-y-2">
                {[
                  "Small businesses benefit more from AI automation than enterprises — lower baseline efficiency means higher gains",
                  "WhatsApp automation is the single highest-ROI first step for Indian SMEs",
                  "Cost to start: ₹25,000–₹40,000 for a single workflow; ₹60,000–₹80,000 for a starter package",
                  "No tech team required — agency-managed automation handles setup, integration, and maintenance",
                  "Most small businesses see payback within 60–90 days",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="text-[#10B981] mt-0.5 flex-shrink-0" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Why small businesses have more to gain than enterprises
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Large enterprises already have teams of people handling every function. When AI automates a task, it replaces a process within a department. For a small business with 10 people, a single automation can effectively add the equivalent of a part-time employee without the cost, and that person works 24/7 without breaks.
            </p>
            <p className="text-white/65 text-base leading-relaxed mt-3">
              A business owner spending 3 hours a day on lead follow-up, customer queries, and report compilation saves ₹50,000–₹80,000/year in equivalent labour cost from a single automation suite. The math is simple and the payback period is short.
            </p>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-5">
              The 4 automation workflows every small business needs
            </h2>
            <div className="not-prose space-y-4 mt-4">
              {[
                {
                  num: "01",
                  title: "WhatsApp lead qualification",
                  problem: "Leads come in through website, Instagram, or referrals. Someone on WhatsApp says "interested" — and then waits 4 hours for a reply before calling a competitor.",
                  solution: "An AI agent on WhatsApp responds within 60 seconds, asks qualification questions (budget, timeline, use case), scores the lead, and notifies the business owner only when a lead is hot. All cold/warm leads enter an automated follow-up sequence.",
                  cost: "₹30,000–₹45,000 to build | ₹3,000–₹6,000/month to run",
                },
                {
                  num: "02",
                  title: "Customer support FAQ automation",
                  problem: "The same 10–15 questions arrive every day via WhatsApp, email, and DMs — business hours, pricing, service details, how to book. Each takes 2–5 minutes to answer manually.",
                  solution: "An AI chatbot on your website and WhatsApp answers all FAQ-level queries instantly, 24/7. Only queries the AI cannot handle are escalated to a human. For most small businesses, this covers 60–80% of all inbound queries.",
                  cost: "₹20,000–₹35,000 to build | ₹2,000–₹4,000/month to run",
                },
                {
                  num: "03",
                  title: "Invoice and payment reminder automation",
                  problem: "Chasing payments is time-consuming and awkward. Most businesses either forget to follow up or waste hours on reminder calls and messages.",
                  solution: "Automated payment reminder sequences via WhatsApp and email. Day 1 (invoice sent), Day 7 (first reminder), Day 14 (second reminder), Day 21 (final notice). All personalised, all automated, stops when payment is recorded. Integrates with Zoho Books, QuickBooks, or custom systems.",
                  cost: "₹15,000–₹25,000 to build | ₹1,500–₹3,000/month to run",
                },
                {
                  num: "04",
                  title: "Daily and weekly business reporting",
                  problem: "Every Monday, someone manually compiles leads received, deals closed, revenue, and outstanding tasks from 4–5 different tools. This takes 1–2 hours and is often delayed or skipped.",
                  solution: "An automated report is compiled and sent to the business owner every Monday morning (or daily, if preferred) with the previous week's metrics pulled from CRM, payment tools, and any other connected sources. No manual compilation required.",
                  cost: "₹12,000–₹20,000 to build | ₹1,000–₹2,500/month to run",
                },
              ].map((item) => (
                <div key={item.num} className="card-base p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{ background: "rgba(99,91,255,0.15)", color: "#a78bfa" }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-xs text-white/40 mt-2 font-semibold uppercase tracking-wide">The problem</p>
                      <p className="text-sm text-white/55 mt-1 leading-relaxed">{item.problem}</p>
                      <p className="text-xs text-white/40 mt-3 font-semibold uppercase tracking-wide">The automation</p>
                      <p className="text-sm text-white/65 mt-1 leading-relaxed">{item.solution}</p>
                      <p className="text-xs text-[#10B981] font-medium mt-3">{item.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              90-day implementation roadmap
            </h2>
            <div className="not-prose space-y-3 mt-4">
              {[
                {
                  phase: "Month 1 — Discover and deploy",
                  steps: [
                    "Week 1: Map your 5 most time-consuming manual tasks. Identify the one with the most repetitions per week.",
                    "Week 2: Scope and contract a single automation with an agency. Define success metrics.",
                    "Weeks 3–4: Build, test, and deploy the first automation. Train your team to work alongside it.",
                  ],
                },
                {
                  phase: "Month 2 — Measure and expand",
                  steps: [
                    "Week 5: Measure the first automation. Did response time drop? Did leads increase? Are staff hours freed?",
                    "Week 6: Identify the second automation priority based on what you are still doing manually.",
                    "Weeks 7–8: Build and deploy the second automation (typically customer support FAQ bot).",
                  ],
                },
                {
                  phase: "Month 3 — Optimise and systemise",
                  steps: [
                    "Review both automations with real data. Tune qualification criteria, message sequences, and escalation rules.",
                    "Plan the third automation — invoicing, reporting, or a new channel.",
                    "Build an automation SOP so your team understands what is automated, what is human, and how to handle edge cases.",
                  ],
                },
              ].map((phase) => (
                <div key={phase.phase} className="card-base p-5">
                  <p className="font-bold text-[#a78bfa] text-sm">{phase.phase}</p>
                  <ul className="mt-3 space-y-1.5">
                    {phase.steps.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle2 className="text-[#10B981] mt-0.5 flex-shrink-0" size={13} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              Total cost breakdown for Indian small businesses
            </h2>
            <div className="not-prose rounded-xl overflow-hidden border border-white/10 mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(99,91,255,0.1)" }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Package</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">What is included</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Build cost (₹)</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Monthly running (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starter", "WhatsApp lead qualification + CRM sync", "₹30,000–₹50,000", "₹4,000–₹8,000"],
                    ["Growth", "WhatsApp + chatbot + invoice reminders + reporting", "₹65,000–₹95,000", "₹8,000–₹15,000"],
                    ["Full stack", "All 4 workflows + multi-channel + dashboard", "₹1,10,000–₹1,60,000", "₹12,000–₹22,000"],
                  ].map(([pkg, inc, build, monthly], i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="px-4 py-3 font-semibold text-white">{pkg}</td>
                      <td className="px-4 py-3 text-white/55 text-xs">{inc}</td>
                      <td className="px-4 py-3 text-[#a78bfa] font-medium">{build}</td>
                      <td className="px-4 py-3 text-[#10B981] font-medium">{monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-12 rounded-2xl p-7 not-prose"
              style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.18)" }}
            >
              <p className="font-semibold text-white">
                Ready to start your AI automation journey?
              </p>
              <p className="mt-2 text-sm text-white/55">
                We work with small businesses across India to implement AI automation — WhatsApp, chatbots, CRM, reporting — at a fixed price with full agency support. No technical team required on your end.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 btn-primary">
                  Book a free discovery call <ArrowRight size={15} />
                </Link>
                <Link href="/services/ai-automation" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  AI Automation services <ArrowRight size={13} />
                </Link>
              </div>
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
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Related guides</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/services/ai-automation",
                tag: "Service",
                title: "AI Automation Services",
                desc: "Agency-managed AI automation builds for Indian small businesses — WhatsApp, CRM, chatbot, and reporting.",
              },
              {
                href: "/contact",
                tag: "Get started",
                title: "Free discovery call",
                desc: "Walk us through your current manual workflows. We will identify your top 3 automation opportunities in 30 minutes.",
              },
              {
                href: "/blog/how-to-use-ai-for-automation",
                tag: "Guide",
                title: "How to use AI for automation",
                desc: "Step-by-step guide to scoping and deploying your first AI automation workflow.",
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
          <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
