import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iouzzine.me"),
  title: {
    default: "Ismail Ouzzine — Full Stack Developer",
    template: "%s | Ismail Ouzzine",
  },
  description:
    "Full Stack Developer based in Casablanca. React, Next.js, Node.js, TypeScript — 6+ years, 30+ projects, 15+ clients.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Casablanca",
    "Morocco",
    "Ismail Ouzzine",
  ],
  authors: [{ name: "Ismail Ouzzine", url: "https://iouzzine.me" }],
  creator: "Ismail Ouzzine",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iouzzine.me",
    siteName: "Ismail Ouzzine",
    title: "Ismail Ouzzine — Full Stack Developer",
    description:
      "Full Stack Developer based in Casablanca. React, Next.js, Node.js, TypeScript — 6+ years, 30+ projects, 15+ clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Ouzzine — Full Stack Developer",
    description:
      "Full Stack Developer based in Casablanca. React, Next.js, Node.js, TypeScript — 6+ years, 30+ projects, 15+ clients.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
