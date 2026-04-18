import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>AI services built around business outcomes.</h1>
        <p>
          From discovery to deployment, Rison AI Tech supports the full path
          from concept to production.
        </p>
      </section>
      <Services />
    </>
  );
}
