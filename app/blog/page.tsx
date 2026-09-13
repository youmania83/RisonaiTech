import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { breadcrumbSchema, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "AI Automation Blog — 2026 Guides on AI Agents, Chatbots & Workflows | RisonAI Tech" },
  description:
    "Practical 2026 guides on AI automation, agentic AI agents, WhatsApp chatbots, voice AI, AI resume screening & GEO optimization for Indian businesses — written by engineers who ship production systems.",
  keywords: [
    "AI automation blog India",
    "agentic AI guides India",
    "WhatsApp chatbot tutorial India",
    "AI automation guides 2026",
    "AI agent development blog",
    "GEO optimization India",
    "AEO optimization India",
    "CRM automation India",
    "AI for small business India",
    "product engineering blog",
    "RisonAI Tech blog",
  ],
  alternates: { canonical: "/blog" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "AI Automation Blog — 2026 Guides on AI Agents, Chatbots & Workflows | RisonAI Tech",
    description:
      "Practical guides on AI automation, agentic AI, WhatsApp chatbots, voice AI, and GEO optimization for Indian businesses.",
    url: "https://risonaitech.com/blog",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog 2026 | RisonAI Tech",
    description: "Practical guides on AI automation, agentic AI, WhatsApp chatbots, voice AI, and GEO for Indian businesses.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

export const posts = [
  {
    slug: "how-to-check-if-your-website-appears-in-chatgpt",
    title: "How to Check If Your Website Appears in ChatGPT, Perplexity, and Google AI Overviews",
    excerpt:
      "A practical workflow to test your website's AI visibility across ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews, plus a faster free audit method.",
    date: "2026-07-20",
    readTime: "9 min read",
    category: "AI Search",
  },
  {
    slug: "free-ai-seo-audit-checklist",
    title: "Free AI SEO Audit Checklist for 2026: 18 Things to Fix Before You Pay an Agency",
    excerpt:
      "Use this practical GEO checklist to improve your website's visibility in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews before you spend on a full engagement.",
    date: "2026-07-15",
    readTime: "10 min read",
    category: "GEO Checklist",
  },
  {
    slug: "why-your-website-is-not-showing-in-ai-search",
    title: "Why Your Website Is Not Showing in AI Search: 9 Common Reasons and What to Fix First",
    excerpt:
      "Nine common reasons AI systems skip your brand, from weak entity signals to weak factual density, plus the fixes that usually improve AI visibility fastest.",
    date: "2026-07-10",
    readTime: "9 min read",
    category: "AI Search",
  },
  {
    slug: "ai-automation-for-small-businesses",
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    excerpt:
      "Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook: 4 workflows, ₹60,000–₹80,000 total, 90-day roadmap, no technical team required.",
    date: "2026-06-25",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-resume-screening-india",
    title: "AI Resume Screening for HR Teams in India: Score CVs and Shortlist Candidates 90% Faster",
    excerpt:
      "Manual CV review slows hiring and burns recruiter time. Here is how AI resume screening scores candidates, shortlists the best fits, and saves up to 90% of first-pass screening time.",
    date: "2026-06-18",
    readTime: "9 min read",
    category: "HR Automation",
  },
  {
    slug: "ai-automation-real-estate-india",
    title: "AI Automation for Real Estate India: The 2026 Playbook",
    excerpt:
      "In 2026, the fastest-growing real estate agencies in India all have one thing in common: they respond to leads in under 60 seconds, qualify every inquiry automatically, and never lose a hot lead to a competitor. Here is how.",
    date: "2026-06-04",
    readTime: "10 min read",
    category: "Real Estate",
  },
  {
    slug: "make-vs-n8n-ai-automation",
    title: "Make vs n8n in 2026: Which Automation Platform Is Right for Your Business?",
    excerpt:
      "Make (formerly Integromat) and n8n are the two most popular automation platforms for business workflows. Here is a complete comparison with a clear decision framework for Indian businesses.",
    date: "2026-05-22",
    readTime: "9 min read",
    category: "AI Tools",
  },
  {
    slug: "ai-agents-for-business-automation",
    title: "AI Agents for Business: What They Are, What They Cost, and How to Deploy Them",
    excerpt:
      "AI agents are not just advanced chatbots — they are autonomous systems that plan, act, and complete multi-step tasks without human direction. This is the production guide for deploying AI agents in your business.",
    date: "2026-05-14",
    readTime: "10 min read",
    category: "AI Agents",
  },
  {
    slug: "ai-and-automation",
    title: "AI and Automation Together: How to Combine Them for Maximum Business Impact",
    excerpt:
      "AI and automation are two different capabilities that work best when combined. Understanding when to use rule-based automation, when to add AI intelligence, and how to layer them is the highest-leverage skill in modern business systems.",
    date: "2026-04-28",
    readTime: "9 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-vs-automation",
    title: "AI vs Automation: What Is the Difference and Which Does Your Business Need?",
    excerpt:
      "Most businesses use the terms AI and automation interchangeably — but they mean fundamentally different things. Knowing the difference determines which technology solves your actual business problem.",
    date: "2026-04-12",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-automation-tools",
    title: "Top AI Automation Tools in 2026: The No-Fluff Shortlist",
    excerpt:
      "There are now 400+ tools that claim to offer AI automation. Most are noise. This is the production-grade shortlist for Indian businesses — tools we actually deploy for clients.",
    date: "2026-03-30",
    readTime: "9 min read",
    category: "AI Tools",
  },
  {
    slug: "how-to-use-ai-for-automation",
    title: "How to Use AI for Automation: A Step-by-Step Implementation Guide",
    excerpt:
      "Most businesses know they should use AI to automate workflows — but have no idea where to start. This is a no-fluff, step-by-step guide to implementing AI automation in a real business.",
    date: "2026-03-15",
    readTime: "9 min read",
    category: "AI Automation",
  },
  {
    slug: "what-is-ai-automation",
    title: "What Is AI Automation? A Clear Explanation for Business Owners",
    excerpt:
      "AI automation combines artificial intelligence with traditional automation to handle complex, judgment-based tasks without human intervention. Here is a clear, jargon-free explanation of what it is, how it works, and what it can do for your business.",
    date: "2026-02-28",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-employee-never-sleeps",
    title: "The Employee Who Never Sleeps: How AI Saves Indian Owners Lakhs Every Year",
    excerpt:
      "Three real stories of Indian business owners who replaced ₹5–15 lakh/year of repetitive work with an AI employee that never sleeps, never asks for a hike, never quits — and finally let them take a real holiday.",
    date: "2026-02-10",
    readTime: "9 min read",
    category: "Story",
  },
  {
    slug: "ai-automation-for-indian-smes",
    title: "AI Automation for Indian SMEs: What Actually Works in 2025",
    excerpt:
      "Most AI automation projects fail because businesses automate the wrong things first. Here's the prioritisation framework we use with 40+ Indian clients to pick the right workflows and get measurable ROI in under 90 days.",
    date: "2025-11-20",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "whatsapp-chatbot-for-business-india",
    title: "WhatsApp Chatbot for Business in India: The Complete 2025 Guide",
    excerpt:
      "India has 535 million WhatsApp users. Yet most businesses still respond to leads manually — or miss them entirely. This guide covers how to build a WhatsApp chatbot that qualifies leads, books appointments, and handles FAQs 24/7.",
    date: "2025-08-14",
    readTime: "10 min read",
    category: "WhatsApp Automation",
  },
  {
    slug: "saas-development-cost-india",
    title: "How Much Does SaaS Development Cost in India? (2025 Breakdown)",
    excerpt:
      "A transparent breakdown of SaaS development costs in India — from a ₹1,20,000 MVP to a ₹20,00,000 enterprise platform — with timelines, what's included, and how to avoid the hidden costs that sink most projects.",
    date: "2025-05-10",
    readTime: "9 min read",
    category: "SaaS Development",
  },
];

const jsonLd = graph(
  {
    "@type": "CollectionPage",
    "@id": "https://risonaitech.com/blog/#collection",
    name: "RisonAI Tech Blog — AI Automation, Agentic AI & GEO Guides",
    url: "https://risonaitech.com/blog",
    description:
      "Practical 2026 guides on AI automation, agentic AI agents, WhatsApp chatbots, voice AI, AI resume screening, and GEO optimization — written by engineers who ship production AI systems for Indian businesses.",
    publisher: {
      "@type": "Organization",
      name: "RisonAI Tech",
      url: "https://risonaitech.com",
    },
  },
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ])
);

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pb-12 pt-36 bg-grid border-b border-slate-200/50" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="label-pill mb-5 inline-flex">Blog</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Insights on{" "}
              <span className="grad-text">AI, SaaS & Automation</span>
            </h1>
            <p className="mt-5 text-xl text-slate-500">
              Practical guides written by engineers who ship production AI systems for Indian
              businesses — no hype, just what works.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-sm leading-relaxed text-slate-500 border-b border-slate-200/50 pb-8">
              Over 17 guides covering{" "}
              <Link href="/services/ai-automation" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">AI automation</Link>,{" "}
              <Link href="/services/ai-agent" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">agentic AI agents</Link>,{" "}
              <Link href="/services/whatsapp-automation" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">WhatsApp automation</Link>,{" "}
              <Link href="/services/chatbot-development" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">chatbot development</Link>,{" "}
              <Link href="/services/resume-screening" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800">AI resume screening</Link>,{" "}
              and more — written by engineers who deploy these systems for Indian businesses.
            </p>
            <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-base block p-8 group transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(79,70,229,0.06)",
                      border: "1px solid rgba(79,70,229,0.15)",
                      color: "#4F46E5",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-slate-900 group-hover:text-indigo-650 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5]">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-200/50" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site text-center">
          <p className="text-slate-500 text-sm mb-3">Want to talk about your project?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Book a free strategy call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
