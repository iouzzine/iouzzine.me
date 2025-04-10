# Portfolio

A modern personal portfolio website built with Next.js 15, React 19, and TailwindCSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations using Framer Motion
- **Sections**:
  - About: Personal introduction
  - Skills: Technical capabilities showcase
  - Projects: Portfolio of work
  - Experience: Professional background
  - Contact: Form for reaching out

## Technologies

- **Frontend**: Next.js 15.3.0, React 19, TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Processing**: Resend for contact form email delivery
- **Performance**: Vercel Speed Insights

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    components/
      about.tsx       # About section
      contact.tsx     # Contact form section
      experience.tsx  # Professional experience section
      header.tsx      # Page header
      projects.tsx    # Projects showcase
      skills.tsx      # Skills display
    api/
      send/           # API route for contact form
    page.tsx          # Main page component
```

## Deployment

This portfolio is designed to be deployed on Vercel for optimal performance with Next.js.

## Development

This project uses ESLint and Prettier for code quality and formatting. Run `npm run lint` to check for issues.
