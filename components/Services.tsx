"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import { services } from "@/lib/constants";
import { scaleUp } from "@/lib/animations";

export default function Services() {
  return (
    <section className="section-pad bg-[#f7f9fc]">
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">What We Do</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for every layer of{" "}
              <span className="grad-text">your product</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-lg text-brand-gray">
              From concept to production — we cover the full engineering stack.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal delay={i * 0.1} key={service.id} variants={scaleUp}>
                <div className="card-base flex h-full flex-col gap-5 p-7">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.08)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold text-brand-dark"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                      {service.short}
                    </p>
                  </div>
                  <ul className="mt-auto space-y-1.5">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li className="flex items-center gap-2 text-xs text-brand-gray" key={b}>
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: "#635BFF" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="mt-12 text-center" delay={0.3}>
          <Link className="btn-ghost" href="/services">
            See all services
            <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

