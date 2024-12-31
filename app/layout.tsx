import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "sonner";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata = {
  title: "iouzzine • Developer",
  description: "Full Stack Developer JS/Java/Scala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          defer
          src="https://monitoring.iouzzine.me/tracker.js"
          data-website-id="cm5ce9r600001i1co7zpb9ywt"
        ></script>
      </head>
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
