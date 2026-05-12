import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { breadcrumbSchema, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Automation Blog India — Costs, Guides & Comparisons for 2026 | RisonAI Tech",
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
    images: [{ url: "https://risonaitech.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & SaaS Blog | RisonAI Tech",
    description: "Practical guides on AI automation, WhatsApp chatbots, SaaS dev costs, and CRM integration for Indian businesses.",
    images: ["https://risonaitech.com/og-image.png"],
  },
};

export const posts = [
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
