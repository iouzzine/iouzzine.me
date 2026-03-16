import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({
  label,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {label && (
        <p className="text-muted-foreground mb-3 text-sm font-medium tracking-widest uppercase">
          {label}
        </p>
      )}
      <h2
        id={title.toLowerCase().replace(/\s+/g, '-')}
        className="text-3xl font-bold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 max-w-xl text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
