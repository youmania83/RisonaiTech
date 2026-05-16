import {
  Bot,
  Globe,
  MessageCircle,
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
    "Risonai Tech is an AI Automation & AI Systems Infrastructure Company building enterprise SaaS platforms, operational dashboards, and AI automation systems.",
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
};

export const services: Service[] = [
  {
    id: "web-app",
    icon: Code2,
    title: "Internal Operations Platforms",
    short: "Replace fragmented spreadsheets with centralized, automated software systems.",
    description:
      "We build production-grade web applications that automate your operations, centralize data, and eliminate manual processing — delivered in weeks, not quarters.",
    bullets: [
      "SaaS dashboards & portals",
      "Customer-facing platforms",
      "React / Next.js + Node.js / Python",
      "REST & GraphQL APIs",
      "Cloud-ready deployment from day one",
    ],
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Field Operations Mobile Apps",
    short: "Put operational control and automated data entry in your field team's pockets.",
    description:
      "Native Android apps built for operational reliability and field data collection — featuring offline-first syncing and direct CRM/AI integrations.",
    bullets: [
      "Kotlin-first, clean architecture",
      "Offline-first & sync",
      "Push notifications & deep links",
      "Play Store publishing end-to-end",
      "API integration & real-time sync",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "High-Performance Web Systems",
    short: "Enterprise-grade web infrastructure built for operational speed and AI discovery.",
    description:
      "Premium marketing and operational web interfaces that act as the front door for your automation systems — SEO-optimised, fast, and structured for LLM crawlers.",
    bullets: [
      "Next.js / Astro — sub-2s load time",
      "Core Web Vitals & SEO optimised",
      "CMS integrations (Sanity, Contentful)",
      "Conversion-focused layout & copy",
      "Accessible & fully responsive",
    ],
  },
  {
    id: "website-development",
    icon: Globe,
    title: "AI Operations Dashboards",
    short:
      "Custom internal business tools and high-performance operational dashboards to monitor AI systems.",
    description:
      "From data visualization to full-scale platform management, we engineer modern operational dashboards that give leadership full visibility and control.",
    bullets: [
      "Landing pages to full-scale platforms",
      "SEO foundations and technical performance",
      "Core Web Vitals focused implementation",
      "Scalable architecture for future growth",
      "Conversion-first UX and responsive design",
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Workflow Automation",
    short: "Stop paying humans to do what intelligent AI workflows can execute 24/7.",
    description:
      "Custom AI automation systems — agentic workflows, API integrations, document parsing, and operational intelligence that run autonomously.",
    bullets: [
      "LLM-powered agents & chatbots",
      "WhatsApp Business API automation",
      "CRM sync & lead scoring",
      "AI intake & qualification flows",
      "Human-in-the-loop controls",
    ],
  },
  {
    id: "whatsapp-automation",
    icon: MessageCircle,
    title: "WhatsApp AI Systems",
    short:
      "Intelligent WhatsApp infrastructure for automated support, lead capture, and CRM syncing.",
    description:
      "Integrate RAG chatbots and CRM workflows into the WhatsApp Business API to respond instantly, qualify leads automatically, and scale customer operations.",
    bullets: [
      "Automated lead qualification and routing",
      "Support flows with chatbot escalation",
      "CRM integration and pipeline updates",
      "Broadcast and re-engagement journeys",
      "Analytics, templates, and compliance setup",
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
    metrics: ["72% faster lead qualification", "37 hours/month saved", "19% lift in booked meetings"],
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
    serviceHref: "/services/saas-development",
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
  { value: "40+", label: "Enterprise systems deployed" },
  { value: "3×", label: "Avg. efficiency gain post-automation" },
  { value: "10,000+", label: "Manual hours saved monthly" },
  { value: "48h", label: "Architectural proposal turnaround" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: "t1",
    name: "Raghav Mehta",
    role: "Founder, HealthConnect Clinics",
    avatar: "RM",
    color: "#0EA5E9",
    quote:
      "RisonAI built our entire patient booking and intake system in 8 weeks. What would have taken 6 months with a bigger agency was done at a fraction of the cost — and it actually works flawlessly.",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "CEO, PropEdge Realty",
    avatar: "PS",
    color: "#635BFF",
    quote:
      "The WhatsApp CRM they built automated our entire lead follow-up. We went from missing 60% of inquiries to responding within 2 minutes, 24/7. Our conversion rate doubled in 3 months.",
  },
  {
    id: "t3",
    name: "Arjun Kapoor",
    role: "Co-founder, NutriTrack SaaS",
    avatar: "AK",
    color: "#10B981",
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
