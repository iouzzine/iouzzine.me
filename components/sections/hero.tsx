'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, MapPin, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PersonalInfo, Stat } from '@/types';

interface HeroProps {
  personal: PersonalInfo;
  stats: Stat[];
}

const Hero = ({ personal, stats }: HeroProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollToNextSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20"
        style={{ backgroundImage: 'url(/grid-pattern.svg)', backgroundSize: '40px 40px' }}
        aria-hidden
      />
      <div
        className="to-background pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex-1 text-center md:text-left" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted-foreground mb-6 flex items-center justify-center gap-1.5 font-mono text-xs md:justify-start"
            >
              <MapPin className="size-3" />
              {personal.location}
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {personal.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-3 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-muted-foreground mb-8 max-w-lg text-lg md:text-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {personal.title}
            </motion.p>

            <motion.div
              className="mb-12 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="cursor-pointer gap-2"
                onClick={() => scrollToNextSection('contact')}
              >
                Get in touch <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a href={personal.resume} download aria-label="Download resume PDF">
                  <Download className="size-4" /> Resume
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="GitHub profile">
                <a href={personal.github} target="_blank" rel="noopener noreferrer">
                  <Github className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn profile">
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 md:justify-start"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-2xl font-bold tracking-tight">{stat.number}</p>
                  <p className="text-muted-foreground mt-0.5 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div className="ring-border relative size-48 overflow-hidden rounded-2xl shadow-xl ring-2 md:size-64">
              <Image
                src={personal.profileImage}
                alt={`${personal.name} profile photo`}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
