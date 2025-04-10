'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'purple' | 'blue' | 'primary';
}

const SectionDivider = ({ variant = 'primary' }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative my-12 flex justify-center md:my-16"
    >
      <div
        className={`h-12 w-1 rounded-full ${
          variant === 'blue'
            ? 'bg-gradient-to-b from-blue-500/80 to-blue-500/10'
            : variant === 'purple'
              ? 'bg-gradient-to-b from-purple-500/80 to-purple-500/10'
              : 'from-primary-500/80 to-primary-500/10 bg-gradient-to-b'
        }`}
      />
    </motion.div>
  );
};

export default SectionDivider;
