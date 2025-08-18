// /hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";

const useScrollReveal = ({
  offset = 0.18,
  threshold = 0,
  delay = 150,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const tRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // Usamos px para máxima compatibilidad
    const offsetPx = Math.round(window.innerHeight * offset);
    const rootMargin = `-${offsetPx}px 0px -${offsetPx}px 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(tRef.current);
          tRef.current = setTimeout(() => setIsVisible(true), delay);
        } else {
          clearTimeout(tRef.current);
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      clearTimeout(tRef.current);
      observer.disconnect();
    };
  }, [offset, threshold, delay]);

  return [ref, isVisible];
};

export default useScrollReveal;
