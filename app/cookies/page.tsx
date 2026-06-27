import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | Risonai Tech",
  description:
    "Cookies policy for Risonai Tech. Learn about the cookies and tracking technologies we use on risonaitech.com and how to manage your preferences.",
  alternates: { canonical: "/cookies" },
};

const cookieTable = [
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    purpose:
      "Tracks unique visitors, sessions, and page views to help us understand how users interact with our website.",
    type: "Analytics",
    duration: "2 years",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Distinguishes users for analytics. Expires after 24 hours.",
    type: "Analytics",
    duration: "24 hours",
  },
  {
    name: "_gat",
    provider: "Google Analytics",
    purpose:
      "Throttles request rate to prevent overloading Google Analytics servers.",
    type: "Analytics",
    duration: "1 minute",
  },
  {
    name: "__vercel_live_token",
    provider: "Vercel",
    purpose:
      "Used by Vercel for preview deployment authentication. Only set on preview builds.",
    type: "Functional",
    duration: "Session",
  },
  {
    name: "Cookie consent",
    provider: "Risonai Tech",
    purpose:
      "Remembers your cookie consent preference so we don't show the banner on every visit.",
    type: "Necessary",
    duration: "1 year",
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
    title: "1. What Are Cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device (computer, tablet, or
        smartphone) when you visit a website. They help websites remember your
        preferences, understand how you use the site, and improve your
        experience over time. Cookies can be &ldquo;session&rdquo; cookies (deleted when
        you close your browser) or &ldquo;persistent&rdquo; cookies (stored for a set
        duration).
      </p>
    ),
  },
  {
    id: "cookies-we-use",
    title: "2. Cookies We Use",
    content: (
      <>
        <p>
          We use the following categories of cookies on <strong>risonaitech.com</strong>:
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              type: "Necessary",
              icon: "🔒",
              desc: "Essential for the website to function correctly. These cannot be disabled.",
            },
            {
              type: "Analytics",
              icon: "📊",
              desc: "Help us understand how visitors interact with our site so we can improve it.",
            },
            {
              type: "Functional",
              icon: "⚙️",
              desc: "Enable enhanced features and personalisation, such as remembering your preferences.",
            },
            {
              type: "Marketing",
              icon: "📣",
              desc: "We currently do not use marketing or advertising cookies on this website.",
            },
          ].map((cat) => (
            <div
              key={cat.type}
              className={`rounded-xl border p-5 ${categoryColors[cat.type]}`}
            >
              <p className="text-lg">{cat.icon}</p>
              <p className="mt-2 font-semibold">{cat.type}</p>
              <p className="mt-1 text-sm opacity-80">{cat.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "cookie-list",
    title: "3. Cookie List",
    content: (
      <>
        <p className="mb-6">
          The table below lists the specific cookies we set or allow third
          parties to set on our website:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-semibold text-[#0F172A]">Cookie Name</th>
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
    id: "third-party-cookies",
    title: "4. Third-Party Cookies",
    content: (
      <>
        <p>
          Some cookies on our website are set by third-party services. We use:
        </p>
        <ul className="mt-4 space-y-3 list-none">
          {[
            {
              name: "Google Analytics",
              desc: "We use Google Analytics to measure traffic and user behaviour. Google may use this data in accordance with their own privacy policy. You can opt out at",
              link: {
                href: "https://tools.google.com/dlpage/gaoptout",
                label: "Google Analytics Opt-out Browser Add-on",
              },
            },
            {
              name: "Vercel",
              desc: "Our website is hosted on Vercel. Vercel may set cookies for operational purposes such as deployment previews.",
              link: null,
            },
          ].map((item) => (
            <li key={item.name} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-[#4F46E5]">
                →
              </span>
              <span>
                <strong className="text-[#0F172A]">{item.name}:</strong>{" "}
                {item.desc}{" "}
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#4F46E5] hover:underline"
                  >
                    {item.link.label}
                  </a>
                )}
                .
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "5. Managing & Disabling Cookies",
    content: (
      <>
        <p>
          You have the right to accept or decline non-essential cookies. You can
          control cookies in several ways:
        </p>
        <div className="mt-5 space-y-4">
          {[
            {
              heading: "Browser settings",
              desc: "Most browsers allow you to refuse or delete cookies through their settings. Note that disabling cookies may affect website functionality. Visit your browser&apos;s help section for guidance:",
              links: [
                { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                { label: "Mozilla Firefox", href: "https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" },
                { label: "Apple Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                { label: "Microsoft Edge", href: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
              ],
            },
            {
              heading: "Opt out of Google Analytics",
              desc: "Install the Google Analytics Opt-out Browser Add-on to prevent your data from being used by Google Analytics.",
              links: [
                { label: "Download Add-on", href: "https://tools.google.com/dlpage/gaoptout" },
              ],
            },
            {
              heading: "Do Not Track (DNT)",
              desc: "Some browsers send a Do Not Track (DNT) signal. We currently do not respond to DNT signals, but we honour your opt-out preferences via browser cookie settings.",
              links: [],
            },
          ].map((item) => (
            <div key={item.heading} className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
              <p className="font-semibold text-[#0F172A]">{item.heading}</p>
              <p className="mt-1 text-sm text-slate-600">
                {item.desc.replace("&apos;", "'")}
              </p>
              {item.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-[#4F46E5] transition-colors hover:border-indigo-200 hover:bg-indigo-50"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "updates",
    title: "6. Updates to This Policy",
    content: (
      <p>
        We may update this Cookies Policy from time to time as technology or
        regulations change. We will post the revised policy on this page with an
        updated &ldquo;Last updated&rdquo; date. We encourage you to review this page
        periodically.
      </p>
    ),
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: (
      <>
        <p>
          If you have questions about our use of cookies or this policy, please
          contact us:
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
            <a className="text-[#4F46E5] hover:underline" href="tel:+918368137724">
              +91 83681 37724
            </a>
          </p>
        </address>
        <p className="mt-5 text-sm">
          Also see our{" "}
          <Link className="text-[#4F46E5] hover:underline" href="/privacy">
            Privacy Policy
          </Link>{" "}
          for full details on how we handle your personal data.
        </p>
      </>
    ),
  },
];

export default function CookiesPage() {
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
            Cookies Policy
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Last updated: <time dateTime="2026-06">June 2026</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            This policy explains what cookies are, which cookies we use on{" "}
            <strong>risonaitech.com</strong>, why we use them, and how you can
            control or delete them.
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
