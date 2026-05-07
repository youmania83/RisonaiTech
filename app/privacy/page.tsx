import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RisonAI Tech",
  description: "Privacy policy for RisonAI Tech. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-36">
      <div className="container-site mx-auto max-w-3xl">
        <h1
          className="font-display text-4xl font-bold text-brand-dark"
        >
          Privacy Policy
        </h1>
        <p className="mt-6 text-brand-gray">
          Last updated: April 2026
        </p>
        <div className="prose prose-gray mt-8 max-w-none text-brand-gray">
          <p>
            Risonai Tech ("we", "our", "us") is committed to protecting your
            personal information. This policy explains how we collect, use, and
            safeguard data when you use our website at{" "}
            <strong>risonaitech.com</strong>.
          </p>
          <h2 className="mt-8 text-xl font-bold text-brand-dark">
            Information we collect
          </h2>
          <p>
            We collect only the information you directly provide — such as your
            name, phone number, and message when you contact us. We do not sell
            or share your data with third parties.
          </p>
          <h2 className="mt-8 text-xl font-bold text-brand-dark">
            Contact
          </h2>
          <p>
            For privacy queries, email us at{" "}
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
