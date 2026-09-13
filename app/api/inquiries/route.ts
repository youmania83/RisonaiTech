import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message, type = "proposal" } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, message" },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const toAddress = process.env.RESEND_TO_EMAIL || "hello@risonaitech.com";

    const subject = type === "consultation" 
      ? `📅 AI Browsing Agent: Consultation Booked (${name})`
      : `💼 AI Browsing Agent: Proposal Request (${name})`;

    const htmlContent = `
      <h2>New Agentic WebMCP Submission</h2>
      <p><strong>Submission Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message / Project Description:</strong></p>
      <blockquote style="background: #f1f5f9; padding: 12px; border-left: 4px solid #635bff;">
        ${message.replace(/\\n/g, "<br/>")}
      </blockquote>
      <p>Sent at: ${new Date().toISOString()}</p>
    `;

    // Send email if SMTP is configured
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"RisonAI WebMCP Agent" <${gmailUser}>`,
        to: toAddress,
        subject,
        html: htmlContent,
      });
    } else {
      console.log("SMTP environment variables missing. Logging inquiry:", {
        type,
        name,
        phone,
        message,
      });
    }

    return NextResponse.json({ success: true, message: "Inquiry received successfully." });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Failed to process inquiry: " + errorMsg },
      { status: 500 }
    );
  }
}
