import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface MailData {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const createMessage = (data: MailData) => {
  return `
    <p>Hello,</p>
    <p>You have received a new message from your contact form.</p>
    <p><strong>Name:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}<br>
    <strong>Subject:</strong> ${data.subject}<br>
    <strong>Message:</strong> ${data.message}</p>
    <p>Best regards,<br>Your Website Team</p>
  `.trim();
};

export async function POST(req: Request) {
  try {
    const { name, email, message, subject } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: createMessage({ name, email, subject, message }),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
