// generateMarkdownMirrors.ts
// NOTE: Use the JS version instead: node scripts/generateMarkdownMirrors.js
// This TypeScript version is kept as reference.
// Run JS version: node scripts/generateMarkdownMirrors.js
//
// Traverses all Next.js App Router pages, extracts content-relevant
// metadata, and generates public/{route}/index.md mirror files for AI crawlers.
//
// Each mirror contains:
//   - YAML frontmatter: title, description, url, last_updated
//   - Clean prose-only content derived from page metadata + content map
//   - No HTML, JSX, or UI framework noise

import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const PUBLIC_DIR = path.join(ROOT, "public");
const BASE_URL = "https://risonaitech.com";
const LAST_UPDATED = new Date().toISOString().split("T")[0];

// ─── Page content map ────────────────────────────────────────────────────────
// Manually curated content for each route. Keep this in sync when pages change.
const PAGE_CONTENT: Record<
  string,
  { title: string; description: string; body: string }
> = {
  "/": {
    title: "RisonAI Tech — AI Automation & SaaS Development Company India",
    description:
      "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots that generate revenue and automate businesses across India.",
    body: `
## What RisonAI Tech Does

RisonAI Tech is a product engineering company based in Panipat, Haryana, India. We build AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and high-performance websites for startups, healthcare providers, real estate firms, and SMBs across India.

## Core Services

- **AI Automation Systems** — LLM-powered agents, WhatsApp automation, CRM syncs, and agentic workflows. Pricing: ₹30,000 – ₹6,00,000.
- **SaaS Development** — Multi-tenant SaaS platforms with billing, admin dashboards, and AI features. Pricing: ₹1,20,000 – ₹20,00,000.
- **CRM Development** — Custom CRM platforms and AI-enhanced HubSpot/Zoho extensions. Pricing: ₹40,000 – ₹7,00,000.
- **AI Chatbot Development** — RAG chatbots trained on business data for WhatsApp and websites. Pricing: ₹20,000 – ₹3,50,000.

## Products

**DocBooking** — AI-powered doctor appointment booking SaaS for clinics and hospitals across India.
**Expreality** — Luxury real estate intelligence platform with AI-driven location scoring.

## Key Numbers

- 40+ products shipped
- 3× average efficiency gain for automation clients
- 100% client retention
- Projects delivered in 2–16 weeks

## Contact

- Website: https://risonaitech.com
- Email: hello@risonaitech.com
- Phone: +91 83681 37724
- WhatsApp: https://wa.me/918368137724
- Address: 196, Ground Floor, New RK Puram, Panipat, Haryana 132103
    `.trim(),
  },

  "/services": {
    title: "Services — AI Automation, SaaS, CRM & Chatbot Development",
    description:
      "RisonAI Tech offers AI automation, SaaS development, CRM development, AI chatbot development, and web application development. Based in Delhi NCR, serving clients across India.",
    body: `
## Services Overview

RisonAI Tech provides four core engineering services:

### AI Automation Systems
End-to-end AI automation — LLM-powered intake agents, WhatsApp pipelines, CRM syncs, agentic workflows.
Pricing: ₹30,000 – ₹6,00,000. Learn more: https://risonaitech.com/services/ai-automation

### SaaS Platform Development
Multi-tenant SaaS with billing, admin dashboards, and AI integrations.
Pricing: ₹1,20,000 – ₹20,00,000. Learn more: https://risonaitech.com/services/saas-development

### CRM Development & Integration
Custom CRM platforms and AI-enhanced CRM extensions (HubSpot, Zoho).
Pricing: ₹40,000 – ₹7,00,000. Learn more: https://risonaitech.com/services/crm-development

### AI Chatbot Development
RAG chatbots trained on business data for website and WhatsApp.
Pricing: ₹20,000 – ₹3,50,000. Learn more: https://risonaitech.com/services/chatbot-development
    `.trim(),
  },

  "/services/ai-automation": {
    title: "AI Automation Systems — Replace Manual Work with AI Workflows",
    description:
      "RisonAI Tech builds AI automation systems — LLM intake agents, WhatsApp automation, CRM syncs, and agentic workflows. Pricing from ₹30,000.",
    body: `
## AI Automation Systems

RisonAI Tech builds end-to-end AI automation for Indian businesses.

### What We Build
- LLM-powered intake and lead qualification agents
- WhatsApp and email automation pipelines
- AI-driven CRM data entry and task creation
- Document processing and data extraction
- Agentic systems with human-in-the-loop controls
- Auto-reporting with AI-generated summaries

### Pricing
- Starter (1 workflow): ₹30,000 – ₹60,000 / 2-week delivery
- Growth (3–5 workflows): ₹80,000 – ₹1,80,000 / 4–6 weeks
- Enterprise (multi-agent): ₹2,00,000+ / 8–16 weeks

### Typical Outcomes
- 60–80% reduction in manual data entry
- 3× faster lead qualification
- 40% fewer internal review meetings

### Contact
Book a free AI audit: https://risonaitech.com/contact
    `.trim(),
  },

  "/services/saas-development": {
    title: "SaaS Development — Build Production-Ready SaaS in 8–16 Weeks",
    description:
      "RisonAI Tech builds multi-tenant SaaS platforms with billing, admin dashboards, and AI features. MVP from ₹1,20,000. Based in Delhi NCR.",
    body: `
## SaaS Platform Development

RisonAI Tech architects and builds production-ready SaaS platforms.

### What We Build
- Multi-tenant SaaS architecture
- Subscription billing (Razorpay, Stripe)
- Role-based access control
- Admin and analytics dashboards
- REST and GraphQL APIs
- AI feature integration

### Example Products
- DocBooking: AI clinic appointment SaaS for Indian healthcare
- Expreality: Real estate intelligence SaaS

### Pricing
- MVP: ₹1,20,000 – ₹2,50,000 / 6–10 weeks
- Growth SaaS: ₹3,00,000 – ₹8,00,000 / 12–16 weeks
- Enterprise SaaS: ₹8,00,000+ / 16–24 weeks

### Contact
Start your SaaS project: https://risonaitech.com/contact
    `.trim(),
  },

  "/services/crm-development": {
    title: "CRM Development — Custom CRM with WhatsApp & AI Integration",
    description:
      "RisonAI Tech builds custom CRM systems and extends HubSpot/Zoho with AI. For healthcare, real estate, and service businesses. From ₹40,000.",
    body: `
## CRM Development & Integration

RisonAI Tech builds custom CRM platforms and enhances existing CRMs with AI.

### What We Build
- Custom CRM platform from scratch
- Lead pipeline and scoring systems
- WhatsApp integration in CRM
- AI-generated follow-up drafts
- HubSpot and Zoho extensions
- Sales forecasting dashboards

### Industries
- Healthcare: Patient journey CRM
- Real Estate: Property lead CRM
- Service businesses: Client management CRM

### Pricing
- CRM Integration: ₹40,000 – ₹1,00,000 / 4–6 weeks
- Custom CRM: ₹1,00,000 – ₹3,00,000 / 6–10 weeks
- AI CRM: ₹3,00,000 – ₹7,00,000 / 10–16 weeks

### Contact
Free CRM audit: https://risonaitech.com/contact
    `.trim(),
  },

  "/services/chatbot-development": {
    title: "AI Chatbot Development — WhatsApp & Website Chatbots with RAG",
    description:
      "RisonAI Tech builds AI chatbots trained on business data using RAG. WhatsApp and website bots for lead qualification, support, and booking. From ₹20,000.",
    body: `
## AI Chatbot Development

RisonAI Tech builds context-aware AI chatbots for websites and WhatsApp.

### Types of Chatbots
- FAQ chatbot (rule-based)
- Lead qualification chatbot
- Appointment booking chatbot
- RAG chatbot trained on company docs

### Features
- WhatsApp Business API integration
- Hindi + English support
- CRM integration
- Handoff to human agent
- Analytics dashboard

### Pricing
- Basic FAQ bot: ₹20,000 – ₹50,000 / 2–3 weeks
- AI Lead bot: ₹50,000 – ₹1,20,000 / 3–5 weeks
- RAG Chatbot: ₹1,20,000 – ₹3,50,000 / 5–8 weeks

### Contact
Build your chatbot: https://risonaitech.com/contact
    `.trim(),
  },

  "/products": {
    title: "Products — DocBooking & Expreality SaaS Platforms",
    description:
      "RisonAI Tech has built DocBooking (AI healthcare SaaS) and Expreality (real estate intelligence SaaS). Available for white-label licensing.",
    body: `
## RisonAI Tech Products

### DocBooking
AI-powered doctor appointment booking SaaS for clinics and hospitals in India.

Features:
- Smart scheduling and slot management
- Patient intake forms with AI symptom parsing
- WhatsApp appointment reminders
- Clinic-side analytics dashboard
- Multi-doctor, multi-location support

Industries: Healthcare, Telemedicine, Clinics
Status: Live, available for white-label licensing.
Learn more: https://risonaitech.com/products

### Expreality
Premium property intelligence platform for real estate buyers and agents.

Features:
- Private inventory listings
- AI-driven location scoring
- Neighbourhood analytics
- CRM for real estate agents

Industries: Luxury Real Estate, Property Management
Status: Live product.
    `.trim(),
  },

  "/about": {
    title: "About RisonAI Tech — Product Engineering & AI Company India",
    description:
      "RisonAI Tech is a product engineering company based in Panipat, Haryana. We build AI systems, SaaS platforms, and digital products for businesses across India.",
    body: `
## About RisonAI Tech

RisonAI Tech is a product engineering company headquartered in Panipat, Haryana, India.

We build AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and web applications for startups, healthcare providers, real estate firms, and SMBs across India.

### What makes us different
- We build production systems, not prototypes
- Fixed-price projects — no hourly billing
- 100% client retention rate
- Two-week sprint delivery model
- Full code ownership transferred to clients

### Contact
- Website: https://risonaitech.com
- Email: hello@risonaitech.com
- Phone: +91 83681 37724
    `.trim(),
  },

  "/contact": {
    title: "Contact RisonAI Tech — Book Free AI Consultation",
    description:
      "Contact RisonAI Tech to book a free 30-minute consultation for AI automation, SaaS development, CRM, or chatbot projects. Based in Delhi NCR.",
    body: `
## Contact RisonAI Tech

Book a free 30-minute consultation for your AI or SaaS project.

### Contact Details
- Email: hello@risonaitech.com
- Phone: +91 83681 37724
- WhatsApp: https://wa.me/918368137724
- Website: https://risonaitech.com/contact

### Address
196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India

### Process
1. Submit inquiry via form or WhatsApp
2. Free 30-minute discovery call
3. Detailed proposal within 48 hours
4. Project starts within 1 week of sign-off
    `.trim(),
  },

  "/locations/delhi": {
    title: "AI & SaaS Development in Delhi — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Delhi businesses. Free consultation available.",
    body: `
## RisonAI Tech — Delhi NCR

RisonAI Tech serves clients across Delhi and the Delhi NCR region.

Services available in Delhi:
- AI Automation (from ₹30,000)
- SaaS Development (from ₹1,20,000)
- CRM Development (from ₹40,000)
- AI Chatbot (from ₹20,000)

Contact: hello@risonaitech.com | +91 83681 37724
    `.trim(),
  },

  "/locations/gurgaon": {
    title: "AI & SaaS Development in Gurgaon — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Gurgaon startups and enterprises.",
    body: `
## RisonAI Tech — Gurgaon

RisonAI Tech serves clients across Gurgaon (Gurugram) and the Haryana tech corridor.

Services available in Gurgaon:
- AI Automation (from ₹30,000)
- SaaS Development (from ₹1,20,000)
- CRM Development (from ₹40,000)
- AI Chatbot (from ₹20,000)

Contact: hello@risonaitech.com | +91 83681 37724
    `.trim(),
  },

  "/locations/india": {
    title: "AI & SaaS Development Across India — RisonAI Tech",
    description:
      "RisonAI Tech is a remote-first AI and SaaS development company serving clients across 18+ cities in India. Fixed INR pricing.",
    body: `
## RisonAI Tech — Across India

RisonAI Tech is a remote-first product engineering company serving clients in Delhi, Gurgaon, Mumbai, Bengaluru, Pune, Hyderabad, and 12+ other cities.

All projects delivered remotely via Slack, Notion, and bi-weekly video calls.

Services: AI Automation, SaaS Development, CRM, AI Chatbots, Web Apps.

Pricing in INR. Source code ownership included. Fixed-price contracts.

Contact: hello@risonaitech.com | +91 83681 37724
    `.trim(),
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugToOutputPath(slug: string): string {
  const clean = slug === "/" ? "index" : slug.replace(/^\//, "").replace(/\//g, "/");
  return path.join(PUBLIC_DIR, clean, "index.md");
}

function buildFrontmatter(slug: string, title: string, description: string): string {
  const url = slug === "/" ? BASE_URL : `${BASE_URL}${slug}`;
  return [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: "${description.replace(/"/g, '\\"')}"`,
    `url: "${url}"`,
    `last_updated: "${LAST_UPDATED}"`,
    "---",
  ].join("\n");
}

function buildMarkdown(slug: string, data: { title: string; description: string; body: string }): string {
  const frontmatter = buildFrontmatter(slug, data.title, data.description);
  return `${frontmatter}\n\n${data.body}\n`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function generateMarkdownMirrors(): void {
  let created = 0;
  let skipped = 0;

  for (const [slug, content] of Object.entries(PAGE_CONTENT)) {
    const outputPath = slugToOutputPath(slug);
    const outputDir = path.dirname(outputPath);

    // Skip root index.md (conflicts with llms.txt directory) except for "/"
    // which maps to public/index.md
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const markdown = buildMarkdown(slug, content);
    fs.writeFileSync(outputPath, markdown, "utf8");
    console.log(`✓ Written: ${outputPath.replace(ROOT, "")}`);
    created++;
  }

  console.log(`\nDone. Created/updated: ${created} | Skipped: ${skipped}`);
}

generateMarkdownMirrors();
