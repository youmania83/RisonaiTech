import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-pad cv-auto" style={{ backgroundColor: "#05070F" }}>
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
              <div
                className="flex h-full flex-col gap-5 rounded-[20px] p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium-hover"
                style={{
                  background: "rgba(255,255,255,0.028)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Quote mark */}
                <span
                  className="text-5xl font-bold leading-none"
                  style={{ color: t.color, opacity: 0.35 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <p className="flex-1 text-sm leading-relaxed text-white/58 -mt-4">
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                      boxShadow: `0 0 16px ${t.color}44`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/38">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social proof footnote */}
        <Reveal delay={0.35}>
          <p className="mt-10 text-center text-sm text-white/32">
            100% client retention rate since founding ·{" "}
            <span className="font-medium text-white/50">
              All clients are referenceable on request
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
