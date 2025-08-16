import { useEffect, useState } from "react";
import "./PresentationCard.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import ResponsiveImage from "../responsiveImage/ResponsiveImage,";

import Button from "../button/Button";
// import ArrowTurnIcon from "../../icons/arrow-turn.svg?react";

const PresentationCard = ({ item, className, type = "", onClick }) => {
  const [ref, isVisible] = useScrollReveal(0.95);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  useEffect(() => {
    const match = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouchDevice(match.matches);
  }, []);

  if (type === "service") {
    return (
      <div
        ref={ref}
        className={`presentation-card ${className} ${
          isTouchDevice && isVisible ? "is-visible" : ""
        }`}
      >
        <div className="presentation-card__img">
          <ResponsiveImage
            name={`services/${item.img}-1`}
            ext="jpeg"
            alt=""
            className=""
          />
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
  } else {
    return (
      <div
        ref={ref}
        className={`presentation-card ${className} ${
          isTouchDevice && isVisible ? "is-visible" : ""
        }`}
      >
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
  }
};

export default PresentationCard;
