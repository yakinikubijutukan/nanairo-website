import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  company?: string;
  country?: string;
  category?: string;
  email?: string;
  message?: string;
  /** Which of the four site locales the inquiry was submitted from. */
  locale?: string;
};

/**
 * Contact form submission endpoint — sends a notification email via Resend
 * (https://resend.com) for every inquiry. Configuration comes entirely from
 * environment variables (see .env.example), nothing is hardcoded except the
 * fallback recipient, which matches the address already used site-wide in
 * Footer.tsx / mailto links.
 *
 *   RESEND_API_KEY          required — from the Resend dashboard.
 *   CONTACT_RECIPIENT_EMAIL optional — where inquiries are delivered.
 *   CONTACT_FROM_EMAIL      optional — must be on a domain verified in
 *                            Resend once you move off the sandbox sender.
 */

const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "info@nanairo-llc.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Nanairo Website <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, country, category, email, message, locale } = payload;

  if (!name || !company || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly in the server log rather than silently pretending the
    // email was sent — see .env.example / README for setup.
    console.error(
      "[contact] RESEND_API_KEY is not set. Inquiry received but NOT emailed:",
      payload
    );
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #0B0B0C;">
      <h2 style="margin: 0 0 16px;">New Japan market inquiry — Nanairo website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Country:</strong> ${escapeHtml(country || "—")}</p>
      <p><strong>Product category:</strong> ${escapeHtml(category || "—")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Submitted from locale:</strong> ${escapeHtml(locale || "—")}</p>
      <p style="margin-top: 24px;"><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New Japan market inquiry from ${company}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend returned an error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Unexpected error sending via Resend:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
