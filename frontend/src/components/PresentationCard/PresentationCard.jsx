import "./PresentationCard.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import Button from "../button/Button";

const PresentationCard = ({ item, className, type = "", onClick }) => {
  // Activa cuando el card entra en el 70% central del viewport (offset 0.15 arriba + 0.15 abajo)
  const [ref, isVisible] = useScrollReveal({
    offset: 0.18,
    threshold: 0.1,
    delay: 150,
  });

  const API_URL = import.meta.env.PROD
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_LOCAL_BACKEND_URL;

  if (type === "service") {
    return (
      <div
        ref={ref}
        className={`presentation-card ${className} ${
          isVisible ? "is-visible" : ""
        }`}
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
    <div
      ref={ref}
      className={`presentation-card ${className} ${
        isVisible ? "is-visible" : ""
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
};

export default PresentationCard;
