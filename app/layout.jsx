import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata = {
  title: "iouzzine • Developer",
  description: "Full Stack Developer JS/Java/Scala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}