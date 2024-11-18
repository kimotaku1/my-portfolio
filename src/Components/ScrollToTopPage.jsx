import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [pathname]);

  return null;
};

export default ScrollToTopPage;
