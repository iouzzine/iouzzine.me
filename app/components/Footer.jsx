import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Iouzzine
        </p>
      </Section>
    </footer>
  );
};
