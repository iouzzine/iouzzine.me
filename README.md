# iouzzine.me

Personal portfolio for Ismail Ouzzine — Full Stack Developer based in Casablanca.

Built with Next.js 16, Framer Motion, and Resend. Self-hosted on a homelab via Docker.

## Stack

- **Framework** — Next.js 16 (App Router, React 19)
- **Animations** — Framer Motion 12
- **Email** — Resend (contact form API route)
- **Fonts** — Space Grotesk + JetBrains Mono via `next/font/google`
- **Deployment** — Docker + Docker Compose

## Project structure

```
app/
  layout.tsx          # Root layout — fonts, metadata
  page.tsx            # Entry point
  api/contact/        # Email API route (Resend, rate limiting, honeypot)
  globals.css         # CSS variables, animations, global styles
components/
  Portfolio.tsx       # Root client component — section tracking, tweaks
  Cursor.tsx          # Custom cursor (vanilla rAF loop)
  Nav.tsx             # Fixed nav + mobile drawer (AnimatePresence)
  Hero.tsx            # Typewriter + terminal animation
  About.tsx           # Principles grid
  Projects.tsx        # Expandable mission cards (AnimatePresence)
  Skills.tsx          # Code-block style import layout
  Experience.tsx      # Timeline with bullet details
  Contact.tsx         # Form → /api/contact + social links
  TweaksPanel.tsx     # Design-tool color/scale controls
lib/
  motion.ts           # Shared Framer Motion variants
data.ts               # Single source of truth for all content
```

## Local development

```bash
cp .env.example .env.local
# fill in RESEND_API_KEY
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Sender address (must be a verified Resend domain) |
| `CONTACT_EMAIL` | Where contact form submissions are delivered |

## Self-hosting with Docker

```bash
cp .env.example .env
# fill in your values
docker compose up -d
```

The app runs on port `3333` by default (mapped to internal `3000`). Change the port mapping in `docker-compose.yml` if needed.

## Updating content

All text, projects, experience, and skills live in **`data.ts`** — one file, no CMS. Edit it and redeploy.

## Contact form

`POST /api/contact` — validates input, applies per-IP rate limiting (3 req/min), strips honeypot submissions, then sends via Resend. Returns `{ success: true }` or `{ error: string }`.
