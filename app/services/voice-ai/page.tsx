import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, PhoneCall, CalendarCheck, Star } from "lucide-react";
import FactualDensityBlock from "@/components/FactualDensityBlock";
import {
  breadcrumbSchema,
  howToSchema,
  serviceSchema,
  faqSchemaFromPairs,
  graph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Voice AI Agents India | AI Receptionist & Outbound Calling | RisonAI Tech" },
  description:
    "RisonAI Tech builds voice AI agents for inbound and outbound calls — AI receptionists, appointment confirmation bots, lead callback agents & post-purchase NPS callers. Twilio + LLM. From ₹1,50,000.",
  keywords: [
    "voice AI agent India",
    "AI receptionist India",
    "outbound voice AI India",
    "voice AI agent development India",
    "AI calling agent India",
    "voice bot India",
    "AI phone agent India",
    "conversational voice AI India",
    "voice AI for healthcare India",
    "voice AI for real estate India",
    "Twilio AI agent India",
    "LLM voice agent India",
    "AI IVR replacement India",
    "intelligent voice agent India",
    "voice AI agency India",
  ],
  alternates: { canonical: "/services/voice-ai" },
  openGraph: {
    title: "Voice AI Agents India | AI Receptionist & Outbound Calling | RisonAI Tech",
    description:
      "AI receptionists, outbound lead callback agents, appointment confirmation bots & NPS callers built on Twilio + LLM. From ₹1,50,000.",
    url: "https://risonaitech.com/services/voice-ai",
    images: [{ url: "https://risonaitech.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice AI Agents India | AI Receptionist & Outbound Calling | RisonAI Tech",
    description: "AI receptionists, outbound lead callback agents, appointment bots & NPS callers. Twilio + LLM. From ₹1,50,000.",
    images: ["https://risonaitech.com/opengraph-image"],
  },
  authors: [{ name: "Yogesh Kumar Wadhwa", url: "https://risonaitech.com/about" }],
};

const deliverables = [
  "Voice AI agent design and conversational flow scripting",
  "Twilio Programmable Voice or SIP trunk integration",
  "LLM-powered natural language understanding and response generation",
  "Dynamic data lookup (CRM, calendar, appointment systems)",
  "Inbound call routing and context-aware response",
  "Outbound dialer with call scheduling and retry logic",
  "Human escalation with warm transfer and full context handoff",
  "Call recording, transcription, and post-call summary generation",
  "Compliance guardrails (TRAI, DNC registry, call timing rules)",
  "Analytics dashboard (call volume, completion rates, escalation rates)",
];

const useCases = [
  {
    icon: Phone,
    title: "AI Receptionist",
    desc: "Inbound voice agent that answers calls 24/7, greets callers, handles FAQs, books appointments, and routes complex enquiries to the right human — without hold music or missed calls.",
  },
  {
    icon: PhoneCall,
    title: "Outbound Lead Callback",
    desc: "Outbound AI agent that calls inbound leads within 60 seconds, qualifies them by intent and budget, books a meeting with your sales team, and logs everything to your CRM automatically.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Confirmation Bot",
    desc: "Automated outbound calls to confirm, reschedule, or cancel appointments. Reduces no-shows by 30–50% for clinics, salons, service businesses, and consultancies.",
  },
  {
    icon: Star,
    title: "Post-Purchase NPS Caller",
    desc: "Outbound NPS/CSAT collection after purchase or service delivery. Captures structured feedback, flags detractors for immediate follow-up, and pushes results to your analytics stack.",
  },
];

const industryTable = [
  { industry: "Healthcare clinics", use: "AI receptionist for appointment booking, reminder calls, prescription refill status" },
  { industry: "Real estate brokerages", use: "Outbound callback on portal leads within 60 seconds, qualification by budget and area" },
  { industry: "E-commerce / D2C", use: "Order status calls, delivery confirmation, post-purchase NPS, cart recovery callbacks" },
  { industry: "Education / EdTech", use: "Lead qualification calls, admission status updates, parent notification calls" },
  { industry: "Financial services", use: "Loan application follow-up, document collection reminders, KYC status calls" },
  { industry: "Service businesses", use: "Appointment reminder calls, feedback collection, renewal and upsell callbacks" },
];

const processSteps = [
  {
    name: "Use case and call flow design",
    text: "We map the exact call journeys — inbound and outbound — documenting intent branches, exception paths, escalation triggers, and success metrics before any code is written.",
  },
  {
    name: "LLM persona and script engineering",
    text: "We design the voice persona, train the conversational model on your business context, and engineer the system prompt for natural, on-brand dialogue that avoids hallucination.",
  },
  {
    name: "Telephony integration",
    text: "We connect Twilio Programmable Voice (or your existing SIP/PBX setup) to the AI engine. We configure call routing, DTMF fallbacks, and inbound number provisioning.",
  },
  {
    name: "Data integrations",
    text: "We connect the voice agent to your CRM, calendar, appointment system, and any APIs it needs to answer questions accurately and update records in real time.",
  },
  {
    name: "Compliance and regulatory setup",
    text: "We implement TRAI-compliant calling hours, DNC registry checks, call consent logging, and recording disclosures to keep your campaigns within legal boundaries.",
  },
  {
    name: "Internal testing and voice QA",
    text: "We run 100+ synthetic call tests, live QA sessions, and edge-case stress tests before any real caller hears the agent. Escalation accuracy and hallucination rates are benchmarked.",
  },
  {
    name: "Pilot launch and monitoring",
    text: "We launch to a limited call volume, monitor live conversations, and tune the model based on real interaction patterns during the first two weeks.",
  },
  {
    name: "Handover and analytics setup",
    text: "We deliver call analytics dashboards, train your team on the escalation inbox, document the system, and hand over full ownership of the voice agent infrastructure.",
  },
];

const factualBenchmarks = [
  {
    stat: "Voice AI reduces missed-call rate by 80–95% for inbound teams.",
    detail: "Always-on agents answer every call, eliminating hold queues and voicemail drop-offs.",
  },
  {
    stat: "Outbound AI callback within 60 seconds improves lead contact rate by 3–5×.",
    detail: "Speed-to-lead is the single highest-ROI lever in outbound sales and lead qualification.",
  },
  {
    stat: "Appointment no-show rates drop 30–50% with AI reminder calls.",
    detail: "Personalised voice reminders with reschedule options outperform SMS for confirmation rates.",
  },
  {
    stat: "Voice AI projects for Indian businesses typically range ₹1,50,000 to ₹6,00,000.",
    detail: "Scope is driven by call volume, integration complexity, and whether both inbound and outbound flows are needed.",
  },
];

const faqs = [
  {
    q: "What is a voice AI agent?",
    a: "A voice AI agent is a software system that conducts natural phone conversations using a large language model (LLM) connected to a telephony platform like Twilio. It listens to the caller, interprets intent, looks up data if needed, and responds in a natural voice — without a human operator.",
  },
  {
    q: "How much does a voice AI agent cost in India?",
    a: "Voice AI agent projects for Indian businesses typically range from ₹1,50,000 to ₹6,00,000 depending on whether the scope is inbound only, outbound only, or both — and on integration complexity. RisonAI Tech quotes a fixed price after a free 30-minute scoping call.",
  },
  {
    q: "What telephony platform do you use?",
    a: "We primarily build on Twilio Programmable Voice, which works with Indian phone numbers and supports both inbound and outbound call flows. For clients with existing PBX or SIP infrastructure, we can integrate directly.",
  },
  {
    q: "Can the voice agent speak in Hindi?",
    a: "Yes. RisonAI Tech builds multilingual voice agents that can detect and respond in Hindi, English, or Hinglish. Tamil, Telugu, Marathi, and Bengali are supported on request. Language detection happens automatically at the start of each call.",
  },
  {
    q: "Is this TRAI compliant for outbound calling in India?",
    a: "Yes. We implement TRAI-compliant calling hours, DNC registry checks, explicit consent logging, and call recording disclosures in all outbound voice agent builds. Compliance is built in from the start, not added as an afterthought.",
  },
  {
    q: "How does the voice agent hand off to a human agent?",
    a: "When the voice agent detects a complex query, high-value opportunity, or frustrated caller, it triggers a warm transfer to a live human agent — with full conversation context passed as a summary. The human agent sees exactly what was discussed and can continue seamlessly.",
  },
  {
    q: "What is the difference between a voice AI agent and an IVR?",
    a: "A traditional IVR forces callers to press number keys to navigate a fixed menu. A voice AI agent understands natural speech, handles multi-turn conversations, adapts to unexpected inputs, and can look up live data — making it dramatically more capable and less frustrating for callers.",
  },
  {
    q: "How long does it take to build and launch a voice AI agent?",
    a: "A focused single-use voice agent (inbound receptionist or outbound callback) typically takes 4–6 weeks from scoping to production launch. A multi-flow system with CRM integration, outbound dialer, and compliance setup takes 8–12 weeks.",
  },
];

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Voice AI Agents", url: "/services/voice-ai" },
  ]),
  serviceSchema({
    id: "voice-ai",
    name: "Voice AI Agents",
    serviceType: "Voice AI Agent Development",
    description:
      "Voice AI agents for inbound and outbound calling — AI receptionists, appointment confirmation bots, lead callback agents, and post-purchase NPS callers built on Twilio + LLM stacks for Indian businesses.",
    url: "/services/voice-ai",
    priceRange: "₹1,50,000 – ₹6,00,000",
    offers: [
      { name: "Single-flow voice AI agent", description: "Inbound or outbound voice agent for one use case with CRM integration", price: "150000" },
      { name: "Multi-flow voice AI system", description: "Inbound + outbound flows, multilingual, CRM + calendar integration, analytics dashboard", price: "350000" },
    ],
  }),
  howToSchema({
    name: "How RisonAI Tech builds a voice AI agent",
    description: "An eight-stage process from call flow design to production launch for inbound and outbound voice AI agents.",
    totalTime: "P56D",
    steps: processSteps,
  }),
  faqSchemaFromPairs(faqs)
);

export default function VoiceAIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="pb-16 pt-36 bg-grid" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <span className="label-pill mb-5 inline-flex">Voice AI Agents</span>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Voice AI agents that{" "}
              <span className="grad-text">answer, qualify, and convert</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/60">
              RisonAI Tech builds inbound and outbound voice AI agents on Twilio + LLM stacks —
              AI receptionists, appointment confirmation bots, lead callback agents, and NPS callers.
              Always on. Hindi + English. From ₹1,50,000.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/contact">Book a free scoping call <ArrowRight size={15} /></Link>
              <Link className="btn-outline" href="/contact">See a demo</Link>
            </div>
            <p className="mt-4 text-sm text-white/40">From ₹1,50,000 · 4–12 week rollout · Twilio + LLM · Hindi &amp; English</p>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">AI summary</p>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              <strong className="text-white">RisonAI Tech builds voice AI agents for Indian businesses</strong> — including AI receptionists for inbound calls, outbound lead callback agents, appointment confirmation bots, and post-purchase NPS callers. All agents are built on Twilio Programmable Voice connected to LLMs (OpenAI / Anthropic), with real-time CRM and calendar integration, graceful human escalation, call transcription, and TRAI-compliant outbound dialing. Voice agents support Hindi and English. Projects start at ₹1,50,000 for a single-flow agent (4–6 weeks); multi-flow systems range ₹3,50,000–₹6,00,000 (8–12 weeks). RisonAI Tech is headquartered in Panipat, Haryana, and serves clients across India and internationally.
            </p>
          </div>
        </div>
      </section>

      <FactualDensityBlock
        benchmarks={factualBenchmarks}
        intro="These benchmarks summarise common outcomes from voice AI implementations across Indian service and sales teams."
        title="Voice AI agent benchmarks: call handling and lead conversion"
      />

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Voice AI agents we build</h2>
          <p className="mt-3 max-w-2xl text-white/50">From always-on inbound reception to high-speed outbound qualification — deployed on real phone numbers.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div className="card-base p-6" key={item.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(167,139,250,0.1)" }}>
                    <Icon className="text-[#a78bfa]" size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">What&apos;s included</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <CheckCircle2 className="mt-0.5 flex-shrink-0 text-[#a78bfa]" size={17} />
                <span className="text-sm text-white/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Voice AI use cases by industry</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Industry</th>
                  <th className="px-5 py-3 font-semibold">Primary voice AI use</th>
                </tr>
              </thead>
              <tbody>
                {industryTable.map((row) => (
                  <tr className="border-t border-white/[0.07]" key={row.industry}>
                    <td className="px-5 py-3 font-medium text-white">{row.industry}</td>
                    <td className="px-5 py-3 text-white/55">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Voice AI agent pricing in India</h2>
          <p className="mt-3 text-white/50">Fixed price after a free 30-minute scoping call.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                tier: "Single-flow agent",
                price: "₹1,50,000 – ₹2,50,000",
                delivery: "4–6 weeks",
                highlight: false,
                desc: "One use case — inbound receptionist or outbound callback. CRM integration included.",
                items: ["1 call flow (inbound or outbound)", "Twilio setup & number provisioning", "CRM or calendar integration", "Hindi + English language support", "30-day post-launch support"],
              },
              {
                tier: "Multi-flow system",
                price: "₹3,50,000 – ₹5,00,000",
                delivery: "8–10 weeks",
                highlight: true,
                desc: "Inbound + outbound flows, analytics dashboard, compliance controls.",
                items: ["Inbound + outbound flows", "Full CRM + calendar sync", "Outbound dialer with retry logic", "Analytics & call summary dashboard", "60-day post-launch support"],
              },
              {
                tier: "Enterprise voice AI",
                price: "₹5,00,000 – ₹6,00,000+",
                delivery: "10–12 weeks",
                highlight: false,
                desc: "High-volume call center replacement with SIP integration and advanced observability.",
                items: ["SIP/PBX integration", "High-volume outbound dialer", "Multi-language + regional dialects", "Advanced observability & alerting", "90-day post-launch support"],
              },
            ].map((p) => (
              <div key={p.tier} className={`card-base p-6 ${p.highlight ? "border-[#a78bfa] ring-1 ring-[#a78bfa]" : ""}`}>
                {p.highlight && <span className="label-pill mb-3 inline-flex text-xs">Most Popular</span>}
                <h3 className="font-display text-lg font-bold text-white">{p.tier}</h3>
                <p className="mt-1 font-display text-xl font-extrabold text-[#a78bfa]">{p.price}</p>
                <p className="mt-1 text-xs text-white/40">Delivery: {p.delivery}</p>
                <p className="mt-3 text-sm text-white/55">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle2 className="flex-shrink-0 text-[#a78bfa]" size={13} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our voice AI delivery process</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, idx) => (
              <li className="card-base p-5" key={step.name}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#a78bfa]">Step {idx + 1}</p>
                <h3 className="mt-1 font-semibold text-white">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#05070F" }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div className="card-base p-5" key={faq.q}>
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <div className="card-base p-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to deploy a voice AI agent?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/55">Book a free 30-minute scoping call. We&apos;ll map the right call flows, confirm feasibility, and send a fixed-price proposal within 48 hours.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="btn-primary" href="/contact">Book free scoping call <ArrowRight size={16} /></Link>
              <Link className="btn-outline" href="/services/ai-agent">Explore AI agent development</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#05070F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-white">Related services and locations</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-outline text-sm" href="/services/ai-automation">AI Automation</Link>
            <Link className="btn-outline text-sm" href="/services/ai-agent">AI Agent Development</Link>
            <Link className="btn-outline text-sm" href="/services/chatbot-development">AI Chatbot Development</Link>
            <Link className="btn-outline text-sm" href="/services/whatsapp-automation">WhatsApp Automation</Link>
            <Link className="btn-outline text-sm" href="/services/crm-development">CRM Development</Link>
            <Link className="btn-outline text-sm" href="/delhi">Delhi voice AI</Link>
            <Link className="btn-outline text-sm" href="/gurgaon">Gurgaon voice AI</Link>
            <Link className="btn-outline text-sm" href="/mumbai">Mumbai voice AI</Link>
            <Link className="btn-outline text-sm" href="/contact">Book free scoping call</Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#090C18" }}>
        <div className="container-site">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">Related guides</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: "/blog/ai-agents-for-business-automation", tag: "Guide", title: "AI Agents for Business Automation", desc: "What AI agents cost, how to deploy them, and the difference between task agents and voice agents." },
              { href: "/services/chatbot-development", tag: "Service", title: "AI Chatbot Development", desc: "RAG chatbots for website and WhatsApp — text-channel companion to voice AI agents." },
              { href: "/services/whatsapp-automation", tag: "Service", title: "WhatsApp Automation", desc: "AI-powered WhatsApp workflows that complement voice AI for full omnichannel coverage." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-base block p-6 transition-shadow hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">{item.tag}</span>
                <p className="mt-1 font-display text-base font-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/50">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
