import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  Code2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";
import {
  breadcrumbSchema,
  howToSchema,
  serviceSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "SaaS Development Company India — Multi-Tenant SaaS in 8–16 Weeks",
  description:
    "RisonAI Tech is a SaaS development company in India. We build production-ready multi-tenant SaaS platforms — billing, RBAC, admin dashboards, and AI feature modules. From ₹1,20,000.",
  keywords: [
    "SaaS development company India",
    "SaaS development Delhi",
    "SaaS product development Gurgaon",
    "MVP SaaS development India",
    "multi-tenant SaaS India",
    "custom SaaS platform development",
    "AI SaaS development India",
    "Next.js SaaS development",
  ],
  alternates: { canonical: "/services/saas-development" },
  openGraph: {
    title: "SaaS Development Company India | RisonAI Tech",
    description:
      "Production-ready multi-tenant SaaS — billing-integrated, AI-powered, fully owned by you. From MVP in 6–10 weeks to enterprise platforms in 16–24 weeks.",
    url: "https://risonaitech.com/services/saas-development",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company India | RisonAI Tech",
    description: "Multi-tenant SaaS MVP to enterprise. Fixed price, full code ownership. From ₹1,20,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "Multi-tenant SaaS architecture (per-user and per-org isolation)",
  "Subscription and billing integration (Razorpay, Stripe)",
  "Role-based access control and permission systems",
  "Admin dashboards with usage analytics",
  "Scalable REST and GraphQL APIs",
  "React / Next.js front-end with TypeScript",
  "Node.js or Python back-end",
  "PostgreSQL / MongoDB databases with migrations",
  "CI/CD pipelines and cloud deployment (Vercel, AWS, Railway)",
  "AI feature integration (LLM chat, data analysis, auto-reports)",
];

const highlights = [
  {
    icon: Layers,
    title: "Multi-tenant by default",
    desc: "Every SaaS we build is designed for multi-tenancy from day one — per-organisation data isolation, custom domains, and tenant-level configuration. No costly rewrites later.",
  },
  {
    icon: Code2,
    title: "Modern, maintainable stack",
    desc: "React/Next.js + TypeScript front-end. Node.js or Python API. PostgreSQL with structured migrations. Code you can hand to any senior developer and they'll understand immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Security built in",
    desc: "RBAC, encrypted data at rest and in transit, audit logs, CSP headers, rate limiting, and OWASP Top 10 mitigations included in every project — not treated as optional extras.",
  },
  {
    icon: TrendingUp,
    title: "AI-ready architecture",
    desc: "We structure SaaS platforms to integrate AI features cleanly — LLM-generated insights, smart search, auto-fill, and recommendation engines that slot in without architectural debt.",
  },
];

const processSteps = [
  {
    name: "Product discovery and feature scoping",
    text: "We shape your idea into a release-ready product spec — primary jobs-to-be-done, top-three workflows, billing model, and the smallest viable feature set that proves market value.",
  },
  {
    name: "Architecture and data modelling",
    text: "We design the multi-tenant model, RBAC, API surface, database schema, and integration map. Output is a written architecture doc you can hand to any senior engineer for review.",
  },
  {
    name: "Sprint 1 — auth and tenant skeleton",
    text: "Build the auth layer, tenant model, organisation switcher, role permissions, and the first end-to-end CRUD flow. End of sprint: invite-only logins working in staging.",
  },
  {
    name: "Sprint 2-4 — core workflows",
    text: "Iterative builds of the primary product workflows. Each two-week sprint ships a vertical slice (UI + API + DB) the founder can use against real data.",
  },
  {
    name: "Sprint 5 — billing and admin",
    text: "Razorpay (INR) and Stripe (international) subscriptions, plan logic, trial periods, invoicing, webhook-based entitlements, and the admin dashboard for ops.",
  },
  {
    name: "Sprint 6 — AI feature module (optional)",
    text: "Drop-in AI features: smart search across user data, AI copilots, LLM-generated reports, classification, or automation hooks — using OpenAI, Anthropic, or Gemini.",
  },
  {
    name: "Hardening, security, and observability",
    text: "Penetration test pass, OWASP Top 10 review, audit logs, Sentry / PostHog instrumentation, rate limiting, and load tests against realistic concurrency.",
  },
  {
    name: "Launch, handover, and 30–90 day support",
    text: "Production cutover on Vercel / AWS / Railway, full source-code and infra handover, written runbooks, and post-launch support for bugs and minor scope tweaks.",
  },
];

const featureModules = [
  {
    label: "Auth and identity",
    body: "Email + Google + Microsoft SSO, magic links, organisation invites, custom RBAC with role inheritance, audit trails, and SCIM provisioning where required.",
  },
  {
    label: "Billing and subscriptions",
    body: "Razorpay subscriptions for INR pricing, Stripe for international, plan tiers, trial periods, invoicing, dunning, webhook-based entitlement updates, and customer portals.",
  },
  {
    label: "Admin and ops dashboards",
    body: "Operator-facing admin with tenant management, impersonation, feature flags, support tooling, audit logs, and usage analytics by org and by feature.",
  },
  {
    label: "AI feature modules",
    body: "RAG-powered smart search, AI copilots, LLM-generated reports, document classification, AI-drafted notifications, and automation hooks tied to user actions.",
  },
  {
    label: "Notifications and email",
    body: "Transactional email via Resend or SendGrid, in-app notifications, WhatsApp Business API for high-value alerts, and per-user notification preferences.",
  },
  {
    label: "Reporting and exports",
    body: "Interactive dashboards built on Postgres views, scheduled CSV / Excel exports, and per-tenant data downloads with privacy filters and audit logging.",
  },
];

const verticalsBuilt = [
  {
    name: "Healthcare SaaS — DocBooking",
    body: "AI-powered doctor appointment platform. Patient intake forms, smart scheduling, AI symptom triage, WhatsApp reminders, and clinic-side analytics dashboards. Multi-clinic tenancy with role-based staff access.",
  },
  {
    name: "Real estate SaaS — Expreality",
    body: "Property intelligence for qualified buyers and brokers. Private inventory, AI-driven location scoring, neighbourhood analytics, and high-touch CRM workflows. Built on Next.js + Python with AI scoring services.",
  },
  {
    name: "Operations and ops SaaS",
    body: "Workflow tools for service businesses — proposal builders, project trackers, AI status updates, and renewal-risk dashboards. Common stack: Next.js + Node + Postgres + OpenAI.",
  },
  {
    name: "Vertical AI SaaS",
    body: "AI-native SaaS for specific verticals (legal review, medical scribing, real-estate matchmaking) — LLM-first product surfaces, RAG over proprietary data, and domain-tuned prompts.",
  },
];

const stackTable = [
  { layer: "Frontend", tools: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui" },
  { layer: "Backend", tools: "Node.js, Python (FastAPI), Express, Next.js API routes" },
  { layer: "Database", tools: "PostgreSQL, MongoDB, Supabase, Redis, pgvector for AI features" },
  { layer: "Auth", tools: "NextAuth, Clerk, Supabase Auth, custom RBAC, SSO via SAML / OIDC" },
  { layer: "Billing", tools: "Razorpay (INR), Stripe (international), Paddle (where required)" },
  { layer: "AI", tools: "OpenAI, Anthropic Claude, Google Gemini, LangChain, LlamaIndex, RAG patterns" },
  { layer: "Deployment", tools: "Vercel, AWS (EC2, ECS, Lambda), Railway, Docker, GitHub Actions CI" },
  { layer: "Observability", tools: "Sentry, PostHog, OpenTelemetry, custom dashboards for tenant health" },
];

const faqs = [
  {
    q: "How much does SaaS development cost in India?",
    a: "SaaS MVP builds in India typically range from ₹1,20,000 to ₹2,50,000 depending on feature scope and integrations. Full multi-tenant SaaS platforms generally cost ₹3,00,000-₹8,00,000, while enterprise systems with AI modules can exceed ₹8,00,000. RisonAI Tech quotes fixed-price after a free scoping call.",
  },
  {
    q: "How long does it take to build a SaaS product?",
    a: "Most SaaS products are delivered in 6-20 weeks based on product depth and compliance needs. MVPs are commonly completed in 6-10 weeks, while production-grade multi-tenant platforms usually require 12-20 weeks. Enterprise SaaS with AI modules takes 16-24 weeks.",
  },
  {
    q: "Can you build the SaaS with billing and subscription management?",
    a: "Yes. RisonAI Tech integrates Razorpay for Indian rupee subscriptions and Stripe for international payments. This includes plan management, trial periods, invoicing, dunning, and webhook-based entitlement updates. Customer portals are included.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. All projects include a 30–90 day post-launch support period depending on the tier. After that, RisonAI Tech offers monthly retainer support packages for bug fixes, feature additions, and infrastructure management.",
  },
  {
    q: "What if my SaaS idea needs an AI feature?",
    a: "Most SaaS products benefit from AI features — smart search, AI copilots, LLM-generated reports, intelligent notifications. We design the architecture to support these from the start and add them in the same or a subsequent sprint using OpenAI, Anthropic, or Gemini.",
  },
  {
    q: "Will the SaaS code be owned by me?",
    a: "Yes, the client receives full ownership of source code, database schemas, and deployment configurations at project close. RisonAI Tech transfers repositories, environment assets, and documentation to eliminate vendor lock-in.",
  },
  {
    q: "What stack do you use for SaaS?",
    a: "Default stack: Next.js + TypeScript + Tailwind on the frontend; Node.js or Python (FastAPI) on the backend; PostgreSQL or MongoDB for data; Vercel / AWS / Railway for deployment; OpenAI / Anthropic / Gemini for AI features. We deviate only when the use case requires it.",
  },
  {
    q: "Do you build vertical AI SaaS products?",
    a: "Yes. AI-native vertical SaaS (legal review, medical scribing, real-estate matchmaking, etc.) is a focus area. We design the AI surface, RAG architecture, and domain-tuned prompts as first-class product features rather than bolt-ons.",
  },
  {
    q: "Can you migrate an existing prototype into production?",
    a: "Yes. We commonly take Bubble, Glide, no-code, or early-stage code prototypes into production SaaS platforms — preserving the business logic, redesigning the architecture, and shipping a maintainable codebase you fully own.",
  },
  {
    q: "Who in my team do you work with?",
    a: "We work directly with the founder or product owner on scoping, the design lead on UX, and an engineering or operations counterpart on integration. Communication runs on WhatsApp, email, Slack, and bi-weekly video reviews.",
  },
];

const factualBenchmarks = [
  {
    stat: "MVP SaaS products usually launch in 6-10 weeks with focused scope.",
    detail: "A narrow first release with 1-2 key workflows improves launch speed and lowers rework during validation.",
  },
  {
    stat: "Multi-tenant architecture reduces future rewrite risk by 30-50%.",
    detail: "Building tenant isolation and billing logic early prevents expensive structural migrations at growth stage.",
  },
  {
    stat: "Typical SaaS build costs in India range from INR 1.2L to INR 8L+.",
    detail: "Primary cost drivers are role complexity, integrations, analytics depth, and regulatory constraints.",
  },
  {
    stat: "AI feature modules usually add 15-35% to scope but improve product differentiation.",
    detail: "Smart search, AI copilots, and workflow intelligence often improve retention and activation metrics.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SaaS Development", url: "/services/saas-development" },
  ]),
  serviceSchema({
    id: "saas-development",
    name: "SaaS Development Services",
    serviceType: "SaaS Platform Development",
    description:
      "RisonAI Tech builds production-ready multi-tenant SaaS platforms — billing, RBAC, admin dashboards, and AI feature modules — from MVP to enterprise.",
    url: "/services/saas-development",
    priceRange: "₹1,20,000 – ₹20,00,000",
    offers: [
      { name: "SaaS MVP", description: "Core SaaS with auth, single-tenant, 6–10 week delivery", price: "120000" },
      { name: "Growth multi-tenant SaaS", description: "Multi-tenant, billing, admin dashboard, 12–16 week delivery", price: "300000" },
      { name: "Enterprise SaaS with AI", description: "SSO, AI modules, custom integrations, 16–24 week delivery", price: "800000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech ships a production SaaS platform",
    description:
      "An eight-stage process from product discovery to launch and 30–90 day post-launch support for SaaS engagements.",
    totalTime: "P140D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function SaasDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">SaaS Development</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              SaaS platforms built to{" "}
              <span className="grad-text">scale from day one</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech is a SaaS development company in India that architects and builds
              production-ready SaaS platforms — multi-tenant infrastructure, subscription billing,
              admin dashboards, and AI integrations. MVP to enterprise, in 8–24 weeks, with full code
              ownership at handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Start Your SaaS Project
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/products">
                See Products We&apos;ve Built
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              MVP from ₹1,20,000 · Full SaaS from ₹3,00,000 · Headquartered in Panipat, Delhi NCR
            </p>
          </div>
        </div>
      </section>

      {/* AI summary block */}
      <section className="bg-brand-light/50 py-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-light/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
              AI summary
            </p>
            <p className="mt-2 text-base leading-relaxed text-brand-dark">
              <strong>RisonAI Tech is a SaaS development company in India.</strong> The company
              builds multi-tenant SaaS platforms on Next.js, TypeScript, Node.js / Python, and
              PostgreSQL — with subscription billing (Razorpay for INR, Stripe for international),
              role-based access control, admin dashboards, and AI feature modules powered by OpenAI,
              Anthropic, and Gemini. SaaS MVPs ship in 6–10 weeks from ₹1,20,000. Growth multi-tenant
              SaaS ships in 12–16 weeks from ₹3,00,000. Enterprise SaaS with AI modules ranges from
              ₹8,00,000+. Reference products: DocBooking (healthcare) and Expreality (real estate).
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks represent common SaaS delivery economics and rollout patterns observed in Indian startup and growth-stage environments."
        title="SaaS build benchmarks: cost, timeline, and architecture"
      />

      {/* Problem + Solution */}
      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Why SaaS builds fail in India — and how we avoid it
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Most early SaaS builds in India break in one of three ways: the architecture skips
              multi-tenancy and needs a costly rewrite at growth stage; the team picks a no-code or
              hybrid stack that hits a wall the moment a real customer asks for SSO or audit logs;
              or the agency ships a happy-path MVP that nobody can extend without burning the
              codebase down. By month nine, the founder is funding a rebuild instead of a growth
              push.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              RisonAI Tech bakes the boring-but-essential decisions in upfront: Postgres with proper
              migrations, multi-tenant data isolation, RBAC with audit trails, billing webhooks that
              survive carrier outages, observability that catches a regression before the customer
              notices. None of this is glamorous. All of it is what separates a SaaS you can sell to
              an enterprise from a SaaS you have to apologise for.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              The result is a platform you actually own — not just a repo, but architecture decisions
              you can defend in a buyer review, a billing system that survives a rate-limit incident,
              and a codebase any senior engineer can pick up without a six-week onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            What&apos;s included
          </h2>
          <p className="mt-2 text-brand-gray">
            Every SaaS we deliver is production-ready — not a prototype.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#635BFF]" size={18} />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How we build differently
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div className="card-base p-6" key={h.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature modules */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Feature modules we ship by default
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray">
            Standard SaaS surfaces that are pre-built and tuned for production — pick the modules
            your product needs and we wire them into your tenant model.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featureModules.map((mod) => (
              <div className="card-base p-5" key={mod.label}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  {mod.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">{mod.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our SaaS delivery process
          </h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, idx) => (
              <li className="card-base p-5" key={step.name}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  Step {idx + 1}
                </p>
                <h3 className="mt-1 font-semibold text-brand-dark">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            SaaS verticals we&apos;ve shipped to production
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {verticalsBuilt.map((v) => (
              <div className="card-base p-6" key={v.name}>
                <h3 className="font-semibold text-brand-dark">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            SaaS stack we standardise on
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-light/30 text-brand-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Layer</th>
                  <th className="px-5 py-3 font-semibold">Tools</th>
                </tr>
              </thead>
              <tbody>
                {stackTable.map((row) => (
                  <tr className="border-t border-brand-border" key={row.layer}>
                    <td className="px-5 py-3 font-medium text-brand-dark">{row.layer}</td>
                    <td className="px-5 py-3 text-brand-gray">{row.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Example Products */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            SaaS products we&apos;ve built
          </h2>
          <p className="mt-2 text-brand-gray">Real products in production, serving real users.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-bold text-brand-dark">DocBooking</h3>
              <p className="mt-1 text-sm font-medium text-[#0EA5E9]">Healthcare SaaS</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                AI-powered doctor appointment booking platform for clinics and hospitals. Patient
                intake forms, smart scheduling, AI symptom triage, WhatsApp reminders, and
                clinic-side analytics dashboards. Multi-clinic tenancy with role-based staff access.
              </p>
              <p className="mt-3 text-xs text-brand-subtle">Stack: Next.js · Node.js · PostgreSQL · OpenAI</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-bold text-brand-dark">Expreality</h3>
              <p className="mt-1 text-sm font-medium text-[#635BFF]">Real Estate SaaS</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                Property intelligence platform for qualified buyers and real estate agents. Private
                inventory, AI-driven location scoring, neighbourhood analytics, and high-touch CRM
                workflows.
              </p>
              <p className="mt-3 text-xs text-brand-subtle">Stack: Next.js · Python · PostgreSQL · AI scoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">Pricing</h2>
          <p className="mt-2 text-brand-gray">
            Ranges based on scope. We quote exactly after a 30-minute call.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "MVP",
                price: "₹1,20,000 – ₹2,50,000",
                desc: "Core SaaS features, one user role, single-tenant. Validate your idea fast.",
                items: ["Core feature set", "Auth + user management", "6–10 week delivery", "30-day support"],
              },
              {
                tier: "Growth SaaS",
                price: "₹3,00,000 – ₹8,00,000",
                desc: "Multi-tenant, billing, admin dashboard, and API ecosystem.",
                items: [
                  "Multi-tenant architecture",
                  "Razorpay / Stripe billing",
                  "Admin dashboard",
                  "12–16 week delivery",
                  "60-day support",
                ],
                highlight: true,
              },
              {
                tier: "Enterprise",
                price: "₹8,00,000+",
                desc: "Complex SaaS with AI features, custom integrations, and enterprise auth.",
                items: [
                  "SSO / enterprise auth",
                  "AI feature modules",
                  "Custom integrations",
                  "16–24 week delivery",
                  "90-day support + SLA",
                ],
              },
            ].map((p) => (
              <div
                className={`card-base p-6 ${p.highlight ? "border-[#635BFF] ring-1 ring-[#635BFF]" : ""}`}
                key={p.tier}
              >
                {p.highlight && (
                  <span className="label-pill mb-3 inline-flex text-xs">Most Popular</span>
                )}
                <h3 className="font-display text-xl font-bold text-brand-dark">{p.tier}</h3>
                <p className="mt-1 font-display text-2xl font-extrabold text-[#635BFF]">{p.price}</p>
                <p className="mt-3 text-sm text-brand-gray">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li className="flex items-center gap-2 text-sm text-brand-dark" key={item}>
                      <CheckCircle2 className="flex-shrink-0 text-[#635BFF]" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-6" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation Systems
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/website-development">
              Website Development
            </Link>
            <Link className="btn-outline text-sm" href="/products">
              Products
            </Link>
            <Link className="btn-outline text-sm" href="/#case-studies">
              Case Studies
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi SaaS delivery
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon startup builds
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="font-display text-4xl font-extrabold text-brand-dark">
            Have a SaaS idea?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-gray">
            We&apos;ll help you scope it, validate the architecture, and build it to production in
            weeks — not months.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href="/contact">
              Book Strategy Call
              <ArrowRight size={15} />
            </Link>
            <Link className="btn-outline" href="/products">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Topic cluster: related guides */}
      <section className="bg-brand-light/50 py-16">
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-gray">
            Related guides
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/blog/saas-development-cost-india",
                tag: "Guide",
                title: "SaaS Development Cost in India (2026)",
                desc: "Full pricing breakdown: MVP ₹1,20,000–₹2,50,000 · Growth-stage ₹3,00,000–₹8,00,000. Timelines and vendor comparison.",
              },
              {
                href: "/services/ai-automation",
                tag: "Service",
                title: "AI Automation",
                desc: "Add LLM agents and automation workflows to your SaaS — intake bots, reporting agents, CRM sync.",
              },
              {
                href: "/services/crm-development",
                tag: "Service",
                title: "CRM Development",
                desc: "Custom CRM built into your SaaS or standalone. Pipeline management, lead scoring, multi-channel sync.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-base block p-6 transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#635BFF]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-brand-dark">{item.title}</p>
                <p className="mt-2 text-sm text-brand-gray">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
