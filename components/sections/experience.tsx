import SectionHeader from '@/components/ui/section-header';
import { AnimateIn } from '@/components/ui/animate-in';
import ExperienceCard from '@/components/ui/experience-card';
import type { ExperienceItem } from '@/types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience"
      className="bg-muted/20 border-border/40 border-y"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <AnimateIn>
          <SectionHeader label="Where I've worked" title="Experience" />
        </AnimateIn>

        <div className="max-w-2xl">
          {experience.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.1} direction="left">
              <ExperienceCard item={item} isLast={i === experience.length - 1} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
