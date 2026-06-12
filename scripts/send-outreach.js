const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Load GMAIL_USER and GMAIL_APP_PASSWORD from env or from .env.local
let gmailUser = process.env.GMAIL_USER || 'hello@risonaitech.com';
let gmailPass = process.env.GMAIL_APP_PASSWORD;

if (!gmailPass) {
  try {
    const envPath = path.join(__dirname, '../.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const userMatch = envContent.match(/GMAIL_USER=(.+)/);
      if (userMatch && userMatch[1]) {
        gmailUser = userMatch[1].trim();
      }
      const passMatch = envContent.match(/GMAIL_APP_PASSWORD=(.+)/);
      if (passMatch && passMatch[1]) {
        gmailPass = passMatch[1].trim();
      }
    }
  } catch (err) {
    console.error('Error reading .env.local:', err);
  }
}

if (!gmailPass) {
  console.error('GMAIL_APP_PASSWORD is required. Please add it to your .env.local file.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPass
  }
});

const emails = [
  {
    id: 1,
    name: "TAKSHILA INSTITUTE",
    to: ["contact@takshilainstitute.in"],
    subject: "A small observation about Takshila Institute's course selection friction",
    text: `Hi N.K. Gupta / Team,

I was reviewing Takshila Institute's website and noticed something that may be overwhelming parents during admission season.

You offer 18+ course variants — JEE/NEET × Crash/Yearlong × Online/Offline × BRAMASTRA/SARTHI/CHAMPION/SAHAS/YODDHA — but a Class 11 parent in Rohini targeting NEET 2026 has to mentally cross-reference: "Which NEET yearlong course is for Class 11? BRAMASTRA or SARTHI? What's the fee difference between Online and Offline? When's the next Rohini batch?" They end up calling 9310378303 or emailing contact@ with the same questions your counselors answer daily. Your TNTSE scholarship exam is a strong acquisition tool, but there's no "Check my scholarship eligibility" calculator — students register blind. And with 25 centers across 10 states, a parent in Jaipur asking "Who teaches Physics at your Jaipur center?" gets a generic reply instead of center-specific info.

Many coaching institutes face this: course complexity + multi-center scale = repetitive counseling load.

One possible improvement could be a WhatsApp course matchmaker that asks 3–4 questions (class, target exam, location preference, budget) → instantly recommends the right course with fee, batch timing, and faculty profile → checks TNTSE eligibility → books a counseling slot if needed. This could reduce counseling call duration from 20 minutes to 2 minutes while capturing qualified leads 24/7.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 2,
    name: "JAIN ONCOR (JAIN ESTATES)",
    to: ["info@jainoncor.com"],
    subject: "A small observation about Jain Oncor's property inquiry flow",
    text: `Hi Amit / Ashish,

I was reviewing Jain Oncor's website and noticed something that may be delaying high-value corporate inquiries.

You showcase 600+ properties across Delhi NCR — from Grade A office towers in Udyog Vihar to independent buildings in Noida to farmhouses in Gurugram — but a corporate real estate head evaluating space for a 500-seat capability center who lands on your "New Launches" section at 11 PM cannot instantly filter by "Grade A, Gurugram, 50,000+ sqft, under ₹100/sqft" and receive a curated shortlist with virtual tour links. They must click "REQUEST A CALL" and wait for a callback. Your client roster (HDFC, Samsung, Pfizer, Tata, etc.) indicates you handle sophisticated corporate requirements, yet the digital front door treats a ₹50Cr office lease inquiry the same as a residential rental query.

Many established agencies face this: high-ticket leads get stuck in the same queue as general inquiries.

One possible improvement could be a WhatsApp property concierge that qualifies corporate requirements in 3–4 questions, instantly serves matching listings with brochures and virtual tours, and auto-routes qualified office/industrial leads directly to your calendar for site visits — while handling residential/warehouse inquiries through your team.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 3,
    name: "BANOX EXIM PVT LTD",
    to: ["kanwal@banox.in"],
    cc: ["rabani@banox.in", "preeti@banox.in", "natalia@banox.in"],
    subject: "A small observation about Banox's concept-to-production journey",
    text: `Hi Kanwal / Rabani,

I was reviewing Banox's website and noticed something that may be slowing down private label inquiries.

Your "CONCEPT TO PRODUCTION" page outlines a comprehensive journey — design support, material sourcing, prototyping, testing, production — but a brand manager exploring a new handbag concept at midnight in Milan or New York has to email you directly to ask: "What vegan leather options do you have under $X?" "What's the MOQ for a first run?" "Can I see your color-matching lab capabilities?" Both kanwal@banox.in and rabani@banox.in end up fielding these repetitive questions, while Natalia (Sustainability) and Preeti (Merchandising) have the answers ready.

Many handbag manufacturers face this: high-value inquiries get stuck in director inboxes.

One possible improvement could be a WhatsApp-based AI material assistant that lets buyers browse your digital swatch library, get instant MOQ/lead-time estimates for their concept, and auto-routes sustainability documentation requests to Natalia — while only escalating qualified sampling-ready projects to you and Rabani.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 4,
    name: "DR. SONI'S DENTAL CLINIC",
    to: ["advancedentallajpat@gmail.com"],
    subject: "A small observation about Dr. Soni's Dental Clinic's patient journey",
    text: `Hi Dr. Vishal / Team,

I was reviewing Dr. Soni's Dental Clinic's website and noticed something that may be costing late-night patient inquiries.

You've built an impressive content library — 7 service pages, blogs comparing Invisalign vs braces and implants vs dentures, transformation galleries, and Instagram reels on same-day implants and wedding smile makeovers. But a parent at 11 PM with a child's dental emergency clicks your WhatsApp link and lands on a personal number with no triage logic, no "Is this urgent?" assessment, and no instant access to tomorrow's 8:30 AM emergency slot. Your "Book Appointment" button leads to a form, but WhatsApp — where your patients actually communicate — has zero automation.

Many established clinics face this: great content exists, but the conversation channel is manual.

One possible improvement could be a WhatsApp patient assistant trained on your own blog content that answers "How painful is a root canal really?" and "Invisalign vs braces for my teenager?" instantly, triages emergencies to the on-call number, and books confirmed appointments with the right specialist (orthodontist for braces, pediatric for kids) — all in the same chat.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 5,
    name: "POOJA INTERNATIONAL",
    to: ["hr@poojaintl.com"],
    subject: "A small observation about Pooja International's buyer journey",
    text: `Hi there,

I was reviewing Pooja International's website and noticed something that may be costing potential export inquiries.

A buyer exploring your "Departments" section — whether they're evaluating Design Development capabilities, your 60-day lead time commitment, or Lean Manufacturing processes — has to submit a "Product Enquiry" form just to receive basic information like MOQs, fabric specifications, or your GOTS/Sedex/Disney FAMA certificates. For international buyers in the UK, EU, or US evaluating suppliers outside IST business hours, that 12–24 hour wait for a PDF attachment often means they've already shortlisted a competitor who responded instantly.

Many garment exporters face this exact challenge: catalog friction after hours.

One possible improvement could be a WhatsApp-based AI product assistant that serves spec sheets, compliance certificates, and preliminary quotations 24/7 — while routing high-value brand inquiries directly to your merchandising team. This could reduce response delays while ensuring visitors receive information immediately.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 6,
    name: "COUNTY GROUP",
    to: ["info@countygroup.in"],
    subject: "A small observation about County Group's buyer experience",
    text: `Hi there,

I was reviewing County Group's website and noticed something that may be creating friction for homebuyers and channel partners.

A buyer comparing 3BHK options across your Noida projects — say County Court Yard and another ongoing launch — has to navigate separate project pages and submit separate inquiries to get floor plans, price lists, and RERA details. Your channel partners face a similar gap: the "Channel Partner Integration" page links to a static PDF instead of giving them a way to register leads, check status, or download updated marketing collateral on the go. And the contact page currently returns a 404, so even motivated visitors hit a dead end.

Many developers with multi-city portfolios face this: fragmented project inquiries and partner tools that don't get used.

One possible improvement could be a WhatsApp-based project concierge that lets buyers compare specifications side-by-side across projects, calculate payment plans instantly, and book site visits — while giving channel partners a simple bot to register leads and access the latest brochures without digging through PDFs.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  },
  {
    id: 7,
    name: "THE IMPERIAL NEW DELHI",
    to: ["sales@theimperialindia.com"],
    cc: ["reservation@theimperialindia.com", "fboffice@theimperialindia.com", "luxury@theimperialindia.com"],
    subject: "A small observation about The Imperial's guest inquiry flow",
    text: `Hi there,

I was reviewing The Imperial's website and noticed something that may be delaying high-value event and wedding inquiries.

A wedding planner in Dubai or a corporate EA in London evaluating your Regal Exclusivity spaces for a 200-person gala at 2 AM their time cannot instantly check capacity, package pricing, or Spice Route buyout options — they must email sales@ or luxury@ and wait for a response. Your FAQ section covers basics well, but specific requests (dietary menus, hybrid meeting setups, experience customizations) still route to department emails that may not be monitored after hours. For a heritage hotel where the majority of guests are international and WhatsApp is their primary communication channel, the absence of a WhatsApp concierge means inquiries sit idle until the next business day.

Many luxury hotels face this: high-ticket event leads cooling while waiting for an email reply.

One possible improvement could be a WhatsApp guest concierge that qualifies event/wedding requirements in a few questions, serves package brochures and capacity charts instantly, and books site visits directly into your sales calendar — while handling routine pre-arrival requests (airport transfers, visa letters, dining reservations) automatically.

I thought this observation might be useful to your team.

Regards,
Yogesh Wadhwa
Founder, Rison AI Tech`
  }
];

async function sendAll() {
  console.log(`Starting to send ${emails.length} outreach emails via Gmail SMTP (${gmailUser})...`);
  for (const email of emails) {
    try {
      console.log(`Sending email ${email.id} to ${email.to.join(', ')}...`);
      const mailOptions = {
        from: `"Yogesh Wadhwa Founder" <${gmailUser}>`,
        to: email.to.join(', '),
        subject: email.subject,
        text: email.text
      };
      if (email.cc) {
        mailOptions.cc = email.cc.join(', ');
      }
      const info = await transporter.sendMail(mailOptions);
      console.log(`Successfully sent email ${email.id} (${email.name})! Message ID: ${info.messageId}`);
    } catch (error) {
      console.error(`Failed to send email ${email.id} (${email.name}):`, error);
    }
    // Delay 1.5 seconds to prevent Google SMTP spam filters / rate limits
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  console.log("Finished sending process.");
}

sendAll();
