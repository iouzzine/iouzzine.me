'use client';

import { motion } from 'framer-motion';
import { Database, Layout, Server, Terminal } from 'lucide-react';
import { useState } from 'react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: <Layout className="h-5 w-5" />,
      skills: ['HTML', 'CSS', 'Javascript', 'React', 'Electron', 'Next.js'],
    },
    {
      name: 'Backend',
      icon: <Server className="h-5 w-5" />,
      skills: ['Node.js', 'NestJS', 'Java', 'Scala', 'PHP', 'Laravel', 'Symfony'],
    },
    {
      name: 'Database',
      icon: <Database className="h-5 w-5" />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Firestore'],
    },
    {
      name: 'DevOps & Tools',
      icon: <Terminal className="h-5 w-5" />,
      skills: ['Git', 'Docker', 'ElasticSearch', 'Unix'],
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <section id="skills" className="relative overflow-hidden py-20 select-none md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />

      <div className="bg-primary-500/5 absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="bg-primary-500/10 text-primary-400 ring-primary-500/20 mb-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1">
            Technical Expertise
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            With expertise spanning across multiple domains, I leverage the right technologies to
            build scalable, efficient, and maintainable solutions that drive business growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`group cursor-pointer rounded-xl border transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'border-primary-500/50 bg-primary-500/5 shadow-primary-500/10 shadow-lg'
                  : 'hover:border-primary-500/30 border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-900/60'
              }`}
              onClick={() => handleCategoryClick(category.name)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="p-6 backdrop-blur-sm">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'group-hover:text-primary-400 bg-neutral-800/80 text-neutral-400'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-sm text-neutral-500">{category.skills.length} technologies</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {(selectedCategory
            ? skillCategories.find((cat) => cat.name === selectedCategory)?.skills || []
            : allSkills
          ).map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                type: 'spring',
                stiffness: 100,
              }}
              className="group relative"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="from-primary-500/20 absolute inset-0 rounded-lg bg-gradient-to-br via-blue-500/10 to-blue-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="hover:border-primary-500/40 hover:shadow-primary-500/5 relative flex h-full flex-col items-center justify-center rounded-lg border border-neutral-800/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/90 p-5 text-center transition-all duration-300 hover:shadow-lg">
                <span className="text-lg font-medium text-white">{skill}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-neutral-500"
        >
          {selectedCategory ? (
            <>
              Showing {selectedCategory} skills.{' '}
              <span
                className="text-primary-400 cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                View all skills
              </span>
            </>
          ) : (
            'Click on a category to filter skills or view all technologies I work with.'
          )}
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
