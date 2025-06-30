import { useEffect, useRef, useState } from "react";

const useScrollReveal = (threshold = 0.5) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const viewportHeight = window.innerHeight;
          const elTop = entry.boundingClientRect.top;
          const elBottom = entry.boundingClientRect.bottom;
          const elMiddle = elTop + (elBottom - elTop) / 2;

          // Activamos si el centro del elemento está dentro del centro del viewport
          const isCentered =
            elMiddle > viewportHeight * 0.3 && elMiddle < viewportHeight * 0.7;

          setIsVisible(isCentered);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
