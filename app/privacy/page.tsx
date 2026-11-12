import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Risonai Tech",
  description:
    "Privacy policy for Risonai Tech. Learn how we collect, use, store, and protect your personal data when you visit risonaitech.com or use our services.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are & Data Fiduciary Details",
    content: (
      <>
        <p>
          Risonai Tech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an enterprise AI solutions and autonomous systems engineering company registered in India (GSTIN: <strong>06CDBPS8926D2ZE</strong>), operating from 196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India.
        </p>
        <p className="mt-3">
          Under India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Digital Personal Data Protection Rules, 2025</strong>, Risonai Tech acts as the <strong>Data Fiduciary</strong> determining the purpose and means of processing personal data collected through our website (<strong>risonaitech.com</strong>) and our customer engagement channels.
        </p>
        <p className="mt-3">
          For any data protection inquiries, consent withdrawals, or rights requests, our designated privacy contact can be reached directly at{" "}
          <a className="text-[#2563EB] hover:underline font-medium" href="mailto:hello@risonaitech.com">
            hello@risonaitech.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "2. Personal Data We Collect",
    content: (
      <>
        <p>
          We adhere strictly to the principle of data minimization, collecting only the digital personal data necessary to evaluate your requirements and deliver our AI automation solutions:
        </p>
        <ul className="mt-4 space-y-3 list-none">
          {[
            {
              label: "Contact & Proposal Inquiries",
              desc: "When you submit our contact form or request an AI strategy proposal, we collect your name, phone number, and project requirements. You may also voluntarily provide your company name and email address.",
            },
            {
              label: "Interactive AI Chatbot",
              desc: "When conversing with our website AI assistant for lead qualification, the assistant may ask for your name, email address, phone number, and country so our technical team can follow up.",
            },
            {
              label: "WhatsApp Business Inquiries",
              desc: "If you initiate contact via our WhatsApp links, we receive your phone number and any information or project documents you voluntarily share during the conversation.",
            },
            {
              label: "Technical & Analytics Identifiers",
              desc: "Subject to your affirmative cookie consent, we collect standard browsing telemetry such as anonymized IP addresses, browser types, device categories, referring URLs, and page navigation patterns via Google Analytics.",
            },
            {
              label: "Enterprise Project Data",
              desc: "During client engagements under formal Statements of Work, we process relevant business data, workflow definitions, and API credentials provided solely to implement the agreed automation architecture.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#2563EB]">
                ✓
              </span>
              <span>
                <strong className="text-[#0F172A]">{item.label}:</strong> {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "lawful-purpose",
    title: "3. Lawful Grounds & Purpose of Processing",
    content: (
      <>
        <p>
          Under Sections 4, 5, 6, and 7 of the DPDP Act, 2023, we process digital personal data solely for specified, lawful purposes on the following legal bases:
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">A. Affirmative Consent (Sections 5 & 6)</h4>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              We process personal data based on your freely given, specific, informed, unconditional, and unambiguous consent indicated through clear affirmative action. For example, when you tick our required consent box before submitting a project enquiry or when you configure your cookie preferences.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">B. Certain Legitimate Uses (Section 7)</h4>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Where you have voluntarily provided your personal data to us for a specified purpose (e.g., initiating a business conversation via WhatsApp or email) and have not indicated that you do not consent to such processing, we process that data strictly to fulfill your requested enquiry.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">C. Contractual Performance & Legal Compliance</h4>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              To execute project deliverables under signed agreements and comply with statutory obligations under Indian law, including GST filing, invoicing, and preventing security breaches.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-we-process",
    title: "4. How Information is Processed & Data Security",
    content: (
      <>
        <p>
          We implement rigorous technical and organizational safeguards in accordance with Section 8(5) of the DPDP Act to protect your personal data from unauthorized access, breach, loss, or alteration:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-slate-600">
          <li>End-to-end TLS/HTTPS encryption across all data in transit with strict HTTP Strict Transport Security (HSTS).</li>
          <li>Server-side input sanitization, rate limiting, and parameter validation to prevent automated data interception.</li>
          <li>Strict role-based access control (RBAC) ensuring only authorized technical staff handle client inquiries.</li>
          <li>Zero exposure of personal information or API secrets in public client-side code bundles.</li>
          <li>Incident response procedures to report any personal data breaches to the Data Protection Board of India and affected Data Principals in the manner prescribed by applicable rules.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "5. Third-Party Data Processors & Service Providers",
    content: (
      <>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal data. We engage vetted Data Processors solely to operate our infrastructure and deliver communications, bound by strict contractual data protection obligations:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-slate-600">
          <li>
            <strong>Cloud Hosting:</strong> Vercel Inc. (hosting and edge routing with enterprise security).
          </li>
          <li>
            <strong>Analytics & Ad Attribution:</strong> Google Ireland Limited / Google LLC (Google Analytics and Google Ads, operated strictly under Google Consent Mode v2 based on your consent choice).
          </li>
          <li>
            <strong>Messaging & Communications:</strong> Meta Platforms / WhatsApp Business API (for direct project communications initiated by the user) and Google Workspace SMTP (for inquiry notification dispatch).
          </li>
          <li>
            <strong>AI Inference:</strong> DeepSeek / OpenAI APIs (for chatbot answering and automated SEO auditing; queries are not trained on customer personal data).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cross-border",
    title: "6. Cross-Border Data Transfers",
    content: (
      <p>
        In operating our global cloud infrastructure (such as Vercel and Google services), personal data may be processed on secure servers located outside India. In accordance with Section 16 of the DPDP Act, 2023, transfers of personal data outside India are permitted unless specifically restricted by the Central Government. We ensure our service providers maintain ISO 27001, SOC 2, and equivalent industry security standards.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention & Erasure Schedule",
    content: (
      <>
        <p>
          Under Section 8(7) of the DPDP Act, we retain personal data only for as long as is necessary to satisfy the purpose for which it was collected or to comply with statutory legal requirements:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-slate-600">
          <li>
            <strong>General Inquiries & Proposals:</strong> Retained for a maximum of 2 years from the date of last communication, after which data is securely erased unless a client project engagement commences.
          </li>
          <li>
            <strong>Client Contracts & Invoicing Records:</strong> Retained for 3 years post-completion to comply with statutory tax, accounting, and legal requirements under Indian law.
          </li>
          <li>
            <strong>Analytics Telemetry:</strong> Automatically expired after 14 months within Google Analytics retention schedules.
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          Upon purpose fulfillment or upon receipt of a valid erasure request, personal data is irreversibly purged or anonymized.
        </p>
      </>
    ),
  },
  {
    id: "data-principal-rights",
    title: "8. Rights of the Data Principal (Your Statutory Rights)",
    content: (
      <>
        <p>
          Under Chapter III (Sections 11–14) of the DPDP Act, 2023, you have the following enforceable rights regarding your digital personal data:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">Right to Access (Section 11)</h4>
            <p className="mt-1 text-xs text-slate-600">
              Request a summary of personal data being processed, processing activities, and identities of all third parties with whom your data has been shared.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">Right to Correction & Erasure (Section 12)</h4>
            <p className="mt-1 text-xs text-slate-600">
              Request correction of inaccurate or misleading data, completion of incomplete data, updating of records, and erasure of data no longer necessary.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">Right of Grievance Redressal (Section 13)</h4>
            <p className="mt-1 text-xs text-slate-600">
              Access an easily available grievance redressal mechanism provided by Risonai Tech before making a complaint to the Board.
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
            <h4 className="font-semibold text-[#0F172A] text-sm">Right to Nominate (Section 14)</h4>
            <p className="mt-1 text-xs text-slate-600">
              Nominate any other individual who shall, in the event of death or incapacity of the Data Principal, exercise your data protection rights.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          You also have the unrestricted right to <strong>withdraw consent</strong> at any time. Withdrawal is as straightforward as providing consent and will not impact the lawfulness of processing conducted prior to withdrawal.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          To exercise any of these statutory rights, please visit our{" "}
          <Link href="/data-protection" className="text-[#2563EB] underline hover:text-blue-700">
            DPDP Rights Guide
          </Link>{" "}
          or email us at{" "}
          <a className="text-[#2563EB] font-medium hover:underline" href="mailto:hello@risonaitech.com">
            hello@risonaitech.com
          </a>
          . We respond to all verified requests within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies & Tracking Technologies",
    content: (
      <>
        <p>
          We use cookies and similar technologies to support core navigation and assess user interest. In compliance with DPDP principles and international consent standards, non-essential cookies (Analytics and Marketing) are <strong>disabled by default</strong> until you provide affirmative consent via our Cookie Banner.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          You can modify or withdraw your cookie consent at any time by reviewing our{" "}
          <Link className="text-[#2563EB] hover:underline font-medium" href="/cookies">
            Cookies Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "10. Processing of Children's Personal Data",
    content: (
      <p>
        In accordance with Section 9 of the DPDP Act, 2023, our enterprise AI solutions and website are directed strictly at businesses and professionals. We do not knowingly collect personal data from individuals under the age of 18, nor do we engage in tracking, behavioral monitoring, or targeted advertising directed at children. If you become aware that a minor has provided personal data, please contact us immediately for prompt erasure.
      </p>
    ),
  },
  {
    id: "grievance-redressal",
    title: "11. Grievance Redressal Mechanism & Officer Contact",
    content: (
      <>
        <p>
          In compliance with Section 13 of the DPDP Act and the DPDP Rules, 2025, Risonai Tech maintains a dedicated Grievance Redressal Contact to resolve any concerns or complaints regarding your personal data:
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-[#0F172A] text-base">Grievance Redressal Desk</p>
          <p className="mt-1 text-slate-600">Designated Contact: <strong>Yogesh Kumar Wadhwa</strong> (Founder & Lead Engineer)</p>
          <p className="mt-0.5 text-slate-600">Entity: RisonAI Tech (GSTIN: 06CDBPS8926D2ZE)</p>
          <div className="mt-3 space-y-1.5 text-slate-600">
            <p className="flex items-center gap-2">
              <MapPin size={14} className="text-slate-400 shrink-0" />
              <span>196, Ground Floor, New RK Puram, Panipat 132103, Haryana, India</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-slate-400 shrink-0" />
              <span>Email: <a href="mailto:hello@risonaitech.com" className="text-[#2563EB] hover:underline font-medium">hello@risonaitech.com</a></span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-slate-400 shrink-0" />
              <span>Phone: <a href="tel:+919050486448" className="text-[#2563EB] hover:underline font-medium">+91 90504 86448</a></span>
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500 border-t border-slate-200/80 pt-2.5">
            <strong>Response SLA:</strong> Inquiries are acknowledged within 48 hours; substantive resolution is provided within 30 business days.
          </p>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          If you are not satisfied with our grievance resolution, you have the right to escalate your complaint to the <strong>Data Protection Board of India (DPBI)</strong> in accordance with the provisions of the DPDP Act, 2023.
        </p>
      </>
    ),
  },
  {
    id: "language-notice",
    title: "12. Multilingual Notice Availability",
    content: (
      <p>
        In accordance with Section 5(3) of the DPDP Act, 2023, Data Principals have the option to access this privacy notice and information regarding their personal data in English or any of the 22 languages specified in the Eighth Schedule to the Constitution of India. To request a copy in an Eighth Schedule language, please write to{" "}
        <a className="text-[#2563EB] hover:underline font-medium" href="mailto:hello@risonaitech.com">
          hello@risonaitech.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "updates",
    title: "13. Updates to this Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect operational modifications or statutory commencement notifications issued under the DPDP Act, 2023 and DPDP Rules, 2025. Material updates will be reflected on this page with a revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, rgba(37,99,235,0.03) 0%, #ffffff 40%)",
      }}
    >
      {/* Hero header */}
      <section className="border-b border-slate-100 py-20 pt-32">
        <div className="container-site mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <ShieldCheck size={14} className="text-blue-600" />
            DPDP Act, 2023 Compliance &amp; Privacy Architecture
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Effective Date: <time dateTime="2026-11">November 2026</time> • Aligned with Digital Personal Data Protection Act, 2023 &amp; Rules, 2025
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Rison AI Tech is committed to transparent, lawful, and secure processing of digital personal data. This policy details how we collect, process, protect, and retain personal data and explains your statutory rights as a Data Principal.
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
                    className="text-sm text-slate-600 hover:text-[#2563EB] transition-colors"
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
        <div className="container-site mx-auto max-w-3xl space-y-12">
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
