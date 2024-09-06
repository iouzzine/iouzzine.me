import { Card } from "@/components/ui/card";
import { SIDE_PROJECTS, WORKS } from "../constants/data";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { Work } from "./Work";
import { SideProject } from "./SideProject";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@ismailouzz"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYG4azEl9wGw5TJHa2ct7hKic_VsexIUDlQ&s"
            url="https://x.com/ismailouzz"
          />
          <ContactCard
            name="Ismail Ouzzine"
            image="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            url="https://linkedin.com/in/ismailouzz"
          />
        </Card>
      </div>
    </Section>
  );
};
