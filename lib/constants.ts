import {
  Bot,
  MessageCircle,
  Layers,
  Workflow,
  Zap,
  Building2,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Users,
  Code2,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Site Config ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Risonai Tech",
  domain: "risonaitech.com",
  url: "https://risonaitech.com",
  description:
    "Risonai Tech is India's AI automation agency building agentic AI systems, autonomous AI agents, n8n workflows, SaaS platforms, and operational infrastructure for businesses across India.",
  address: "196, Ground Floor, New RK Puram, Panipat 132103, India",
  email: "hello@risonaitech.com",
  phone: "+918368137724",
  whatsappUrl:
    "https://wa.me/918368137724?text=Hi%20Risonai%20Tech%2C%20I%20want%20to%20discuss%20a%20project.",
  socials: {
    twitter: "https://twitter.com/risonaitech",
    linkedin: "https://linkedin.com/company/risonaitech",
    github: "https://github.com/risonaitech",
  },
};

// ─── Nav ────────────────────────────────────────────────────────────────────
export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

// ─── Services ────────────────────────────────────────────────────────────────
export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  problem?: string;
  solution?: string;
  outcome?: string;
  price?: string;
};

export const services: Service[] = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Workflow Automation",
    short: "Automate repetitive business operations with AI systems that run 24/7.",
    description: "Custom AI automation systems that remove repetitive manual work across operations, support, reporting, and internal workflows.",
    problem: "Teams lose hours every week to repetitive manual processes, status chasing, and operational bottlenecks.",
    solution: "AI workflows capture inputs, process tasks, and trigger the right next action automatically.",
    outcome: "Up to 3x faster internal operations.",
    price: "From ₹30,000",
    bullets: [
      "AI-driven SOP execution",
      "Automated approvals, routing, and follow-ups",
      "CRM, Sheets, email, and API integrations",
      "Human-in-the-loop checkpoints where needed",
    ],
  },
  {
    id: "whatsapp-automation",
    icon: MessageCircle,
    title: "WhatsApp AI Systems",
    short: "Turn India's most popular chat app into your primary sales channel.",
    description: "Integrate RAG chatbots and CRM workflows into the official WhatsApp Business API.",
    problem: "Operations teams are overwhelmed by high WhatsApp message volumes.",
    solution: "Official WhatsApp API bots that resolve FAQs and book meetings automatically.",
    outcome: "52% reduction in staff coordination time.",
    price: "From ₹25,000",
    bullets: [
      "Official API setup & green tick guidance",
      "RAG chatbot trained on business data",
      "Interactive templates & buttons",
      "Live agent chat handoff rules",
    ],
  },
  {
    id: "crm-development",
    icon: Users,
    title: "CRM & Workflow Automation",
    short: "Eliminate manual data entry and connect your tools seamlessly.",
    description: "Centralize data, automate pipelines, and connect tools with custom n8n/Make integrations.",
    problem: "Staff waste 10+ hours a week copy-pasting data between forms and CRM.",
    solution: "Custom automated pipelines that sync and enrich leads instantly.",
    outcome: "37 hours saved per month per manager.",
    price: "From ₹40,000",
    bullets: [
      "Custom HubSpot, Zoho & Salesforce setups",
      "Spreadsheet-to-CRM auto-migration",
      "Automated quote & invoice generation",
      "Real-time slack & email notifications",
    ],
  },
  {
    id: "ai-agent",
    icon: Cpu,
    title: "Autonomous AI Agents",
    short: "Deploy AI workers that reason, plan, and execute complex workflows.",
    description: "Multi-step reasoning systems, tool-using LLM pipelines, and autonomous agents.",
    problem: "Complex operations require constant manual checks and decision-making.",
    solution: "Multi-step agentic pipelines that run tools and execute work autonomously.",
    outcome: "Up to 90% automation of repetitive reasoning tasks.",
    price: "From ₹50,000",
    bullets: [
      "LangGraph / CrewAI multi-agent pipelines",
      "Custom tool-calling & database write capabilities",
      "E-commerce & order tracking automation",
      "Human-in-the-loop validation checkpoints",
    ],
  },
  {
    id: "chatbot-development",
    icon: MessageCircle,
    title: "AI Chatbots & Support",
    short: "Context-aware AI chatbots trained on your business data 24/7.",
    description: "AI customer support agents and website chatbots grounded in your SOPs and docs via RAG.",
    problem: "Inbound support queues are slow and expensive, costing conversion.",
    solution: "Deploy AI chatbots and virtual assistants that answer from your data instantly.",
    outcome: "60-80% deflection of repetitive support tickets.",
    price: "From ₹20,000",
    bullets: [
      "Website chat widget & embeds",
      "RAG-powered custom knowledge base",
      "Multilingual (Hindi + English)",
      "Graceful human agent handoff",
    ],
  },
  {
    id: "resume-screening",
    icon: Layers,
    title: "HR Resume Screening Powered by AI",
    short: "No need to manually screen every CV. Let AI score and shortlist candidates.",
    description: "AI screening systems for HR teams that parse resumes, score candidate fit, and produce recruiter-ready shortlists automatically.",
    problem: "HR teams lose days manually opening CVs, comparing candidates, and filtering weak applicants.",
    solution: "Our AI screens each CV, scores candidates against the role, and shortlists the best fits automatically.",
    outcome: "Save up to 90% of manual resume-screening time.",
    price: "From ₹35,000",
    bullets: [
      "AI CV parsing and candidate scoring",
      "Role-based shortlist generation",
      "ATS, email, and Google Sheets integrations",
      "Recruiter-ready candidate summaries",
    ],
  },
  {
    id: "saas-development",
    icon: Code2,
    title: "SaaS Platform Engineering",
    short: "Custom multi-tenant platforms built to scale your business.",
    description: "Enterprise-grade SaaS products with billing, admin dashboards, and native AI.",
    problem: "Generic software doesn't fit your business, leading to spreadsheet clutter.",
    solution: "Tailored React/Next.js platforms with custom workflows and billing.",
    outcome: "100% customized operations built to scale.",
    price: "From ₹1,20,000",
    bullets: [
      "Multi-tenant auth & database design",
      "Stripe / Razorpay subscriptions",
      "Custom admin portals & analytics",
      "Full code ownership & deployment",
    ],
  },
];

// ─── Products ────────────────────────────────────────────────────────────────
export const products = [
  {
    id: "docbooking",
    icon: HeartPulse,
    title: "DocBooking",
    subtitle: "AI Healthcare Booking Platform",
    description:
      "A modern doctor appointment platform with AI-assisted discovery, smart scheduling, patient intake forms, and clinic-side dashboards.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare", "SaaS", "AI"],
    color: "#0EA5E9",
    textLight: "#7DD3FC",
  },
  {
    id: "expreality",
    icon: Building2,
    title: "Expreality",
    subtitle: "Luxury Real Estate Intelligence",
    description:
      "A premium property intelligence platform for qualified buyers featuring private inventory, location scoring, and high-touch real estate workflows.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Real Estate", "Analytics", "SaaS"],
    color: "#635BFF",
    textLight: "#A5B4FC",
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: "intake",
    icon: Workflow,
    label: "AI Automation",
    title: "AI-led intake for a service business",
    problem:
      "Lead requests arrived across calls, forms, and WhatsApp — creating slow qualification and uneven follow-up.",
    solution:
      "Built a structured intake layer with AI summarisation, priority scoring, and automatic CRM task creation.",
    outcome:
      "Lead response time dropped from 45 minutes to under 8 minutes, with 72% faster qualification and 19% higher meeting-booked rate.",
    metrics: ["72% Faster Qualification", "37 Hours Saved Monthly", "19% Increase In Meetings"],
    serviceHref: "/services/ai-automation",
    locationHref: "/delhi",
  },
  {
    id: "booking",
    icon: Layers,
    label: "SaaS Platform",
    title: "SaaS workflow for appointment operations",
    problem:
      "Scheduling relied on manual confirmations, repeated calls, and disconnected availability data.",
    solution:
      "Mapped the booking journey into a SaaS workflow with slots, reminders, staff dashboards, and exception handling.",
    outcome:
      "No-show rates reduced by 31%, front-desk coordination time dropped by 52%, and weekly appointment throughput increased by 24%.",
    metrics: ["31% lower no-show rate", "52% less coordination time", "24% more weekly appointments"],
    serviceHref: "/services/ai-agent",
    locationHref: "/gurgaon",
  },
  {
    id: "dashboard",
    icon: LineChart,
    label: "Analytics",
    title: "Executive intelligence dashboard",
    problem:
      "Leadership had data but no clear operational signal for what required attention this week.",
    solution:
      "Designed a signal dashboard with workflow data, AI-generated summaries, and next-action recommendations.",
    outcome:
      "Weekly review meetings were cut by 40%, issue-resolution cycle time improved by 46%, and forecasting accuracy rose by 22%.",
    metrics: ["40% fewer review meetings", "46% faster issue resolution", "22% better forecast accuracy"],
    serviceHref: "/services/crm-development",
    locationHref: "/panipat",
  },
];

// ─── Trust Strip ─────────────────────────────────────────────────────────────
export const trustItems = [
  "Enterprise Operations",
  "Healthcare Networks",
  "SaaS Infrastructure",
  "Real Estate Ops",
  "Scaling Startups",
  "Logistics & Service",
  "B2B Tech Leaders",
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: "40+", label: "Business Systems Delivered" },
  { value: "72%", label: "Faster Lead Qualification" },
  { value: "37", label: "Hours Saved Per Month" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  quote: string;
  businessType?: string;
  outcomeHeadline?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Raghav Mehta",
    role: "Founder, HealthConnect Clinics",
    avatar: "RM",
    color: "#0EA5E9",
    businessType: "Healthcare Chain",
    outcomeHeadline: "31% Lower No-Show Rate",
    quote:
      "RisonAI built our entire patient booking and intake system in 8 weeks. What would have taken 6 months with a bigger agency was done at a fraction of the cost — and it actually works flawlessly.",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "CEO, PropEdge Realty",
    avatar: "PS",
    color: "#635BFF",
    businessType: "Real Estate Brokerage",
    outcomeHeadline: "Doubled Our Conversion Rate",
    quote:
      "The WhatsApp CRM they built automated our entire lead follow-up. We went from missing 60% of inquiries to responding within 2 minutes, 24/7. Our conversion rate doubled in 3 months.",
  },
  {
    id: "t3",
    name: "Arjun Kapoor",
    role: "Co-founder, NutriTrack SaaS",
    avatar: "AK",
    color: "#10B981",
    businessType: "B2B SaaS Startup",
    outcomeHeadline: "Launch MVP in 10 Weeks",
    quote:
      "I had a complex SaaS idea and zero tech team. RisonAI delivered a fully functional multi-tenant MVP in 10 weeks. Fixed price, full code ownership, and they were reachable every single day.",
  },
];

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutValues = [
  {
    icon: ShieldCheck,
    title: "We Own the Outcome, Not Just the Code",
    description:
      "Most agencies deliver a repo and disappear. We stay accountable to results — if it breaks, we fix it. If it underperforms, we diagnose why.",
  },
  {
    icon: Zap,
    title: "Weeks, Not Quarters",
    description:
      "A SaaS MVP in 6–10 weeks. An AI automation workflow in 2 weeks. Speed is not a compromise — it's how we're structured.",
  },
  {
    icon: Users,
    title: "You Keep Everything — No Lock-In",
    description:
      "Full source code, database schemas, and deployment configs are yours at project close. We don't hold your software hostage.",
  },
];
