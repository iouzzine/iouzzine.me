"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { XIcon } from "./icons/XIcon";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 py-8 transition-all duration-300 ${
        scrolled ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <Section className="flex items-baseline">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary hover:text-primary-foreground group transition-colors duration-500">
            iouzzine
            <span className="text-primary-foreground group-hover:text-primary transition-colors duration-400">
              .me
            </span>
          </h1>
        </Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/iouzzine"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }, "size-7 p-0"))}
          >
            <GithubIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://x.com/ismailouzz"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }, "size-7 p-0"))}
          >
            <XIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/ismailouzz"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }, "size-7 p-0"))}
          >
            <LinkedinIcon size={20} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
