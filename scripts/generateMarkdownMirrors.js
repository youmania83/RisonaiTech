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
- Phone: +91 93108 37724
- WhatsApp: https://wa.me/919310837724
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

  "/services/ai-agent": {
    title: "AI Agent Development — Autonomous AI Agents in 4–10 Weeks",
    description:
      "RisonAI Tech builds production-ready autonomous AI agents — multi-step reasoning pipelines, tool-using LLM agents, RAG knowledge agents, and multi-agent systems. From Rs 40,000.",
    body: `## AI Agent Development

RisonAI Tech builds production-grade AI agents that autonomously plan, call tools, and execute complex business processes.

### What We Build
- Multi-step reasoning agent pipelines (LangGraph, CrewAI)
- Tool-calling agents with web search, database querying, and API access
- RAG-powered knowledge agents grounded in business data
- Autonomous task orchestration with human-in-the-loop guardrails
- Agent observability, tracing, and evaluation dashboards

### Pricing
- Focused Single Agent: Rs 40,000 – Rs 1,20,000 (4–6 weeks)
- Multi-Agent Orchestration Suite: Rs 1,50,000 – Rs 5,00,000 (8–12 weeks)

Contact: https://risonaitech.com/contact`,
  },

  "/services/voice-ai": {
    title: "Voice AI Agents India | AI Receptionist & Outbound Calling | RisonAI Tech",
    description:
      "RisonAI Tech builds voice AI agents for inbound and outbound calls — AI receptionists, appointment confirmation bots, lead callback agents & post-purchase NPS callers. Twilio + LLM. From Rs 1,50,000.",
    body: `## Voice AI Agents

RisonAI Tech builds voice AI agents on Twilio + LLM stacks for automated inbound reception and outbound customer campaigns.

### What We Build
- AI Receptionists for 24/7 inbound answering and routing
- Outbound Lead Callbacks qualifying leads within 60 seconds
- Appointment Confirmation bots to reduce no-shows
- Post-Purchase NPS & CSAT feedback callers
- Dual-channel English and Hindi support
- Full CRM and calendar integrations

### Pricing
- Single-Flow Agent: Rs 1,50,000 – Rs 2,50,000 (4–6 weeks)
- Multi-Flow System: Rs 3,50,000 – Rs 5,00,000 (8–10 weeks)
- Enterprise Voice AI: Rs 5,00,000 – Rs 6,00,000+ (10–12 weeks)

Contact: https://risonaitech.com/contact`,
  },

  "/services/ai-consulting": {
    title: "AI Consulting Company India | AI Strategy & Implementation | RisonAI Tech",
    description:
      "RisonAI Tech is an AI consulting company in India — AI readiness audits, automation roadmaps, AI strategy for enterprise & SMEs, LLM evaluation, and implementation oversight. Fixed fee from Rs 75,000.",
    body: `## AI Consulting Services

RisonAI Tech is an independent AI consulting firm in India helping businesses scoping, design, and execute AI implementations.

### What We Provide
- AI Readiness Audits scoring opportunities by ROI and complexity
- AI Automation Roadmaps (90-day, 6-month, and 12-month phases)
- LLM & Agent framework selection advisory (GPT, Claude, Gemini, Llama)
- AI Implementation Oversight, prompt governance, and performance benchmarking

### Pricing
- AI Readiness Audit: Rs 75,000 – Rs 1,25,000 (2–3 weeks)
- AI Automation Roadmap: Rs 1,50,000 – Rs 2,50,000 (4–6 weeks)
- Implementation Oversight: Rs 75,000 / month retainer

Contact: https://risonaitech.com/contact`,
  },

  "/services/resume-screening": {
    title: "AI Resume Screening — Candidate Screening Automation",
    description:
      "RisonAI Tech builds AI-powered resume screening systems: CV parsing, Skills Graph matching, contextual evaluation, and ATS integration. From Rs 35,000.",
    body: `## AI Resume Screening Systems

We automate first-pass candidate screening, saving 70-80% of recruiter review time while maintaining transparent recruiter-in-the-loop oversight.

### Key Features
- Resume parsing and structured profile extraction
- Skills Graph matching (capturing equivalent/adjacent technologies)
- Contextual evaluation (seniority, domain depth, recency of experience)
- Direct ATS, spreadsheet, or email integration
- Ranked shortlists with detailed score explanations

### Pricing
- Starter screening workflow: Rs 35,000 – Rs 60,000
- ATS-integrated hiring workflow: Rs 90,000 – Rs 2,50,000

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
- Role-based access control (RBAC)
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

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/contact": {
    title: "Contact RisonAI Tech — Book Free AI Consultation",
    description:
      "Contact RisonAI Tech for a free 30-minute consultation for AI automation, SaaS development, CRM, or chatbot projects.",
    body: `## Contact RisonAI Tech

Email: hello@risonaitech.com
Phone: +91 93108 37724
WhatsApp: https://wa.me/919310837724
Website: https://risonaitech.com/contact

Address: 196, Ground Floor, New RK Puram, Panipat, Haryana 132103, India

Process:
1. Submit inquiry via form or WhatsApp
2. Free 30-minute discovery call
3. Detailed proposal within 48 hours
4. Project starts within 1 week of sign-off`,
  },

  // ─── Geo / Location Landing Pages ──────────────────────────────────────────

  "/delhi": {
    title: "AI and SaaS Development in Delhi — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Delhi businesses.",
    body: `## RisonAI Tech — Delhi NCR

RisonAI Tech serves clients across Delhi and the Delhi NCR region with conversion-focused automation and high-reliability operations infrastructure.

Services in Delhi:
- AI Automation from Rs 30,000
- SaaS Development from Rs 1,20,000
- CRM Development from Rs 40,000
- AI Chatbot from Rs 20,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/gurgaon": {
    title: "AI and SaaS Development in Gurgaon — RisonAI Tech",
    description:
      "RisonAI Tech provides AI automation, SaaS development, CRM, and chatbot services for Gurgaon startups and enterprises.",
    body: `## RisonAI Tech — Gurgaon

RisonAI Tech serves startups, growth-stage platforms, and enterprises in Gurgaon (Gurugram) and the Haryana tech corridor.

Services in Gurgaon:
- AI Automation from Rs 30,000
- SaaS Development from Rs 1,20,000
- CRM Development from Rs 40,000
- AI Chatbot from Rs 20,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/panipat": {
    title: "AI & SaaS Development in Panipat — RisonAI Tech",
    description:
      "RisonAI Tech is headquartered in Panipat, Haryana, delivering AI automation, custom CRM systems, and SaaS development to local industries and businesses.",
    body: `## RisonAI Tech — Panipat Headquarters

Headquartered in Panipat, Haryana, RisonAI Tech delivers high-efficiency AI automation, custom CRMs, and web systems for distributors, exporters, and SMBs locally and across Haryana.

Services in Panipat:
- AI Automation: from Rs 30,000
- SaaS MVP Development: from Rs 1,20,000
- CRM Integrations: from Rs 40,000
- WhatsApp Business API Automation: from Rs 25,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/indore": {
    title: "AI and SaaS Development in Indore — RisonAI Tech",
    description:
      "RisonAI Tech serves Indore-based businesses, traders, and exporters with custom AI automation, WhatsApp workflows, and SaaS product engineering.",
    body: `## RisonAI Tech — Indore Services

RisonAI Tech serves growing enterprises, distributors, and logistics firms in Indore (Madhya Pradesh) with workflow digitization and AI integration.

Services in Indore:
- WhatsApp CRM & Lead Triage: from Rs 25,000
- AI Automation Workflows: from Rs 30,000
- Custom CRM Systems: from Rs 40,000
- SaaS MVP Engineering: from Rs 1,20,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/ahmedabad": {
    title: "AI & SaaS Development in Ahmedabad — RisonAI Tech",
    description:
      "RisonAI Tech delivers AI automation, custom CRM solutions, and SaaS development for startups, textile exporters, and manufacturers in Ahmedabad, Gujarat.",
    body: `## RisonAI Tech — Ahmedabad Services

We build operational dashboards, WhatsApp automation, and custom CRM tools for Ahmedabad-based family offices, exporters, and startups to automate administrative overhead.

Services in Ahmedabad:
- Custom CRM and ERP Syncs: from Rs 40,000
- AI Workflow Automation: from Rs 30,000
- WhatsApp Commerce Bots: from Rs 25,000
- SaaS MVP Engineering: from Rs 1,20,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/jaipur": {
    title: "AI Automation & SaaS Development in Jaipur — RisonAI Tech",
    description:
      "RisonAI Tech builds AI automation, SaaS products, CRM workflows, and chatbot systems for Jaipur startups, tourism tech companies, and Rajasthan enterprises.",
    body: `## RisonAI Tech — Jaipur Services

We serve tourism platforms, handicraft exporters, and growing retail startups in Jaipur, Rajasthan, with remote-first sprint delivery.

Services in Jaipur:
- Hospitality & Booking Chatbots: from Rs 20,000
- Custom CRM & Export Workflows: from Rs 40,000
- B2B/D2C Marketplace SaaS: from Rs 1,20,000
- AI Automation pipelines: from Rs 30,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/ranchi": {
    title: "AI Automation & SaaS Development in Ranchi — RisonAI Tech",
    description:
      "RisonAI Tech builds AI automation, SaaS products, WhatsApp chatbots, and CRM workflows for Ranchi businesses, Jharkhand startups, and government-adjacent enterprises.",
    body: `## RisonAI Tech — Ranchi Services

We help healthcare providers, social sector organizations, and growing industrial logistics companies in Ranchi and Jharkhand automate workflows and scale operations.

Services in Ranchi:
- Healthcare & Patient Intake Systems: from Rs 30,000
- Custom CRM & Lead Triage: from Rs 40,000
- Multi-Tenant SaaS MVPs: from Rs 1,20,000
- WhatsApp AI Agents: from Rs 25,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/patna": {
    title: "AI Automation & SaaS Development in Patna — RisonAI Tech",
    description:
      "RisonAI Tech builds AI automation, SaaS products, WhatsApp chatbots, and CRM systems for Patna businesses, Bihar startups, and education-sector enterprises.",
    body: `## RisonAI Tech — Patna Services

We build custom LMS platforms, doubt-resolution bots, patient booking integrations, and agricultural marketplace portals for Patna, Bihar startups and coaching corridors.

Services in Patna:
- Coaching & LMS Platforms: from Rs 1,20,000
- Patient Scheduling & WhatsApp triage: from Rs 25,000
- Agricultural Supply-Chain SaaS: from Rs 1,50,000
- Custom CRM & sales tracking: from Rs 40,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/chandigarh": {
    title: "AI Automation & SaaS Development in Chandigarh — RisonAI Tech",
    description:
      "RisonAI Tech provides AI workflow automation, CRM software, and custom SaaS engineering for Chandigarh, Mohali, and Panchkula businesses.",
    body: `## RisonAI Tech — Chandigarh Services

We help IT service providers, startups, and agencies in the Chandigarh Tricity area automate sales triage, lead tracking, and operations dashboards.

Services in Chandigarh:
- AI SDR & Lead Qualification: from Rs 30,000
- Custom CRM & Zoho/HubSpot Extensions: from Rs 40,000
- SaaS Platform Development: from Rs 1,20,000
- WhatsApp Triage Chatbots: from Rs 20,000

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/new-york": {
    title: "AI Agent & SaaS Development in New York (NYC) — RisonAI Tech",
    description:
      "RisonAI Tech serves US startups and agencies in New York with AI agent systems, multi-tenant SaaS engineering, and operational automation.",
    body: `## RisonAI Tech — New York Services

We partner with NYC-based startups and B2B consultancies looking for high-competence product engineering at competitive offshore economics.

Services in New York:
- Autonomous AI Agents: from $719
- SaaS MVP Development: from $2,159
- HubSpot/Salesforce AI Integrations: from $719
- Custom CRM & Dashboard Builds: from $1,439

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/new-jersey": {
    title: "AI Automation & SaaS Development in New Jersey (NJ) — RisonAI Tech",
    description:
      "RisonAI Tech provides SaaS development, custom CRM systems, and autonomous AI agents for businesses and founders in New Jersey.",
    body: `## RisonAI Tech — New Jersey Services

We deliver enterprise-grade multi-tenant SaaS, billing portals, and AI workflows for NJ startups and healthcare tech firms.

Services in New Jersey:
- SaaS Platform Development: from $2,159
- CRM Automation Infrastructure: from $719
- AI Chatbots & RAG Systems: from $359
- AI Automation Workflows: from $539

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/london": {
    title: "AI Agent & SaaS Development in London — RisonAI Tech",
    description:
      "RisonAI Tech builds autonomous AI agents, custom CRM integrations, and multi-tenant SaaS platforms for London startups and UK SMEs.",
    body: `## RisonAI Tech — London & UK Services

We serve London founders, agencies, and e-commerce brands with modern React/Node/Python stacks and robust AI capabilities.

Services in London:
- SaaS MVP and Billing Setup: from £1,650
- Custom CRM & API Integrations: from £550
- AI Agents & n8n Workflows: from £450
- Conversational RAG Chatbots: from £275

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  "/locations/india": {
    title: "AI and SaaS Development Across India — RisonAI Tech",
    description:
      "RisonAI Tech is a remote-first AI and SaaS development company serving clients across 18+ cities in India.",
    body: `## RisonAI Tech — Across India

Remote-first product engineering company serving clients in Delhi, Gurgaon, Mumbai, Bengaluru, Pune, Hyderabad and 12+ other cities.

All projects delivered remotely. Fixed INR pricing. Full source code ownership.

Services: AI Automation, SaaS Development, CRM, AI Chatbots, Web Apps.

Contact: hello@risonaitech.com | +91 93108 37724`,
  },

  // ─── Blog Pages ─────────────────────────────────────────────────────────────

  "/blog/how-to-check-if-your-website-appears-in-chatgpt": {
    title: "How to Check If Your Website Appears in ChatGPT, Perplexity, and Google AI Overviews",
    description: "A practical guide to audit your website's visibility in AI search engines and answer engines in 2026.",
    body: `## Auditing Your Website's AI Visibility

As search habits shift to ChatGPT Search, Perplexity, Gemini, Claude, and Google AI Overviews, tracking your AI visibility is crucial.

### Testing Method
1. Query key brand keywords directly in ChatGPT and Perplexity.
2. Check if the engines fetch your URL or refer to your entity.
3. Review references/links in Google AI Overviews.
4. Run a technical crawler check to verify that User-Agents like 'GPTBot' and 'ClaudeBot' are not blocked in your robots.txt.`,
  },

  "/blog/free-ai-seo-audit-checklist": {
    title: "Free AI SEO Audit Checklist for 2026: 18 Things to Fix Before You Pay an Agency",
    description: "A complete 18-step checklist to prepare your website for AI search crawlers and answer engine optimization (AEO).",
    body: `## AI SEO Audit Checklist

Before hiring an expensive agency, ensure your website has these 18 basic elements of Generative Engine Optimization (GEO):

### Key Actions
- Do not block AI bots (GPTBot, ClaudeBot, PerplexityBot) in robots.txt.
- Expose a clean, structured sitemap.xml.
- Implement a public 'llms.txt' file mapping your site's core information.
- Use clear schema.org tags (Organization, LocalBusiness, Service).
- Maintain high factual density and clean, prose-first content mirrors.`,
  },

  "/blog/why-your-website-is-not-showing-in-ai-search": {
    title: "Why Your Website Is Not Showing in AI Search: 9 Common Reasons and What to Fix First",
    description: "Common reasons why ChatGPT, Perplexity, and Gemini ignore your brand, and how to fix it.",
    body: `## Common AI Search Blockages

If your website isn't showing up as a citation in answer engines, it's typically due to one of these 9 reasons:

1. Crawlers are blocked in robots.txt.
2. Low factual density (too much marketing fluff, too little data).
3. Missing structured JSON-LD schemas.
4. Weak brand entity signals on third-party sites (Wikipedia, LinkedIn).
5. Lack of clear, text-only mirrors (like public index.md files).
6. Slow server response times causing crawler timeouts.`,
  },

  "/blog/ai-automation-for-small-businesses": {
    title: "How Small Businesses Can Use AI Automation in 2026 (Without a Tech Team)",
    description: "A practical guide for small businesses to automate workflows, qualify leads, and save manual hours.",
    body: `## AI Automation for Small Business

Small businesses with 5–50 employees get the fastest return on investment from AI workflows.

### High-Impact Workflows
- **Lead Intake**: Instant qualification via WhatsApp/Web and CRM syncing.
- **Support Deflection**: FAQ bots handling repetitive L1 queries.
- **Reporting**: Automated data extraction from emails or PDFs.
- **Reminders**: Automated invoice or appointment alerts.`,
  },

  "/blog/ai-lead-generation-systems": {
    title: "AI Lead Generation Automation: Build a System That Never Sleeps",
    description: "The 5-layer architecture of an automated lead qualification system that responds in under 60 seconds.",
    body: `## Building an Automated Lead System

To maximize conversion, you must follow up with inbound leads immediately. An AI lead system operates 24/7/365.

### System Architecture
1. **Intake Channels**: Website forms, Meta ads, WhatsApp Business API.
2. **LLM Scorer**: Qualifies budget, authority, need, and timeline (BANT).
3. **CRM Connector**: Syncs qualified contacts directly to HubSpot/Zoho.
4. **Calendar Router**: Sends scheduling links to hot leads.
5. **Analytics**: Tracks response time and conversion uplift.`,
  },

  "/blog/ai-automation-real-estate-india": {
    title: "AI Automation for Real Estate India: The 2026 Playbook",
    description: "How Indian real estate developers and brokerages automate portal leads, WhatsApp triage, and site-visit bookings.",
    body: `## Real Estate Automation Playbook

Indian property teams manage high volumes of portal leads (MagicBricks, 99acres) and WhatsApp chats. 

### Key Workflows
- **Portal Triage**: Scraping incoming lead emails/APIs and routing them instantly.
- **WhatsApp Qualification**: Automated bots asking location, budget, and configurations.
- **Site-Visit Booking**: Syncing calendar availability without manual phone calls.
- **Pipeline Hygiene**: Updating CRM lead stages autonomously.`,
  },

  "/blog/make-vs-n8n-ai-automation": {
    title: "Make vs n8n in 2026: Which Automation Platform Is Right for Your Business?",
    description: "A complete comparison of Make.com and n8n for running AI workflow automations.",
    body: `## Make vs n8n

Choosing the right automation orchestrator impacts hosting costs, data privacy, and AI integration capabilities.

### Comparison
- **n8n**: Open-source, self-hostable (unlimited executions, fits Indian data compliance), native advanced AI nodes (LangChain-based).
- **Make.com**: Cloud-only, user-friendly visual builder, paid tier limits executions, data routed through external servers.
- **Verdict**: n8n is preferred for data-sensitive or high-volume enterprise AI integrations; Make is great for quick, low-volume setups.`,
  },

  "/blog/ai-agents-for-business-automation": {
    title: "AI Agents for Business: What They Are, What They Cost, and How to Deploy Them",
    description: "The complete guide to planning and deploying autonomous AI agents in enterprise workflows.",
    body: `## Deploying AI Agents

AI agents are stateful systems that can plan actions, call APIs, run code, and recover from intermediate errors to accomplish a high-level goal.

### Best Practices
- Define clear bounds and tool schemas for agent operations.
- Implement Human-in-the-Loop (HITL) gates for actions like sending client emails or charging cards.
- Track step-level execution cost and latency using tracing tools.`,
  },

  "/blog/ai-and-automation": {
    title: "AI and Automation Together: How to Combine Them for Maximum Business Impact",
    description: "How to combine rule-based automation engines with LLM cognitive capabilities.",
    body: `## Layering AI and Traditional Automation

The most reliable systems do not rely on LLMs for everything. They combine deterministic rules with AI intelligence.

### Design Pattern
- Use **Traditional Automation** for structure, API connections, database queries, and routing (high reliability, low cost).
- Use **Generative AI** for cognitive parsing, content summarization, classification, and drafting responses (handles unstructured data).`,
  },

  "/blog/ai-vs-automation": {
    title: "AI vs Automation: What Is the Difference and Which Does Your Business Need?",
    description: "Understand the differences between deterministic automation and cognitive AI capabilities.",
    body: `## AI vs. Automation

Knowing which technology to apply prevents over-engineering and reduces project failure rates.

### Differences
- **Traditional Automation**: Follows strict 'If-This-Then-That' rules. Highly predictable, runs instantly, zero token cost.
- **Artificial Intelligence**: Handles unstructured inputs, makes probabilistic decisions, requires prompt tuning, incurs token costs.`,
  },

  "/blog/ai-automation-tools": {
    title: "Top AI Automation Tools in 2026: The No-Fluff Shortlist",
    description: "A production-tested shortlist of tools for building and deploying AI workflows.",
    body: `## Production AI Automation Stack

Skip the hype. These are the tools RisonAI Tech deploys for real-world business systems:

- **Orchestration**: n8n, LangGraph (for complex state machines).
- **LLM API Providers**: OpenAI, Anthropic Claude, Google Gemini (via Vertex AI).
- **Database/Vector**: PostgreSQL (pgvector), Supabase, Qdrant.
- **Observability**: LangSmith, Sentry.`,
  },

  "/blog/how-to-use-ai-for-automation": {
    title: "How to Use AI for Automation: A Step-by-Step Implementation Guide",
    description: "A step-by-step roadmap to auditing, scoping, building, and deploying your first AI automation workflow.",
    body: `## AI Automation Implementation Guide

Follow this structured framework to automate any business process:

1. **Audit**: Document the manual steps, systems touched, and time spent on the process.
2. **Scope**: Isolate a single workflow (e.g. intake triage) that saves the most time first.
3. **Build**: Set up n8n/middleware API connections and write clear prompt guardrails.
4. **Calibrate**: Run historical data through the workflow and adjust prompts for errors.
5. **Launch**: Deploy with human approval gates, then transition to autonomous execution.`,
  },

  "/blog/what-is-ai-automation": {
    title: "What Is AI Automation? A Clear Explanation for Business Owners",
    description: "A plain-language guide for business owners to understand what AI automation is and how it saves costs.",
    body: `## What is AI Automation?

AI Automation is the integration of cognitive AI (large language models) with traditional software APIs to handle tasks that previously required human judgment, such as drafting responses, extracting data from messy emails, or triage support tickets.

Unlike legacy software, it adapts to variations in customer wording and documents without breaking.`,
  },

  "/blog/ai-employee-never-sleeps": {
    title: "The Employee Who Never Sleeps: How AI Saves Indian Owners Lakhs Every Year",
    description: "Three real stories of Indian SMEs using AI workers to eliminate notice periods, TDS liabilities, and manual data errors.",
    body: `## The AI Employee

An AI employee runs 24/7 in your cloud infrastructure, absorbing thousands of manual operational tasks for less than the cost of a junior hire's monthly salary.

### Case Studies
- A clinic automated doctor booking and symptom triage over WhatsApp, cutting front-desk coordination load by 52%.
- A real estate agency built portal lead triage bots, reducing lead response times from 45 minutes to under 8 minutes.
- A service company automated invoice reconciliation and CRM sync, saving 37 hours of owner time monthly.`,
  },

  "/blog/ai-automation-for-indian-smes": {
    title: "AI Automation for Indian SMEs: What Actually Works in 2025",
    description: "Prioritization frameworks and ROI playbooks for Indian small and medium enterprises implementing AI.",
    body: `## SME AI Playbook

Indian SMEs require practical, cost-effective automation that delivers ROI in under 90 days.

### Prioritization Framework
- **High ROI**: WhatsApp lead-capture bots, HubSpot/Zoho CRM automation, data entry pipelines.
- **Low ROI (Avoid First)**: Custom-trained large models, fully autonomous coding agents, complex voice-agent cold callers.`,
  },

  "/blog/whatsapp-chatbot-for-business-india": {
    title: "WhatsApp Chatbot for Business in India: The Complete 2025 Guide",
    description: "How to deploy official WhatsApp Business API bots for lead qualification, appointment booking, and customer support.",
    body: `## WhatsApp Chatbot Guide

With over 535 million users in India, WhatsApp is the primary communication channel for customers.

### Setup Steps
1. Get Meta Business Manager verification.
2. Choose a BSP (Business Solution Provider) to activate the official API.
3. Configure webhook receivers in n8n or Node.js.
4. Build RAG knowledge queries to answer FAQs instantly.
5. Setup human agent live-chat handoff rules.`,
  },

  "/blog/saas-development-cost-india": {
    title: "How Much Does SaaS Development Cost in India? (2025 Breakdown)",
    description: "A transparent breakdown of MVP, multi-tenant, and enterprise SaaS development costs and timelines in India.",
    body: `## SaaS Development Costs in India

SaaS development economics depend on architectural choices, database isolation, billing requirements, and AI modules.

### Budget Guide
- **SaaS MVP (6–10 weeks)**: Rs 1,20,000 – Rs 2,50,000. Includes core features, email auth, single-tenant isolated DB, basic dashboards.
- **Growth Multi-Tenant (12–16 weeks)**: Rs 3,00,000 – Rs 8,00,000. Includes tenant data isolation, subscription billing, custom domains.
- **Enterprise AI SaaS (16–24 weeks)**: Rs 8,00,000+. Includes SSO, audit logs, vector databases, custom integrations, SLAs.`,
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

function loadDynamicCities() {
  const appDir = path.join(ROOT, "app");
  if (fs.existsSync(appDir)) {
    const items = fs.readdirSync(appDir);
    for (const item of items) {
      const itemPath = path.join(appDir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        const jsonPath = path.join(itemPath, "data.json");
        if (fs.existsSync(jsonPath)) {
          try {
            const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
            const citySlug = `/${item}`;
            
            const body = [
              `## AI Automation & Agent Systems in ${data.city}`,
              `RisonAI Tech builds custom AI workflows, chatbots, and SaaS platforms for businesses in ${data.city}, ${data.country}.`,
              ``,
              `### Target Industries`,
              ...data.industries.map((ind) => `- **${ind.name}**: ${ind.desc}`),
              ``,
              `### Local Coverage & Districts`,
              `We serve clients across key districts including: ${data.businessDistricts.join(", ")}.`,
              `Nearby cities served: ${data.nearbyCities.join(", ")}.`,
              ``,
              `### Services Offered`,
              `- Custom AI Workflows & n8n/Make Automations`,
              `- WhatsApp AI Systems & RAG Chatbots`,
              `- Custom CRM Development & HubSpot/Zoho Syncs`,
              `- Multi-Tenant SaaS Platform Engineering`,
              ``,
              `Contact hello@risonaitech.com or visit https://risonaitech.com/contact to start your project.`,
            ].join("\n");

            PAGE_CONTENT[citySlug] = {
              title: `AI Automation Company in ${data.city} | Workflows & AI Agents`,
              description: `RisonAI Tech is a leading AI automation company in ${data.city}. We build custom AI workflows, chatbots, WhatsApp automation, and SaaS platforms for local industries.`,
              body: body,
            };
          } catch (err) {
            console.error(`Error loading data.json for ${item}:`, err);
          }
        }
      }
    }
  }
}

function generateMarkdownMirrors() {
  loadDynamicCities();
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
