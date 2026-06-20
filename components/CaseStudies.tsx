import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/constants";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="section-pad bg-grid cv-auto" id="case-studies" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">Case Studies</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
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
              <Reveal delay={i * 0.1} key={cs.id}>
                <div className="card-base flex flex-col gap-0 overflow-hidden h-full group hover:shadow-[0_15px_40px_rgba(99,91,255,0.06)] transition-all duration-300">
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{
                      background: "linear-gradient(90deg, #635BFF, #0EA5E9)",
                    }}
                  />

                  {/* Highlight outcome metric at top */}
                  <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                      {cs.metrics[0]}
                    </span>
                    <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                      Verified
                    </span>
                  </div>

                  <div className="flex flex-col gap-5 p-6 flex-1 justify-between">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                          style={{
                            background: "rgba(99,91,255,0.08)",
                            border: "1px solid rgba(99,91,255,0.15)",
                          }}
                        >
                          <Icon className="text-brand-purple" size={15} />
                        </div>
                        <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-purple">
                          {cs.label}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                        {cs.title}
                      </h3>

                      <div className="space-y-3 pt-2">
                        {[
                          { label: "Problem", text: cs.problem },
                          { label: "Solution", text: cs.solution },
                          { label: "Outcome", text: cs.outcome },
                        ].map(({ label, text }) => (
                          <div key={label} className="text-xs">
                            <p className="mb-0.5 font-bold uppercase tracking-widest text-slate-500 text-[9px]">
                              {label}
                            </p>
                            <p className="leading-relaxed text-slate-600">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {cs.metrics.slice(1).map((metric: string) => (
                          <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-medium text-slate-600"
                            key={metric}
                            style={{
                              background: "var(--bg-secondary)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
 
                      <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-brand-purple">
                        {cs.serviceHref && (
                          <Link className="underline underline-offset-2 hover:text-brand-purple/80 transition-colors" href={cs.serviceHref}>
                            Related service
                          </Link>
                        )}
                        {cs.locationHref && (
                          <Link className="underline underline-offset-2 hover:text-brand-purple/80 transition-colors" href={cs.locationHref}>
                            City context
                          </Link>
                        )}
                      </div>
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
