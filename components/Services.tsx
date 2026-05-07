import Link from "next/link";
import { ArrowRight } from "lucide-react";

import MotionWrapper from "@/components/MotionWrapper";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="section-pad bg-[#f7f9fc]" id="services-overview">
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <MotionWrapper delay={0}>
            <span className="label-pill mb-4 inline-flex">What We Build</span>
          </MotionWrapper>
          <MotionWrapper delay={1}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
            >
              Every service solves a{" "}
              <span className="grad-text">specific revenue problem</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={2}>
            <p className="mt-4 text-lg text-brand-gray">
              We don't sell technology. We sell outcomes — automation that saves
              20 hours a week, systems that capture leads at 2 AM, software that
              scales without a bigger headcount.
            </p>
          </MotionWrapper>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <MotionWrapper delay={i} key={service.id}>
                <div className="card-base group flex h-full flex-col gap-5 cursor-default p-7 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(90, 77, 241, 0.08)" }}
                  >
                    <Icon className="text-[#5a4df1]" size={20} />
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold text-brand-dark"
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
                          style={{ background: "#5a4df1" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* CTA */}
        <MotionWrapper className="mt-12 text-center" delay={5}>
          <Link className="btn-ghost group" href="/services">
            See all services
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}
