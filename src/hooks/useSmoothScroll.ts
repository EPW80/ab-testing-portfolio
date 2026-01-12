import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    } else {
      // Scroll to top when navigating to a new page without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
};

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};
