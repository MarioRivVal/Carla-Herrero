import { useEffect, useState } from "react";
import "./PresentationCard.css";
import useScrollReveal from "../../hooks/useScrollReveal";

import Button from "../button/Button";

const PresentationCard = ({ item, className, type = "" }) => {
  const [ref, isVisible] = useScrollReveal(0.95);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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
          <img
            src={`/img/services/${item.img}-1.png`}
            alt={item.name}
            loading="lazy"
          />
        </div>

        <div className="presentation-card__text">
          <h4>{item.name}</h4>
          <Button
            text="Saber más"
            to=""
            className="presentation__btn u--red-bg u--white"
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
            src={`/img/projects/${item.img}`}
            alt={item.name}
            loading="lazy"
          />
        </div>

        <div className="presentation-card__text">
          <h4>{item.title}</h4>
          {item.services.map((service, i) => (
            <p key={i} className="presentation-card__service">
              <span className="u--red">- </span> {service}{" "}
              <span className="u--red"> -</span>
            </p>
          ))}
        </div>
      </div>
    );
  }
};

export default PresentationCard;
