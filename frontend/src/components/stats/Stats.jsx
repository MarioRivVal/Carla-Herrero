import React from "react";
import "./Stats.css";

const Stats = (stat, index) => {
  return (
    <div className="stats__item" key={index}>
      <p className="stats__item-value">{stat.value}</p>
      <p className="stats__item-title">{stat.title}</p>
    </div>
  );
};

export default Stats;
