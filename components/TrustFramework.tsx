const trustSignals = [
  {
    title: "Why trust us",
    points: [
      "40+ production systems shipped across SaaS, AI, web, and CRM",
      "100% client retention since founding",
      "Median automation gain: 60-80% reduction in repetitive operations",
      "Fixed scope, milestone-linked delivery, and source-code transfer",
    ],
  },
  {
    title: "Execution framework",
    points: [
      "Step 1 - Diagnose: workflow audit, data mapping, bottleneck baseline",
      "Step 2 - Build: sprint-based development with weekly demo checkpoints",
      "Step 3 - Scale: rollout, team enablement, and KPI monitoring",
    ],
  },
  {
    title: "Transparent pricing logic",
    points: [
      "Pricing tied to complexity, integrations, and delivery urgency",
      "Starter automation projects begin at INR 30,000 with 2-3 week delivery",
      "Most clients target 3-6 month ROI through labor-hour and conversion gains",
      "Quoted totals include build, QA, deployment, and initial support window",
    ],
  },
];

export default function TrustFramework() {
  return (
    <section className="py-20" id="trust-framework" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <span className="label-pill mb-4 inline-flex">Trust & Delivery Clarity</span>
          <h2
            className="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
          >
            Evidence-first delivery. <span className="grad-text">No vague promises.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {trustSignals.map((block) => (
            <article className="card-base h-full p-7" key={block.title}>
              <h3 className="font-display text-xl font-bold text-slate-900">
                {block.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {block.points.map((point) => (
                  <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-600" key={point}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: "var(--purple)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
