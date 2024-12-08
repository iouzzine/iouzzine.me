"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        "backdrop-blur-md border-b border-transparent",
        scrolled && "border-border/40 bg-background/80"
      )}
    >
      <Section className="flex items-center h-16">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight transform transition-all duration-300 border-b-2 border-transparent hover:border-primary">
            <span className="bg-primary/80 bg-clip-text text-transparent">
              iouzzine
            </span>
            <span className="text-foreground/70">.me</span>
          </h1>
        </Link>

        <div className="flex-1" />

        <nav className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "transition-all duration-200",
              "hover:bg-primary/10 hover:text-primary",
              "ring-offset-background",
              "hover:ring-2 hover:ring-primary/30 hover:ring-offset-2"
            )}
          >
            {mounted &&
              (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
          {[
            { href: "https://github.com/iouzzine", Icon: GithubIcon },
            { href: "https://x.com/ismailouzz", Icon: XIcon },
            { href: "https://linkedin.com/in/ismailouzz", Icon: LinkedinIcon },
          ].map(({ href, Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "transition-all duration-200",
                "hover:bg-primary/10 hover:text-primary",
                "ring-offset-background",
                "hover:ring-2 hover:ring-primary/30 hover:ring-offset-2"
              )}
            >
              <Icon size={18} />
            </Link>
          ))}
        </nav>
      </Section>
    </header>
  );
};
