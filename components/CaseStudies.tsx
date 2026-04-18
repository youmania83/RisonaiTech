"use client";

import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/constants";
import { scaleUp } from "@/lib/animations";

export default function CaseStudies() {
  return (
    <section className="section-pad bg-[#f7f9fc]">
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">Case Studies</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Problems solved,{" "}
              <span className="grad-text">outcomes delivered</span>
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <Reveal delay={i * 0.1} key={cs.id} variants={scaleUp}>
                <div className="card-base flex flex-col gap-0 overflow-hidden h-full">
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: "linear-gradient(90deg, #635BFF, #0EA5E9)",
                  }}
                />

                <div className="flex flex-col gap-5 p-7">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(99,91,255,0.08)" }}
                    >
                      <Icon className="text-[#635BFF]" size={17} />
                    </div>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
                      {cs.label}
                    </span>
                  </div>

                  <h3
                    className="font-display text-xl font-700 leading-snug text-brand-dark"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {cs.title}
                  </h3>

                  <div className="space-y-4">
                    {[
                      { label: "Problem", text: cs.problem },
                      { label: "Solution", text: cs.solution },
                      { label: "Outcome", text: cs.outcome },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-subtle">
                          {label}
                        </p>
                        <p className="text-sm leading-relaxed text-brand-gray">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
