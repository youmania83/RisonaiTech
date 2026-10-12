import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  Building2,
  Workflow,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  Clock,
  Terminal,
  Activity,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

const BASE_URL = "https://risonaitech.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Case Studies & Technical Architecture Whitepapers | RisonAI Tech",
  },
  description:
    "Production engineering case studies detailing system architecture diagrams, LangGraph agent pipelines, prompt guardrails, and PostgreSQL schemas for DocBooking, Expreality, and enterprise AIOps.",
  keywords: [
    "AI case studies",
    "DocBooking architecture",
    "Expreality real estate AI",
    "LangGraph multi-agent architecture",
    "RAG database schema",
    "AI healthcare booking system architecture",
    "AI prompt engineering pipelines",
    "enterprise AIOps case study",
    "production AI engineering India",
  ],
  alternates: { canonical: "/case-studies" },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
  openGraph: {
    title: "AI Case Studies & Architecture Whitepapers | RisonAI Tech",
    description:
      "Deep technical architectural breakdowns detailing production AI pipelines, prompt guardrails, and database schemas shipped by RisonAI Tech.",
    url: `${BASE_URL}/case-studies`,
    type: "article",
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Case Studies & Architecture Whitepapers | RisonAI Tech",
    description:
      "Production engineering breakdowns with architecture diagrams, prompt pipelines, and database schemas.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": `${BASE_URL}/case-studies`,
        },
      ],
    },
    {
      "@type": "TechArticle",
      "@id": `${BASE_URL}/case-studies#docbooking-architecture`,
      "headline":
        "DocBooking Technical Architecture: Clinical AI Intake, Symptom Triage, and WhatsApp Scheduling",
      "description":
        "Detailed architectural documentation of DocBooking's healthcare intake engine, LangGraph state machine, prompt pipelines, PII sanitisation, and PostgreSQL schema.",
      "url": `${BASE_URL}/case-studies#docbooking`,
      "author": {
        "@type": "Person",
        "name": "Yogesh Kumar Wadhwa",
        "url": `${BASE_URL}/about`,
      },
      "publisher": {
        "@type": "Organization",
        "name": "RisonAI Tech",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/brand/risonaitech-logo-dark@2x.png`,
        },
      },
      "datePublished": "2024-11-15",
      "dateModified": "2026-06-15",
      "inLanguage": "en-IN",
    },
    {
      "@type": "TechArticle",
      "@id": `${BASE_URL}/case-studies#expreality-architecture`,
      "headline":
        "Expreality Technical Architecture: Spatial Intelligence and Autonomous Real Estate Lead Qualification",
      "description":
        "Production engineering teardown of Expreality's geospatial scoring pipeline, CrewAI multi-agent profiling, and CRM synchronization infrastructure.",
      "url": `${BASE_URL}/case-studies#expreality`,
      "author": {
        "@type": "Person",
        "name": "Yogesh Kumar Wadhwa",
        "url": `${BASE_URL}/about`,
      },
      "publisher": {
        "@type": "Organization",
        "name": "RisonAI Tech",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/brand/risonaitech-logo-dark@2x.png`,
        },
      },
      "datePublished": "2025-02-10",
      "dateModified": "2026-06-15",
      "inLanguage": "en-IN",
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      {/* Hero */}
      <section className="pb-16 pt-36 bg-grid border-b border-slate-200/50" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="label-pill mb-5 inline-flex">Engineering Whitepapers</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
                Technical Architecture &amp;{" "}
                <span className="grad-text">Production Case Studies</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-2xl text-xl text-brand-gray">
                We don&apos;t publish vague marketing fluff. Here are the exact system architectures, prompt pipelines, guardrail layers, and database schemas behind our live production deployments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benchmark Highlights */}
      <section className="border-b border-brand-border py-12" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div className="p-4">
              <p className="font-display text-4xl font-extrabold text-brand-dark">31%</p>
              <p className="mt-1 text-sm text-brand-gray">Patient No-Show Reduction (DocBooking)</p>
            </div>
            <div className="p-4">
              <p className="font-display text-4xl font-extrabold text-brand-dark">52%</p>
              <p className="mt-1 text-sm text-brand-gray">Less Front-Desk Staff Time (DocBooking)</p>
            </div>
            <div className="p-4">
              <p className="font-display text-4xl font-extrabold text-brand-dark">72%</p>
              <p className="mt-1 text-sm text-brand-gray">Faster Lead Qualification (Expreality)</p>
            </div>
            <div className="p-4">
              <p className="font-display text-4xl font-extrabold text-brand-dark">&lt; 2s</p>
              <p className="mt-1 text-sm text-brand-gray">P95 Inference &amp; Webhook Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: DocBooking */}
      <section className="py-24 border-b border-slate-200/50" id="docbooking" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-sky-50 text-sky-600 border border-sky-200">
                  <HeartPulse size={14} /> Healthcare SaaS Architecture
                </span>
                <span className="text-xs text-brand-subtle">Production Live · Panipat Clinics</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Case Study 1: DocBooking Clinical Intake &amp; Triage Engine
              </h2>
              <p className="mt-3 text-lg text-brand-gray leading-relaxed">
                An end-to-end multi-agent clinical intake system operating on WhatsApp Cloud API and Next.js, serving private clinics and hospital practices with automated symptom triage, doctor slot allocation, and reminder loops.
              </p>
            </Reveal>

            {/* Architecture Diagram */}
            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 font-mono text-xs sm:text-sm shadow-xl overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-2 font-semibold text-slate-300">
                    <Terminal size={15} className="text-emerald-400" /> System Architecture Diagram (DocBooking Flow)
                  </span>
                  <span className="text-xs bg-slate-800 px-2.5 py-0.5 rounded text-emerald-300">LangGraph + PostgreSQL</span>
                </div>
                <pre className="text-slate-300 leading-relaxed">
{`[ Patient WhatsApp / Web UI ]
            │
            ▼ (Webhook HMAC-SHA256 Auth)
[ Ingress Fastify Gateway ] ──► [ PII & Redaction Sanitizer (Regex + Presidio) ]
                                          │
                                          ▼
                               [ LangGraph Orchestrator ]
                     ┌────────────────────┴────────────────────┐
                     ▼                                         ▼
         [ Clinical Triage Node ]                   [ Appointment Booking Node ]
        (RAG: Pinecone + ICD-10 SOPs)              (Lock-safe Calendar Slot Matrix)
                     │                                         │
                     ▼                                         ▼
         [ Medical Guardrail Filter ]              [ PostgreSQL Multi-Tenant DB ]
       (Red-flag emergency escalation)             (Prisma ORM, Row-Level Security)
                     │                                         │
                     └────────────────────┬────────────────────┘
                                          ▼
                         [ Twilio / WhatsApp Emitter ]
                        (Sub-2-minute patient delivery)`}
                </pre>
              </div>
            </Reveal>

            {/* Detailed Engineering Writeup */}
            <div className="mt-12 space-y-10">
              {/* Pipeline Mechanics */}
              <Reveal delay={0.12}>
                <div className="rounded-xl border border-slate-200 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Layers size={20} className="text-[#635BFF]" /> 1. LangGraph State Machine &amp; Safety Guardrails
                  </h3>
                  <p className="mt-3 text-sm text-brand-gray leading-relaxed">
                    The conversation operates on a stateful graph built with LangGraph. Each turn preserves session context while preventing hallucinated medical advice:
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-brand-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>State Schema:</strong> Carries patient history, provisional chief complaint, verified insurance tier, and selected doctor slot ID.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Emergency Intercept Node:</strong> Deterministic regex + zero-shot classification checks for chest pain, acute dyspnea, or severe trauma. Any positive match triggers an immediate hospital emergency escalation prompt with human desk routing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Deterministic Slot Locking:</strong> Booking checks are atomic in PostgreSQL using row-level locking (<code className="bg-slate-100 px-1 rounded text-xs text-slate-800">FOR UPDATE SKIP LOCKED</code>) to eliminate double-bookings during concurrent traffic spikes.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Prompt Engineering */}
              <Reveal delay={0.14}>
                <div className="rounded-xl border border-slate-200 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Cpu size={20} className="text-[#635BFF]" /> 2. Prompt Pipeline &amp; Context Injection
                  </h3>
                  <p className="mt-3 text-sm text-brand-gray leading-relaxed">
                    System prompts are version-controlled and enforced with strict output schema guarantees:
                  </p>
                  <div className="mt-4 rounded-lg bg-slate-900 p-4 text-xs font-mono text-slate-200 leading-relaxed overflow-x-auto">
                    <p className="text-slate-400">// Triage System Prompt Template</p>
                    <p className="text-emerald-400">SYSTEM: You are the clinical intake assistant for [Clinic_Name].</p>
                    <p>RULES:</p>
                    <p>1. Never diagnose conditions or prescribe medications.</p>
                    <p>2. Ask exactly ONE clarifying question per turn to identify primary specialty needed.</p>
                    <p>3. Output your reasoning in &lt;clinical_thought&gt; tags and patient response in JSON:</p>
                    <p className="text-amber-300">
                      {`{ "specialty": "Dermatology", "urgency": "ROUTINE", "patient_message": "...", "suggested_slots": [...] }`}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Database Schema */}
              <Reveal delay={0.16}>
                <div className="rounded-xl border border-slate-200 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Database size={20} className="text-[#635BFF]" /> 3. PostgreSQL Database Schema
                  </h3>
                  <p className="mt-3 text-sm text-brand-gray leading-relaxed">
                    Normalized relational model supporting high-throughput scheduling with full audit logging:
                  </p>
                  <div className="mt-4 rounded-lg bg-slate-900 p-4 text-xs font-mono text-slate-200 leading-relaxed overflow-x-auto">
{`model Appointment {
  id              String      @id @default(uuid())
  clinicId        String      @db.VarChar(64)
  doctorId        String      @db.VarChar(64)
  patientPhone    String      @db.VarChar(20) // E.164 formatted
  scheduledTime   DateTime
  status          Status      @default(CONFIRMED) // CONFIRMED, RESCHEDULED, COMPLETED, NO_SHOW
  intakeSummary   Json?       // Structured symptoms & chief complaint extracted by LLM
  whatsappThreadId String?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  
  @@index([clinicId, scheduledTime])
  @@index([patientPhone])
}`}
                  </div>
                </div>
              </Reveal>

              {/* Verified Results */}
              <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-6">
                <h4 className="font-semibold text-sky-950 text-base">Verified Production Impact</h4>
                <div className="mt-3 grid sm:grid-cols-3 gap-4 text-sm text-sky-900">
                  <div>
                    <span className="block font-bold text-lg text-sky-700">31% Reduction</span>
                    <span>in missed patient appointments via 24h &amp; 2h WhatsApp reminders.</span>
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-sky-700">52% Time Saved</span>
                    <span>front-desk staff no longer handle phone bookings manually.</span>
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-sky-700">99.8% Uptime</span>
                    <span>zero double-bookings across 14,000+ completed clinic reservations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Expreality */}
      <section className="py-24 border-b border-slate-200/50" id="expreality" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                  <Building2 size={14} /> Luxury Real Estate Intelligence
                </span>
                <span className="text-xs text-brand-subtle">Production Live · Delhi NCR &amp; Gurgaon</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Case Study 2: Expreality Spatial Location Scoring &amp; CRM Engine
              </h2>
              <p className="mt-3 text-lg text-brand-gray leading-relaxed">
                An AI property intelligence engine connecting private high-net-worth real estate listings with algorithmic neighborhood scoring, multi-agent lead profiling, and automated WhatsApp nurturing.
              </p>
            </Reveal>

            {/* Architecture Diagram */}
            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 font-mono text-xs sm:text-sm shadow-xl overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-2 font-semibold text-slate-300">
                    <Terminal size={15} className="text-amber-400" /> System Architecture Diagram (Expreality Pipeline)
                  </span>
                  <span className="text-xs bg-slate-800 px-2.5 py-0.5 rounded text-amber-300">Spatial AI + CrewAI</span>
                </div>
                <pre className="text-slate-300 leading-relaxed">
{`[ Inbound Real Estate Lead (Portal / Ads / WhatsApp) ]
                         │
                         ▼
             [ Ingestion Webhook Queue ]
                         │
                         ▼
        [ CrewAI Autonomous Multi-Agent Pool ]
    ┌────────────────────┼────────────────────┐
    ▼                    ▼                    ▼
[ Profiling Agent ] [ Matching Agent ] [ Budget Verifier ]
(Analyzes intent)   (Spatial index)    (Capacity score)
    │                    │                    │
    └────────────────────┼────────────────────┘
                         ▼
        [ Geospatial Scoring Engine (PostGIS) ]
        (Transit distance + Civic index + ROI)
                         │
                         ▼
        [ Sync to Enterprise CRM (Zoho / HubSpot) ]
                         │
                         ▼
        [ Private WhatsApp Nurture Journey ]
        (Personalized PDF brochure dispatched in < 2 mins)`}
                </pre>
              </div>
            </Reveal>

            {/* Deep Writeup */}
            <div className="mt-12 space-y-10">
              <Reveal delay={0.12}>
                <div className="rounded-xl border border-slate-200 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Activity size={20} className="text-[#FF7A00]" /> 1. Spatial Intelligence &amp; Amenity Indexing
                  </h3>
                  <p className="mt-3 text-sm text-brand-gray leading-relaxed">
                    Rather than relying on basic text search, Expreality combines PostGIS spatial queries with dense vector embeddings to calculate dynamic livability scores:
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm text-brand-gray">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Isochrone Drive-Time Analysis:</strong> Generates 15-minute commute polygons against Delhi NCR arterial expressways (NH-44, Dwarka Expressway, Golf Course Extension).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Price Velocity Scoring:</strong> Compares quarterly registry records against asking prices to highlight genuine undervalued inventory.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="rounded-xl border border-slate-200 p-8 bg-white shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Clock size={20} className="text-[#FF7A00]" /> 2. Operational Results &amp; Quantitative Proof
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-100">
                      <p className="text-3xl font-extrabold text-amber-700">72%</p>
                      <p className="mt-1 text-xs text-amber-950 font-medium">Faster Lead Qualification</p>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-100">
                      <p className="text-3xl font-extrabold text-amber-700">37 Hrs</p>
                      <p className="mt-1 text-xs text-amber-950 font-medium">Saved Monthly Per Sales Manager</p>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-100">
                      <p className="text-3xl font-extrabold text-amber-700">2.1×</p>
                      <p className="mt-1 text-xs text-amber-950 font-medium">Higher Site-Visit Booking Rate</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: Enterprise AIOps & LangGraph Telemetry */}
      <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Workflow size={14} /> Enterprise AIOps &amp; Multi-Agent Orchestration
                </span>
                <span className="text-xs text-brand-subtle">LangGraph · Model Context Protocol (MCP) · n8n</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Case Study 3: Production AIOps, Telemetry &amp; Token Optimization
              </h2>
              <p className="mt-3 text-lg text-brand-gray leading-relaxed">
                How RisonAI Tech maintains enterprise LLM pipelines with OpenTelemetry tracking, semantic caching, prompt drift calibration, and zero unmonitored failures.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="card-base p-6">
                <ShieldCheck className="text-emerald-500 mb-3" size={24} />
                <h3 className="font-bold text-base text-brand-dark">Semantic Caching</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray">
                  Embedding-based caching deflects 43% of identical user queries before reaching frontier LLMs, reducing per-turn token costs from $0.04 to $0.003.
                </p>
              </div>
              <div className="card-base p-6">
                <Activity className="text-emerald-500 mb-3" size={24} />
                <h3 className="font-bold text-base text-brand-dark">Drift Detection</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray">
                  Automated weekly regression runs against synthetic test sets ensure prompt behavior remains deterministic across upstream OpenAI and Anthropic model revisions.
                </p>
              </div>
              <div className="card-base p-6">
                <Terminal className="text-emerald-500 mb-3" size={24} />
                <h3 className="font-bold text-base text-brand-dark">MCP Tool Safety</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray">
                  Model Context Protocol tools run in sandboxed Docker workers with read-only database connections and scoped bearer tokens for write actions.
                </p>
              </div>
            </div>

            {/* Third-Party Footprint & Verification */}
            <div className="mt-16 rounded-2xl border border-slate-200 p-8 bg-slate-50/70">
              <h3 className="font-display text-2xl font-bold text-brand-dark">
                Verified Third-Party Footprint &amp; Industry Consensus
              </h3>
              <p className="mt-2 text-sm text-brand-gray leading-relaxed">
                RisonAI Tech maintains verified external technical profiles and directory citations to eliminate knowledge graph ambiguity:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="https://www.indiamart.com/risonai-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400 transition-all text-center block"
                >
                  <span className="font-bold text-sm text-brand-dark block">IndiaMART</span>
                  <span className="text-xs text-brand-gray mt-1 block">Verified B2B Catalogue</span>
                </a>
                <a
                  href="https://www.justdial.com/Panipat/RisonAI-Tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400 transition-all text-center block"
                >
                  <span className="font-bold text-sm text-brand-dark block">Justdial</span>
                  <span className="text-xs text-brand-gray mt-1 block">Verified Business Panipat</span>
                </a>
                <a
                  href="https://github.com/risonaitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400 transition-all text-center block"
                >
                  <span className="font-bold text-sm text-brand-dark block">GitHub</span>
                  <span className="text-xs text-brand-gray mt-1 block">Open-Source Code Repos</span>
                </a>
                <a
                  href="https://clutch.co/profile/risonai-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400 transition-all text-center block"
                >
                  <span className="font-bold text-sm text-brand-dark block">Clutch</span>
                  <span className="text-xs text-brand-gray mt-1 block">Verified Agency Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
