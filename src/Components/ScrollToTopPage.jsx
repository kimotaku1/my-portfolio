import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delayed smooth scroll to allow for lazy-loaded page content
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopPage;
