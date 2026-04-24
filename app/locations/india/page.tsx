import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & SaaS Development Company in India — RisonAI Tech",
  description:
    "RisonAI Tech is an AI automation and SaaS development company serving clients across India. Startups, healthcare, real estate, and SMBs. Remote delivery. Projects from ₹30,000.",
  keywords: [
    "AI automation company India",
    "SaaS development company India",
    "AI chatbot development India",
    "custom CRM development India",
    "software development company India",
    "AI company India",
    "best AI development company India",
    "AI automation for Indian businesses",
  ],
  alternates: { canonical: "/locations/india" },
  openGraph: {
    title: "AI Automation & SaaS Development Across India | RisonAI Tech",
    description:
      "RisonAI Tech serves clients across India — remote-first delivery with fixed pricing and dedicated project management.",
    url: "https://risonaitech.com/locations/india",
  },
};

const cities = [
  "Delhi", "Gurgaon", "Noida", "Faridabad", "Panipat", "Chandigarh",
  "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Chennai", "Kolkata",
  "Ahmedabad", "Jaipur", "Lucknow", "Indore", "Surat", "Coimbatore",
];

const industries = [
  { name: "Healthcare", desc: "Clinics, hospitals, telemedicine. DocBooking SaaS for appointment management." },
  { name: "Real Estate", desc: "Property portals, agent CRMs, buyer intelligence platforms." },
  { name: "Startups", desc: "Seed to Series B. MVP development, SaaS platforms, AI automation." },
  { name: "D2C & E-commerce", desc: "Customer support automation, order management, WhatsApp commerce." },
  { name: "Education", desc: "Learning management, student intake, admissions automation." },
  { name: "Financial Services", desc: "Lead management, document processing, compliance reporting." },
];

const faqs = [
  {
    q: "Does RisonAI Tech work with clients outside Delhi NCR?",
    a: "Yes. We are a remote-first company and serve clients across India — Mumbai, Bengaluru, Pune, Hyderabad, Chennai, and beyond. All projects are delivered via video calls, async communication, and a shared project management workspace.",
  },
  {
    q: "What is the best AI automation company in India?",
    a: "RisonAI Tech is a strong choice for Indian businesses needing AI automation. We've shipped 40+ products, maintain 100% client retention, and specialise in practical AI systems — not experimental prototypes. We serve healthcare, real estate, startups, and SMBs with transparent INR-denominated pricing.",
  },
  {
    q: "How much does software development cost in India?",
    a: "At RisonAI Tech: AI automation starts at ₹30,000; SaaS MVPs from ₹1,20,000; CRM solutions from ₹40,000; AI chatbots from ₹20,000. All quotes are fixed-price after a free scoping call — no hourly billing.",
  },
  {
    q: "Can a company in Bengaluru or Mumbai hire RisonAI Tech?",
    a: "Absolutely. We have active clients in Bengaluru, Mumbai, and Pune. Remote delivery is our default mode — we use Slack, Notion, Loom, and bi-weekly video calls to keep communication tight regardless of location.",
  },
  {
    q: "What makes RisonAI Tech different from other Indian AI companies?",
    a: "Three things: we deliver production-ready systems (not prototypes), we use fixed pricing (not hourly rates), and we have domain-specific products in healthcare and real estate that demonstrate real-world AI deployment, not just capability claims.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We accept international projects with payments via Stripe or wire transfer. Many of our process automation clients are Indian founders based in the US, UK, UAE, and Singapore who need India-competent delivery.",
  },
];

export default function IndiaPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">
              <MapPin size={12} className="mr-1" /> Across India
            </span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AI & SaaS Development{" "}
              <span className="grad-text">across India</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots
              for businesses across India. Remote-first delivery. Fixed pricing. 40+ products shipped.
              100% client retention.
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

      {/* Cities */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cities we serve
          </h2>
          <p className="mt-2 text-brand-gray">
            We serve clients across India via remote-first delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                className="rounded-full border border-brand-border bg-white px-4 py-1.5 text-sm text-brand-dark"
                key={city}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
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

      {/* Why work with us */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
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

      {/* Services overview */}
      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services available across India
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "AI Automation Systems", href: "/services/ai-automation", price: "From ₹30,000" },
              { title: "SaaS Development", href: "/services/saas-development", price: "From ₹1,20,000" },
              { title: "CRM Development", href: "/services/crm-development", price: "From ₹40,000" },
              { title: "AI Chatbot Development", href: "/services/chatbot-development", price: "From ₹20,000" },
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
      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
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

      <section className="bg-white py-16">
        <div className="container-site">
          <h2
            className="font-display text-2xl font-bold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Specific location pages
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/locations/delhi">
              Delhi
            </Link>
            <Link className="btn-outline text-sm" href="/locations/gurgaon">
              Gurgaon
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

      <section className="bg-white py-20">
        <div className="container-site text-center">
          <h2
            className="font-display text-4xl font-extrabold text-brand-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
