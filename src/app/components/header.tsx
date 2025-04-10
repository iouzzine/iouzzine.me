'use client';

import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Code, Briefcase, LineChart, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
    { id: 'experience', label: 'Experience', icon: <LineChart size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn('fixed z-50 w-full transition-all duration-500', {
        'shadow-[0_2px_20px_rgba(0,0,0,0.2)]': isScrolled,
      })}
    >
      <motion.div
        className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0.8 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div
        className={cn('relative z-10 transition-all duration-300', isScrolled ? 'py-3' : 'py-6')}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div
                onClick={() => scrollToSection('about')}
                className="group relative inline-block cursor-pointer"
              >
                <span className="text-xl font-bold md:text-2xl">
                  <span className="group-hover:text-primary-400 text-white transition-colors duration-300">
                    iouzzine
                  </span>
                  <motion.span
                    className="text-primary-500 transition-colors duration-300 group-hover:text-white"
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    className="text-primary-400 transition-all duration-300 group-hover:text-white"
                    whileHover={{ letterSpacing: '1px' }}
                  >
                    me
                  </motion.span>
                </span>

                <motion.div className="absolute -bottom-1 left-0 flex w-full flex-col items-center">
                  <motion.span className="bg-primary-500 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
                  <motion.span className="bg-primary-400 mt-0.5 h-[1px] w-0 transition-all delay-100 duration-500 group-hover:w-[70%]" />
                </motion.div>
              </div>
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center rounded-full px-1.5 py-1.5"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      'relative flex cursor-pointer items-center space-x-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                      {
                        'bg-primary-600 text-white shadow-lg': activeSection === item.id,
                        'text-neutral-300 hover:bg-neutral-800/30 hover:text-white':
                          activeSection !== item.id,
                      },
                    )}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <span
                      className={cn({
                        'text-white': activeSection === item.id,
                        'text-primary-400': activeSection !== item.id,
                      })}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hover:bg-primary-600 rounded-full bg-neutral-800/70 p-2 text-neutral-200 backdrop-blur-sm transition-colors duration-300 hover:text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-full right-0 left-0 mt-2 overflow-hidden px-6 md:hidden"
              >
                <div className="rounded-2xl border border-neutral-700/30 bg-neutral-900/80 p-3 shadow-lg backdrop-blur-lg">
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          'flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
                          {
                            'bg-primary-600/90 text-white': activeSection === item.id,
                            'text-neutral-300 hover:bg-neutral-800 hover:text-white':
                              activeSection !== item.id,
                          },
                        )}
                        aria-label={`Navigate to ${item.label} section`}
                      >
                        <span
                          className={cn({
                            'text-white': activeSection === item.id,
                            'text-primary-400': activeSection !== item.id,
                          })}
                        >
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
