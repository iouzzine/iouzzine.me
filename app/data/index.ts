export const personal = {
  name: "Ismail Ouzzine",
  handle: "iouzzine",
  logo: "io",
  title: "Full Stack Developer",
  email: "contact@iouzzine.me",
  location: "Casablanca, Morocco",
  github: "https://github.com/iouzzine",
  linkedin: "https://www.linkedin.com/in/ismailouzz/",
  resume: "https://resume.iouzzine.me/resume.pdf",
  calendly: "https://calendly.com/iouzzine/let-s-talk",
};

export const hero = {
  headline: "I build things that matter at scale.",
  highlightWord: "matter",
  tagline: `${personal.name} — Full Stack`,
  typewriterWords: ["developer", "architect", "craftsman", "problem-solver"],
  description: `Transforming complex challenges into intuitive digital experiences that drive business growth. React · Next.js · Node.js · TypeScript — 6+ years, 30+ projects, 15+ clients, zero shortcuts.`,
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "30+", label: "Projects Delivered" },
    { value: "15+", label: "Clients Served" },
  ],
  terminalLines: [
    {
      prefix: "$ ",
      text: "git clone iouzzine/iouzzine.me",
      color: "#e2e2ee",
      delay: 2200,
    },
    {
      prefix: "✓ ",
      text: "dependencies installed (1.8s)",
      color: "#34D399",
      delay: 2800,
    },
    { prefix: "$ ", text: "npm run build", color: "#e2e2ee", delay: 3400 },
    {
      prefix: "⚡ ",
      text: "Next.js built in 4.2s",
      color: "#818CF8",
      delay: 4000,
    },
    {
      prefix: "$ ",
      text: "npx lighthouse localhost:3000",
      color: "#e2e2ee",
      delay: 4800,
    },
    {
      prefix: "◈ ",
      text: "Performance:     100 / 100",
      color: "#34D399",
      delay: 5600,
    },
    {
      prefix: "◈ ",
      text: "Accessibility:   100 / 100",
      color: "#34D399",
      delay: 6000,
    },
    {
      prefix: "◈ ",
      text: "Best Practices:  100 / 100",
      color: "#34D399",
      delay: 6400,
    },
    { prefix: "$ ", text: "_", color: "#818CF8", delay: 6800, cursor: true },
  ],
};

export const about = {
  heading: "Engineering with intention.",
  highlightWord: "intention.",
  body: [
    `I'm ${personal.name}, a Full Stack Developer based in ${personal.location} with 6+ years delivering 30+ impactful projects across fintech, retail, logistics, and enterprise SaaS. The best digital products feel inevitable. That's the standard I hold every line of code to.`,
    `Specializing in React, Next.js, Node.js, and TypeScript — I bridge the gap between engineering precision and business growth, turning complex challenges into experiences that users actually want to use.`,
  ],
  whatIBuild: [
    "Web applications & SaaS platforms",
    "Internal tools, ERPs & dashboards",
    "REST & GraphQL APIs",
    "Real-time features & event-driven systems",
  ],
  philosophy:
    "I don't just build features — I build systems that scale, ERPs that eliminate manual work, and codebases that teams actually want to work in.",
  principles: [
    {
      icon: "◈",
      title: "Full-Stack Ownership",
      desc: "From PostgreSQL schema to React UI, I own the full delivery cycle. No handoff gaps, no finger-pointing — just working software.",
    },
    {
      icon: "◉",
      title: "Built to Scale",
      desc: "I've re-architected monoliths into microservices and cut latency from 5s to 200ms. Scale isn't an afterthought — it's designed in from day one.",
    },
    {
      icon: "◐",
      title: "Real-World Impact",
      desc: "ERPs that eliminate 70% of manual work. Platforms serving 50+ agents daily. I measure success in business outcomes, not lines of code.",
    },
    {
      icon: "◑",
      title: "Polyglot by Choice",
      desc: "React, Node.js, Scala, PHP, Kafka, Elasticsearch — I pick the right tool for the job. The stack serves the problem, not the other way around.",
    },
  ],
};

export const projects = [
  {
    id: "M-001",
    name: "ModaERP",
    tag: "ERP · Fashion Retail",
    stack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Prisma"],
    challenge:
      "A fashion retailer managing 200+ monthly clients was running operations across five separate tools — manual invoicing, fragmented inventory, disconnected payroll, and no single source of truth.",
    solution:
      "Architected a full-featured ERP with a RESTful Node.js/Express API, PostgreSQL/Prisma data layer, and a React frontend unifying invoicing, inventory management, payroll, and product catalog into one platform.",
    results: [
      "70% reduction in manual billing time",
      "5 separate tools consolidated into 1",
      "200+ monthly clients managed",
      "Operational errors eliminated through automated workflows",
    ],
    color: "var(--cyan)", colorHex: "#818CF8",
  },
  {
    id: "M-003",
    name: "ModaERP · Logix",
    tag: "Analytics · Developer Tools",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    challenge:
      "Developers debugging ModaERP had no visibility into application logs — hunting bugs required hours of manual inspection with no real-time monitoring or performance baseline.",
    solution:
      "Built an internal analytics add-on that processes and visualizes application logs in real-time, with filtering, search, and performance dashboards embedded directly into the ModaERP interface.",
    results: [
      "Debugging time cut from hours to minutes",
      "Real-time log processing and visualization",
      "Proactive performance monitoring before issues reach users",
      "Zero context-switch — embedded inside ModaERP",
    ],
    color: "#a78bfa", colorHex: "#a78bfa",
  },
  {
    id: "M-003",
    name: "HashPay",
    tag: "Fintech · Web3",
    stack: ["React", "TypeScript", "Vite", "Webpack"],
    challenge:
      "Businesses wanting to accept cryptocurrency payments had no embeddable, customizable checkout solution — existing options were rigid, hard to integrate, and offered no merchant-facing tooling.",
    solution:
      "Built a crypto payment infrastructure platform with an embeddable checkout widget supporting multi-website integration, a merchant management dashboard, analytics, a webhook event system, and role-based access control.",
    results: [
      "Embeddable widget with multi-website integration",
      "Full merchant dashboard with analytics",
      "Webhook event system for payment lifecycle",
      "Fully customizable checkout flows per merchant",
    ],
    color: "oklch(0.75 0.18 30)", colorHex: "#e8922a",
  },

  {
    id: "M-004",
    name: "LunchPro",
    tag: "B2C · Food Delivery",
    stack: ["TypeScript", "React", "Tailwind CSS", "Firebase", "Firestore"],
    challenge:
      "Corporate professionals had no streamlined way to order lunch from local restaurants — manual ordering was slow, error-prone, and offered no real-time status across the office.",
    solution:
      "Built a B2C food delivery platform connecting offices with local restaurants for seamless daily lunch ordering. Firebase real-time sync delivers sub-2-second order confirmation across web and mobile clients simultaneously.",
    results: [
      "Sub-2-second order confirmation",
      "Real-time sync across web and mobile clients",
      "Seamless daily lunch ordering for corporate teams",
      "Live order status from placement to delivery",
    ],
    color: "#fb923c", colorHex: "#fb923c",
  },
  {
    id: "M-005",
    name: "LunchPro · Dispatch",
    tag: "Logistics · Real-time Ops",
    stack: ["TypeScript", "React", "Tailwind CSS", "Firebase", "Firestore"],
    challenge:
      "LunchPro's operations team coordinated 50+ daily deliveries with no visibility into driver locations or restaurant readiness — missed SLAs were common and impossible to diagnose in real time.",
    solution:
      "Built a real-time dispatch dashboard with live driver tracking, restaurant readiness signals, and SLA alerts — giving operations full visibility into every delivery in flight.",
    results: [
      "50+ daily deliveries coordinated in real-time",
      "Live driver tracking and restaurant readiness signals",
      "SLA alerts eliminate missed delivery windows",
      "Full operational visibility from order to door",
    ],
    color: "#38bdf8", colorHex: "#38bdf8",
  },
  {
    id: "M-006",
    name: "MFlow",
    tag: "ERP · SMB",
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "TypeORM",
      "Shadcn UI",
    ],
    challenge:
      "Three SMB clients were managing client relationships, invoicing, inventory, and employee attendance through disconnected tools — no single platform unified their daily operations.",
    solution:
      "Built a multi-module ERP integrating CRM, invoicing, product management, and biometric attendance tracking into one platform. Deployed and actively used by 3 companies to run their core daily operations.",
    results: [
      "Deployed and in production use by 3 companies",
      "CRM, invoicing, inventory, and attendance unified",
      "Biometric attendance tracking integration",
      "Eliminated 4+ separate tools per business",
    ],
    color: "#e879f9", colorHex: "#e879f9",
  },
  {
    id: "M-007",
    name: "node-forge-api",
    tag: "Backend Starter",
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    challenge:
      "Starting a new Node.js API meant hours of boilerplate setup — auth, sessions, email, database config, Docker, CI/CD, and environment validation all wired from scratch every single time.",
    solution:
      "Built a production-ready backend starter with BaseService/BaseRepository architecture for rapid feature development, TypeORM/PostgreSQL, Redis sessions, JWT auth, email service, Docker with healthchecks, CI/CD workflows, and Zod environment validation.",
    results: [
      "Production-ready from clone — zero boilerplate setup",
      "BaseService/BaseRepository pattern for rapid feature development",
      "Full auth stack: JWT, Redis sessions, email service",
      "Docker healthchecks + CI/CD workflows included",
    ],
    color: "#4ade80", colorHex: "#4ade80",
  },
  {
    id: "M-008",
    name: "Portfolio",
    tag: "Portfolio · Next.js",
    githubUrl: "https://github.com/iouzzine/iouzzine.me",
    stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Needed a portfolio that was fast, accessible, and visually memorable — without heavy dependencies or sacrificing performance and SEO.",
    solution:
      "Designed and built with Next.js 16, Framer Motion animations, and Tailwind CSS — server components for optimal performance, fully optimized for accessibility and SEO with structured metadata.",
    results: [
      "Perfect Lighthouse score across all categories",
      "Server components for optimal load performance",
      "Framer Motion scroll and entrance animations",
      "Full SEO with structured metadata and sitemap",
    ],
    color: "#f472b6", colorHex: "#f472b6",
  },
];

export const skills = {
  categories: [
    {
      label: "Frontend",
      color: "var(--cyan)", colorHex: "#818CF8",
      items: ["React / Next.js", "TypeScript", "CSS / Tailwind", "Electron"],
    },
    {
      label: "Backend",
      color: "var(--violet)", colorHex: "#34D399",
      items: [
        "Node.js / NestJS",
        "PHP / Laravel / Symfony",
        "Java / Scala",
        "REST API Design",
      ],
    },
    {
      label: "Database",
      color: "#a78bfa", colorHex: "#a78bfa",
      items: [
        "PostgreSQL / MySQL",
        "MongoDB / Firestore",
        "Redis / Caching",
        "GraphQL",
      ],
    },
    {
      label: "DevOps & Tools",
      color: "oklch(0.75 0.18 30)", colorHex: "#e8922a",
      items: [
        "Git / CI/CD",
        "Docker / Unix",
        "Kafka / Real-time",
        "ElasticSearch",
      ],
    },
  ],
  tools: ["VS Code", "GitHub", "Docker", "Jira", "Linux"],
};

export const experience = [
  {
    year: "2023 — Present",
    role: "Full Stack Developer",
    company: "Atos",
    type: "Full-time · Casablanca",
    bullets: [
      "Leading frontend development of a professional label editing desktop application used across enterprise production facilities",
      "Architected a cross-platform Electron app to replace a legacy Windows-only tool, reducing deployment from days to hours",
      "Built high-performance React interfaces with real-time canvas rendering for sub-100ms label preview updates",
      "Developed concurrent Scala backend services to handle parallel print job processing at scale",
      "Designed normalized PostgreSQL schemas supporting complex label template versioning and audit trails",
    ],
    highlights: [
      "Electron app cut deployment from days → hours",
      "Sub-100ms canvas rendering for live label previews",
      "Scala backend for concurrent print job processing",
    ],
    skills: [
      "React",
      "Scala",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Electron",
      "TypeScript",
    ],
    color: "var(--cyan)", colorHex: "#818CF8",
  },
  {
    year: "2020 — 2023",
    role: "Full Stack Developer",
    company: "Tersea",
    type: "Full-time · Casablanca",
    bullets: [
      "Contributed to a business-critical CRM platform serving 50+ call center agents over 3+ years of continuous development",
      "Re-architected the system from a monolith to microservices, enabling the platform to scale with 10x user growth",
      "Built real-time event pipelines with Kafka, reducing data latency from 5+ seconds to under 200ms",
      "Developed and maintained RESTful Node.js APIs consumed by web and mobile clients supporting daily operations",
      "Led migration of legacy PHP frontend modules to React/TypeScript, improving page load times by 60%",
      "Managed PostgreSQL and MongoDB databases, optimizing queries to maintain sub-100ms response times at scale",
    ],
    highlights: [
      "Monolith → microservices, 10x user growth handled",
      "Kafka cut data latency from 5s → 200ms",
      "60% page load improvement via React migration",
    ],
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Kafka",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
    ],
    color: "var(--violet)", colorHex: "#34D399",
  },
  {
    year: "Feb — Jul 2020",
    role: "Full Stack Developer",
    company: "Webeuz",
    type: "Full-time · Casablanca",
    bullets: [
      "Built a real-time stock management app for a retail client, replacing error-prone spreadsheet tracking across multiple locations",
      "Implemented Firebase real-time sync giving store managers live inventory visibility — eliminating stock discrepancies overnight",
      "Designed Firestore schemas supporting sub-100ms queries across 10,000+ inventory items",
      "Delivered fully responsive, cross-browser compatible interfaces covering all major browsers and mobile devices",
    ],
    highlights: [
      "Firebase real-time sync across all store locations",
      "Sub-100ms queries across 10,000+ inventory items",
      "Eliminated overnight stock discrepancies",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore"],
    color: "oklch(0.75 0.18 30)", colorHex: "#e8922a",
  },
  {
    year: "Nov 2019 — Jan 2020",
    role: "Full Stack Developer",
    company: "Koios",
    type: "Full-time · Casablanca",
    bullets: [
      "Delivered two full-stack applications — a B2B advertising platform and an online phone book",
      "Built PHP/Lumen REST APIs and Angular 6+ frontend for the advertising platform, handling hundreds of daily listings",
      "Integrated ElasticSearch delivering sub-50ms search response times across the full listing database",
      "Set up LogStash for centralized log monitoring, significantly reducing mean time to detect production issues",
      "Built the phone book application independently using Node.js and MongoDB with full-text search across thousands of entries",
    ],
    highlights: [
      "Sub-50ms search via ElasticSearch",
      "2 production apps shipped in 3 months",
      "LogStash centralized log monitoring",
    ],
    skills: [
      "PHP",
      "Laravel/Lumen",
      "Angular",
      "ElasticSearch",
      "Node.js",
      "MongoDB",
    ],
    color: "var(--muted)", colorHex: "#6b6b8a",
  },
];

export const contact = {
  heading: "Let's build something worth remembering.",
  highlightPhrase: "worth remembering.",
  tagline:
    "Open to full-time roles, freelance contracts, and ambitious projects. Based in Casablanca — working globally. Got a hard problem? Let's talk.",
  email: personal.email,
  links: [
    { label: "GitHub", handle: `@${personal.handle}`, href: personal.github },
    { label: "LinkedIn", handle: "in/ismailouzz", href: personal.linkedin },
    { label: "Calendly", handle: "Book a call", href: personal.calendly },
  ],
  status: "Available for new projects",
  footer: `${personal.name} © 2026 — Designed & built with intention.`,
  footerStack: "React · Next.js · TypeScript",
};
