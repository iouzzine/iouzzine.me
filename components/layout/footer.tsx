import { Github, Linkedin, Mail } from 'lucide-react';
import type { PersonalInfo } from '@/types';

interface FooterProps {
  personal: PersonalInfo;
}

const Footer = ({ personal }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/50 bg-muted/20 border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-muted-foreground font-mono text-sm">
          © {year} {personal.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-2 transition-colors"
          >
            <Github className="size-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-2 transition-colors"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-2 transition-colors"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
