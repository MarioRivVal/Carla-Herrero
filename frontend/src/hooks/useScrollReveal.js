// /hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";

const useScrollReveal = ({
  offset = 0.15,
  threshold = 0.1,
  delay = 120,
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

    const pct = Math.max(0, Math.min(offset, 0.49));
    const rootMargin = `-${pct * 100}% 0px -${pct * 100}% 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldShow =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        if (shouldShow) {
          // activa con pequeño retardo
          clearTimeout(tRef.current);
          tRef.current = setTimeout(() => setIsVisible(true), delay);
        } else {
          // si sale o aún no entró, cancela y oculta
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
