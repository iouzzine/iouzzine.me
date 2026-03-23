import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;
const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS;
};

export const POST = async (request: Request) => {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, message, website } = body as {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  // Honeypot: bots fill hidden fields, real users don't
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (name.length > 100) {
    return NextResponse.json({ error: 'Name is too long' }, { status: 400 });
  }

  if (email.length > 254) {
    return NextResponse.json({ error: 'Email is too long' }, { status: 400 });
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: 'Message must be between 10 and 5000 characters' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_EMAIL ?? 'contact@iouzzine.me';

  const { error } = await resend.emails.send({
    from: fromAddress,
    to,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
};
