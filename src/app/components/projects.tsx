'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Link from 'next/link';

type TechStack = {
  name: string;
  color: string;
};

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: TechStack[];
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'ModaERP',
      title: 'ModaERP',
      description:
        'A comprehensive ERP system for fashion retailers with client management, invoicing capabilities, product catalog integration, and employee payment processing. The platform streamlines business operations from inventory to sales and HR management.',
      techStack: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Node.js', color: 'bg-green-500' },
        { name: 'Express', color: 'bg-gray-800' },
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'Prisma', color: 'bg-blue-500' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-blue-400' },
      ],
    },
    {
      id: 'Logix',
      title: 'Logix - ModaERP',
      description:
        'An intelligent log analysis tool that processes, visualizes, and identifies patterns in system logs for performance optimization.',
      techStack: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-blue-400' },
      ],
    },
    {
      id: 'LunchPro',
      title: 'LunchPro',
      description:
        'A specialized food delivery platform connecting busy professionals with curated restaurant options for seamless lunch ordering.',
      techStack: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-blue-400' },
        { name: 'Firestore', color: 'bg-yellow-500' },
        { name: 'Firebase', color: 'bg-yellow-400' },
      ],
    },
    {
      id: 'Dispatch',
      title: 'Dispatch - Lunchpro',
      description:
        'A real-time order management system for LunchPro that coordinates restaurants, delivery drivers, and customers with route optimization.',
      techStack: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-blue-400' },
        { name: 'Firestore', color: 'bg-yellow-500' },
        { name: 'Firebase', color: 'bg-yellow-400' },
      ],
    },
    {
      id: 'Portfolio',
      title: 'Portfolio',
      description:
        'A modern, responsive portfolio website built with Next.js showcasing my technical skills, projects, and professional journey.',
      techStack: [
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-blue-400' },
        { name: 'Framer Motion', color: 'bg-purple-500' },
        { name: 'Next.js', color: 'bg-gray-800' },
      ],
      githubUrl: 'https://github.com/iouzzine/iouzzine.me',
    },
    {
      id: 'GitHub',
      title: 'More Projects',
      description:
        'Explore my GitHub profile to discover additional projects, contributions, and code repositories showcasing my development work.',
      techStack: [
        { name: 'Various', color: 'bg-gray-600' },
        { name: 'Technologies', color: 'bg-gray-500' },
      ],
      githubUrl: 'https://github.com/iouzzine',
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-20 select-none md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-900 to-neutral-950" />

      <div className="absolute top-20 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute right-0 bottom-20 -z-10 h-[250px] w-[250px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="bg-primary-500/10 text-primary-400 ring-primary-500/20 mb-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1">
            Recent Work
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            Explore a collection of my recent projects showcasing my expertise in building modern,
            scalable, and user-friendly applications across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                project.id === 'GitHub'
                  ? 'border-blue-600/30 bg-gradient-to-br from-neutral-900/80 to-blue-950/30'
                  : project.id === 'Portfolio'
                    ? 'relative border-purple-500/40 bg-gradient-to-br from-neutral-900/80 to-purple-950/40 shadow-lg shadow-purple-900/20 hover:border-purple-500/60 hover:shadow-purple-800/30'
                    : 'hover:border-primary-600/30 hover:shadow-primary-900/10 border-neutral-800/60 bg-gradient-to-br from-neutral-900/40 to-neutral-950/80 hover:shadow-md'
              }`}
            >
              <div className="from-primary-500/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative p-6">
                <h3
                  className={`mb-3 text-xl font-bold ${
                    project.id === 'GitHub'
                      ? 'text-blue-400'
                      : project.id === 'Portfolio'
                        ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                        : 'group-hover:text-primary-400 text-white transition-colors duration-300'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-neutral-300/80">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className={`${tech.color} rounded-full px-2.5 py-1 text-xs font-medium text-white/90 shadow-sm transition-transform duration-300 hover:scale-105`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className={`group/link flex items-center space-x-2 rounded-lg border border-neutral-700/50 bg-neutral-800/50 px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${
                        project.id === 'GitHub'
                          ? 'text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10'
                          : project.id === 'Portfolio'
                            ? 'text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10'
                            : 'hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-400 text-neutral-300'
                      }`}
                    >
                      <Github
                        size={16}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5"
                      />
                      <span>{project.id === 'GitHub' ? 'Visit GitHub' : 'Source Code'}</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
