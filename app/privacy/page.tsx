import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Risonai Tech",
  description:
    "Privacy policy for Risonai Tech. Learn how we collect, use, store, and protect your personal data when you visit risonaitech.com or use our services.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: (
      <>
        <p>
          Risonai Tech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is an AI automation and product
          engineering agency registered in India (GSTIN: 06CDBPS8926D2ZE),
          operating from 196, Ground Floor, New RK Puram, Panipat 132103, India.
        </p>
        <p className="mt-3">
          We build agentic AI systems, autonomous AI agents, n8n workflows, SaaS
          platforms, and operational infrastructure for businesses. Our website
          is accessible at{" "}
          <strong>risonaitech.com</strong>.
        </p>
        <p className="mt-3">
          Questions about this policy? Contact us at{" "}
          <a className="text-[#4F46E5] hover:underline" href="mailto:hello@risonaitech.com">
            hello@risonaitech.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "2. Data We Collect",
    content: (
      <>
        <p>We collect information in the following ways:</p>
        <ul className="mt-4 space-y-3 list-none">
          {[
            {
              label: "Contact form submissions",
              desc: "When you reach out to us via our website contact form, we collect your name, email address, phone number, company name, and the content of your message.",
            },
            {
              label: "WhatsApp inquiries",
              desc: "If you contact us via WhatsApp, we receive your phone number and any information you share in the conversation.",
            },
            {
              label: "Cookies & analytics",
              desc: "We use cookies and analytics tools (such as Google Analytics) to understand how visitors interact with our website. This may include your IP address, browser type, pages visited, and referral source. See our Cookies Policy for details.",
            },
            {
              label: "Business correspondence",
              desc: "During project discussions and engagements, we may collect additional business information you voluntarily share with us.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-[#4F46E5]">
                ✓
              </span>
              <span>
                <strong className="text-[#0F172A]">{item.label}:</strong>{" "}
                {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>Respond to your enquiries and project requests</li>
          <li>Provide and improve our services</li>
          <li>Send you project updates and relevant communications you have requested</li>
          <li>Analyse website usage patterns to improve user experience</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and ensure the security of our systems</li>
        </ul>
        <p className="mt-4">
          We <strong>do not sell, rent, or trade</strong> your personal
          information to third parties for their marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p>
          We process your personal data under one or more of the following
          lawful bases:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>
            <strong>Consent</strong> — where you have given us explicit
            permission (e.g., contact form submission)
          </li>
          <li>
            <strong>Legitimate interests</strong> — to improve our website and
            services, and to prevent fraud
          </li>
          <li>
            <strong>Contract</strong> — where processing is necessary to deliver
            agreed services
          </li>
          <li>
            <strong>Legal obligation</strong> — where required by applicable law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing & Third Parties",
    content: (
      <>
        <p>
          We may share your data with trusted third-party service providers
          solely to operate our business and deliver our services. These include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>
            <strong>Google Analytics</strong> — website analytics (anonymised
            where possible)
          </li>
          <li>
            <strong>Email service providers</strong> — to deliver correspondence
          </li>
          <li>
            <strong>Cloud hosting providers</strong> — to host our website and
            infrastructure (e.g., Vercel)
          </li>
          <li>
            <strong>WhatsApp Business API</strong> — for messaging communications
          </li>
        </ul>
        <p className="mt-4">
          All third-party processors are contractually required to handle your
          data securely and only for the purposes we specify. We do not allow
          them to use your data for their own marketing.
        </p>
        <p className="mt-3">
          We may also disclose data if required by law, court order, or to
          protect the rights and safety of Risonai Tech, our clients, or the
          public.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>
            <strong>Contact enquiries:</strong> Up to 2 years from the date of
            last contact, unless a project engagement commences
          </li>
          <li>
            <strong>Client project data:</strong> Retained for the duration of
            the project plus 3 years for legal and accounting purposes
          </li>
          <li>
            <strong>Analytics data:</strong> Per the retention settings of our
            analytics provider (typically 14–26 months)
          </li>
        </ul>
        <p className="mt-4">
          Upon expiry of the retention period, data is securely deleted or
          anonymised.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: (
      <>
        <p>
          Depending on your jurisdiction, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>
            <strong>Access</strong> — request a copy of the personal data we
            hold about you
          </li>
          <li>
            <strong>Correction</strong> — request we correct inaccurate or
            incomplete data
          </li>
          <li>
            <strong>Deletion</strong> — request we delete your personal data
            (&ldquo;right to be forgotten&rdquo;)
          </li>
          <li>
            <strong>Objection</strong> — object to processing based on
            legitimate interests
          </li>
          <li>
            <strong>Portability</strong> — request your data in a
            machine-readable format
          </li>
          <li>
            <strong>Withdraw consent</strong> — at any time, where processing is
            based on consent
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, email us at{" "}
          <a
            className="text-[#4F46E5] hover:underline"
            href="mailto:hello@risonaitech.com"
          >
            hello@risonaitech.com
          </a>
          . We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies",
    content: (
      <>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. For full details of the cookies we use,
          their purpose, and how to manage them, please refer to our{" "}
          <Link className="text-[#4F46E5] hover:underline" href="/cookies">
            Cookies Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "9. Data Security",
    content: (
      <>
        <p>
          We implement appropriate technical and organisational security measures
          to protect your personal data against unauthorised access, loss,
          destruction, or alteration. These include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5">
          <li>HTTPS encryption across our website</li>
          <li>Access controls limiting who can access personal data</li>
          <li>Regular security reviews of our systems and processes</li>
        </ul>
        <p className="mt-4">
          However, no method of transmission over the internet is 100% secure.
          While we strive to protect your information, we cannot guarantee
          absolute security.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "10. International Data Transfers",
    content: (
      <p>
        Your data may be processed in countries outside India by our
        third-party service providers (such as Vercel or Google). Where such
        transfers occur, we ensure that adequate safeguards are in place in
        accordance with applicable data protection laws.
      </p>
    ),
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    content: (
      <p>
        Our website and services are not directed at children under the age of
        13. We do not knowingly collect personal data from children. If you
        believe a child has provided us with personal information, please
        contact us and we will promptly delete it.
      </p>
    ),
  },
  {
    id: "updates",
    title: "12. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will post the updated policy
        on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to
        review this page periodically. Continued use of our website after
        changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests relating to this
          Privacy Policy, please contact us:
        </p>
        <address className="mt-4 not-italic space-y-1 text-sm">
          <p className="font-semibold text-[#0F172A]">Risonai Tech</p>
          <p>196, Ground Floor, New RK Puram,</p>
          <p>Panipat 132103, Haryana, India</p>
          <p>
            Email:{" "}
            <a
              className="text-[#4F46E5] hover:underline"
              href="mailto:hello@risonaitech.com"
            >
              hello@risonaitech.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className="text-[#4F46E5] hover:underline" href="tel:+919310837724">
              +91 93108 37724
            </a>
          </p>
        </address>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, rgba(79,70,229,0.03) 0%, #ffffff 40%)",
      }}
    >
      {/* Hero header */}
      <section className="border-b border-slate-100 py-20">
        <div className="container-site mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Legal
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Last updated: <time dateTime="2026-06">June 2026</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Risonai Tech is committed to protecting your privacy. This policy
            explains what personal data we collect, how we use it, and your
            rights as a data subject.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-10">
        <div className="container-site mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Contents
            </p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-slate-600 hover:text-[#4F46E5] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="pb-28">
        <div className="container-site mx-auto max-w-3xl space-y-14">
          {sections.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold text-[#0F172A]">{s.title}</h2>
              <div className="prose prose-slate mt-4 max-w-none text-slate-600 [&_strong]:text-[#0F172A]">
                {s.content}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
