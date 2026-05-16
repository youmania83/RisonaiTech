import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import {
  breadcrumbSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Automation & SaaS Development Company in India — RisonAI Tech",
  description:
    "RisonAI Tech is an AI automation and SaaS development company serving clients across India. Healthcare, real estate, startups, and SMBs. Remote delivery. Projects from ₹30,000.",
  keywords: [
    "AI automation company India",
    "SaaS development company India",
    "AI chatbot development India",
    "agentic AI India",
    "custom CRM development India",
    "software development company India",
    "AI company India",
    "best AI development company India",
    "AI automation for Indian businesses",
    "AI integration company India",
  ],
  alternates: { canonical: "/locations/india" },
  openGraph: {
    title: "AI Automation & SaaS Development Across India | RisonAI Tech",
    description:
      "RisonAI Tech serves clients across India — remote-first delivery with fixed pricing and dedicated project management.",
    url: "https://risonaitech.com/locations/india",
    images: [{ url: "https://risonaitech.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & SaaS Development in India | RisonAI Tech",
    description: "AI automation, SaaS, CRM, chatbots for businesses across India. Remote-first, fixed-price delivery. Starting ₹30,000.",
    images: ["https://risonaitech.com/og-image.png"],
  },
};

const cities = [
  "Delhi", "Gurgaon", "Noida", "Faridabad", "Panipat", "Chandigarh",
  "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Chennai", "Kolkata",
  "Ahmedabad", "Jaipur", "Lucknow", "Indore", "Surat", "Coimbatore",
];

const industries = [
  {
    name: "Healthcare",
    desc: "Clinics, hospitals, and telemedicine platforms. Reference build: DocBooking — AI-powered doctor appointment SaaS with patient intake, AI symptom triage, and clinic-side analytics.",
  },
  {
    name: "Real Estate",
    desc: "Property portals, brokerages, developer platforms, and buyer-intelligence tools. Reference build: Expreality — luxury real-estate intelligence with AI location scoring.",
  },
  {
    name: "Startups (seed to Series B)",
    desc: "MVP development, multi-tenant SaaS, AI-native product surfaces, and growth-stage technical product partnership. 40+ products shipped across India.",
  },
  {
    name: "D2C & E-commerce",
    desc: "Customer support automation, order management, WhatsApp commerce, cart-abandonment recovery, and post-purchase review collection on Shopify and custom storefronts.",
  },
  {
    name: "Education & EdTech",
    desc: "Admissions intake, applicant qualification, document verification, parent-facing WhatsApp updates, and learning-management automations.",
  },
  {
    name: "Financial Services",
    desc: "Lead management, document processing, compliance reporting, KYC automation, and AI-drafted client communications.",
  },
];

const cityCoverage = [
  {
    label: "Delhi NCR",
    body: "Active engagements in Delhi, Gurgaon, Noida, and Faridabad. AI lead-routing for real estate, WhatsApp automation for healthcare, AI-enhanced CRM for B2B inside-sales teams, and SaaS platforms for NCR founders.",
  },
  {
    label: "Mumbai",
    body: "AI customer-support deflection for D2C brands, SaaS engineering for fintech and edtech startups, and CRM modernisation for media and agency businesses.",
  },
  {
    label: "Bengaluru",
    body: "Multi-tenant SaaS platforms, AI ops copilots for unicorn-scale teams, RAG chatbots over product documentation, and AI feature modules dropped into existing SaaS.",
  },
  {
    label: "Pune",
    body: "Manufacturing and IT-services CRM, B2B sales pipeline automation, AI document-processing flows, and WhatsApp commerce for D2C launches.",
  },
  {
    label: "Hyderabad",
    body: "Healthcare SaaS extensions, AI clinical-workflow tools, and AI-enhanced lead routing for high-velocity sales teams in pharma and IT services.",
  },
  {
    label: "Chennai",
    body: "Education platform automations, admissions and intake flows, multilingual chatbots (English + Tamil), and CRM systems for growing service businesses.",
  },
  {
    label: "Kolkata, Ahmedabad, Jaipur",
    body: "Family-business and SME automation — WhatsApp + CRM, dashboards replacing spreadsheets, and entry-level AI rollouts that pay back in 30–90 days.",
  },
  {
    label: "Tier-2 cities",
    body: "Indore, Surat, Coimbatore, Lucknow, and Chandigarh — practical AI rollouts for distributors, exporters, healthcare providers, and service operators digitising for the first time.",
  },
];

const internationalCoverage = [
  {
    label: "United States",
    body: "Indian-founded startups operating from the Bay Area, NYC, and Austin. Engagements: AI agents, internal copilots, and SaaS module builds with INR-friendly economics.",
  },
  {
    label: "United Kingdom",
    body: "London-based founders and Indian-origin firms in Manchester and Birmingham. Engagements: SaaS engineering, AI customer support, and CRM modernisation.",
  },
  {
    label: "United Arab Emirates",
    body: "Dubai and Abu Dhabi clients in real estate, hospitality, and trading. Engagements: WhatsApp automation, agent CRMs, and AI lead qualification — Arabic + English support on request.",
  },
  {
    label: "Singapore",
    body: "Indian-origin founders and SE-Asia HQs. Engagements: SaaS MVPs, AI ops dashboards, and growth-stage product engineering.",
  },
];

const stackHighlights = [
  { label: "Frontend", body: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion" },
  { label: "Backend", body: "Node.js, Python (FastAPI), Express, Next.js API routes" },
  { label: "AI / LLM", body: "OpenAI (GPT-4 / GPT-5), Anthropic Claude, Google Gemini, LangChain, LlamaIndex, RAG" },
  { label: "Data", body: "PostgreSQL, MongoDB, Supabase, Redis, pgvector / Pinecone" },
  { label: "Messaging", body: "WhatsApp Business API (Meta-approved BSPs), Twilio, Resend, SendGrid" },
  { label: "Payments", body: "Razorpay (INR), Stripe (international), Paddle where required" },
  { label: "Deployment", body: "Vercel, AWS, Railway, Docker, GitHub Actions CI/CD" },
];

const faqs = [
  {
    q: "Does RisonAI Tech work with clients outside Delhi NCR?",
    a: "Yes. RisonAI Tech is a remote-first company headquartered in Panipat, Haryana, and serves clients across India — Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, and tier-2 cities. All projects run via video calls, async communication, and shared project management.",
  },
  {
    q: "What is the best AI automation company in India?",
    a: "RisonAI Tech is a strong choice for Indian businesses needing AI automation. The company has shipped 40+ products, maintains 100% client retention, and specialises in practical AI systems — not experimental prototypes. We serve healthcare, real estate, startups, and SMBs with transparent INR-denominated pricing.",
  },
  {
    q: "How much does software development cost in India?",
    a: "At RisonAI Tech: AI automation starts at ₹30,000; SaaS MVPs from ₹1,20,000; CRM solutions from ₹40,000; AI chatbots from ₹20,000. All quotes are fixed-price after a free scoping call — no hourly billing.",
  },
  {
    q: "Can a company in Bengaluru or Mumbai hire RisonAI Tech?",
    a: "Yes. RisonAI Tech has active clients in Bengaluru, Mumbai, and Pune. Remote delivery is the default mode — Slack, Notion, Loom, and bi-weekly video calls keep communication tight regardless of location.",
  },
  {
    q: "What makes RisonAI Tech different from other Indian AI companies?",
    a: "Three things: production-ready systems (not prototypes), fixed pricing (not hourly rates), and domain-specific reference products in healthcare (DocBooking) and real estate (Expreality) that demonstrate real-world AI deployment, not just capability claims.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. RisonAI Tech accepts international projects with payments via Stripe or wire transfer. Active clients include Indian-origin founders in the US, UK, UAE, and Singapore who need India-competent delivery at INR-friendly economics.",
  },
  {
    q: "Which Indian languages do you support in chatbots and automation?",
    a: "Default: Hindi and English. On request: Tamil, Telugu, Marathi, Bengali, Kannada, Gujarati, Punjabi, and Malayalam. Multilingual flows detect user language automatically and respond accordingly.",
  },
  {
    q: "Do you provide on-site presence anywhere in India?",
    a: "Most engagements run remotely. On-site kickoff workshops and quarterly reviews are available in Delhi NCR (Delhi, Gurgaon, Noida, Faridabad) and Panipat (HQ). Other cities are remote-first by default.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/india" },
    { name: "India", url: "/locations/india" },
  ]),
  faqSchemaFromPairs(faqs),
);

export default function IndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">
              <MapPin size={12} className="mr-1" /> Across India
            </span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              AI & SaaS Development{" "}
              <span className="grad-text">across India</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI
              chatbots for businesses across India. Remote-first delivery from our Panipat
              headquarters. Fixed INR pricing. 40+ products shipped. 100% client retention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Book Free Consultation
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/services">
                View All Services
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              Serving clients across 18+ cities · Remote-first · INR pricing · 100% code ownership
            </p>
          </div>
        </div>
      </section>

      {/* AI summary block */}
      <section className="bg-brand-light/50 py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-light/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech is an AI automation and SaaS development company in
              India.</strong> Headquartered at 196, Ground Floor, New RK Puram, Panipat, Haryana
              132103, with active clients in Delhi, Gurgaon, Noida, Faridabad, Mumbai, Pune,
              Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Indore, Surat,
              and Coimbatore. International clients in the United States, United Kingdom, United
              Arab Emirates, and Singapore. Services span AI automation (₹30,000+), AI chatbots
              (₹20,000+), CRM (₹40,000+), SaaS (₹1,20,000+), and websites (₹35,000+). Remote-first
              delivery with fixed-price contracts and full source-code handover.
            </p>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Cities we serve
          </h2>
          <p className="mt-2 text-brand-gray">
            RisonAI Tech serves clients across India via remote-first delivery from Panipat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                className="rounded-full border border-brand-border bg-brand-light/20 px-4 py-1.5 text-sm text-brand-dark"
                key={city}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* City coverage */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            What we ship in each region
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityCoverage.map((row) => (
              <div className="card-base p-5" key={row.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {row.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Industries we serve across India
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div className="card-base p-6" key={ind.name}>
                <h3 className="font-semibold text-brand-dark">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            International coverage
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
            Indian-origin founders and India-friendly buyers across four major markets.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {internationalCoverage.map((row) => (
              <div className="card-base p-5" key={row.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {row.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Indian businesses choose RisonAI Tech
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Remote-first delivery — works for any city in India",
              "Fixed INR pricing — no hourly rates or currency risk",
              "40+ products shipped in web, mobile, and AI",
              "100% client retention — no project left incomplete",
              "Two-week sprint model — see progress every 14 days",
              "Full source code ownership transferred at close",
              "Post-launch support included in every contract",
              "WhatsApp-first communication for fast async updates",
            ].map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Stack we ship across India
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-light/30 text-brand-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Layer</th>
                  <th className="px-5 py-3 font-semibold">Tools</th>
                </tr>
              </thead>
              <tbody>
                {stackHighlights.map((row) => (
                  <tr className="border-t border-brand-border" key={row.label}>
                    <td className="px-5 py-3 font-medium text-brand-dark">{row.label}</td>
                    <td className="px-5 py-3 text-brand-gray">{row.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Services available across India
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "AI Automation Systems", href: "/services/ai-automation", price: "From ₹30,000" },
              { title: "SaaS Development", href: "/services/saas-development", price: "From ₹1,20,000" },
              { title: "CRM Development", href: "/services/crm-development", price: "From ₹40,000" },
              { title: "AI Chatbot Development", href: "/services/chatbot-development", price: "From ₹20,000" },
              { title: "WhatsApp Automation", href: "/services/whatsapp-automation", price: "From ₹25,000" },
              { title: "Website Development", href: "/services/website-development", price: "From ₹35,000" },
            ].map((s) => (
              <Link
                className="card-base flex items-center justify-between p-5 transition-shadow hover:shadow-md"
                href={s.href}
                key={s.title}
              >
                <span className="font-medium text-brand-dark">{s.title}</span>
                <span className="text-sm font-semibold text-[#635BFF]">{s.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-6" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light/50 py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Specific location pages
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat
            </Link>
            <Link className="btn-outline text-sm" href="/services">
              All Services
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="font-display text-4xl font-extrabold text-brand-dark">
            Start your project from anywhere in India
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            Remote-first. Fixed pricing. 30-minute free consultation. Proposal in 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Book Free Consultation
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/services">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
