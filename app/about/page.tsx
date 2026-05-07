import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { aboutValues, stats } from "@/lib/constants";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About RisonAI Tech — Product Engineering Team Behind 40+ Shipped Products",
  description:
    "RisonAI Tech is a product engineering company based in Panipat, Haryana. We've shipped 40+ products for healthcare, real estate, and SaaS startups across India. 100% client retention.",
  keywords: [
    "about RisonAI Tech",
    "product engineering company India",
    "AI development team India",
    "software agency Delhi NCR",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RisonAI Tech | Product Engineering Company India",
    description:
      "We've shipped 40+ products for healthcare founders, real estate firms, and SaaS startups across India. 100% client retention.",
    url: "https://risonaitech.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pb-16 pt-36">
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
                We've shipped 40+ products for healthcare founders, real estate
                firms, and SaaS startups across India. Every one of them is
                still a client. That's not luck — it's how we build.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-border bg-[#f7f9fc] py-14">
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

      {/* Mission */}
      <section className="bg-white py-24">
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
                They quote low, scope-creep high, and hand over code you can't
                maintain. We built RisonAI Tech to be the opposite: fixed
                prices, clear scope, and software that actually runs in
                production.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                We specialize in AI automation, SaaS platforms, and custom CRM
                systems for Indian businesses ready to stop operating manually.
                Our clients are healthcare founders, real estate operators, and
                growth-stage startups who need a technical partner — not a
                vendor. We've shipped DocBooking, Expreality, and 40+ other
                production systems. Every client has stayed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f9fc] py-24">
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
