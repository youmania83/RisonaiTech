import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, Settings2 } from "lucide-react";
import CookieSettingsTrigger from "@/components/CookieSettingsTrigger";

export const metadata: Metadata = {
  title: "Cookies Policy | Risonai Tech",
  description:
    "Cookies policy for Risonai Tech. Learn about the cookies, tracking technologies, and Google Consent Mode v2 controls on risonaitech.com and how to manage your preferences.",
  alternates: { canonical: "/cookies" },
};

const cookieTable = [
  {
    name: "risonai_cookie_consent_v1",
    provider: "RisonAI Tech",
    purpose:
      "Persists your affirmative consent preferences (Essential, Analytics, Marketing) under India's DPDP Act, 2023 so the banner does not re-appear on subsequent page loads.",
    type: "Necessary",
    duration: "1 year (localStorage)",
  },
  {
    name: "__vercel_live_token",
    provider: "Vercel",
    purpose:
      "Used by cloud infrastructure for deployment routing and preview authentication.",
    type: "Functional",
    duration: "Session",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose:
      "Distinguishes unique visitors and sessions to measure site usage. Operated under Google Consent Mode v2 (denied by default until consent is granted).",
    type: "Analytics",
    duration: "14 months",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Distinguishes users across 24-hour analytics measurement windows.",
    type: "Analytics",
    duration: "24 hours",
  },
  {
    name: "_gat",
    provider: "Google Analytics",
    purpose: "Throttles request rate to prevent overloading Google Analytics servers.",
    type: "Analytics",
    duration: "1 minute",
  },
  {
    name: "_gcl_au, _gac_*",
    provider: "Google Ads",
    purpose:
      "Attribution cookies used to measure campaign effectiveness and conversions. Active strictly when marketing consent is affirmatively granted.",
    type: "Marketing",
    duration: "90 days",
  },
];

const categoryColors: Record<string, string> = {
  Necessary: "bg-blue-50 text-blue-700 border-blue-100",
  Analytics: "bg-amber-50 text-amber-700 border-amber-100",
  Functional: "bg-purple-50 text-purple-700 border-purple-100",
  Marketing: "bg-rose-50 text-rose-700 border-rose-100",
};

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies & How We Use Them",
    content: (
      <p>
        Cookies and local storage tokens are small data items placed on your device when you browse <strong>risonaitech.com</strong>. They help our infrastructure recognize returning sessions, respect your privacy choices, and measure technical site reliability. In accordance with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, non-essential cookies are <strong>disabled by default</strong> and require your affirmative consent prior to activation.
      </p>
    ),
  },
  {
    id: "manage-preferences",
    title: "2. Manage Your Cookie Preferences Anytime",
    content: (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h4 className="font-semibold text-[#0F172A] text-base mb-2">Instant Preference Center</h4>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          You can modify, grant, or withdraw your cookie consent at any moment. Changes take effect immediately across all subsequent page views without requiring a browser restart.
        </p>
        <CookieSettingsTrigger label="Open Cookie Settings" />
      </div>
    ),
  },
  {
    id: "cookie-categories",
    title: "3. Categories of Cookies We Use",
    content: (
      <>
        <p>
          We classify cookies and tracking scripts into four transparent categories:
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              type: "Necessary",
              icon: "🔒",
              desc: "Essential for site security, session integrity, and remembering your consent state. These cannot be disabled.",
            },
            {
              type: "Analytics",
              icon: "📊",
              desc: "Allows Google Analytics to measure aggregated traffic patterns and page latency. Disabled by default until you opt in.",
            },
            {
              type: "Functional",
              icon: "⚙️",
              desc: "Supports CDN edge routing and preview builds. Does not store personal identification profiles.",
            },
            {
              type: "Marketing",
              icon: "📣",
              desc: "Measures Google Ads campaign effectiveness and conversion tracking. Operates only if you opt in to advertising cookies.",
            },
          ].map((cat) => (
            <div
              key={cat.type}
              className={`rounded-xl border p-5 ${categoryColors[cat.type]}`}
            >
              <p className="text-lg">{cat.icon}</p>
              <p className="mt-2 font-semibold">{cat.type}</p>
              <p className="mt-1 text-sm opacity-90">{cat.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "consent-mode-v2",
    title: "4. Google Consent Mode v2 Architecture",
    content: (
      <>
        <p>
          Our web architecture implements <strong>Google Consent Mode v2</strong>. When you load any page on risonaitech.com:
        </p>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-slate-600">
          <li>The default state for <code>ad_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code>, and <code>analytics_storage</code> is set to <strong>denied</strong>.</li>
          <li>Google Tag runs in privacy-preserving mode without reading or writing ad tracking cookies.</li>
          <li>If you click &ldquo;Accept All&rdquo; or enable specific categories in your preference settings, the state is dynamically updated to <strong>granted</strong>.</li>
          <li>If you choose &ldquo;Essential Only&rdquo;, no marketing or analytical identifiers are transmitted.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookie-list",
    title: "5. Comprehensive Cookie Inventory",
    content: (
      <>
        <p className="mb-6">
          The table below lists all cookies and persistent tokens utilized on our website:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Cookie / Identifier</th>
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Provider</th>
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Purpose</th>
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Type</th>
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Duration</th>
              </tr>
            </thead>
            <tbody>
              {cookieTable.map((row, i) => (
                <tr
                  key={row.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                >
                  <td className="px-4 py-3 font-mono text-xs text-[#0F172A]">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.provider}</td>
                  <td className="px-4 py-3 text-slate-600">{row.purpose}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${categoryColors[row.type]}`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "browser-controls",
    title: "6. Managing Cookies in Your Browser",
    content: (
      <>
        <p>
          In addition to our on-site Preference Center, all major web browsers allow you to block, inspect, or delete cookies via their settings:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
            { label: "Mozilla Firefox", href: "https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" },
            { label: "Apple Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
            { label: "Microsoft Edge", href: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <span>{item.label} Guidance</span>
              <span className="text-slate-400">→</span>
            </a>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "contact",
    title: "7. Inquiries Regarding Cookie & Privacy Technologies",
    content: (
      <>
        <p>
          For any questions concerning tracking technologies or our DPDP implementation, please email our privacy desk:
        </p>
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-[#0F172A]">Rison AI Tech — Privacy &amp; Data Desk</p>
          <p className="text-slate-600">Email: <a href="mailto:hello@risonaitech.com" className="text-[#2563EB] hover:underline font-medium">hello@risonaitech.com</a></p>
          <p className="text-slate-600">196, Ground Floor, New RK Puram, Panipat 132103, Haryana, India</p>
        </div>
      </>
    ),
  },
];

export default function CookiesPage() {
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
            <Cookie size={14} className="text-blue-600" />
            Google Consent Mode v2 &amp; Tracking Transparency
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Cookies Policy
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Effective Date: <time dateTime="2026-11">November 2026</time> • Aligned with India&apos;s DPDP Act, 2023
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            This policy outlines how Rison AI Tech employs cookies and tracking technologies on <strong>risonaitech.com</strong>, details our Google Consent Mode v2 integration, and explains how you can manage your preferences.
          </p>
          <div className="mt-6">
            <CookieSettingsTrigger label="Change My Cookie Settings" />
          </div>
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
