'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-10">
      <div className="absolute inset-0 -z-10 bg-neutral-950"></div>

      <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
        <motion.div
          className="via-primary-500/50 absolute inset-0 bg-gradient-to-r from-blue-500/50 to-blue-500/50"
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              className="mb-1 text-lg font-semibold text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ismail Ouzzine
            </motion.div>
            <motion.div
              className="text-sm text-neutral-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Full Stack Developer & Solution Architect
            </motion.div>
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="mailto:contact@iouzzine.me"
              className="hover:text-primary-400 text-neutral-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/iouzzine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 text-neutral-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ismailouzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 text-neutral-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 text-center text-xs text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {currentYear} Ismail Ouzzine. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
