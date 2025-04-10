import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.RESEND_FROM_EMAIL || 'noreply@example.com';
const to = process.env.RESEND_TO_EMAIL || 'default@example.com';

const htmlTemplate = (name: string, email: string, message: string) => `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, '<br>')}</p>
`;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: from,
      to: to,
      subject: `New Portfolio Contact Form Submission from ${name}`,
      html: htmlTemplate(name, email, message),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
