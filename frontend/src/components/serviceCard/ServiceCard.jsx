import React from "react";

import "./ServiceCard.css";

const ServiceCard = ({ Icon = Icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
