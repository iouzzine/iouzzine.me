# iouzzine.me

Personal portfolio of **Ismail Ouzzine** — Full Stack Developer & Solution Architect based in Casablanca, Morocco.

[![Live](https://img.shields.io/badge/live-iouzzine.me-blue?style=flat-square)](https://iouzzine.me)

## Tech Stack

| Layer      | Tech                                       |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router, Server Components) |
| Language   | TypeScript                                 |
| Styling    | Tailwind CSS v4                            |
| Animations | Framer Motion                              |
| Forms      | React Hook Form + Zod                      |
| Email      | Resend                                     |
| UI         | Radix UI / shadcn                          |
| SEO        | Dynamic OG image, JSON-LD, Sitemap         |
| Analytics  | Vercel Speed Insights                      |

## Getting Started

**Prerequisites:** Node.js 20+ and pnpm

```bash
# 1. Clone the repo
git clone https://github.com/iouzzine/iouzzine.me.git
cd iouzzine.me

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
```

Fill in your `.env`:

| Variable            | Description                                             | Required |
| ------------------- | ------------------------------------------------------- | -------- |
| `RESEND_API_KEY`    | API key from [resend.com](https://resend.com)           | Yes      |
| `CONTACT_EMAIL`     | Email that receives form submissions                    | Yes      |
| `RESEND_FROM_EMAIL` | Custom sender address (needs domain verified in Resend) | No       |

```bash
# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx          # Root layout, metadata, JSON-LD
├── page.tsx            # Main page composing all sections
├── sitemap.ts          # Dynamic sitemap generation
├── api/contact/        # Contact form API (rate-limited)
components/
├── sections/           # Hero, About, Projects, Experience, Skills, Contact
├── layout/             # Navbar, Footer
├── ui/                 # Reusable UI primitives
data.json               # All portfolio content (projects, experience, skills)
types/                  # TypeScript interfaces
```

## License

MIT — feel free to use this as a starting point for your own portfolio. A credit or link back is appreciated.
