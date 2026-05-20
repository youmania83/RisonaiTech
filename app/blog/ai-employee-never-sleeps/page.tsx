import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Moon,
  Sun,
  PlaneTakeoff,
  HeartHandshake,
  ShieldCheck,
  Receipt,
  IndianRupee,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  graph,
  breadcrumbSchema,
  articleSchema,
  faqSchemaFromPairs,
} from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "The Employee Who Never Sleeps: How AI Saves Indian Business Owners Lakhs Every Year | RisonAI Tech",
  description:
    "True stories of Indian business owners who replaced ₹5–15 lakh/year of manual work with an AI employee that never sleeps, never asks for a hike, never quits, and lets them finally take a real holiday.",
  keywords: [
    "AI employee India",
    "AI automation save money India",
    "AI replace employee India",
    "AI for small business owner India",
    "how AI saves time and money",
    "AI vs human employee cost",
    "AI automation ROI India",
    "AI employee never sleeps",
    "AI 24x7 business automation India",
    "save salary cost with AI",
    "AI no TDS no PF business",
    "AI loyal employee story",
  ],
  alternates: { canonical: "/blog/ai-employee-never-sleeps" },
  authors: [
    { name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" },
  ],
  openGraph: {
    title:
      "The Employee Who Never Sleeps: How AI Saves Indian Business Owners Lakhs Every Year",
    description:
      "Stories from Indian SMEs that replaced ₹5–15 lakh/year of repetitive work with an AI employee that never sleeps, never quits, and never asks for a salary hike.",
    url: "https://risonaitech.com/blog/ai-employee-never-sleeps",
    type: "article",
    images: [
      {
        url: "https://risonaitech.com/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Employee Who Never Sleeps: Stories of AI That Saves Indian Businesses Lakhs",
    description:
      "Indian business owners share how a quiet AI employee handles leads, follow-ups, invoices and support 24x7 — while they take their first real holiday in years.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

const faqItems = [
  {
    q: "Can an AI agent really replace a human employee in India?",
    a: "Not all roles — but it can replace 60–80% of repetitive, rule-based work that a junior executive does: replying to leads, sending follow-ups, qualifying enquiries, extracting data from invoices, generating reports. A single AI workflow at ₹40,000–₹80,000 typically absorbs the work of one ₹3–5 lakh/year executive without ever taking a sick leave.",
  },
  {
    q: "What is the actual cost saving of an AI employee vs a human one?",
    a: "A junior executive in Delhi NCR costs ₹3–6 lakh/year in salary plus ~25% in indirect costs — PF, gratuity, leave encashment, festival bonus, laptop, seat cost, training, attrition replacement. An AI workflow costs ₹30,000–₹80,000 to build and ₹2,000–₹8,000/month to run. Most clients break even in under 90 days.",
  },
  {
    q: "Do I have to pay TDS or PF on an AI system?",
    a: "No. AI automation is treated as software — a one-time build cost plus monthly hosting/API spend. There is no TDS on salary, no PF, no ESIC, no gratuity, no professional tax, no bonus liability under the Payment of Bonus Act. Your CA will book it as a software/subscription expense, fully deductible.",
  },
  {
    q: "What happens when I go on holiday — will the AI still work?",
    a: "Yes. The AI runs 24x7 on cloud infrastructure (AWS/GCP). It replies to WhatsApp leads at 3 AM, drafts proposals on Sundays, and pushes a daily summary to your phone. Most of our SME clients report taking their first real 2-week holiday only after deploying their AI workflows.",
  },
  {
    q: "Is the AI loyal? Can it leak data or 'switch jobs'?",
    a: "The AI runs inside your own cloud account with your own API keys. It cannot resign, cannot share your client list with a competitor, cannot be poached. We sign data-processing agreements and you own the full source code — no vendor lock-in.",
  },
  {
    q: "What is the smallest story I can start with?",
    a: "A WhatsApp lead-qualification agent. It costs ₹30,000–₹50,000, goes live in 2–3 weeks, and starts saving 3–4 hours/day of manual reply work immediately. That is usually the first chapter — most owners add a second and third workflow within 90 days.",
  },
];

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "The Employee Who Never Sleeps",
      url: "/blog/ai-employee-never-sleeps",
    },
  ]),
  articleSchema({
    title:
      "The Employee Who Never Sleeps: How AI Saves Indian Business Owners Lakhs Every Year",
    description:
      "Stories from Indian SMEs that replaced ₹5–15 lakh/year of repetitive work with an AI employee that never sleeps, never quits, and never asks for a salary hike.",
    url: "/blog/ai-employee-never-sleeps",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    wordCount: 1800,
  }),
  faqSchemaFromPairs(faqItems)
);

export default function AiEmployeeNeverSleepsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section
        className="pb-10 pt-36 bg-grid"
        style={{ backgroundColor: "#05070F" }}
      >
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
                Story
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              The Employee Who Never Sleeps
            </h1>
            <p className="mt-5 text-xl text-white/60 leading-relaxed">
              He never asks for a salary hike. Never goes on chai breaks. Never quits
              on a Friday evening. Never sends his resignation on WhatsApp at 11 PM.
              He is loyal, tireless, and three Indian business owners will tell you
              what it felt like the first time they hired him.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>By Yogesh Kumar Wadhwa, RisonAI Tech</span>
              <span>·</span>
              <time dateTime="2026-05-20">20 May 2026</time>
              <span>·</span>
              <span>9 min read</span>
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

            {/* TL;DR */}
            <div className="not-prose rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                TL;DR — The story in one line
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                A well-built AI workflow costs less than one month of a junior
                executive&apos;s salary, but it works 24x7, never quits, never asks
                for a hike, and lets the owner finally take a real holiday. Below
                are three real stories from Indian SMEs, the exact ₹ math, and the
                hidden direct + indirect savings most owners miss.
              </p>
            </div>

            {/* ===== STORY 1 ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">
              Story 1: Ramesh wanted to go to Manali. His AI did the job instead.
            </h2>
            <p className="text-white/65 leading-relaxed">
              Ramesh runs a 14-person interior design studio in Gurgaon. For seven
              years, he hadn&apos;t taken a holiday longer than three days. The
              reason was simple: every time he switched off his phone, twenty
              WhatsApp leads went cold. By the time he came back, half of them had
              already booked a competitor.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              In February 2026, we built him a small AI agent. It reads every
              inbound WhatsApp message, asks four qualifying questions (budget,
              city, BHK, timeline), drops the answer into his CRM, and books the
              hot ones into his calendar. Cost: ₹48,000 one-time + ₹3,200/month.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              In April, Ramesh went to Manali for nine days. His phone stayed in
              the hotel locker. While he was eating trout by the Beas river, his AI
              employee handled 71 leads, qualified 23 of them, and put 6 site
              visits on his junior designer&apos;s calendar. He came back to
              ₹14,00,000 of new pipeline — without replying to a single message.
            </p>
            <div
              className="not-prose mt-6 rounded-xl p-5"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.18)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
                What Ramesh saved
              </p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <IndianRupee
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  ₹4.2 lakh/year — the salary of the executive he was about to
                  hire just to reply to leads
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  3 hours/day of his own time, every single day
                </li>
                <li className="flex items-start gap-2.5">
                  <PlaneTakeoff
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  His first real holiday in seven years
                </li>
              </ul>
            </div>

            {/* ===== STORY 2 ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              Story 2: Priya stopped paying TDS on her best worker.
            </h2>
            <p className="text-white/65 leading-relaxed">
              Priya runs a 22-person CA firm in Karol Bagh. She used to employ two
              juniors purely to read scanned invoices, extract GSTIN, HSN code,
              taxable value, and punch them into Tally. They were good kids — but
              between salary, PF, ESIC, professional tax, festival bonus, the
              laptop, the seat, and the inevitable resignation every 14 months,
              each of them cost the firm about ₹5.6 lakh a year.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              In January 2026 we replaced that work with a document-extraction AI.
              It reads any PDF, JPG or WhatsApp-forwarded invoice, pulls 12 fields
              with 96% accuracy, flags the 4% it is unsure about, and pushes the
              clean rows straight into Tally via the API. Cost: ₹72,000 one-time +
              ₹4,500/month.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              Priya didn&apos;t fire anyone — both juniors moved to client advisory
              work, where they actually bill ₹2,500/hour. But the line item on her
              P&amp;L changed shape entirely. No more TDS deduction every month.
              No more Form 16 in May. No more PF challan. No more &quot;ma&apos;am
              I&apos;m leaving for higher studies&quot; on a Friday. Just one
              software subscription, one GST invoice, fully deductible.
            </p>
            <div
              className="not-prose mt-6 rounded-xl p-5"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.18)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
                What Priya stopped paying
              </p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <Receipt
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  TDS u/s 192 on salary, every single month
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  12% employer PF + 3.25% ESIC + gratuity provision
                </li>
                <li className="flex items-start gap-2.5">
                  <HeartHandshake
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  Bonus under the Payment of Bonus Act + Diwali gifts
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                    size={15}
                  />
                  Recruiter fees, onboarding time, training-the-replacement loops
                </li>
              </ul>
            </div>

            {/* ===== STORY 3 ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">
              Story 3: Arjun&apos;s AI agent picked up a 2:47 AM lead from Dubai.
            </h2>
            <p className="text-white/65 leading-relaxed">
              Arjun sells premium home-automation systems out of South Delhi. His
              average deal size is ₹6 lakh. His old problem: NRI buyers from Dubai,
              London and Singapore would fill his website form at strange hours.
              By the time his sales team opened email at 10 AM IST, the prospect
              had already moved on, or worse, found a competitor in the meantime.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              We deployed a sales-response AI in March 2026. Within 28 seconds of
              any form submission, it sends a personalised WhatsApp + email reply
              referencing the exact products the prospect viewed, attaches the
              brochure, and books a Google Meet at a time that respects the
              prospect&apos;s timezone. Cost: ₹56,000 one-time + ₹3,800/month.
            </p>
            <p className="text-white/65 leading-relaxed mt-4">
              At 2:47 AM on a Wednesday, a lead came in from Dubai Marina. The AI
              replied at 2:47:28 AM. By morning, the Meet was confirmed for
              Thursday. Two weeks later, Arjun closed a ₹7.4 lakh order without
              his team ever working a night shift. The AI didn&apos;t ask for
              overtime. It didn&apos;t complain about the time zone. It just did
              the job.
            </p>

            {/* ===== Direct vs Indirect Benefits ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              Why an AI employee is so much cheaper than a human one
            </h2>
            <p className="text-white/65 leading-relaxed">
              Most owners only compare salary vs subscription. The real saving is
              hidden in the indirect costs — the ones your CA quietly absorbs into
              &quot;administrative overhead&quot; every March.
            </p>

            <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
              {/* Direct benefits */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(99,91,255,0.06)",
                  border: "1px solid rgba(99,91,255,0.18)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] mb-3">
                  Direct benefits
                </p>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {[
                    "No monthly salary — one-time build + low monthly compute",
                    "No annual hike conversation, ever",
                    "No leave, no sick days, no chai breaks, no festival offs",
                    "Works 24x7x365 — including Diwali, Sunday, and 2 AM",
                    "Replies in under 30 seconds, not 4 hours",
                    "Scales from 10 conversations/day to 10,000 — same cost",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="text-[#a78bfa] mt-0.5 flex-shrink-0"
                        size={15}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indirect benefits */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.18)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                  Indirect benefits (the ones nobody talks about)
                </p>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {[
                    "No TDS u/s 192 — booked as software, fully deductible",
                    "No PF, ESIC, gratuity or professional tax outflow",
                    "No bonus under the Payment of Bonus Act",
                    "No recruiter fees, no notice-period chaos, no exit interviews",
                    "No data leak risk — runs inside your own cloud account",
                    "No emotional drama — never demotivated, never gossiping",
                    "No training cost — knowledge is permanent, no attrition loss",
                    "You finally take a real holiday — priceless",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="text-emerald-400 mt-0.5 flex-shrink-0"
                        size={15}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ===== The math ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              The actual ₹ math, on the back of a napkin
            </h2>
            <p className="text-white/65 leading-relaxed">
              Here is the comparison most owners draw on a notepad before signing
              off — for one junior executive role replaced by one AI workflow.
            </p>

            <div className="not-prose mt-5 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(99,91,255,0.08)" }}>
                    <th className="text-left px-4 py-3 font-semibold text-white/80">
                      Cost head
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-white/80">
                      Human junior (₹/yr)
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-white/80">
                      AI workflow (₹/yr)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/65">
                  {[
                    ["Salary / build cost", "₹3,60,000", "₹50,000 one-time"],
                    ["PF (12% employer)", "₹43,200", "₹0"],
                    ["ESIC / gratuity / bonus", "₹38,000", "₹0"],
                    ["Laptop + seat + electricity", "₹35,000", "₹0"],
                    ["Recruitment + onboarding", "₹25,000", "₹0"],
                    ["Hosting / API / monitoring", "—", "₹54,000"],
                    ["Leaves & sick days lost", "~21 days/yr", "0 days"],
                    ["Resignation risk", "Every 14 months avg", "Never"],
                  ].map(([k, h, a]) => (
                    <tr
                      key={k}
                      className="border-t border-white/5"
                      style={{ background: "rgba(255,255,255,0.015)" }}
                    >
                      <td className="px-4 py-3">{k}</td>
                      <td className="px-4 py-3">{h}</td>
                      <td className="px-4 py-3 text-emerald-300">{a}</td>
                    </tr>
                  ))}
                  <tr
                    className="border-t border-white/10"
                    style={{ background: "rgba(16,185,129,0.06)" }}
                  >
                    <td className="px-4 py-3 font-semibold text-white">
                      Year-1 total
                    </td>
                    <td className="px-4 py-3 font-semibold text-white">
                      ₹5,01,200+
                    </td>
                    <td className="px-4 py-3 font-semibold text-emerald-300">
                      ₹1,04,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/40 mt-3">
              Illustrative numbers based on actual SME engagements in Delhi NCR
              during FY 2025–26. Your numbers will vary by role and city.
            </p>

            {/* ===== Day in the life ===== */}
            <h2 className="font-display text-2xl font-bold text-white mt-14 mb-4">
              A day in the life of your AI employee
            </h2>

            <div className="not-prose mt-6 space-y-3">
              {[
                {
                  icon: Moon,
                  time: "02:47 AM",
                  text: "Replies to an NRI enquiry from Dubai in 28 seconds. Books a Meet for Thursday 7 PM IST.",
                },
                {
                  icon: Sun,
                  time: "07:30 AM",
                  text: "Sends you a 6-line WhatsApp summary of overnight leads, hot ones marked with 🔥.",
                },
                {
                  icon: Clock,
                  time: "10:00 AM",
                  text: "Drafts follow-ups for 14 stalled deals in your CRM. Queues them for your one-tap approval.",
                },
                {
                  icon: Receipt,
                  time: "01:15 PM",
                  text: "Reads 23 supplier invoices forwarded on WhatsApp. Extracts GST + posts to Tally.",
                },
                {
                  icon: PlaneTakeoff,
                  time: "04:40 PM",
                  text: "You are in Manali. AI confirms a site visit for tomorrow without bothering you.",
                },
                {
                  icon: Sparkles,
                  time: "11:55 PM",
                  text: "Pushes tomorrow&apos;s priority list to your phone. Goes back to listening. Never sleeps.",
                },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.time}
                    className="card-base p-4 flex items-start gap-4"
                  >
                    <div
                      className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(99,91,255,0.1)",
                        border: "1px solid rgba(99,91,255,0.2)",
                      }}
                    >
                      <Icon className="text-[#a78bfa]" size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#a78bfa]">
                        {row.time}
                      </p>
                      <p
                        className="text-sm text-white/65 leading-relaxed mt-0.5"
                        dangerouslySetInnerHTML={{ __html: row.text }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===== Final invitation ===== */}
            <div
              className="mt-14 rounded-2xl p-7 not-prose"
              style={{
                background: "rgba(99,91,255,0.07)",
                border: "1px solid rgba(99,91,255,0.18)",
              }}
            >
              <p className="font-semibold text-white">
                Your story could be next.
              </p>
              <p className="mt-2 text-sm text-white/55">
                We&apos;ll map the one workflow in your business that&apos;s
                costing you the most in salary, follow-up loss and weekends.
                Then we&apos;ll quote a fixed price to hand it to an AI. The
                first call is free, 30 minutes, no slide deck.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 btn-primary"
              >
                Book your free strategy call <ArrowRight size={15} />
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
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Topic cluster: next step CTA + related content */}
      <section className="py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            Keep reading
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/blog/ai-automation-for-indian-smes",
                tag: "Guide",
                title: "AI Automation for Indian SMEs",
                desc: "The prioritisation framework 40+ Indian businesses use to pick the right workflow first.",
              },
              {
                href: "/blog/whatsapp-chatbot-for-business-india",
                tag: "Guide",
                title: "WhatsApp Chatbot Cost in India",
                desc: "Pricing, vendor comparison and ROI for the highest-impact AI workflow in India.",
              },
              {
                href: "/services/ai-automation",
                tag: "Service",
                title: "Hire your AI employee",
                desc: "Fixed-price builds from ₹30,000. Full source-code ownership. Live in 2–3 weeks.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl p-5 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
                  {item.tag}
                </span>
                <p className="mt-1 font-display text-base font-bold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-white/50">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-10" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <Link
            href="/blog"
            className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
