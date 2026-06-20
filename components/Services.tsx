import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import MotionWrapper from "@/components/MotionWrapper";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="section-pad bg-grid cv-auto" id="services-overview" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <MotionWrapper delay={0}>
            <span className="label-pill mb-4 inline-flex">What We Build</span>
          </MotionWrapper>
          <MotionWrapper delay={1}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              Every service solves a{" "}
              <span className="grad-text">specific revenue problem</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={2}>
            <p className="mt-4 text-lg text-slate-600">
              We don&apos;t sell technology. We sell outcomes — automation that saves
              20 hours a week, systems that capture leads at 2 AM, software that
              scales without a bigger headcount.
            </p>
          </MotionWrapper>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const waMsg = encodeURIComponent(
              `Hi RisonAI Tech, I want to discuss the ${service.title} system for our business.`
            );
            return (
              <MotionWrapper delay={i} key={service.id}>
                <div className="card-base group flex h-full flex-col justify-between cursor-default p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(79, 70, 229, 0.05)",
                          border: "1px solid rgba(79, 70, 229, 0.15)",
                        }}
                      >
                        <Icon className="text-[#4F46E5]" size={18} />
                      </div>
                      <span className="text-xs font-semibold text-[#4F46E5]">
                        {service.price}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {service.short}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      {service.problem && (
                        <div className="text-xs">
                          <span className="font-bold text-slate-500 block uppercase tracking-wider text-[9px]">Problem</span>
                          <span className="text-slate-600 mt-0.5 block leading-normal">{service.problem}</span>
                        </div>
                      )}
                      {service.solution && (
                        <div className="text-xs">
                          <span className="font-bold text-slate-500 block uppercase tracking-wider text-[9px]">Solution</span>
                          <span className="text-slate-600 mt-0.5 block leading-normal">{service.solution}</span>
                        </div>
                      )}
                      {service.outcome && (
                        <div className="text-xs p-2 rounded bg-indigo-50/50 border border-indigo-100/60">
                          <span className="font-bold text-[#4F46E5] block uppercase tracking-wider text-[9px]">Expected Outcome</span>
                          <span className="text-slate-800 font-medium mt-0.5 block leading-normal">{service.outcome}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/918368137724?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 w-full text-xs font-semibold text-slate-700 transition-all hover:bg-[#25D366]/5 hover:border-[#25D366]/20 hover:text-emerald-700 shadow-sm"
                    >
                      <MessageCircle size={13} className="text-[#25D366] fill-[#25D366]" />
                      Discuss on WhatsApp
                    </a>
                  </div>
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
