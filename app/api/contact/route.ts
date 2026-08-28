import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be under 1000 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL;

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: `New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #4F46E5; padding-bottom: 8px;">
            New Contact Form Message
          </h2>
          <p style="color: #64748b; font-size: 14px;">
            Received from your portfolio website
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #1a1a2e;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email</td>
              <td style="padding: 8px 0; color: #1a1a2e;">
                <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="background: #f8fafc; border-left: 4px solid #4F46E5; padding: 16px; margin: 16px 0; border-radius: 4px;">
            <p style="color: #1a1a2e; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">
            This message was sent via the contact form on your portfolio.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
