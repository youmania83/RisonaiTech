export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">About</p>
        <h1>Practical AI engineering for teams ready to move.</h1>
        <p>
          Rison AI Tech helps organizations turn promising ideas into reliable
          AI-powered workflows, products, and decision systems.
        </p>
      </section>
      <section className="page-content">
        <div className="split-list">
          <article className="card">
            <h3>Strategy with delivery in mind</h3>
            <p>
              We identify where AI can create measurable value, then shape the
              roadmap around adoption, governance, and production readiness.
            </p>
          </article>
          <article className="card">
            <h3>Engineering that lasts</h3>
            <p>
              Our work focuses on maintainable systems, clear interfaces, and
              tools your team can confidently own after launch.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
