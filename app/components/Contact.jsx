import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          name="@iouzzine.me"
          image="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
          url="mailto:contact@iouzzine.me"
        />
        <ContactCard
          name="@ismailouzz"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYG4azEl9wGw5TJHa2ct7hKic_VsexIUDlQ&s"
          url="https://x.com/ismailouzz"
        />
        <ContactCard
          name="iouzzine"
          image="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          url="https://linkedin.com/in/ismailouzz"
        />
      </div>
    </Section>
  );
};
