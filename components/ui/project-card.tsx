'use client';

import { Button } from '@/components/ui/button';
import TechBadge from '@/components/ui/tech-badge';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const SPECIAL_CARDS: Record<string, { border: string; bg: string; glow: string; accent?: string }> =
  {
    Portfolio: {
      border: 'border-violet-500/30 hover:border-violet-500/60',
      bg: 'dark:bg-gradient-to-br dark:from-card dark:to-violet-950/30',
      glow: 'from-violet-500/10',
      accent: 'from-violet-500 to-purple-400',
    },
    CTA: {
      border: 'border-indigo-500/40 hover:border-indigo-500/70',
      bg: 'dark:bg-gradient-to-br dark:from-card dark:to-indigo-950/40',
      glow: 'from-indigo-500/10',
      accent: 'from-indigo-500 to-green-400',
    },
  };

const ProjectCard = ({ project }: ProjectCardProps) => {
  const special = SPECIAL_CARDS[project.id];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="h-full"
    >
      <div
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-xl border p-5 transition-all duration-300',
          'from-card/80 to-background/60 bg-linear-to-br backdrop-blur-sm',
          special ? [special.border, special.bg] : 'border-border/50 hover:border-border/80',
        )}
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
            `bg-linear-to-br ${special?.glow ?? 'from-primary/5'} to-transparent`,
          )}
          aria-hidden
        />

        <div
          className={cn(
            'pointer-events-none absolute inset-x-0 top-0 h-0.75 rounded-t-xl bg-linear-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100',
            special?.accent
              ? `${special.accent}`
              : `from-[${project.techStack[0]?.color ?? '#6366f1'}] to-[${project.techStack[1]?.color ?? '#a855f7'}]`,
          )}
          style={
            !special?.accent
              ? {
                  background: `linear-gradient(to right, ${project.techStack[0]?.color ?? '#6366f1'}99, ${project.techStack[1]?.color ?? '#a855f7'}99)`,
                }
              : undefined
          }
          aria-hidden
        />

        <h3 className="group-hover:text-primary mb-2 text-base leading-tight font-semibold transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} color={tech.color} />
          ))}
        </div>

        {project.githubUrl && (
          <div className="border-border/30 flex gap-1.5 border-t pt-1">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground h-8 px-2 text-xs"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="mr-1.5 size-3.5" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
