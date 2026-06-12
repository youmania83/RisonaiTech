import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Note: Using Node.js runtime so nodemailer (SMTP) works reliably
export const runtime = 'nodejs';

// Simple in-memory rate limiting map
const ipRateLimitMap = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 10; // Max 10 messages per minute per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

// In-memory dedup for sent leads in this edge isolate.
// Prevents the same email being sent multiple times when the user
// keeps chatting after providing contact info.
const sentLeadHashes = new Set<string>();

const systemPrompt = `You are a helpful customer support and lead generation agent for RisonAI Tech.
Keep all answers EXTREMELY crisp, short, and to the point. No long paragraphs.

CRITICAL SCOPE & MISUSE PROTECTION RULES:
1. You MUST ONLY talk about RisonAI Tech, its services, location, founder, pricing, and collecting lead details.
2. Under no circumstances should you write, debug, explain, or generate any code (e.g., Python, JavaScript, HTML, etc.), scripts, templates, or do general programming/academic tasks.
3. If the user asks an irrelevant question (e.g., general knowledge, coding, writing code/scripts, mathematical queries, writing recipes, personal/political topics, or unrelated businesses), you MUST politely deny the request and redirect them to RisonAI Tech.
   - Example denial: "I can only help with questions regarding RisonAI Tech and our AI services. How can I assist you with our business offerings today?"

IMPORTANT END GOAL: After answering the user's query, ask for their contact details IN ONE SINGLE MESSAGE — not one field at a time. Use a natural, friendly tone like:
"To have our team reach out, could you quickly share: your name, email, phone number, and country? (We won't spam you, promise! 🙂)"

Do NOT ask for each field separately. Collect all four in one go so the user isn't annoyed by repeated questions.

PLACEHOLDER HINTS FOR THE UI:
After you send that combined ask, the last field you mention should be "country" — keep it in that order (name → email → phone → country) so the UI can show the right placeholder.

CRITICAL CONTACT VALIDATION RULES:
1. If the user provides an email, verify it contains "@" and a proper domain. Reject fakes like "jj#gmail.com" or "test@test".
2. If the user provides a phone number, verify it looks real. Reject obvious fakes like "0000000000", "1234567890", "9999999999".
3. If details look fake, politely ask for valid ones — once, not repeatedly.
4. Once you have valid Name + Email + Phone + Country, thank them warmly and confirm the team will be in touch soon.

SMART BEHAVIOUR:
- If the user has already shared some fields (e.g. email in their message), do NOT ask for those again. Only ask for the missing ones.
- Keep the whole conversation under 5 exchanges. Be warm, helpful, and concise.

Company Info:
- Services: AI Automation (from ₹30k), Chatbot Development (from ₹20k), WhatsApp Automation, CRM Development, AI Agent Development.
- Location: Panipat, Haryana. Serving Delhi NCR and globally.
- Founder: Yogesh Kumar Wadhwa
`;

// ---- Helpers ---------------------------------------------------------------

type ChatMsg = { role: 'user' | 'assistant' | 'system'; content: string };

function extractEmail(text: string): string | null {
  const m = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (!m) return null;
  const email = m[0];
  // Reject obvious dummies; the previous `^.@` rule also rejected legitimate
  // single-char local parts so we drop it.
  if (/^(test|fake|asdf|abc|noreply|no-reply)@/i.test(email)) return null;
  if (/@(example\.com|test\.com|mailinator\.com)$/i.test(email)) return null;
  return email;
}

function extractPhone(text: string): string | null {
  // Look for a sequence of digits (optionally with + - space ()) that's
  // 8-15 digits long total.
  const cleaned = text.replace(/[^\d+]/g, ' ').match(/\+?\d[\d\s-]{7,18}\d/);
  if (!cleaned) return null;
  const digits = cleaned[0].replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) return null;
  if (/^(\d)\1{7,}$/.test(digits)) return null; // 00000000, 99999999, etc.
  if (/^12345678|^87654321/.test(digits)) return null;
  return cleaned[0].trim();
}

// Light country detection: known names + common ISO codes + UAE/UK aliases.
const COUNTRY_LIST = [
  'india', 'usa', 'united states', 'us', 'america', 'uae', 'united arab emirates', 'dubai',
  'uk', 'united kingdom', 'england', 'britain', 'canada', 'australia', 'singapore',
  'malaysia', 'indonesia', 'bali', 'philippines', 'germany', 'france', 'spain', 'italy',
  'netherlands', 'sweden', 'norway', 'denmark', 'switzerland', 'ireland', 'new zealand',
  'south africa', 'nigeria', 'kenya', 'egypt', 'saudi arabia', 'qatar', 'kuwait', 'oman',
  'bahrain', 'pakistan', 'bangladesh', 'sri lanka', 'nepal', 'china', 'japan', 'korea',
  'south korea', 'thailand', 'vietnam', 'mexico', 'brazil', 'argentina', 'chile',
];
function extractCountry(text: string): string | null {
  const lower = text.toLowerCase();
  for (const c of COUNTRY_LIST) {
    // Match whole-word boundary
    const re = new RegExp(`(^|[^a-z])${c.replace(/\s+/g, '\\s+')}([^a-z]|$)`, 'i');
    if (re.test(lower)) {
      return c.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    }
  }
  return null;
}

// A name is the trickiest to extract. Heuristic: if the user's message is
// short (≤ 6 words), contains no @, no digits, and the previous assistant
// message was asking for a name, treat the whole message as the name.
function extractName(messages: ChatMsg[]): string | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m.role !== 'user') continue;
    const text = m.content.trim();
    if (!text || text.length > 80) continue;
    if (/@|\d{4,}/.test(text)) continue;
    const wordCount = text.split(/\s+/).length;
    if (wordCount > 6) continue;
    const prevAssistant = messages.slice(0, i).reverse().find(x => x.role === 'assistant');
    if (prevAssistant && /name/i.test(prevAssistant.content)) {
      // Strip common prefixes ("my name is X", "I'm X", "this is X")
      const cleaned = text
        .replace(/^(my name is|i am|i'm|this is|name[:\-]\s*)/i, '')
        .replace(/[.!]+$/, '')
        .trim();
      if (cleaned.length > 0 && cleaned.length < 80) return cleaned;
    }
  }
  return null;
}

function gatherLead(messages: ChatMsg[]) {
  const allText = messages.filter(m => m.role === 'user').map(m => m.content).join('\n');
  return {
    name: extractName(messages),
    email: extractEmail(allText),
    phone: extractPhone(allText),
    country: extractCountry(allText),
  };
}

// ---- POST handler ----------------------------------------------------------

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Apply Rate Limiting
    if (ip !== 'unknown') {
      const now = Date.now();
      const ipData = ipRateLimitMap.get(ip);

      if (!ipData || now > ipData.resetTime) {
        // First request or window expired
        ipRateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else {
        ipData.count += 1;
        if (ipData.count > RATE_LIMIT_MAX_REQUESTS) {
          return new Response("⚠️ You are sending messages too quickly. Please wait a moment and try again.", {
            status: 429,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          });
        }
      }

      // Cleanup old entries occasionally to prevent memory leaks in edge isolates
      if (Math.random() < 0.1) {
        for (const [key, value] of ipRateLimitMap.entries()) {
          if (now > value.resetTime) ipRateLimitMap.delete(key);
        }
      }
    }

    const { messages } = await req.json();

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing DEEPSEEK_API_KEY' }, { status: 500 });
    }

    const cleanMessages: ChatMsg[] = messages.map((m: any) => ({
      role: m.role,
      content: m.content,
    }));

    // ---- Lead capture (runs across the FULL conversation, not just last msg)
    const lead = gatherLead(cleanMessages);
    const hasEmail = !!lead.email;
    const hasPhone = !!lead.phone;

    // Send when we have at least an email OR a phone. Dedup by a stable hash
    // of (email + phone) so we never spam the inbox if the user keeps chatting.
    if (hasEmail || hasPhone) {
      const leadKey = `${lead.email || ''}|${lead.phone || ''}`;
      if (!sentLeadHashes.has(leadKey)) {
        sentLeadHashes.add(leadKey);

        const chatHistory = cleanMessages
          .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
          .join('\n\n');

        const gmailUser = process.env.GMAIL_USER;
        const gmailPass = process.env.GMAIL_APP_PASSWORD;

        console.log('[lead-capture] candidate detected', {
          hasEmail, hasPhone,
          email: lead.email, phone: lead.phone,
          name: lead.name, country: lead.country,
          gmailConfigured: !!(gmailUser && gmailPass),
          ip,
        });

        if (gmailUser && gmailPass) {
          const toAddress = process.env.RESEND_TO_EMAIL || 'hello@risonaitech.com';

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: gmailUser, pass: gmailPass },
          });

          const mailOptions = {
            from: `"RisonAI Chatbot" <${gmailUser}>`,
            to: toAddress,
            replyTo: lead.email || undefined,
            subject: `🔔 New Lead: ${lead.name || lead.email || lead.phone || 'unknown'}`,
            html: `<h2>New lead captured via chatbot</h2>
<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">Name</td><td style="padding:6px 12px">${lead.name || '<i>not provided</i>'}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">Email</td><td style="padding:6px 12px">${lead.email || '<i>not provided</i>'}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">Phone</td><td style="padding:6px 12px">${lead.phone || '<i>not provided</i>'}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">Country</td><td style="padding:6px 12px">${lead.country || '<i>not provided</i>'}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">IP</td><td style="padding:6px 12px">${ip}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f4f4f4">Captured at</td><td style="padding:6px 12px">${new Date().toISOString()}</td></tr>
</table>
<hr />
<h3>Full Conversation</h3>
<pre style="background:#f4f4f4;padding:12px;border-radius:6px;white-space:pre-wrap;font-family:Menlo,monospace;font-size:13px">${chatHistory.replace(/</g, '&lt;')}</pre>`,
          };

          // Fire in parallel with the stream — function stays alive during streaming
          transporter.sendMail(mailOptions)
            .then(() => console.log('[lead-capture] gmail OK'))
            .catch((err) => {
              console.error('[lead-capture] gmail EXCEPTION', err);
              sentLeadHashes.delete(leadKey); // allow retry
            });
        } else {
          console.error('[lead-capture] GMAIL_USER or GMAIL_APP_PASSWORD missing');
          sentLeadHashes.delete(leadKey);
        }
      } else {
        console.log('[lead-capture] dedup hit, already sent for', leadKey);
      }
    }

    const result = streamText({
      model: deepseek('deepseek-chat'),
      system: systemPrompt,
      messages: cleanMessages,
      temperature: 0.3,
      maxOutputTokens: 1000,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
