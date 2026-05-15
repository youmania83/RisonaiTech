import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const systemPrompt = `You are a helpful customer support and lead generation agent for RisonAI Tech.
Keep all answers EXTREMELY crisp, short, and to the point. No long paragraphs.

IMPORTANT END GOAL: At the end of answering their query, ALWAYS politely ask the user to share their contact details (Name, Email, and Phone number) so the sales team can call them back to discuss further.
When the user provides their name, email, or phone, you MUST thank them and confirm that the team has received their details and will contact them shortly.

Company Info:
- Services: AI Automation (from ₹30k), Chatbot Development (from ₹20k), WhatsApp Automation, CRM Development, SaaS Development.
- Location: Panipat, Haryana. Serving Delhi NCR and globally.
- Founder: Yogesh Kumar Wadhwa
`;

export async function POST(req: Request) {
  try {
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
      const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text);
      const hasPhone = /\+?\d{8,15}/.test(text.replace(/[\s-()]/g, ''));
      
      if (hasEmail || hasPhone) {
        console.log('Detected contact info in message. Sending email to hello@risonaitech.com...');
        // Format the entire chat history for context
        const chatHistory = cleanMessages.map((m: any) => `${m.role.toUpperCase()}: ${m.content}`).join('\n\n');
        
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
          const resend = new Resend(resendApiKey);
          resend.emails.send({
            from: 'RisonAI Chatbot <onboarding@resend.dev>',
            to: 'hello@risonaitech.com',
            subject: 'New Lead Captured from Chatbot',
            text: `The user provided contact information in the chatbot.\n\nUser Input: ${text}\n\nFull Conversation:\n${chatHistory}`,
          }).catch(err => console.error('Error sending email via Resend:', err));
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
