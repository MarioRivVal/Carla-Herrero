import "./PresentationCard.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import Button from "../button/Button";
import { useEffect, useState } from "react";

const PresentationCard = ({ item, className, type = "", onClick }) => {
  const [ref, seen] = useScrollReveal({
    offset: 0.2,
    threshold: 0,
    delay: 150,
  });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(!!touch);
  }, []);

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  const visibleClass = isTouch && seen ? "is-visible" : "";

  if (type === "service") {
    return (
      <div
        ref={ref}
        className={`presentation-card ${className} ${visibleClass}`}
      >
        <div className="presentation-card__img">
          <ResponsiveImage name={`services/${item.img}-1`} ext="jpeg" alt="" />
        </div>
        <div className="presentation-card__text">
          <h4>{item.name}</h4>
          <Button
            text="Saber más"
            to=""
            className="presentation__btn u--red-bg u--white"
            onClick={onClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`presentation-card ${className} ${visibleClass}`}>
      <div className="presentation-card__img">
        <img
          src={`${API_URL}/img/projects/${item.img}`}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="presentation-card__text">
        <h4>{item.title}</h4>
        {item.services.map((service, i) => (
          <p key={i} className="presentation-card__service">
            <span className="u--red">- {service} -</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PresentationCard;
