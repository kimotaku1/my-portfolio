import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-white rounded-full transition-all duration-300 shadow-lg
        ${
          isVisible
            ? "bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
        hover:scale-110 hover:from-purple-500 hover:to-indigo-500
      `}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
