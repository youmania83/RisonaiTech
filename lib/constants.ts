import {
  Bot,
  Globe,
  Layers,
  Smartphone,
  Workflow,
  Zap,
  Building2,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Users,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Site Config ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Risonai Tech",
  domain: "risonaitech.com",
  url: "https://risonaitech.com",
  description:
    "Risonai Tech is a product engineering company building high-performance web apps, Android apps, websites, and AI automation systems.",
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
};

export const services: Service[] = [
  {
    id: "web-app",
    icon: Code2,
    title: "Web Application Development",
    short: "Full-stack web apps built to scale.",
    description:
      "We design and build scalable, high-performance web applications using modern stacks — from complex SaaS dashboards to consumer-facing platforms.",
    bullets: [
      "React / Next.js front-ends",
      "Node.js, Python back-ends",
      "PostgreSQL, MongoDB databases",
      "REST & GraphQL APIs",
      "CI/CD & cloud deployment",
    ],
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Android App Development",
    short: "Native Android apps users love.",
    description:
      "Production-grade Android applications with clean architecture, offline-first design, and seamless performance across devices.",
    bullets: [
      "Kotlin-first development",
      "Clean MVVM architecture",
      "Push notifications & deep links",
      "Play Store publishing",
      "API integration & sync",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    short: "Websites that convert and perform.",
    description:
      "Fast, SEO-optimised marketing websites and landing pages that look premium and load in under 2 seconds.",
    bullets: [
      "Next.js / Astro static sites",
      "Core Web Vitals optimised",
      "CMS integrations",
      "Conversion-focused design",
      "Accessible & responsive",
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation Systems",
    short: "Intelligent workflows that work 24/7.",
    description:
      "End-to-end AI automation systems — intake flows, CRM syncs, auto-reporting, and agentic workflows that replace manual operations.",
    bullets: [
      "LLM-powered agents",
      "Workflow orchestration",
      "WhatsApp / email automation",
      "Data extraction & processing",
      "Human-in-the-loop controls",
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
      "Response quality improved, handoffs became visible, and the sales team gained a cleaner pipeline.",
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
      "Teams spent less time coordinating and more time serving high-value customers.",
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
      "Executives reduced review meetings by 40% and resolved bottlenecks days earlier.",
  },
];

// ─── Trust Strip ─────────────────────────────────────────────────────────────
export const trustItems = [
  "Startups",
  "D2C Brands",
  "Healthcare Platforms",
  "Real Estate Firms",
  "SaaS Companies",
  "Service Businesses",
  "Growth-stage Teams",
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: "40+", label: "Products Shipped" },
  { value: "3×", label: "Avg. Efficiency Gain" },
  { value: "100%", label: "Client Retention" },
];

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutValues = [
  {
    icon: ShieldCheck,
    title: "Engineering First",
    description:
      "We treat every product decision as an engineering problem — measurable, reversible, and production-tested.",
  },
  {
    icon: Zap,
    title: "Speed Without Chaos",
    description:
      "Fast delivery is not a compromise. Our systems and process allow us to ship premium products at pace.",
  },
  {
    icon: Users,
    title: "Long-term Partnership",
    description:
      "We retain 100% of our clients because we operate as embedded product partners, not one-off vendors.",
  },
];
