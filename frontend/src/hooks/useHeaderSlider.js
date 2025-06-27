// useSlider.js
import { useRef, useEffect } from "react";

export default function useSlider(slides, interval = 5000) {
  const frameRef = useRef(null);
  const headlineRef = useRef(null);
  const idxRef = useRef(0);
  const busyRef = useRef(false);
  const autoTimerRef = useRef(null);

  // Crea la imagen para el slide
  const buildImage = (src) => {
    const img = document.createElement("img");
    img.src = src;
    return img;
  };

  // Crea spans para cada carácter de cada línea, inserta <br> entre líneas
  const buildText = (textLines) => {
    const container = headlineRef.current;
    container.innerHTML = "";
    const spans = [];

    // Se espera textLines como array de strings
    textLines.forEach((line, lineIdx) => {
      Array.from(line).forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        container.appendChild(span);
        spans.push(span);
      });
      if (lineIdx < textLines.length - 1) {
        container.appendChild(document.createElement("br"));
      }
    });
    return spans;
  };

  const animateOutImage = (img) =>
    img.animate(
      [
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
        { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 },
      ],
      { duration: 1000, easing: "ease-in", fill: "forwards" }
    ).finished;

  const animateInImage = (img) =>
    img.animate(
      [
        { clipPath: "inset(0% 50% 0% 50%)", opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
      ],
      { duration: 1000, easing: "ease-out", fill: "forwards" }
    ).finished;

  const animateOutText = (spans) => {
    spans.forEach((s, i) => {
      s.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-100%)", opacity: 0 },
        ],
        { duration: 500, delay: i * 30, easing: "ease-in", fill: "forwards" }
      );
    });
    const total = spans.length ? (spans.length - 1) * 30 + 500 : 0;
    return new Promise((r) => setTimeout(r, total));
  };

  const animateInText = (spans) => {
    spans.forEach((s, i) => {
      s.animate(
        [
          { transform: "translateY(100%)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        { duration: 500, delay: i * 50, easing: "ease-out", fill: "both" }
      );
    });
    const total = spans.length ? (spans.length - 1) * 50 + 500 : 0;
    return new Promise((r) => setTimeout(r, total));
  };

  const resetAuto = () => {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      changeSlide((idxRef.current + 1) % slides.length);
    }, interval);
  };

  // Cambia el slide al índice newIdx
  const changeSlide = async (newIdx) => {
    if (busyRef.current) return;
    busyRef.current = true;
    clearInterval(autoTimerRef.current);

    const frame = frameRef.current;
    const headline = headlineRef.current;
    const oldImg = frame.querySelector("img");
    const oldSpans = Array.from(headline.querySelectorAll("span"));

    await Promise.all([
      oldImg
        ? animateOutImage(oldImg).then(() => oldImg.remove())
        : Promise.resolve(),
      oldSpans.length ? animateOutText(oldSpans) : Promise.resolve(),
    ]);

    const slide = slides[newIdx];
    frame.appendChild(buildImage(slide.image));
    const spans = buildText(slide.text);

    await Promise.all([
      animateInImage(frame.querySelector("img")),
      animateInText(spans),
    ]);

    idxRef.current = newIdx;
    busyRef.current = false;
    resetAuto();
  };

  const next = () => changeSlide((idxRef.current + 1) % slides.length);
  const prev = () =>
    changeSlide((idxRef.current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setTimeout(() => changeSlide(0), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(autoTimerRef.current);
    };
  }, []);

  return { frameRef, headlineRef, next, prev };
}
