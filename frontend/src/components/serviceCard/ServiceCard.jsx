import React from "react";

import "./ServiceCard.css";

const ServiceCard = ({ Icon = Icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-car__title-box">
        <div className="service-card__icon">
          <Icon />
        </div>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
