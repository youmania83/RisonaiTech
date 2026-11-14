import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Simple in-memory rate limiting map for form submissions
const ipRateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 6; // Max 6 submissions per minute per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    // 1. IP rate limit check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    const now = Date.now();
    const rateData = ipRateLimitMap.get(ip);

    if (rateData) {
      if (now < rateData.resetTime) {
        if (rateData.count >= RATE_LIMIT_MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Too many submission attempts. Please wait a minute and retry." },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        ipRateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      ipRateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    const body = await req.json();
    const {
      name,
      phone,
      email,
      message,
      type = "proposal",
      consentGiven = true,
      marketingConsent = false,
      consentTimestamp = new Date().toISOString(),
    } = body;

    // 2. Validate required fields (require name, message, and either phone or email)
    const hasContactChannel =
      (phone && typeof phone === "string" && phone.trim().length > 0) ||
      (email && typeof email === "string" && email.trim().length > 0);

    if (!name || typeof name !== "string" || !hasContactChannel || !message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing required fields: name, message, and either phone or email." },
        { status: 400 }
      );
    }

    // 3. Length checks & sanitization
    const cleanName = escapeHtml(name.trim().slice(0, 100));
    const cleanPhone = phone && typeof phone === "string" ? escapeHtml(phone.trim().slice(0, 30)) : "";
    const cleanEmail = email && typeof email === "string" ? escapeHtml(email.trim().slice(0, 100)) : "";
    const cleanMessage = escapeHtml(message.trim().slice(0, 4000));
    const cleanType = escapeHtml(String(type).trim().slice(0, 50));

    if (!cleanName || !cleanMessage) {
      return NextResponse.json(
        { error: "Invalid submission content." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const toAddress = process.env.RESEND_TO_EMAIL || "hello@risonaitech.com";

    let subject = `💼 Enterprise AI Proposal Request: ${cleanName}`;
    if (cleanType === "consultation") {
      subject = `📅 AI Video Consultation Request: ${cleanName}`;
    } else if (cleanType === "audit_report") {
      subject = `🔍 AI Search Audit Review Request: ${cleanName}`;
    }

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-top: 0; font-size: 20px;">New Inbound Lead Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px;">Submission Type:</td>
            <td style="padding: 8px 0; font-weight: 600;">${cleanType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Name:</td>
            <td style="padding: 8px 0; font-weight: 600;">${cleanName}</td>
          </tr>
          ${cleanEmail ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Email:</td>
            <td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
          </tr>` : ""}
          ${cleanPhone ? `
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Phone:</td>
            <td style="padding: 8px 0; font-weight: 600;"><a href="tel:${cleanPhone}">${cleanPhone}</a></td>
          </tr>` : ""}
        </table>

        <div style="margin-bottom: 20px;">
          <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #475569;">Project / Audit Details:</p>
          <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 12px 16px; font-size: 14px; line-height: 1.6; border-radius: 0 8px 8px 0;">
            ${cleanMessage.replace(/\n/g, "<br/>")}
          </div>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 11px; color: #64748b; line-height: 1.5;">
          <p style="margin: 0;"><strong>DPDP Act 2023 Consent Audit Trail:</strong></p>
          <p style="margin: 2px 0 0 0;">
            • Processing Consent: ${consentGiven ? "Granted" : "Not recorded"}<br/>
            • Marketing Consent: ${marketingConsent ? "Granted" : "Not requested / Declined"}<br/>
            • Consent Timestamp: ${escapeHtml(String(consentTimestamp))}<br/>
            • Source IP: ${escapeHtml(ip)}
          </p>
        </div>
      </div>
    `;

    // 4. Dispatch notification via SMTP
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"RisonAI Lead Desk" <${gmailUser}>`,
        to: toAddress,
        subject,
        html: htmlContent,
      });
    } else {
      console.log("SMTP credentials missing. Logging inquiry:", {
        type: cleanType,
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
        consentGiven,
        marketingConsent,
        consentTimestamp,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received and consent recorded.",
    });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Failed to process inquiry: " + errorMsg },
      { status: 500 }
    );
  }
}
