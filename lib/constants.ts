import {
  ArrowUpRight,
  Bot,
  Building2,
  CalendarCheck,
  Cpu,
  DatabaseZap,
  Gauge,
  Globe2,
  HeartPulse,
  Home,
  Layers3,
  LineChart,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "Risonai Tech",
  domain: "risonaitech.in",
  url: "https://risonaitech.in",
  description:
    "Risonai Tech builds scalable AI systems, SaaS platforms, automations, and intelligent workflows for high-growth companies.",
  address: "196, Ground Floor, New RK Puram, Panipat 132103, India",
  email: "hello@risonaitech.in",
  whatsappUrl:
    "https://wa.me/919999999999?text=Hi%20Risonai%20Tech%2C%20I%20want%20to%20discuss%20an%20AI%20automation%20or%20SaaS%20project."
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" }
];

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  proof: string;
};

export const services: ServiceItem[] = [
  {
    title: "AI Automation Systems",
    description:
      "Agentic workflows for intake, triage, support, reporting, and internal operations.",
    icon: Bot,
    proof: "Human-in-the-loop controls, audit trails, and measurable cycle-time gains."
  },
  {
    title: "SaaS & Web App Development",
    description:
      "Scalable product platforms with polished UX, secure architecture, and reliable delivery.",
    icon: Layers3,
    proof: "From MVP to multi-tenant SaaS with billing-ready foundations."
  },
  {
    title: "Booking Systems",
    description:
      "Smart appointment, consultation, and reservation flows that reduce manual coordination.",
    icon: CalendarCheck,
    proof: "Availability logic, reminders, dashboards, and CRM syncs."
  },
  {
    title: "CRM & Workflow Automation",
    description:
      "Connected systems that move leads, tasks, follow-ups, and approvals without spreadsheet drag.",
    icon: Workflow,
    proof: "Cleaner pipelines, faster follow-up, and fewer missed handoffs."
  }
];

export const products = [
  {
    title: "DocBooking",
    subtitle: "AI doctor booking platform",
    description:
      "A healthcare booking platform concept with AI-assisted doctor discovery, appointment routing, patient intake, and clinic-side scheduling workflows.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
    signals: ["AI symptom intake", "Doctor matching", "Clinic dashboards"]
  },
  {
    title: "Expreality",
    subtitle: "Luxury real estate intelligence platform",
    description:
      "A premium property intelligence platform concept for qualified buyers, private inventory, location scoring, and high-touch real estate workflows.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    signals: ["Buyer intelligence", "Private listings", "Asset insights"]
  }
];

export const caseStudies = [
  {
    title: "AI-led intake for a service business",
    problem:
      "Lead requests arrived across calls, forms, and WhatsApp, creating slow qualification and uneven follow-up.",
    solution:
      "Risonai Tech designed a structured intake layer with AI summarization, priority scoring, and CRM task creation.",
    outcome:
      "Response quality improved, handoffs became visible, and the sales team gained a cleaner pipeline rhythm.",
    icon: MessageCircle
  },
  {
    title: "SaaS workflow for appointment operations",
    problem:
      "Scheduling relied on manual confirmations, repeated calls, and disconnected availability data.",
    solution:
      "We mapped the booking journey into a SaaS workflow with slots, reminders, staff dashboards, and exception handling.",
    outcome:
      "Teams spent less time coordinating and more time serving high-value customers.",
    icon: Gauge
  },
  {
    title: "Executive intelligence dashboard",
    problem:
      "Leadership had data, but no clear operational signal for what required attention this week.",
    solution:
      "We shaped a signal dashboard with workflow data, AI-generated summaries, and next-action recommendations.",
    outcome:
      "Review meetings became sharper, decisions moved faster, and accountability improved.",
    icon: LineChart
  }
];

export const serviceDetails = [
  {
    title: "AI automation",
    icon: Sparkles,
    points: [
      "AI assistants for support, sales, operations, and internal knowledge.",
      "Workflow agents with approvals, fallbacks, and auditable decision paths.",
      "Document, lead, and request processing with structured outputs."
    ]
  },
  {
    title: "SaaS development",
    icon: Globe2,
    points: [
      "Responsive web apps built on modern Next.js architecture.",
      "Dashboards, role-based workflows, subscriptions, and admin tooling.",
      "Fast iteration from prototype to stable production release."
    ]
  },
  {
    title: "Custom systems",
    icon: DatabaseZap,
    points: [
      "Booking engines, CRM automations, internal portals, and reporting systems.",
      "API integrations across tools your team already uses.",
      "Maintainable systems that can scale with new markets and teams."
    ]
  }
];

export const proofPoints = [
  { value: "AI + SaaS", label: "systems built around business workflows" },
  { value: "90+", label: "Lighthouse target for performance discipline" },
  { value: "5L-50L", label: "project positioning for premium builds" }
];

export const processSteps = [
  {
    title: "Diagnose",
    description: "Map the workflows, data, revenue friction, and automation potential."
  },
  {
    title: "Design",
    description: "Shape the product architecture, user journeys, and AI control points."
  },
  {
    title: "Deploy",
    description: "Ship production-grade systems with analytics, security, and support paths."
  }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Network },
  { label: "X", href: "https://x.com/", icon: ArrowUpRight },
  { label: "Website", href: siteConfig.url, icon: Home }
];

export const capabilityIcons = [Cpu, ShieldCheck, Network, DatabaseZap];
