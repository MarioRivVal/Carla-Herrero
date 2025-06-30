import { useEffect, useState } from "react";
import "./PresentationCard.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import ArrowTurnIcon from "../../icons/arrow-turn.svg?react";

const PresentationCard = ({ project, className }) => {
  const [ref, isVisible] = useScrollReveal(0.95);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouchDevice(match.matches);
  }, []);

  return (
    <div
      ref={ref}
      className={`presentation-card ${className} ${
        isTouchDevice && isVisible ? "is-visible" : ""
      }`}
    >
      <div className="presentation-card__img">
        <img
          src={`/img/projects/${project.img}`}
          alt={project.name}
          loading="lazy"
        />
      </div>

      <div className="presentation-card__text">
        <h3>{project.title}</h3>
        {project.services.map((service, i) => (
          <p key={i} className="presentation-card__service">
            <span className="u--red">- </span> {service}{" "}
            <span className="u--red"> -</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PresentationCard;
