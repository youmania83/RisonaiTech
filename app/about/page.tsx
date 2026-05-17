import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { aboutValues, stats } from "@/lib/constants";
import CTA from "@/components/CTA";

const BASE_URL = "https://risonaitech.com";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Yogesh Kumar Wadhwa",
  givenName: "Yogesh",
  familyName: "Wadhwa",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "RisonAI Tech",
    url: BASE_URL,
  },
  url: `${BASE_URL}/about`,
  description:
    "Yogesh Kumar Wadhwa is the founder of RisonAI Tech and DocBooking. A self-taught programmer who transitioned from business operations to building AI-powered software products for Indian businesses. He brings an operator's lens — not just an engineer's — to every automation project.",
  knowsAbout: [
    "AI automation",
    "WhatsApp Business API",
    "SaaS development",
    "Web development",
    "Indian SMB market",
    "Self-taught programmer",
    "Healthcare technology",
    "CRM systems",
    "LangChain",
    "RAG architecture",
  ],
  sameAs: [
    "https://www.linkedin.com/in/yogesh-wadhwa",
    "https://github.com/youmania83",
    "https://twitter.com/risonaitech",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Self-taught — programming, AI/ML, and product engineering",
  },
  foundedOrganizations: [
    { "@type": "Organization", name: "RisonAI Tech", url: BASE_URL },
    { "@type": "Organization", name: "DocBooking", url: "https://docbooking.in" },
  ],
};

export const metadata: Metadata = {
  title: "About Yogesh Wadhwa & RisonAI Tech — Self-Taught Programmer, 40+ Products Shipped",
  description:
    "Yogesh Kumar Wadhwa is a self-taught programmer who founded RisonAI Tech. He built DocBooking (live clinic SaaS), Chazo Tea brand, and 40+ AI automation products. 100% client retention.",
  keywords: [
    "about RisonAI Tech",
    "Yogesh Kumar Wadhwa founder",
    "product engineering company India",
    "AI development team India",
    "DocBooking founder",
    "software agency Delhi NCR",
    "operator-led AI agency India",
  ],
  authors: [{ name: "Yogesh Kumar Wadhwa", url: `${BASE_URL}/about` }],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Yogesh Wadhwa & RisonAI Tech | 40+ Products Shipped",
    description:
      "Self-taught programmer and founder. Built DocBooking and 40+ AI automation products for Indian businesses. 100% client retention.",
    url: `${BASE_URL}/about`,
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yogesh Wadhwa & RisonAI Tech | 40+ Products Shipped",
    description: "Self-taught programmer & founder. Built DocBooking + 40 AI products for Indian businesses. 100% client retention.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      {/* Hero */}
      <section className="pb-16 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">About</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
              >
                The team Indian founders call{" "}
                <span className="grad-text">when it has to work</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-xl text-xl text-brand-gray">
                We&apos;ve shipped 40+ products for healthcare founders, real estate
                firms, and SaaS startups across India. Every one of them is
                still a client. That&apos;s not luck — it&apos;s how we build.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-border py-14" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
            {stats.map((s) => (
              <div className="text-center" key={s.value}>
                <p
                  className="font-display text-5xl font-extrabold text-brand-dark"
                >
                  {s.value}
                </p>
                <p className="mt-2 text-base text-brand-gray">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder bio — E-E-A-T section */}
      <section className="py-24" id="founder" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">Founder</span>
              <h2 className="font-display text-4xl font-bold text-brand-dark sm:text-5xl">
                Yogesh Kumar Wadhwa
              </h2>
              <p className="mt-2 text-lg font-medium text-brand-gray">
                Founder &amp; CEO · RisonAI Tech · Panipat, Haryana
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-5 text-lg leading-relaxed text-brand-gray">
                  <p>
                    Yogesh is a self-taught programmer who transitioned from business operations
                    to building AI-powered software products for Indian businesses. That operator
                    background — understanding lead funnels, customer journeys, and business ops
                    from the inside — is what separates how RisonAI Tech builds automation from
                    every other agency. We&apos;ve lived the problems we automate.
                  </p>
                  <p>
                    In 2023, he founded RisonAI Tech and immediately put the work into production:
                    DocBooking (a live AI clinic management SaaS with paying customers in Panipat),
                    Chazo Tea (a D2C tea brand at chazotea.com), and Expreality (a luxury real
                    estate intelligence platform). These aren&apos;t demos. They are live, revenue-generating
                    products built with the same stack we use for clients.
                  </p>
                  <p>
                    RisonAI Tech has since shipped 40+ production systems across healthcare,
                    real estate, e-commerce, and SaaS — with a 100% client retention rate.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-brand-border p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray mb-3">
                      Verified profiles
                    </p>
                    {[
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/yogesh-wadhwa" },
                      { label: "GitHub", href: "https://github.com/youmania83" },
                      { label: "Twitter / X", href: "https://twitter.com/risonaitech" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between py-2 text-sm font-medium text-brand-dark hover:text-[#635BFF] transition-colors border-b border-brand-border last:border-0"
                      >
                        {link.label}
                        <ExternalLink size={13} className="text-brand-gray" />
                      </a>
                    ))}
                  </div>
                  <div className="rounded-xl border border-brand-border p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray mb-3">
                      Known for
                    </p>
                    {[
                      "Self-taught programmer",
                      "AI automation for Indian SMBs",
                      "WhatsApp Business API",
                      "DocBooking — clinic SaaS",
                      "Fixed-price delivery",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 py-1.5 text-sm text-brand-gray border-b border-brand-border last:border-0">
                        <CheckCircle2 size={12} className="text-[#635BFF] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Built by us — live products (receipts) */}
      <section className="py-24" id="products" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="label-pill mb-4 inline-flex">Built by us · Live in production</span>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Products we shipped with our own money
              </h2>
              <p className="mt-4 text-lg text-brand-gray mx-auto max-w-2xl">
                We don&apos;t just build for clients — we build for ourselves.
                These are live, paying-customer products that prove we eat our own cooking.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "DocBooking",
                url: "https://docbooking.in",
                tag: "Healthcare SaaS",
                desc: "AI-powered doctor appointment and clinic management platform. Patient intake on WhatsApp, AI symptom triage, appointment reminders, and clinic analytics. Live with paying clinics in Panipat.",
                signals: ["Live customers", "WhatsApp + AI", "Healthcare"],
              },
              {
                name: "Expreality",
                url: "https://risonaitech.com/products",
                tag: "Real Estate",
                desc: "Luxury real estate intelligence platform with private property inventory, AI location scoring, neighbourhood analytics, and a high-touch CRM for developers and brokerages.",
                signals: ["AI scoring", "CRM integrated", "Real estate"],
              },
              {
                name: "Chazo Tea",
                url: "https://chazotea.com",
                tag: "D2C Brand",
                desc: "A direct-to-consumer tea brand built on the same e-commerce + WhatsApp automation stack we offer clients. Live store with automated order flows and WhatsApp support.",
                signals: ["D2C + WhatsApp", "Automation live", "E-commerce"],
              },
            ].map((product, i) => (
              <Reveal delay={i * 0.1} key={product.name}>
                <div className="card-base flex h-full flex-col p-7">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#635BFF]">
                    {product.tag}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-dark">{product.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">{product.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.signals.map((s) => (
                      <span
                        key={s}
                        className="rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ background: "rgba(99,91,255,0.07)", border: "1px solid rgba(99,91,255,0.15)", color: "#635BFF" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#635BFF] hover:text-[#7C5CFC] transition-colors"
                  >
                    View live product <ExternalLink size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-8 text-center text-sm text-brand-gray">
              Full case studies and client outcomes →{" "}
              <Link href="/products" className="font-semibold text-[#635BFF] hover:underline">
                Products page
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="font-display text-4xl font-bold text-brand-dark sm:text-5xl"
              >
                Why we exist
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                Most software agencies in India overpromise and under-deliver.
                They quote low, scope-creep high, and hand over code you can&apos;t
                maintain. We built RisonAI Tech to be the opposite: fixed
                prices, clear scope, and software that actually runs in
                production.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                We specialize in AI automation, SaaS platforms, and custom CRM
                systems for Indian businesses ready to stop operating manually.
                Our clients are healthcare founders, real estate operators, and
                growth-stage startups who need a technical partner — not a
                vendor. We&apos;ve shipped DocBooking, Expreality, and 40+ other
                production systems. Every client has stayed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <Reveal>
            <div className="mb-14 text-center">
              <h2
                className="font-display text-4xl font-bold text-brand-dark"
              >
                What separates us from every other dev agency
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {aboutValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal delay={i * 0.1} key={val.title}>
                  <div className="card-base p-8">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: "rgba(99,91,255,0.08)" }}
                    >
                      <Icon className="text-[#635BFF]" size={20} />
                    </div>
                    <h3
                      className="font-display text-xl font-bold text-brand-dark"
                    >
                      {val.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {val.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
