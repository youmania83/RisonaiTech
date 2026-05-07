// generateMarkdownMirrors.js
// Run: node scripts/generateMarkdownMirrors.js
//
// Traverses all Next.js App Router page routes, generates
// /public/{route}/index.md mirror files for AI crawlers.
// Each mirror has YAML frontmatter + clean prose content.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const BASE_URL = "https://risonaitech.com";
const LAST_UPDATED = new Date().toISOString().split("T")[0];

// Page content map — slug -> { title, description, body }
const PAGE_CONTENT = {
  "/": {
    title: "RisonAI Tech — AI Automation & SaaS Development Company India",
    description:
      "RisonAI Tech builds AI automation systems, SaaS platforms, CRM solutions, and AI chatbots that generate revenue and automate businesses across India.",
    body: `## What RisonAI Tech Does

RisonAI Tech is a product engineering company based in Panipat, Haryana, India. We build AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and high-performance websites for startups, healthcare providers, real estate firms, and SMBs across India.

## Core Services

- AI Automation Systems — LLM agents, WhatsApp automation, CRM syncs. Pricing: Rs 30,000 – Rs 6,00,000.
- SaaS Development — Multi-tenant SaaS with billing, admin dashboards. Pricing: Rs 1,20,000 – Rs 20,00,000.
- CRM Development — Custom CRM and AI-enhanced HubSpot/Zoho. Pricing: Rs 40,000 – Rs 7,00,000.
- AI Chatbot Development — RAG chatbots for WhatsApp and website. Pricing: Rs 20,000 – Rs 3,50,000.

## Products

DocBooking — AI-powered doctor appointment booking SaaS for clinics and hospitals across India.
Expreality — Luxury real estate intelligence platform with AI location scoring.

## Key Numbers

- 40+ products shipped
- 3x average efficiency gain for automation clients
- 100% client retention
- Projects delivered in 2–16 weeks

## Contact

- Website: https://risonaitech.com
- Email: hello@risonaitech.com
- Phone: +91 83681 37724
- WhatsApp: https://wa.me/918368137724
- Address: 196, Ground Floor, New RK Puram, Panipat, Haryana 132103`,
  },

  "/services": {
    title: "Services — AI Automation, SaaS, CRM & Chatbot Development",
    description:
      "RisonAI Tech offers AI automation, SaaS development, CRM development, AI chatbot development, website development, and WhatsApp automation for businesses across India.",
    body: `## Services Overview

### AI Automation Systems
End-to-end AI automation — LLM intake agents, WhatsApp pipelines, CRM syncs.
Pricing: Rs 30,000 – Rs 6,00,000.
URL: https://risonaitech.com/services/ai-automation

### SaaS Platform Development
Multi-tenant SaaS with billing, admin dashboards, and AI integrations.
Pricing: Rs 1,20,000 – Rs 20,00,000.
URL: https://risonaitech.com/services/saas-development

### CRM Development and Integration
Custom CRM platforms and AI-enhanced CRM extensions (HubSpot, Zoho).
Pricing: Rs 40,000 – Rs 7,00,000.
URL: https://risonaitech.com/services/crm-development

### AI Chatbot Development
RAG chatbots trained on business data for website and WhatsApp.
Pricing: Rs 20,000 – Rs 3,50,000.
URL: https://risonaitech.com/services/chatbot-development

### Website Development
High-performance, SEO-optimized websites built for speed, scalability, and conversions.
Pricing: Rs 35,000 – Rs 2,50,000.
URL: https://risonaitech.com/services/website-development

### WhatsApp Automation
Intelligent WhatsApp systems for lead capture, support automation, and CRM workflows.
Pricing: Rs 25,000 – Rs 2,00,000+.
URL: https://risonaitech.com/services/whatsapp-automation`,
  },

  "/services/ai-automation": {
    title: "AI Automation Systems — Replace Manual Work with AI Workflows",
    description:
      "RisonAI Tech builds AI automation systems — LLM intake agents, WhatsApp automation, CRM syncs, and agentic workflows. Pricing from Rs 30,000.",
    body: `## AI Automation Systems

RisonAI Tech builds end-to-end AI automation for Indian businesses.

### What We Build
- LLM-powered intake and lead qualification agents
- WhatsApp and email automation pipelines
- AI-driven CRM data entry and task creation
- Document processing and data extraction
- Agentic systems with human-in-the-loop controls
- Auto-reporting with AI-generated summaries

### Pricing
- Starter (1 workflow): Rs 30,000 – Rs 60,000, 2-week delivery
- Growth (3–5 workflows): Rs 80,000 – Rs 1,80,000, 4–6 weeks
- Enterprise (multi-agent): Rs 2,00,000+, 8–16 weeks

### Outcomes
- 60–80% reduction in manual data entry
- 3x faster lead qualification
- 40% fewer internal review meetings

Contact: https://risonaitech.com/contact`,
  },

  "/services/saas-development": {
    title: "SaaS Development — Build Production-Ready SaaS in 8–16 Weeks",
    description:
      "RisonAI Tech builds multi-tenant SaaS platforms with billing, admin dashboards, and AI features. MVP from Rs 1,20,000. Delhi NCR.",
    body: `## SaaS Platform Development

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
- MVP: Rs 1,20,000 – Rs 2,50,000, 6–10 weeks
- Growth SaaS: Rs 3,00,000 – Rs 8,00,000, 12–16 weeks
- Enterprise SaaS: Rs 8,00,000+, 16–24 weeks

Contact: https://risonaitech.com/contact`,
  },

  "/services/crm-development": {
    title: "CRM Development — Custom CRM with WhatsApp and AI Integration",
    description:
      "RisonAI Tech builds custom CRM systems and extends HubSpot/Zoho with AI. For healthcare, real estate, and service businesses. From Rs 40,000.",
    body: `## CRM Development and Integration

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
- CRM Integration: Rs 40,000 – Rs 1,00,000, 4–6 weeks
- Custom CRM: Rs 1,00,000 – Rs 3,00,000, 6–10 weeks
- AI CRM: Rs 3,00,000 – Rs 7,00,000, 10–16 weeks

Contact: https://risonaitech.com/contact`,
  },

  "/services/chatbot-development": {
    title: "AI Chatbot Development — WhatsApp and Website Chatbots with RAG",
    description:
      "RisonAI Tech builds AI chatbots trained on business data using RAG. WhatsApp and website bots for lead qualification, support, and booking. From Rs 20,000.",
    body: `## AI Chatbot Development

### Types of Chatbots
- FAQ chatbot (rule-based)
- Lead qualification chatbot
- Appointment booking chatbot
- RAG chatbot trained on company docs

### Features
- WhatsApp Business API integration
- Hindi and English support
- CRM integration
- Handoff to human agent
- Analytics dashboard

### Pricing
- Basic FAQ bot: Rs 20,000 – Rs 50,000, 2–3 weeks
- AI Lead bot: Rs 50,000 – Rs 1,20,000, 3–5 weeks
- RAG Chatbot: Rs 1,20,000 – Rs 3,50,000, 5–8 weeks

Contact: https://risonaitech.com/contact`,
  },

  "/services/website-development": {
    title: "Website Development — Fast, SEO-Optimized Websites for Growth",
    description:
      "RisonAI Tech builds high-performance websites for startups and SMBs in India. SEO-ready, conversion-focused, and engineered for speed.",
    body: `## Website Development

RisonAI Tech builds high-performance, SEO-optimized websites for Indian startups and SMBs.

### What We Build
- Next.js websites optimized for speed and scalability
- SEO-first page architecture and metadata setup
- Conversion-focused landing pages and service pages
- Responsive UI across mobile, tablet, and desktop
- CMS integrations for easy content management
- Performance tuning for Core Web Vitals

### Delivery and Pricing
- Typical delivery: 2-8 weeks
- Pricing range: Rs 35,000 - Rs 2,50,000

### Outcomes
- Faster load times and reduced bounce
- Better lead capture on high-intent pages
- SEO-ready technical foundation from launch

Contact: https://risonaitech.com/contact`,
  },

  "/services/whatsapp-automation": {
    title: "WhatsApp Automation — Lead Capture, Support, and CRM Workflows",
    description:
      "RisonAI Tech builds WhatsApp automation systems for lead capture, support, and CRM workflows. Official API setup, routing, and analytics included.",
    body: `## WhatsApp Automation

RisonAI Tech implements intelligent WhatsApp automation systems for businesses that need faster response and better lead handling.

### What We Build
- WhatsApp Business API automation setup
- Lead capture and qualification flows
- Support automation with human handoff
- CRM sync for contacts, stages, and tasks
- Appointment reminders and follow-up workflows
- Reporting dashboards for response and conversion metrics

### Delivery and Pricing
- Typical rollout: 2-6 weeks
- Pricing range: Rs 25,000 - Rs 2,00,000+

### Outcomes
- Faster first-response time
- Reduced manual lead triage workload
- Better follow-up consistency across teams

Contact: https://risonaitech.com/contact`,
  },

  "/products": {
    title: "Products — DocBooking and Expreality SaaS Platforms",
    description:
      "RisonAI Tech has built DocBooking (AI healthcare SaaS) and Expreality (real estate intelligence SaaS). Available for white-label licensing.",
    body: `## RisonAI Tech Products

### DocBooking
AI-powered doctor appointment booking SaaS for clinics and hospitals in India.

Features: Smart scheduling, patient intake forms with AI parsing, WhatsApp reminders, clinic analytics dashboard, multi-doctor multi-location support.

Industries: Healthcare, Telemedicine, Clinics
Status: Live, available for white-label licensing.

### Expreality
Premium property intelligence platform for real estate buyers and agents.

Features: Private inventory listings, AI-driven location scoring, neighbourhood analytics, CRM for real estate agents.

Industries: Luxury Real Estate, Property Management
Status: Live product.`,
  },

  "/about": {
    title: "About RisonAI Tech — Product Engineering and AI Company India",
    description:
      "RisonAI Tech is a product engineering company based in Panipat, Haryana. We build AI systems, SaaS platforms, and digital products for businesses across India.",
    body: `## About RisonAI Tech

RisonAI Tech is a product engineering company headquartered in Panipat, Haryana, India.

We build AI automation systems, SaaS platforms, CRM solutions, AI chatbots, and web applications for startups, healthcare providers, real estate firms, and SMBs across India.

### What makes us different
- Production systems, not prototypes
- Fixed-price projects, no hourly billing
- 100% client retention rate
- Two-week sprint delivery model
- Full code ownership transferred to clients

Contact: hello@risonaitech.com | +91 83681 37724`,
  },

  "/contact": {
    title: "Contact RisonAI Tech — Book Free AI Consultation",
    description:
      "Contact RisonAI Tech for a free 30-minute consultation for AI automation, SaaS development, CRM, or chatbot projects.",
    body: `## Contact RisonAI Tech

Email: hello@risonaitech.com
Phone: +91 83681 37724
WhatsApp: https://wa.me/918368137724
Website: https://risonaitech.com/contact

Address: 196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India

Process:
1. Submit inquiry via form or WhatsApp
2. Free 30-minute discovery call
3. Detailed proposal within 48 hours
4. Project starts within 1 week of sign-off`,
  },

  "/locations/delhi": {
    title: "AI and SaaS Development in Delhi — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Delhi businesses.",
    body: `## RisonAI Tech — Delhi NCR

RisonAI Tech serves clients across Delhi and the Delhi NCR region.

Services in Delhi:
- AI Automation from Rs 30,000
- SaaS Development from Rs 1,20,000
- CRM Development from Rs 40,000
- AI Chatbot from Rs 20,000

Contact: hello@risonaitech.com | +91 83681 37724`,
  },

  "/locations/gurgaon": {
    title: "AI and SaaS Development in Gurgaon — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Gurgaon startups and enterprises.",
    body: `## RisonAI Tech — Gurgaon

RisonAI Tech serves clients across Gurgaon (Gurugram) and the Haryana tech corridor.

Services in Gurgaon:
- AI Automation from Rs 30,000
- SaaS Development from Rs 1,20,000
- CRM Development from Rs 40,000
- AI Chatbot from Rs 20,000

Contact: hello@risonaitech.com | +91 83681 37724`,
  },

  "/locations/india": {
    title: "AI and SaaS Development Across India — RisonAI Tech",
    description:
      "RisonAI Tech is a remote-first AI and SaaS development company serving clients across 18+ cities in India.",
    body: `## RisonAI Tech — Across India

Remote-first product engineering company serving clients in Delhi, Gurgaon, Mumbai, Bengaluru, Pune, Hyderabad and 12+ other cities.

All projects delivered remotely. Fixed INR pricing. Full source code ownership.

Services: AI Automation, SaaS Development, CRM, AI Chatbots, Web Apps.

Contact: hello@risonaitech.com | +91 83681 37724`,
  },
};

function slugToOutputPath(slug) {
  if (slug === "/") {
    return path.join(PUBLIC_DIR, "index.md");
  }
  const clean = slug.replace(/^\//, "");
  return path.join(PUBLIC_DIR, clean, "index.md");
}

function buildFrontmatter(slug, title, description) {
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

function generateMarkdownMirrors() {
  let created = 0;

  for (const [slug, content] of Object.entries(PAGE_CONTENT)) {
    const outputPath = slugToOutputPath(slug);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const frontmatter = buildFrontmatter(slug, content.title, content.description);
    const markdown = `${frontmatter}\n\n${content.body}\n`;

    fs.writeFileSync(outputPath, markdown, "utf8");
    console.log(`✓ ${outputPath.replace(ROOT, "")}`);
    created++;
  }

  console.log(`\nDone. Files created/updated: ${created}`);
}

generateMarkdownMirrors();
