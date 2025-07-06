import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

import ArrowLargeLeftIcon from "../../icons/arrow-large-left.svg?react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <ArrowLargeLeftIcon />
    </button>
  );
};

export default ScrollToTopButton;
