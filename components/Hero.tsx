import { ArrowRight } from "lucide-react";

const stats = [
  { title: "Business Systems Delivered", value: "40+" },
  { title: "Faster Lead Qualification", value: "72%" },
  { title: "Hours Saved Per Month", value: "37" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-start md:items-center justify-center overflow-hidden bg-white pt-[64px]">
      {/* Very subtle dot grid — barely visible, editorial feel */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft bottom fade to white so content below reads cleanly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background: "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />

      {/* Content */}
      <div className="container-site relative z-10 w-full py-12 md:py-24 flex flex-col items-center text-center">
        {/* Badge/Pill */}
        <div
          className="hero-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/15 bg-orange-500/[0.02] px-4 py-1.5"
          style={{ animationDelay: "0s" }}
        >
          <span className="h-2 w-2 rounded-full bg-[#FF7A00] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Engineering AI Operating Systems
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-[#111111] sm:text-6xl md:text-7xl max-w-4xl">
          Build AI <br />
          Employees. <br />
          <span className="text-slate-500/80">Not AI Tools.</span>
        </h1>

        {/* Description */}
        <p
          className="hero-fade-up mt-8 max-w-2xl text-base leading-relaxed text-[#555555] sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          We engineer intelligent systems that automate your operations, eliminate
          repetitive work, and scale your business without hiring more people.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#FF7A00] px-8 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#E06B00] shadow-[0_4px_20px_rgba(255,122,0,0.25)] border border-[#FF7A00]"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </a>

          <a
            href="#case-studies"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#FF7A00]/25 bg-white px-8 text-sm font-semibold text-[#FF7A00] transition-all duration-150 hover:border-[#FF7A00] hover:bg-orange-500/[0.02]"
          >
            See Case Studies
            <ArrowRight size={16} className="text-[#FF7A00]/75" />
          </a>
        </div>

        {/* Trust micro-copy */}
        <div
          className="hero-fade-up mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[#999999]"
          style={{ animationDelay: "0.38s" }}
        >
          <span>✓ Fixed Scope</span>
          <span>✓ Full Code Ownership</span>
          <span>✓ Free AI Search Audit Below</span>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 w-full max-w-4xl">
          {stats.map((item, i) => (
            <div
              key={item.title}
              className="hero-fade-up group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-[border-color,transform] duration-200 hover:border-[#FF7A00] hover:-translate-y-0.5 text-left"
              style={{ animationDelay: `${0.45 + i * 0.1}s` }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                {item.title}
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="absolute inset-x-0 bottom-0 border-t border-[#E5E7EB] bg-white"
      >
        <div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#999999]">
            Built for
          </span>
          {[
            "Healthcare Founders",
            "Real Estate Firms",
            "SaaS Startups",
            "D2C Brands",
            "Clinic Chains",
            "PropTech Teams",
          ].map((name, i) => (
            <span key={name} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden h-3 w-px bg-[#E5E7EB] sm:block" />
              )}
              <span className="text-xs font-medium text-[#555555]">{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
