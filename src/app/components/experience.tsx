'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 'atos',
      role: 'Full Stack Developer',
      company: 'Atos',
      location: 'Casablanca, Morocco',
      duration: 'September 2023 - Present',
      description: [
        'Development of a label editing application',
        'Built responsive and interactive user interfaces with React',
        'Developed cross-platform desktop applications using Electron',
        'Created robust backend services with Scala',
        'Designed and optimized database schemas with PostgreSQL',
      ],
      skills: ['React', 'Scala', 'PostgreSQL', 'Electron'],
    },
    {
      id: 'tersea',
      role: 'Full Stack Developer',
      company: 'Tersea',
      location: 'Casablanca, Morocco',
      duration: 'March 2020 - September 2023',
      description: [
        'Development of a comprehensive CRM system',
        'Implemented microservices architecture to improve scalability and maintainability',
        'Built real-time data processing pipelines using Kafka',
        'Developed RESTful APIs with Node.js',
        'Created dynamic frontend interfaces with React and TypeScript',
        'Designed and maintained both SQL and NoSQL databases (PostgreSQL and MongoDB)',
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'Microservices', 'PostgreSQL', 'MongoDB', 'Kafka'],
    },
    {
      id: 'webeuz',
      role: 'Full Stack Developer',
      company: 'Webeuz',
      location: 'Casablanca, Morocco',
      duration: 'February 2020 - July 2020',
      description: [
        'Development of a stock management application',
        'Created intuitive user interfaces with HTML, CSS, and JavaScript',
        'Implemented real-time data synchronization with Firebase',
        'Designed and maintained NoSQL database using Firestore',
        'Ensured cross-browser compatibility and responsive design',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Firestore'],
    },
    {
      id: 'koios',
      role: 'Full Stack Developer',
      company: 'Koios',
      location: 'Casablanca, Morocco',
      duration: 'November 2019 - January 2020',
      description: [
        'Development of a professional advertising application',
        'Built backend APIs using PHP with Lumen/Laravel framework',
        'Developed interactive frontend with Angular 6+',
        'Designed and optimized MySQL database schemas',
        'Implemented search functionality with ElasticSearch',
        'Configured log monitoring and analysis with LogStash',
        'Also developed an online phone book application using Node.js, Angular 6+, and MongoDB',
      ],
      skills: [
        'PHP',
        'Laravel/Lumen',
        'Angular',
        'MySQL',
        'ElasticSearch',
        'LogStash',
        'Node.js',
        'MongoDB',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />

      <div className="absolute top-20 right-0 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[130px]" />
      <div className="absolute bottom-40 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="bg-primary-500/10 text-primary-400 ring-primary-500/20 mb-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1">
            Professional Journey
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            A chronological overview of my professional career, highlighting key roles and projects
            I&apos;ve contributed to across various companies.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="via-primary-500/40 absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-blue-500/60 to-purple-500/30 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 flex h-5 w-5 items-center justify-center md:left-1/2 md:-ml-2.5">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      index === 0
                        ? 'bg-blue-500 shadow-blue-500/50'
                        : 'bg-primary-500 shadow-primary-500/50'
                    } shadow-md`}
                  />
                </div>

                <div
                  className={`ml-8 w-full md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div
                    className={`rounded-xl border ${
                      index === 0
                        ? 'border-blue-800/40 bg-blue-900/10'
                        : index === 1
                          ? 'border-primary-800/30 bg-primary-900/10'
                          : 'border-neutral-800/60 bg-neutral-900/40'
                    } p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/70 hover:bg-neutral-800/30 hover:shadow-lg ${
                      index === 0 ? 'hover:shadow-blue-900/10' : 'hover:shadow-primary-900/10'
                    }`}
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                      <span className="bg-primary-500/10 text-primary-400 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
                        <Calendar size={12} className="mr-1" />
                        {experience.duration}
                      </span>
                    </div>

                    <div className="mb-4 flex flex-wrap items-center text-sm text-neutral-400">
                      <span className="inline-flex items-center">
                        <Briefcase size={14} className="mr-1" />
                        {experience.company}
                      </span>
                      {experience.location && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="inline-flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {experience.location}
                          </span>
                        </>
                      )}
                    </div>

                    <ul className="mb-4 space-y-2 text-sm text-neutral-300">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span
                            className={`mt-1 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                              index === 0 ? 'bg-blue-500' : 'bg-primary-500'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`rounded-full ${
                            index === 0
                              ? 'bg-blue-950/70 text-blue-300'
                              : index === 1
                                ? 'bg-primary-950/70 text-primary-300'
                                : 'bg-neutral-800 text-neutral-300'
                          } px-2.5 py-0.5 text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
