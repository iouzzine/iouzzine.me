import SectionHeader from '@/components/ui/section-header';
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/animate-in';
import SkillBadge from '@/components/ui/skill-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SkillGroup } from '@/types';

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" aria-labelledby="skills" className="bg-muted/20 border-border/40 border-y">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <AnimateIn>
          <SectionHeader
            label="What I work with"
            title="Skills & Tech Stack"
            subtitle="A broad set of tools picked up over 6+ years of building production systems."
          />
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <Tabs defaultValue={skills[0]?.name} className="w-full">
            <TabsList className="bg-muted/50 mb-8 h-auto flex-wrap gap-1">
              {skills.map((group) => (
                <TabsTrigger key={group.name} value={group.name} className="text-sm">
                  {group.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skills.map((group) => (
              <TabsContent key={group.name} value={group.name}>
                <StaggerContainer className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <SkillBadge name={skill} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Skills;
