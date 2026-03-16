'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="bg-primary fixed top-0 right-0 left-0 z-100 h-0.5 origin-left"
      aria-hidden
    />
  );
};

export default ScrollProgress;
