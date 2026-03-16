'use client';

import { useState, useMemo } from 'react';
import SectionHeader from '@/components/ui/section-header';
import { AnimateIn } from '@/components/ui/animate-in';
import ProjectCard from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t.name)));
    const counts: Record<string, number> = {};
    projects.forEach((p) =>
      p.techStack.forEach((t) => {
        counts[t.name] = (counts[t.name] ?? 0) + 1;
      }),
    );
    return [
      'All',
      ...Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([k]) => k),
    ];
  }, [projects]);

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.techStack.some((t) => t.name === activeFilter)),
    [projects, activeFilter],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects"
      className="mx-auto max-w-5xl px-4 py-24 sm:px-6"
    >
      <AnimateIn>
        <SectionHeader
          label="What I've built"
          title="Projects"
          subtitle="7 featured here — all production systems. 30+ more delivered across various clients."
        />
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div
          className="mb-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by technology"
        >
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={activeFilter === tech ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(tech)}
              aria-pressed={activeFilter === tech}
              className="h-8 text-xs"
            >
              {tech}
            </Button>
          ))}
        </div>
      </AnimateIn>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <AnimateIn key={project.id} delay={i * 0.07}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
