import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const verificationItems = [
  {
    label: "Live product portfolio",
    href: "/products",
    note: "Production products in healthcare and real estate with active workflows.",
  },
  {
    label: "Public engineering profile",
    href: "https://github.com/risonaitech",
    note: "Referenceable engineering identity and deployment history.",
    external: true,
  },
  {
    label: "Case studies with measurable outcomes",
    href: "/#case-studies",
    note: "Problem -> Solution -> Outcome breakdown with quantified impact.",
  },
  {
    label: "Book a live walkthrough",
    href: "/contact",
    note: "Request live product demos and architecture walkthroughs.",
  },
];

export default function VerificationSignals() {
  return (
    <section className="py-16 bg-grid" id="verification-signals" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2
              className="font-display text-3xl font-bold text-brand-dark sm:text-4xl"
            >
              Verification signals for technical buyers
            </h2>
            <p className="mt-3 text-slate-500">
              We structure trust through referenceable proof, not abstract claims. Share these links with your CTO, ops lead, or procurement team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {verificationItems.map((item) => {
              const content = (
                <>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.note}</p>
                </>
              );

              if (item.external) {
                return (
                  <a
                    className="card-base group block p-6"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {content}
                    <ArrowUpRight className="absolute right-4 top-4 text-slate-350 transition-all group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
                  </a>
                );
              }

              return (
                <Link className="card-base group block p-6" href={item.href} key={item.label}>
                  {content}
                  <ArrowUpRight className="absolute right-4 top-4 text-slate-350 transition-all group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
