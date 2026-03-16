import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-3 py-1 font-mono text-sm',
        'bg-muted text-muted-foreground border-border border',
        'hover:bg-muted/80 hover:text-foreground transition-colors',
        className,
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
