const products = [
  {
    title: "Workflow Intelligence",
    description:
      "Automation blueprints that connect people, data, and AI assistance across recurring business processes."
  },
  {
    title: "Knowledge Assistants",
    description:
      "Search and answer experiences grounded in your documents, policies, and operational knowledge."
  },
  {
    title: "Decision Dashboards",
    description:
      "Lightweight tools that surface signals, recommendations, and next actions for busy teams."
  }
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Products</p>
        <h1>Starter product concepts for AI-enabled teams.</h1>
        <p>
          These product directions can be tailored into internal tools,
          customer-facing experiences, or operational platforms.
        </p>
      </section>
      <section className="page-content">
        <div className="grid">
          {products.map((product) => (
            <article className="card" key={product.title}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
