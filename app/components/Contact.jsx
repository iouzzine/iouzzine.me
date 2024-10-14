import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex w-full gap-4">
        <ContactForm />
      </div>
    </Section>
  );
};
