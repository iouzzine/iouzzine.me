import SkillBadge from '@/components/ui/skill-badge';
import type { ExperienceItem } from '@/types';

interface ExperienceCardProps {
  item: ExperienceItem;
  isLast?: boolean;
}

const ExperienceCard = ({ item, isLast = false }: ExperienceCardProps) => {
  return (
    <div className="relative pl-8">
      {!isLast && <span className="bg-border absolute top-6 bottom-0 left-1.75 w-px" aria-hidden />}
      <span
        className="border-primary bg-background absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2"
        aria-hidden
      />

      <div className="pb-10">
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold">{item.role}</h3>
          <span className="text-muted-foreground shrink-0 font-mono text-xs">{item.duration}</span>
        </div>
        <p className="text-primary mb-3 text-sm font-medium">
          {item.company} · {item.location}
        </p>
        <ul className="mb-4 space-y-1.5" role="list">
          {item.description.map((point, i) => (
            <li key={i} className="text-muted-foreground flex gap-2 text-sm">
              <span
                className="bg-muted-foreground/50 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                aria-hidden
              />
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
