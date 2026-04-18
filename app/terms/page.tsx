export default function TermsPage() {
  return (
    <section className="bg-white py-36">
      <div className="container-site mx-auto max-w-3xl">
        <h1
          className="font-display text-4xl font-bold text-brand-dark"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Terms of Service
        </h1>
        <p className="mt-6 text-brand-gray">Last updated: April 2026</p>
        <div className="prose prose-gray mt-8 max-w-none text-brand-gray">
          <p>
            By using <strong>risonaitech.com</strong>, you agree to these terms.
            Risonai Tech provides product engineering services as described on
            this website. All project agreements are governed by separate
            contracts signed between Risonai Tech and the client.
          </p>
          <h2 className="mt-8 text-xl font-bold text-brand-dark">
            Intellectual Property
          </h2>
          <p>
            All content on this website is owned by Risonai Tech and may not be
            reproduced without permission.
          </p>
          <h2 className="mt-8 text-xl font-bold text-brand-dark">Contact</h2>
          <p>
            For terms queries, email{" "}
            <a className="text-[#635BFF]" href="mailto:hello@risonaitech.com">
              hello@risonaitech.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
