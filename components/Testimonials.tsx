import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
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
              We don't anonymise our work. Here's what clients say after we
              deliver.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal delay={i * 0.1} key={t.id}>
              <div className="card-base flex h-full flex-col gap-6 p-7">
                {/* Quote mark */}
                <span
                  className="text-5xl font-bold leading-none"
                  style={{ color: t.color, opacity: 0.25 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <p className="flex-1 text-sm leading-relaxed text-brand-gray -mt-4">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-brand-border pt-5">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-subtle">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social proof footnote */}
        <Reveal delay={0.35}>
          <p className="mt-10 text-center text-sm text-brand-subtle">
            100% client retention rate since founding ·{" "}
            <span className="font-medium text-brand-gray">
              All clients are referenceable on request
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
