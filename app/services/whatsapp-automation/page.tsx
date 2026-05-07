import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, Workflow, Headset, Users } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";

export const metadata: Metadata = {
  title: "WhatsApp Automation India — Lead Capture, Support, and CRM Workflows",
  description:
    "RisonAI Tech builds intelligent WhatsApp automation systems for lead capture, customer support, and CRM workflows. From Rs 25,000. Delhi NCR.",
  keywords: [
    "WhatsApp automation India",
    "WhatsApp Business API automation",
    "WhatsApp chatbot development India",
    "WhatsApp CRM integration",
    "lead capture automation WhatsApp",
  ],
  alternates: { canonical: "/services/whatsapp-automation" },
  openGraph: {
    title: "WhatsApp Automation India | RisonAI Tech",
    description:
      "Automate lead capture, customer support, and follow-ups on WhatsApp with CRM-integrated workflows.",
    url: "https://risonaitech.com/services/whatsapp-automation",
  },
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
    desc: "Every inbound WhatsApp lead is qualified, tagged, and routed to the right owner in real time based on intent and business rules.",
  },
  {
    icon: Headset,
    title: "Support automation",
    desc: "Automate repetitive support responses, order status updates, and troubleshooting steps, while escalating complex cases to humans.",
  },
  {
    icon: Users,
    title: "Sales follow-up workflows",
    desc: "Set structured follow-up sequences for hot and warm leads, with reminders, auto-drafts, and stage updates synced to your CRM.",
  },
  {
    icon: MessageCircle,
    title: "Conversation intelligence",
    desc: "Track response quality, identify drop-off points, and optimize message flows with data-backed insights from real conversations.",
  },
];

const faqs = [
  {
    q: "How much does WhatsApp automation cost in India?",
    a: "Starter WhatsApp automation setups usually begin around Rs 25,000 to Rs 60,000. Multi-flow systems with CRM integrations and advanced routing typically range from Rs 80,000 to Rs 2,00,000+.",
  },
  {
    q: "Do I need the official WhatsApp Business API?",
    a: "Yes, for scalable automation and compliance. We set up the official API workflow and configure templates, permissions, and message flow best practices.",
  },
  {
    q: "Can WhatsApp automation integrate with my CRM?",
    a: "Yes. We connect WhatsApp to HubSpot, Zoho, Salesforce, or custom CRMs so chats update contact records, stages, notes, and tasks automatically.",
  },
  {
    q: "Will customers still be able to talk to a human?",
    a: "Absolutely. We build seamless handoff logic so high-intent or complex conversations are escalated to the right team member with full context.",
  },
  {
    q: "How long does implementation take?",
    a: "Most systems launch in 2-6 weeks depending on number of flows, CRM complexity, and approval timelines for WhatsApp templates.",
  },
  {
    q: "Is this useful for small businesses?",
    a: "Yes. Even a single lead capture and follow-up flow can save multiple manual hours each week and improve response consistency for small teams.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function WhatsAppAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white pb-16 pt-36">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">WhatsApp Automation</span>
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl"
            >
              WhatsApp systems that <span className="grad-text">capture, qualify, and convert</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-brand-gray">
              We build intelligent WhatsApp automation for lead capture, customer support, and
              automated business workflows. Connect conversations directly to your CRM and scale
              engagement without scaling headcount.
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
              From Rs 25,000 · 2-6 week rollout · API + CRM integration
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks summarize common outcomes from WhatsApp automation projects across lead-gen and support teams."
        title="WhatsApp automation benchmarks: response speed and workflow efficiency"
      />

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
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

      <section className="bg-white py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
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

      <section className="bg-[#f7f9fc] py-20">
        <div className="container-site">
          <h2
            className="font-display text-3xl font-bold text-brand-dark"
          >
            FAQs
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-brand-dark">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
