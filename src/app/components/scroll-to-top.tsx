'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });

    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    };

    if (window.location.hash) {
      const cleanUrl = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, cleanUrl);
    }

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [router]);

  return null;
};

export default ScrollToTop;
