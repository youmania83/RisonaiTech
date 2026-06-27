import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-pad cv-auto" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container-site">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <Reveal>
            <span className="label-pill mb-4 inline-flex">Client Results</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
            >
              Real businesses.{" "}
              <span className="grad-text">Measurable results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-lg text-brand-gray">
              We don&apos;t anonymise our work. Here&apos;s what clients say after we
              deliver.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal delay={i * 0.1} key={t.id}>
              <div
                className="card-base flex h-full flex-col gap-5 p-7 relative overflow-hidden bg-white"
              >
                {/* Highlighted Outcome Headline */}
                {t.outcomeHeadline && (
                  <div className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                    &ldquo;{t.outcomeHeadline}&rdquo;
                  </div>
                )}

                {/* Quote */}
                <p className="flex-1 text-xs leading-relaxed text-slate-600">
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-4 border-t border-slate-100"
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-slate-50"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                      boxShadow: `0 0 12px ${t.color}33`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {t.role}
                      {t.businessType && ` · ${t.businessType}`}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social proof footnote */}
        <Reveal delay={0.35}>
          <p className="mt-10 text-center text-sm text-slate-400">
            100% client retention rate since founding ·{" "}
            <span className="font-medium text-slate-500">
              All clients are referenceable on request
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
