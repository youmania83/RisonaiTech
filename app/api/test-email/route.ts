import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function GET() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json(
      { error: 'GMAIL_USER or GMAIL_APP_PASSWORD missing', gmailUser: !!gmailUser, gmailPass: !!gmailPass },
      { status: 500 }
    );
  }

  const toAddress = process.env.RESEND_TO_EMAIL || 'hello@risonaitech.com';

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"RisonAI Chatbot" <${gmailUser}>`,
      to: toAddress,
      subject: '✅ Test email from RisonAI chatbot (Gmail)',
      html: '<p>If you received this, Gmail SMTP is working correctly.</p><p>Sent at: ' + new Date().toISOString() + '</p>',
    });

    return NextResponse.json({ success: true, from: gmailUser, to: toAddress });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || String(err) },
      { status: 500 }
    );
  }
}
