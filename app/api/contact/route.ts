import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient =
      process.env.CONTACT_TO_EMAIL ?? "ravinduuswaththa@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ??
      "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: "Email service is not configured. Set RESEND_API_KEY.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`,
    });

    if (error) {
        console.error("Error sending contact email:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
