import Link from "next/link";

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
    <section className="bg-white py-16" id="verification-signals">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2
              className="font-display text-3xl font-bold text-brand-dark sm:text-4xl"
            >
              Verification signals for technical buyers
            </h2>
            <p className="mt-3 text-brand-gray">
              We structure trust through referenceable proof, not abstract claims. Share these links with your CTO, ops lead, or procurement team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {verificationItems.map((item) => {
              const content = (
                <>
                  <p className="text-sm font-semibold text-brand-dark">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.note}</p>
                </>
              );

              if (item.external) {
                return (
                  <a
                    className="card-base block p-5 transition-shadow hover:shadow-md"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link className="card-base block p-5 transition-shadow hover:shadow-md" href={item.href} key={item.label}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
