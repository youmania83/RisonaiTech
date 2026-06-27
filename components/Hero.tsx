import { ArrowRight } from "lucide-react";

const stats = [
  { title: "Business Systems Delivered", value: "40+" },
  { title: "Faster Lead Qualification", value: "72%" },
  { title: "Hours Saved Per Month", value: "37" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-[64px]">
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
      <div className="container-site relative z-10 w-full py-24">
        {/* Badges */}
        <div
          className="hero-fade-up mb-7 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0s" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F9F9F9] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#555555]">
            Trusted by 40+ Businesses
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Only 3 Client Slots Available This Month
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111111] sm:text-6xl md:text-7xl max-w-4xl">
          AI Automation That{" "}
          <br className="hidden md:inline" />
          Works For Your Business
        </h1>

        <p
          className="hero-fade-up mt-6 max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          Deploy AI agents, automate operations, and eliminate repetitive work
          with enterprise-grade AI solutions. Get a free proposal within 48 hours.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#111111] px-8 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#333333]"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </a>

          <a
            href="#case-studies"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-8 text-sm font-semibold text-[#111111] transition-colors duration-150 hover:border-[#111111] hover:bg-[#F9F9F9]"
          >
            See Case Studies
            <ArrowRight size={16} className="text-[#999999]" />
          </a>
        </div>

        {/* Trust micro-copy */}
        <div
          className="hero-fade-up mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-[#999999]"
          style={{ animationDelay: "0.38s" }}
        >
          <span>✓ Fixed Scope</span>
          <span>✓ Full Code Ownership</span>
          <span>✓ Free AI Search Audit Below</span>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={item.title}
              className="hero-fade-up group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-[border-color,transform] duration-200 hover:border-[#111111] hover:-translate-y-0.5"
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
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 py-3.5">
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
