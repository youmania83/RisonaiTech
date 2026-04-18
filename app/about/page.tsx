"use client";

import Reveal from "@/components/Reveal";
import { aboutValues, stats } from "@/lib/constants";
import { scaleUp } from "@/lib/animations";
import CTA from "@/components/CTA";

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
                style={{ fontFamily: "var(--font-display)" }}
              >
                A{" "}
                <span className="grad-text">product engineering</span>{" "}
                firm — not a dev shop
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-xl text-xl text-brand-gray">
                We build technical products with ownership, craft, and a bias
                toward measurable outcomes. Based in Panipat, working globally.
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
                  style={{ fontFamily: "var(--font-display)" }}
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
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-gray">
                Risonai Tech was founded on a simple belief: great software should
                feel effortless to use but be deeply engineered underneath. We
                focus on products that solve real operational problems — booking
                systems, AI workflows, SaaS platforms — built with the kind of
                precision that holds up at scale.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-gray">
                We&apos;re a small team that operates with high standards. Every
                project gets our full attention, and we stay accountable to
                outcomes — not just deliverables.
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
                style={{ fontFamily: "var(--font-display)" }}
              >
                What we stand for
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {aboutValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal delay={i * 0.1} key={val.title} variants={scaleUp}>
                  <div className="card-base p-8">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: "rgba(99,91,255,0.08)" }}
                    >
                      <Icon className="text-[#635BFF]" size={20} />
                    </div>
                    <h3
                      className="font-display text-xl font-bold text-brand-dark"
                      style={{ fontFamily: "var(--font-display)" }}
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
