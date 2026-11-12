import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | RisonAI Tech",
  description:
    "Terms of service for RisonAI Tech. Read our conditions governing our enterprise AI solutions, automation services, consulting engagements, and website usage.",
  alternates: { canonical: "/terms" },
};

const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms & Entity Information",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and <strong>RisonAI Tech</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a registered entity in India (GSTIN: <strong>06CDBPS8926D2ZE</strong>), operating from 196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India.
        </p>
        <p className="mt-3">
          By accessing or using our website (<strong>risonaitech.com</strong>), engaging our enterprise AI services, or utilizing our diagnostic AI tools, you agree to be bound by these Terms. If you are entering into these Terms on behalf of an entity, you represent that you have legal authority to bind that entity.
        </p>
      </>
    ),
  },
  {
    id: "services-scope",
    title: "2. Enterprise Services & Engagement Structure",
    content: (
      <>
        <p>
          Rison AI Tech engineers intelligent automation systems and operational infrastructure. Our core enterprise offerings include:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-600">
          <li><strong>Enterprise AI Solutions & Workflow Automation:</strong> End-to-end SOP execution, n8n orchestration, and human-in-the-loop pipelines.</li>
          <li><strong>Autonomous AI Agents:</strong> Multi-agent systems, tool-calling pipelines, and autonomous task execution via LangGraph and CrewAI.</li>
          <li><strong>Voice AI Agents:</strong> Inbound/outbound conversational voice systems, automated appointment dispatch, and TRAI-compliant receptionist workflows.</li>
          <li><strong>WhatsApp AI Automation:</strong> Official Meta WhatsApp Business API integration, customer support RAG bots, and CRM syncing.</li>
          <li><strong>AI Recruitment & Resume Screening:</strong> Parsing CVs, Skills Graph matching, contextual evaluation, and candidate shortlists.</li>
          <li><strong>Custom CRM & SaaS Platform Engineering:</strong> Multi-tenant SaaS products, custom CRM platforms, and database architecture.</li>
          <li><strong>Managed AI Services (AIOps):</strong> Telemetry monitoring, prompt drift calibration, vector database re-indexing, and workflow maintenance retainers.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          All formal service engagements are governed by bespoke Statements of Work (SOW) or Master Services Agreements (MSA) executed between Rison AI Tech and the client, which take precedence over website-level terms regarding specific deliverables, sprint milestones, and commercial terms.
        </p>
      </>
    ),
  },
  {
    id: "ip-ownership",
    title: "3. Intellectual Property & Code Ownership",
    content: (
      <>
        <p>
          <strong>Client Code Ownership:</strong> Upon receipt of full and final payment under an applicable project engagement, Rison AI Tech transfers 100% full source code ownership, database schemas, custom automation scripts, and workflow definitions developed specifically for the client.
        </p>
        <p className="mt-3">
          <strong>Pre-existing Materials & Website Content:</strong> All pre-existing frameworks, internal software libraries, website design marks, the Rison AI Tech animated logo, brand materials, articles, and diagnostic algorithms published on risonaitech.com remain the exclusive intellectual property of Rison AI Tech.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use of Website & Free AI Audit Tools",
    content: (
      <>
        <p>
          We provide interactive tools, including the <strong>Free AI Search Ranking Audit</strong> (at <code>/tools/ai-search-audit</code>), for legitimate business evaluation and educational purposes. You agree not to:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-600">
          <li>Deploy automated scrapers, bots, or distributed crawlers that overwhelm our API endpoints.</li>
          <li>Attempt to reverse-engineer, decompile, or extract model weights, system prompts, or proprietary heuristics.</li>
          <li>Use the services to transmit unlawful, defamatory, infringing, or malicious content.</li>
          <li>Bypass rate limiting or authentication safeguards implemented on our serverless endpoints.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          We reserve the right to throttle or terminate access to any IP address or user exhibiting abusive or automated exploitation patterns.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "5. Data Protection & DPDP Compliance",
    content: (
      <>
        <p>
          Both parties agree to comply with India&apos;s <strong>Digital Personal Data Protection Act, 2023</strong> and the <strong>DPDP Rules, 2025</strong>. When clients provide personal data to Rison AI Tech for processing:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-600">
          <li>The client warrants that it has provided appropriate statutory notice and obtained necessary consent or lawful authority from Data Principals prior to transferring data.</li>
          <li>Rison AI Tech shall act solely as a Data Processor on behalf of the client for such client data, implementing reasonable technical safeguards and processing data strictly per written instructions.</li>
          <li>All digital personal data collected directly through risonaitech.com is handled in accordance with our <Link href="/privacy" className="text-[#2563EB] underline hover:text-blue-700">Privacy Policy</Link>.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "6. Professional Disclaimers & AI Performance",
    content: (
      <>
        <p>
          While Rison AI Tech implements state-of-the-art autonomous agents and rigorous prompt engineering safeguards:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-600">
          <li><strong>Generative AI Characteristics:</strong> AI models, large language models (LLMs), and autonomous agents operate probabilistically. Clients are advised to maintain human-in-the-loop checkpoints for critical business decisions, legal assessments, or financial transactions.</li>
          <li><strong>Third-Party Model Dependencies:</strong> Services integrating third-party foundation models (OpenAI, Anthropic, DeepSeek, Google) are subject to the upstream availability, latency, and policies of those respective providers.</li>
          <li><strong>Search Rankings & AI Citations:</strong> While our AEO/GEO architectures maximize factual clarity, entity disambiguation, and structured discoverability, no entity can guarantee specific Google rankings, ChatGPT citations, or Perplexity answer positions, as third-party algorithms evolve dynamically.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable Indian law, Rison AI Tech shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, goodwill, or business interruption, arising out of the use of our website or services. In all circumstances, Rison AI Tech&apos;s aggregate liability under these general terms shall not exceed the total fees paid by the client to Rison AI Tech for the specific service giving rise to liability during the three (3) months preceding the event.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "8. Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of <strong>India</strong>.
        </p>
        <p className="mt-3">
          The parties agree that any dispute arising out of or relating to these Terms shall first be attempted to be resolved amicably through good-faith executive discussions. If unresolved within thirty (30) days, the courts located in <strong>Panipat / High Court of Punjab &amp; Haryana, India</strong> shall have exclusive jurisdiction over all legal proceedings.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "9. Contact for Legal & Terms Inquiries",
    content: (
      <>
        <p>
          For any questions regarding these Terms or legal notices, please contact us:
        </p>
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-[#0F172A]">Rison AI Tech — Legal Desk</p>
          <p className="text-slate-600">196, Ground Floor, New RK Puram, Panipat 132103, Haryana, India</p>
          <p className="mt-1">
            Email:{" "}
            <a href="mailto:hello@risonaitech.com" className="text-[#2563EB] hover:underline font-medium">
              hello@risonaitech.com
            </a>{" "}
            • Phone:{" "}
            <a href="tel:+919050486448" className="text-[#2563EB] hover:underline font-medium">
              +91 90504 86448
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, rgba(37,99,235,0.03) 0%, #ffffff 40%)",
      }}
    >
      {/* Header */}
      <section className="border-b border-slate-100 py-20 pt-32">
        <div className="container-site mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <Scale size={14} className="text-blue-600" />
            Enterprise Service Terms &amp; Legal Governance
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Last updated: <time dateTime="2026-11">November 2026</time> • Rison AI Tech (GSTIN: 06CDBPS8926D2ZE)
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            These terms govern your engagement with Rison AI Tech&apos;s enterprise AI solutions, automation infrastructure, consulting services, and online platforms.
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
              {termsSections.map((s) => (
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

      {/* Sections */}
      <section className="pb-28">
        <div className="container-site mx-auto max-w-3xl space-y-12">
          {termsSections.map((s) => (
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
