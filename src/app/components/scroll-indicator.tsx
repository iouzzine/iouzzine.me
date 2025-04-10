'use client';

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-50 h-1">
      <div
        className="via-primary-500 h-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease-out' }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
