'use client';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToNextSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-20 select-none md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] bg-center opacity-15" />

      <motion.div
        className="bg-primary-500/10 absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full blur-[150px]"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <motion.div
            className="relative order-2 lg:order-1 lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div
              className="relative mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-2xl sm:w-80 md:w-96"
                initial={{ borderRadius: '100%' }}
                whileHover={{
                  boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.35)',
                }}
              >
                <div className="group-hover:ring-primary-500/30 relative h-full w-full overflow-hidden rounded-full ring-2 ring-neutral-700/40 transition-all duration-300">
                  <Image
                    src="/profile-image.jpg"
                    alt="Professional Profile Photo"
                    fill
                    className={cn(
                      'object-cover object-center transition-transform duration-700',
                      isHovered ? 'scale-110' : 'scale-100',
                    )}
                    priority
                  />

                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-30 transition-opacity duration-500',
                      isHovered ? 'opacity-0' : 'opacity-30',
                    )}
                  />
                </div>

                <motion.div
                  className="absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-300"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.15) 100%)',
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform rounded-xl border border-neutral-800/50 bg-neutral-900/90 px-4 py-2 shadow-xl backdrop-blur-md sm:px-5 sm:py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Scala', 'Docker'].map(
                    (skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                        className="hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-300 inline-flex items-center rounded-md border border-neutral-700/50 bg-neutral-800/80 px-2 py-0.5 text-xs font-medium text-neutral-200 shadow-inner transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ),
                  )}
                </div>
              </motion.div>

              <div className="bg-primary-500/5 absolute -top-10 -left-10 -z-10 h-80 w-80 rounded-full blur-[100px]" />
              <div className="absolute -right-10 -bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px]" />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="bg-primary-500/10 text-primary-400 ring-primary-500/20 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1">
                  About Me
                </span>
              </motion.div>

              <motion.h1
                className="mt-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Full Stack Developer <span className="text-primary-400">&</span>{' '}
                <span className="from-primary-400 bg-gradient-to-r to-blue-400 bg-clip-text text-transparent">
                  Solution Architect
                </span>
              </motion.h1>

              <motion.div
                className="mt-8 space-y-5 text-base text-neutral-300 sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <p className="leading-relaxed">
                  I&apos;m Ismail Ouzzine, a{' '}
                  <span className="text-primary-400">Full Stack Developer</span> with 5+ years of
                  experience delivering{' '}
                  <span className="text-primary-400">30+ impactful projects</span> across diverse
                  industries. Specializing in <span className="text-primary-400">React</span>,{' '}
                  <span className="text-primary-400">Next.js</span>,{' '}
                  <span className="text-primary-400">Node.js</span>, and{' '}
                  <span className="text-primary-400">TypeScript</span>, I transform complex
                  challenges into intuitive digital experiences that drive business growth.
                </p>
              </motion.div>

              <motion.div
                className="my-6 flex flex-wrap gap-3 sm:my-8 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { number: '5+', label: 'Years Experience' },
                  { number: '30+', label: 'Projects' },
                  { number: '15+', label: 'Clients' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group relative mr-6 flex items-center space-x-2 sm:mr-8 sm:space-x-3"
                  >
                    <div className="group-hover:from-primary-600/20 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow-inner transition-all duration-300 group-hover:bg-gradient-to-br group-hover:to-blue-600/20 sm:h-12 sm:w-12">
                      <span className="from-primary-400 bg-gradient-to-r to-blue-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                        {stat.number}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 sm:text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <motion.button
                  className="group from-primary-600 shadow-primary-900/20 hover:shadow-primary-900/30 relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:px-7 sm:py-3.5"
                  onClick={() => scrollToNextSection('contact')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Contact Me
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                  <span className="from-primary-500 absolute inset-0 -z-10 bg-gradient-to-r to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </motion.button>

                <motion.button
                  className="group hover:border-primary-500/50 relative cursor-pointer overflow-hidden rounded-full border border-neutral-700/50 bg-neutral-800/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/50 sm:px-7 sm:py-3.5"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://resume.iouzzine.me/resume.pdf';
                    link.download = 'resume.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Download
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    Download Resume
                  </span>
                  <span className="from-primary-600/5 absolute inset-0 -z-10 bg-gradient-to-br to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={() => scrollToNextSection('skills')}
          className="group relative cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-label="Scroll to next section"
          whileHover={{ scale: 1.05 }}
        >
          <div className="group-hover:border-primary-500/50 group-hover:text-primary-400 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-500 shadow-lg backdrop-blur-sm transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default About;
