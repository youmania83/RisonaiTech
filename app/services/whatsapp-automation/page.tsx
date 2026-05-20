import type { Metadata } from "next";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Workflow,
  Headset,
  Users,
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
  title: "WhatsApp AI Automation India — Agentic WhatsApp Bots & CRM Workflows From ₹25,000",
  description:
    "RisonAI Tech builds AI-powered WhatsApp automation on the official Business API — agentic lead capture bots, CRM sync, intelligent customer support, and broadcast campaigns for Indian businesses. From ₹25,000.",
  keywords: [
    "WhatsApp automation India",
    "WhatsApp AI automation India",
    "WhatsApp agentic bot India",
    "WhatsApp Business API automation",
    "WhatsApp chatbot development India",
    "WhatsApp CRM integration India",
    "lead capture automation WhatsApp India",
    "WhatsApp commerce automation India",
    "WhatsApp BSP integration India",
    "AI WhatsApp bot India",
    "WhatsApp drip campaign India",
    "WhatsApp lead generation India",
    "WhatsApp marketing automation India",
  ],
  alternates: { canonical: "/services/whatsapp-automation" },
  openGraph: {
    title: "WhatsApp AI Automation India | Agentic Bots & CRM Workflows | RisonAI Tech",
    description:
      "AI-powered WhatsApp automation — agentic lead capture, CRM sync, intelligent support bots, and broadcast campaigns on the official Business API. From ₹25,000.",
    url: "https://risonaitech.com/services/whatsapp-automation",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Automation India | Agentic Bots & CRM Workflows | RisonAI Tech",
    description: "AI-powered WhatsApp Business API: agentic lead bots, CRM sync, 24/7 support automation. From ₹25,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "WhatsApp Business API setup and template strategy",
  "Lead capture and qualification journeys with branching logic",
  "Customer support automation with human handoff",
  "CRM sync for contacts, stages, notes, and follow-up tasks",
  "Appointment booking and reminder workflows",
  "Re-engagement and broadcast campaigns with segmentation",
  "Real-time routing to sales and support agents",
  "Analytics dashboard for reply speed, conversion, and drop-offs",
];

const systems = [
  {
    icon: Workflow,
    title: "Automated lead routing",
    desc: "Every inbound WhatsApp lead is qualified, tagged, and routed to the right owner in real time based on intent and business rules. Hot leads ping a sales rep within seconds.",
  },
  {
    icon: Headset,
    title: "Support automation",
    desc: "Automate repetitive support responses, order status updates, and troubleshooting steps, while escalating complex cases to humans with full conversation context preserved.",
  },
  {
    icon: Users,
    title: "Sales follow-up workflows",
    desc: "Set structured follow-up sequences for hot and warm leads, with reminders, AI-drafted replies, and stage updates synced to your CRM. Stale leads auto-escalate.",
  },
  {
    icon: MessageCircle,
    title: "Conversation intelligence",
    desc: "Track response quality, identify drop-off points, and optimize message flows with data-backed insights from real conversations. AI summarises trends weekly for leadership.",
  },
];

const processSteps = [
  {
    name: "Use case mapping",
    text: "We pick one or two highest-ROI WhatsApp use cases (lead capture, support deflection, booking, re-engagement) and document the journey, success metric, and exception paths.",
  },
  {
    name: "WhatsApp Business API onboarding",
    text: "We onboard your Meta Business account through a Meta-approved BSP, set up the WABA, verify your business, and provision the phone number. Account access stays with you.",
  },
  {
    name: "Template strategy and approval",
    text: "We design the template message catalogue (utility, marketing, authentication categories), draft compliant copy, submit to Meta, and iterate to approval — usually 24–72 hours per template.",
  },
  {
    name: "Flow design and CRM mapping",
    text: "We design conversation flows (branching, intent detection, context handoff) and map every conversation event to your CRM (HubSpot, Zoho, Salesforce, custom).",
  },
  {
    name: "Build with AI layer",
    text: "Build the conversation engine, AI intent classification, retrieval over your knowledge base for FAQ-style replies, and the human handoff trigger logic. Tested against real numbers.",
  },
  {
    name: "Routing, alerts, and dashboards",
    text: "Routing rules to sales and support, real-time agent inbox, alert thresholds for SLA breaches, and analytics dashboards for reply speed, conversion, and drop-off.",
  },
  {
    name: "Compliance and consent",
    text: "We implement opt-in capture, opt-out handling, 24-hour customer-care window logic, and template-only outreach outside the window — keeping your account in good Meta standing.",
  },
  {
    name: "Launch, training, and tuning",
    text: "Launch to a controlled pilot, train the sales / support team on the agent inbox, monitor the first week of conversations, and tune flows based on real interaction data.",
  },
];

const useCaseTable = [
  {
    industry: "Healthcare clinics",
    flow: "Inquiry → AI symptom triage → appointment booking → reminder → post-visit feedback",
  },
  {
    industry: "Real estate brokerages",
    flow: "Portal lead → WhatsApp greeter → budget / intent qualification → site-visit booking → AI follow-up drafts",
  },
  {
    industry: "E-commerce / D2C",
    flow: "Cart abandonment recovery → order status updates → support deflection → review collection",
  },
  {
    industry: "Education / EdTech",
    flow: "Inquiry → counsellor routing → document collection → admission status updates → parent notifications",
  },
  {
    industry: "Service businesses",
    flow: "Inbound triage → proposal sharing → status updates → renewal reminders → NPS collection",
  },
  {
    industry: "B2B SaaS",
    flow: "Demo request → calendar booking → pre-demo questionnaire → post-demo follow-up → onboarding nudges",
  },
];

const faqs = [
  {
    q: "How much does WhatsApp automation cost in India?",
    a: "Starter WhatsApp automation setups usually begin around ₹25,000 to ₹60,000. Multi-flow systems with CRM integrations and advanced routing typically range from ₹80,000 to ₹2,00,000+. RisonAI Tech quotes fixed-price after a free scoping call.",
  },
  {
    q: "Do I need the official WhatsApp Business API?",
    a: "Yes, for scalable automation and compliance. RisonAI Tech sets up the official API workflow through a Meta-approved BSP, configures templates, permissions, and message flow best practices. Account access stays with you.",
  },
  {
    q: "Can WhatsApp automation integrate with my CRM?",
    a: "Yes. We connect WhatsApp to HubSpot, Zoho, Salesforce, or custom CRMs so chats update contact records, stages, notes, and tasks automatically. Conversations are summarised and intent is extracted for the sales team.",
  },
  {
    q: "Will customers still be able to talk to a human?",
    a: "Absolutely. RisonAI Tech builds seamless handoff logic so high-intent or complex conversations are escalated to the right team member with full context. No customer ever feels stuck talking to a bot.",
  },
  {
    q: "How long does implementation take?",
    a: "Most systems launch in 2-6 weeks depending on number of flows, CRM complexity, and approval timelines for WhatsApp templates. Template approvals from Meta usually take 24–72 hours per template.",
  },
  {
    q: "Is this useful for small businesses?",
    a: "Yes. Even a single lead capture and follow-up flow can save multiple manual hours each week and improve response consistency for small teams. Starter setups at ₹25,000 are designed specifically for SMBs.",
  },
  {
    q: "What is a BSP and why do I need one?",
    a: "A BSP (Business Solution Provider) is a Meta-approved partner that provisions your WhatsApp Business API account. RisonAI Tech works with multiple BSPs (Twilio, AiSensy, Gupshup, 360dialog) and recommends one based on your volume, region, and budget.",
  },
  {
    q: "Can WhatsApp automation handle Hindi and other regional languages?",
    a: "Yes. RisonAI Tech builds multilingual WhatsApp flows that detect the customer&apos;s language and respond accordingly. Hindi + English is the most common configuration; Tamil, Telugu, Marathi, and Bengali are supported on request.",
  },
  {
    q: "Will my account get flagged or blocked by Meta?",
    a: "Not if compliance is built in. We implement opt-in capture, opt-out handling, 24-hour customer-care window logic, and template-only outreach outside the window. Done correctly, automation strengthens account standing rather than risking it.",
  },
  {
    q: "Can you build WhatsApp commerce flows?",
    a: "Yes. WhatsApp commerce (catalog, cart, checkout) integrations are supported for Shopify, Razorpay, Stripe, and custom storefronts. Use cases: cart-abandonment recovery, in-chat checkout, post-purchase upsell.",
  },
];

const factualBenchmarks = [
  {
    stat: "WhatsApp automation commonly reduces first-response times by 60-80%.",
    detail: "Always-on auto-replies and routing remove delays caused by manual triage.",
  },
  {
    stat: "Structured lead qualification can cut manual screening effort by 50-70%.",
    detail: "Teams focus on high-intent prospects while low-fit leads are filtered early.",
  },
  {
    stat: "Most Indian SMB WhatsApp automation projects start between Rs 25,000 and Rs 2,00,000.",
    detail: "Scope and integration depth are the primary cost drivers.",
  },
  {
    stat: "Typical production rollout is 2-6 weeks for core automation flows.",
    detail: "Timeline depends on API onboarding, template approvals, and CRM mapping complexity.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "WhatsApp Automation", url: "/services/whatsapp-automation" },
  ]),
  serviceSchema({
    id: "whatsapp-automation",
    name: "WhatsApp Automation Services",
    serviceType: "WhatsApp Business Automation",
    description:
      "Intelligent WhatsApp automation systems on the official WhatsApp Business API — lead capture, customer support, CRM workflows, and broadcast campaigns. Built by RisonAI Tech for Indian businesses.",
    url: "/services/whatsapp-automation",
    priceRange: "₹25,000 – ₹2,00,000",
    offers: [
      { name: "Starter WhatsApp automation", description: "Single flow, BSP onboarding, template setup", price: "25000" },
      { name: "Multi-flow WhatsApp + CRM", description: "Multiple flows, CRM sync, routing, dashboards", price: "80000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech delivers a WhatsApp automation project",
    description:
      "An eight-stage process from use-case mapping to launch and tuning for WhatsApp Business API automation engagements.",
    totalTime: "P42D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs),
);

export default function WhatsAppAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">WhatsApp Automation</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl">
              WhatsApp systems that{" "}
              <span className="grad-text">capture, qualify, and convert</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              RisonAI Tech builds intelligent WhatsApp automation on the official Business API for
              lead capture, customer support, and CRM-integrated workflows. Connect conversations
              directly to your CRM and scale engagement without scaling headcount.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">
                Automate My WhatsApp
                <ArrowRight size={15} />
              </Link>
              <Link className="btn-outline" href="/contact">
                Book Free WhatsApp Audit
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              From <PriceTag service="whatsapp" /> · 2–6 week rollout · API + CRM integration
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
              <strong>RisonAI Tech provides WhatsApp automation services in India.</strong> The
              company builds on the official WhatsApp Business API via Meta-approved BSPs (Twilio,
              AiSensy, Gupshup, 360dialog), with structured lead capture, AI-driven qualification,
              CRM integration (HubSpot / Zoho / Salesforce / custom), broadcast campaigns,
              appointment booking, and graceful agent handoff. Starter setups begin at ₹25,000;
              multi-flow systems with CRM range ₹80,000–₹2,00,000+. Typical rollout is 2–6 weeks.
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks summarize common outcomes from WhatsApp automation projects across lead-gen and support teams."
        title="WhatsApp automation benchmarks: response speed and workflow efficiency"
      />

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            What&apos;s included
          </h2>
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

      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Automation systems we implement
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {systems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="card-base p-6" key={item.title}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(99,91,255,0.1)" }}
                  >
                    <Icon className="text-[#635BFF]" size={20} />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases by industry */}
      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            WhatsApp flows by industry
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border bg-brand-light/20">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-light/30 text-brand-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Industry</th>
                  <th className="px-5 py-3 font-semibold">Typical flow</th>
                </tr>
              </thead>
              <tbody>
                {useCaseTable.map((row) => (
                  <tr className="border-t border-brand-border" key={row.industry}>
                    <td className="px-5 py-3 font-medium text-brand-dark">{row.industry}</td>
                    <td className="px-5 py-3 text-brand-gray">{row.flow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our WhatsApp automation delivery process
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

      <section className="bg-brand-light/50 py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Related services and locations
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">
              AI Automation
            </Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">
              AI Chatbot Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">
              CRM Development
            </Link>
            <Link className="btn-outline text-sm" href="/services/saas-development">
              SaaS Development
            </Link>
            <Link className="btn-outline text-sm" href="/delhi">
              Delhi
            </Link>
            <Link className="btn-outline text-sm" href="/gurgaon">
              Gurgaon
            </Link>
            <Link className="btn-outline text-sm" href="/panipat">
              Panipat
            </Link>
            <Link className="btn-outline text-sm" href="/contact">
              Book WhatsApp Audit
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
                href: "/blog/whatsapp-chatbot-for-business-india",
                tag: "Guide",
                title: "WhatsApp Chatbot Cost in India (2026)",
                desc: "Full cost breakdown: \u20b920,000 FAQ bot to \u20b93,50,000 AI-integrated chatbot. Timelines included.",
              },
              {
                href: "/services/chatbot-development",
                tag: "Service",
                title: "AI Chatbot Development",
                desc: "RAG bots trained on your data. Context-aware WhatsApp + website chatbots from \u20b920,000.",
              },
              {
                href: "/services/ai-automation",
                tag: "Service",
                title: "AI Automation",
                desc: "End-to-end LLM agent workflows — beyond WhatsApp. Intake, CRM sync, reporting, agentic tasks.",
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
