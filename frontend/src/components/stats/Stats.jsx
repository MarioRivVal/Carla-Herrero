import React from "react";
import "./Stats.css";
import { stats } from "../../data/stats";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // solo una vez
    threshold: 0.3, // 30% del componente visible
  });

  const parseValue = (value) => {
    const hasPlus = value.includes("+");
    const numeric = parseInt(value.replace("+", ""));
    return { numeric, hasPlus };
  };

  return (
    <div ref={ref} className={`stats__items ${className}`}>
      {stats.map((stat, index) => {
        const { numeric, hasPlus } = parseValue(stat.value);
        return (
          <div className="stats__item" key={index}>
            <p className="stats__item-value">
              {inView ? (
                <>
                  <CountUp end={numeric} duration={2} />
                  {hasPlus ? "+" : ""}
                </>
              ) : (
                "0"
              )}
            </p>
            <p className="stats__item-title">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
