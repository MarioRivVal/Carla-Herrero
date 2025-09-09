import "./HeaderSlider.css";
import useHeaderSlider from "../../hooks/useHeaderSlider";
import ArrowLargeLeftIcon from "../../icons/arrow-large-left.svg?react";
import ArrowLargeRightIcon from "../../icons/arrow-large-right.svg?react";

const slides = [
  { image: "/img/header-1.jpeg", text: ["¡Hola!"] },
  { image: "/img/header-2.jpeg", text: ["Servicios", "de Diseño"] },
];

const Slider = () => {
  const { frameRef, headlineRef, next, prev } = useHeaderSlider(slides, 5000);

  return (
    <div id="slider">
      <button id="prev" onClick={prev} aria-label="Anterior">
        <ArrowLargeLeftIcon />
      </button>
      <div className="container">
        <div id="frame" ref={frameRef}></div>
        <h1 id="headline" ref={headlineRef}></h1>
      </div>
      <button id="next" onClick={next} aria-label="Siguiente">
        <ArrowLargeRightIcon />
      </button>
    </div>
  );
};

export default Slider;
