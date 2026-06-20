import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { breadcrumbSchema, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "AI Automation Blog India — Guides & Insights | RisonAI Tech" },
  description:
    "Practical 2026 guides: How much does WhatsApp chatbot cost in India? SaaS development cost for Indian startups? AI automation ROI for SMEs? Written by operators who built it.",
  keywords: [
    "AI automation blog India",
    "SaaS development guide India",
    "WhatsApp chatbot tutorial",
    "CRM automation India",
    "AI for small business India",
    "product engineering blog",
    "RisonAI Tech blog",
  ],
  alternates: { canonical: "/blog" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "Blog — AI Automation & SaaS Insights | RisonAI Tech",
    description:
      "Practical guides on AI automation, SaaS development, and chatbot deployment for Indian businesses.",
    url: "https://risonaitech.com/blog",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & SaaS Blog | RisonAI Tech",
    description: "Practical guides on AI automation, WhatsApp chatbots, SaaS dev costs, and CRM integration for Indian businesses.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
};

export const posts = [
  {
    slug: "how-to-check-if-your-website-appears-in-chatgpt",
    title: "How to Check If Your Website Appears in ChatGPT, Perplexity, and Google AI Overviews",
    excerpt:
      "A practical workflow to test your website's AI visibility across ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews, plus a faster free audit method.",
    date: "2026-06-13",
    readTime: "9 min read",
    category: "AI Search",
  },
  {
    slug: "free-ai-seo-audit-checklist",
    title: "Free AI SEO Audit Checklist for 2026: 18 Things to Fix Before You Pay an Agency",
    excerpt:
      "Use this practical GEO checklist to improve your website's visibility in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews before you spend on a full engagement.",
    date: "2026-06-12",
    readTime: "10 min read",
    category: "GEO Checklist",
  },
  {
    slug: "why-your-website-is-not-showing-in-ai-search",
    title: "Why Your Website Is Not Showing in AI Search: 9 Common Reasons and What to Fix First",
    excerpt:
      "Nine common reasons AI systems skip your brand, from weak entity signals to weak factual density, plus the fixes that usually improve AI visibility fastest.",
    date: "2026-06-11",
    readTime: "9 min read",
    category: "AI Search",
  },
  {
    slug: "ai-automation-for-small-businesses",
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    excerpt:
      "Small businesses with 5–50 employees are the biggest AI automation opportunity in India. A practical playbook: 4 workflows, ₹60,000–₹80,000 total, 90-day roadmap, no technical team required.",
    date: "2026-06-10",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-lead-generation-systems",
    title: "AI Lead Generation Automation: Build a System That Never Sleeps",
    excerpt:
      "Businesses using AI for lead generation respond in under 60 seconds, qualify 100% of leads automatically, and close 30–40% more deals. Here is the full 5-layer architecture — channels, AI scoring, CRM sync, and cost breakdown.",
    date: "2026-06-09",
    readTime: "10 min read",
    category: "Lead Generation",
  },
  {
    slug: "ai-automation-real-estate-india",
    title: "AI Automation for Real Estate India: The 2026 Playbook",
    excerpt:
      "In 2026, the fastest-growing real estate agencies in India all have one thing in common: they respond to leads in under 60 seconds, qualify every inquiry automatically, and never lose a hot lead to a competitor. Here is how.",
    date: "2026-06-08",
    readTime: "10 min read",
    category: "Real Estate",
  },
  {
    slug: "make-vs-n8n-ai-automation",
    title: "Make vs n8n in 2026: Which Automation Platform Is Right for Your Business?",
    excerpt:
      "Make (formerly Integromat) and n8n are the two most popular automation platforms for business workflows. Here is a complete comparison with a clear decision framework for Indian businesses.",
    date: "2026-06-07",
    readTime: "9 min read",
    category: "AI Tools",
  },
  {
    slug: "ai-agents-for-business-automation",
    title: "AI Agents for Business: What They Are, What They Cost, and How to Deploy Them",
    excerpt:
      "AI agents are not just advanced chatbots — they are autonomous systems that plan, act, and complete multi-step tasks without human direction. This is the production guide for deploying AI agents in your business.",
    date: "2026-06-06",
    readTime: "10 min read",
    category: "AI Agents",
  },
  {
    slug: "ai-and-automation",
    title: "AI and Automation Together: How to Combine Them for Maximum Business Impact",
    excerpt:
      "AI and automation are two different capabilities that work best when combined. Understanding when to use rule-based automation, when to add AI intelligence, and how to layer them is the highest-leverage skill in modern business systems.",
    date: "2026-06-05",
    readTime: "9 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-vs-automation",
    title: "AI vs Automation: What Is the Difference and Which Does Your Business Need?",
    excerpt:
      "Most businesses use the terms AI and automation interchangeably — but they mean fundamentally different things. Knowing the difference determines which technology solves your actual business problem.",
    date: "2026-06-04",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-automation-tools",
    title: "Top AI Automation Tools in 2026: The No-Fluff Shortlist",
    excerpt:
      "There are now 400+ tools that claim to offer AI automation. Most are noise. This is the production-grade shortlist for Indian businesses — tools we actually deploy for clients.",
    date: "2026-06-03",
    readTime: "9 min read",
    category: "AI Tools",
  },
  {
    slug: "how-to-use-ai-for-automation",
    title: "How to Use AI for Automation: A Step-by-Step Implementation Guide",
    excerpt:
      "Most businesses know they should use AI to automate workflows — but have no idea where to start. This is a no-fluff, step-by-step guide to implementing AI automation in a real business.",
    date: "2026-06-02",
    readTime: "9 min read",
    category: "AI Automation",
  },
  {
    slug: "what-is-ai-automation",
    title: "What Is AI Automation? A Clear Explanation for Business Owners",
    excerpt:
      "AI automation combines artificial intelligence with traditional automation to handle complex, judgment-based tasks without human intervention. Here is a clear, jargon-free explanation of what it is, how it works, and what it can do for your business.",
    date: "2026-06-01",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "ai-employee-never-sleeps",
    title: "The Employee Who Never Sleeps: How AI Saves Indian Owners Lakhs Every Year",
    excerpt:
      "Three real stories of Indian business owners who replaced ₹5–15 lakh/year of repetitive work with an AI employee that never sleeps, never asks for a hike, never quits — and finally let them take a real holiday.",
    date: "2026-05-20",
    readTime: "9 min read",
    category: "Story",
  },
  {
    slug: "ai-automation-for-indian-smes",
    title: "AI Automation for Indian SMEs: What Actually Works in 2025",
    excerpt:
      "Most AI automation projects fail because businesses automate the wrong things first. Here's the prioritisation framework we use with 40+ Indian clients to pick the right workflows and get measurable ROI in under 90 days.",
    date: "2025-04-20",
    readTime: "8 min read",
    category: "AI Automation",
  },
  {
    slug: "whatsapp-chatbot-for-business-india",
    title: "WhatsApp Chatbot for Business in India: The Complete 2025 Guide",
    excerpt:
      "India has 535 million WhatsApp users. Yet most businesses still respond to leads manually — or miss them entirely. This guide covers how to build a WhatsApp chatbot that qualifies leads, books appointments, and handles FAQs 24/7.",
    date: "2025-05-05",
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
      <section className="pb-12 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="label-pill mb-5 inline-flex">Blog</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Insights on{" "}
              <span className="grad-text">AI, SaaS & Automation</span>
            </h1>
            <p className="mt-5 text-xl text-white/52">
              Practical guides written by engineers who ship production AI systems for Indian
              businesses — no hype, just what works.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-base block p-8 group transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(99,91,255,0.1)",
                      border: "1px solid rgba(99,91,255,0.2)",
                      color: "#a78bfa",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/52">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[#635BFF]">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site text-center">
          <p className="text-white/50 text-sm mb-3">Want to talk about your project?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Book a free strategy call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
