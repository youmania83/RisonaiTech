import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Case studies</p>
        <h2>Designed for measurable operational progress.</h2>
      </div>
      <div className="case-study">
        <Image
          alt="Engineer working with data visualizations on a laptop"
          className="case-image"
          height={900}
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
          width={1200}
        />
        <article>
          <h3>From scattered requests to an automated intake workflow</h3>
          <p>
            A growing operations team needed a clearer way to triage repetitive
            internal requests. We shaped a structured intake, AI-assisted
            routing, and reporting flow that made follow-up easier for every
            stakeholder.
          </p>
          <p>
            The result was a cleaner operating rhythm: fewer missed handoffs,
            faster response loops, and better visibility into where effort was
            being spent.
          </p>
        </article>
      </div>
    </section>
  );
}
