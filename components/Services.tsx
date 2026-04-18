const services = [
  {
    title: "AI Readiness",
    description:
      "Map the workflows, data, and adoption risks that matter before teams invest in production AI."
  },
  {
    title: "Automation Delivery",
    description:
      "Build reliable assistants, integrations, and workflow automations that remove recurring manual effort."
  },
  {
    title: "Product Engineering",
    description:
      "Design and develop AI-enabled web experiences with clear data flows and maintainable foundations."
  }
];

export default function Services() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Focused support from idea to production.</h2>
        <p>
          Choose the engagement shape that fits your team, whether you need a
          roadmap, a prototype, or a production-ready product.
        </p>
      </div>
      <div className="grid">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
