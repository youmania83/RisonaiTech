import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

// Simple in-memory rate limiting map for the edge isolate
const ipRateLimitMap = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 10; // Max 10 messages per minute per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

const systemPrompt = `You are a helpful customer support and lead generation agent for RisonAI Tech.
Keep all answers EXTREMELY crisp, short, and to the point. No long paragraphs.

IMPORTANT END GOAL: At the end of answering their query, ALWAYS politely ask the user to share their contact details (Name, Email, and Phone number) so the sales team can call them back to discuss further. When asking for these details, you MUST reassure them by adding a friendly note like "We promise we won't spam you."

CRITICAL CONTACT VALIDATION RULES:
1. If the user provides an email, verify it looks like a valid email address (must contain "@" and a proper domain). Reject fake emails like "jj#gmail.com" or "test@test".
2. If the user provides a phone number, verify it looks like a real mobile number. Reject obvious fake numbers like "0000000000", "1234567890", or "9999999999".
3. If the provided contact details look fake or invalid, politely inform the user that the details appear incorrect and ask them to provide a valid email and phone number.
4. Only when the user provides VALID looking contact details should you thank them and confirm that the team has received their details.

Company Info:
- Services: AI Automation (from ₹30k), Chatbot Development (from ₹20k), WhatsApp Automation, CRM Development, SaaS Development.
- Location: Panipat, Haryana. Serving Delhi NCR and globally.
- Founder: Yogesh Kumar Wadhwa
`;

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

    const cleanMessages = messages.map((m: any) => ({
      role: m.role,
      content: m.content,
    }));

    // Auto-detect if the user just provided contact info to trigger an email
    const lastUserMessage = cleanMessages.filter((m: any) => m.role === 'user').pop();
    if (lastUserMessage) {
      const text = lastUserMessage.content;
      // Basic validation to prevent sending emails for obvious fake inputs
      const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const hasEmail = emailMatch && !text.includes('test@');
      
      const cleanPhone = text.replace(/[\s-()]/g, '');
      const hasPhone = /\+?\d{8,15}/.test(cleanPhone) && !/0{8,}|12345678|9{8,}/.test(cleanPhone);
      
      if (hasEmail || hasPhone) {
        console.log('Detected contact info in message. Sending email to hello@risonaitech.com...');
        // Format the entire chat history for context
        const chatHistory = cleanMessages.map((m: any) => `${m.role.toUpperCase()}: ${m.content}`).join('\n\n');
        
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
          const resend = new Resend(resendApiKey);
          try {
            await resend.emails.send({
              from: 'RisonAI Chatbot <onboarding@resend.dev>',
              to: 'hello@risonaitech.com',
              subject: 'New Lead Captured from Chatbot',
              text: `The user provided contact information in the chatbot.\n\nUser Input: ${text}\n\nFull Conversation:\n${chatHistory}`,
            });
            console.log('Successfully sent lead to email.');
          } catch (err) {
            console.error('Error sending email via Resend:', err);
          }
        } else {
          console.error('RESEND_API_KEY is missing! Could not send lead to email.');
        }
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
