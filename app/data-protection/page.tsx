import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, UserCheck, RefreshCw, FileText, Mail, Phone, MapPin, AlertCircle, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "DPDP Compliance & Data Protection Rights | RisonAI Tech",
  description:
    "Understand your rights as a Data Principal under India's Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025. Submit access, correction, erasure, or grievance requests.",
  alternates: { canonical: "/data-protection" },
};

export default function DataProtectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://risonaitech.com/" },
          { "@type": "ListItem", position: 2, name: "Data Protection & DPDP Rights", item: "https://risonaitech.com/data-protection" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://risonaitech.com/data-protection#webpage",
        url: "https://risonaitech.com/data-protection",
        name: "DPDP Compliance & Data Protection Rights | RisonAI Tech",
        description: "Official Data Principal rights, grievance redressal framework, and privacy procedures under India's Digital Personal Data Protection Act, 2023.",
      },
    ],
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, rgba(37,99,235,0.03) 0%, #ffffff 40%)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="border-b border-slate-100 py-20 pt-32">
        <div className="container-site mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <ShieldCheck size={14} className="text-blue-600" />
            Digital Personal Data Protection Act, 2023
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Data Protection &amp; DPDP Rights
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Official Data Principal Rights Guide • Rison AI Tech (GSTIN: 06CDBPS8926D2ZE)
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Rison AI Tech is dedicated to building trustworthy, secure, and privacy-first enterprise AI infrastructure. This guide explains how you can exercise your statutory rights as a <strong>Data Principal</strong> under India&apos;s DPDP Act, 2023 and the DPDP Rules, 2025.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 pb-28">
        <div className="container-site mx-auto max-w-3xl space-y-12">
          {/* Statutory Overview */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5">
              <Scale size={20} className="text-blue-600" />
              1. Statutory Framework &amp; Data Fiduciary Role
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                India&apos;s <strong>Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)</strong> and the <strong>Digital Personal Data Protection Rules, 2025</strong> govern the processing of digital personal data within the territory of India.
              </p>
              <p>
                Under the Act, <strong>Rison AI Tech</strong> operates as a <strong>Data Fiduciary</strong> for all personal data collected through our public website, contact forms, AI chatbot, and direct communication channels. We collect data solely for lawful, transparent, and explicitly specified purposes (such as evaluating client requirements and providing customized AI automation proposals).
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-xs text-blue-900 mt-4">
                <strong>Phased Implementation Notice:</strong> The Central Government of India brings various provisions of the DPDP Act and Rules into force through official commencement notifications. Rison AI Tech proactively implements notice, consent, security, and rights-handling mechanisms to ensure full technical and operational readiness.
              </div>
            </div>
          </div>

          {/* 4 Core Rights */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5">
              <UserCheck size={20} className="text-blue-600" />
              2. Your Rights as a Data Principal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Chapter III of the DPDP Act provides Indian citizens with specific statutory rights regarding their personal data:
            </p>

            <div className="mt-6 space-y-4">
              {/* Right 1 */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#0F172A] text-base">Right to Access Information (Section 11)</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">Section 11</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You have the right to request a summary of the personal data about you that is being processed by Rison AI Tech, the processing activities being undertaken, and the identities of any Data Processors or third parties with whom your data has been shared.
                </p>
              </div>

              {/* Right 2 */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#0F172A] text-base">Right to Correction &amp; Erasure (Section 12)</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">Section 12</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You have the right to request the correction of inaccurate or misleading personal data, completion of incomplete data, updating of outdated records, and the erasure of personal data that is no longer necessary for the purpose for which it was originally collected.
                </p>
              </div>

              {/* Right 3 */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#0F172A] text-base">Right of Grievance Redressal (Section 13)</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">Section 13</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You have the right to readily available grievance redressal mechanisms regarding any act or omission of Rison AI Tech concerning your personal data. We provide an SLA-bound response to all inquiries before any escalation to the Board.
                </p>
              </div>

              {/* Right 4 */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#0F172A] text-base">Right to Nominate (Section 14)</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">Section 14</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You have the right to nominate any individual who shall, in the event of your death or incapacity, exercise your data protection rights in accordance with the provisions of the DPDP Act.
                </p>
              </div>

              {/* Right 5: Consent Withdrawal */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#0F172A] text-base">Right to Withdraw Consent (Section 6(4))</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">Section 6(4)</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Where processing is based on consent, you may withdraw that consent at any time. The process of withdrawing consent is as simple as granting it and will immediately halt further non-statutory processing.
                </p>
              </div>
            </div>
          </div>

          {/* How to submit request */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5">
              <FileText size={20} className="text-blue-600" />
              3. How to Submit a Data Principal Request
            </h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                To exercise any of the statutory rights described above, please send a written request to our dedicated privacy desk:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-xs text-slate-800 space-y-2">
                <p><strong>To:</strong> hello@risonaitech.com</p>
                <p><strong>Subject:</strong> [DPDP Request] - [Specify Right: Access / Correction / Erasure / Nomination / Withdrawal]</p>
                <p><strong>Body details to include:</strong></p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Full Name and contact details (phone number or email previously used).</li>
                  <li>Clear description of your request (e.g., &ldquo;Request summary of personal data held&rdquo; or &ldquo;Request complete erasure of contact enquiry&rdquo;).</li>
                  <li>If nominating an individual, name and verified contact details of the nominee.</li>
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-center">
                  <p className="text-xs text-slate-500">Initial Acknowledgment</p>
                  <p className="font-bold text-[#0F172A] text-base mt-1">Within 48 Hours</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-center">
                  <p className="text-xs text-slate-500">Statutory Resolution</p>
                  <p className="font-bold text-[#0F172A] text-base mt-1">Within 30 Days</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-center">
                  <p className="text-xs text-slate-500">Statutory Fee</p>
                  <p className="font-bold text-emerald-600 text-base mt-1">₹0 (Zero Fee)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grievance Redressal Desk */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2.5">
              <AlertCircle size={20} className="text-blue-600" />
              4. Grievance Redressal Mechanism &amp; DPBI Escalation
            </h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                In compliance with Section 13 of the DPDP Act and the DPDP Rules, 2025, Rison AI Tech maintains a designated Grievance Redressal Desk to investigate and resolve data protection concerns:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                <p className="font-semibold text-[#0F172A] text-base">Grievance Redressal Contact</p>
                <p className="text-slate-600 mt-1">Contact Person: <strong>Yogesh Kumar Wadhwa</strong> (Founder &amp; Lead Engineer)</p>
                <p className="text-slate-600 mt-0.5">Entity: RisonAI Tech (GSTIN: 06CDBPS8926D2ZE)</p>
                <div className="mt-3 space-y-2 text-slate-600">
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
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong>Escalation to Data Protection Board of India:</strong> Under Section 13(3) of the Act, if your grievance is not resolved to your satisfaction within thirty (30) days from the date of submission, you have the statutory right to file a complaint before the <strong>Data Protection Board of India (DPBI)</strong> in the digital format prescribed under the DPDP Rules.
              </p>
            </div>
          </div>

          {/* Multilingual Notice */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A]">
              5. Notice in Eighth Schedule Languages
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Pursuant to Section 5(3) of the DPDP Act, 2023, you have the option to receive this Data Protection Notice and summary of your personal data in English or any of the 22 languages specified in the Eighth Schedule to the Constitution of India (including Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Urdu, Kannada, Malayalam, Punjabi, etc.). Please submit your language preference request to{" "}
              <a href="mailto:hello@risonaitech.com" className="text-[#2563EB] hover:underline font-medium">
                hello@risonaitech.com
              </a>
              .
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
            <Link href="/privacy" className="text-sm font-semibold text-[#2563EB] hover:underline">
              ← Read Full Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm font-semibold text-[#2563EB] hover:underline">
              Manage Cookie Settings →
            </Link>
            <Link href="/terms" className="text-sm font-semibold text-[#2563EB] hover:underline">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
