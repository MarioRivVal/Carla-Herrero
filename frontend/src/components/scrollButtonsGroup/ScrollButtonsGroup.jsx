// components/scrollButtonsGroup/ScrollButtonsGroup.jsx
import { useEffect, useState } from "react";
import "./ScrollButtonsGroup.css";

import ArrowLargeLeftIcon from "../../icons/arrow-large-left.svg?react";
import WhatsappIcon from "../../icons/whatsapp.svg?react"; // ✅ usa el tuyo

const ScrollButtonsGroup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Scroll top */}
      <button
        className={`scroll-button scroll-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ArrowLargeLeftIcon />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/34677129329"
        target="_blank"
        rel="noopener noreferrer"
        className={`scroll-button scroll-whatsapp ${
          isVisible ? "visible" : ""
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappIcon />
      </a>
    </>
  );
};

export default ScrollButtonsGroup;
