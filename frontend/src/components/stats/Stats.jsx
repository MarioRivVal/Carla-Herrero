import React from "react";
import "./Stats.css";

import { stats } from "../../data/stats";

const Stats = ({ className }) => {
  return (
    <div className={`stats__items ${className}`}>
      {stats.map((stat, index) => (
        <div className="stats__item" key={index}>
          <p className="stats__item-value">{stat.value}</p>
          <p className="stats__item-title">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
