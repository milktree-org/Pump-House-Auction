import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Browsers restore scroll position on history navigation; for a client-side
// router we want each new route to start at the top.
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
