import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <Section className="py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Building digital experiences with modern web technologies
          </p>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Iouzzine. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
};
