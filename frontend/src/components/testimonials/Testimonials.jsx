import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../data/testimonials";

import ArrowLargeLeftIcon from "../../icons/arrow-large-left.svg?react";
import ArrowLargeRightIcon from "../../icons/arrow-large-right.svg?react";

const TestimonialItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const carrouselStyle = {
    transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
    width: `${testimonials.length * 100}%`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="testimonials">
      <h2>Lo que dicen de nosotros</h2>
      <div className="testimonials__box">
        <div className="testimonials__container" style={carrouselStyle}>
          {testimonials.map((item) => (
            <figure key={item.id} className="testimonial">
              <blockquote>
                <p className="testimonial__text">{item.text}</p>
                <div>
                  <p className="testimonial__name">{item.author}</p>
                  <p className="testimonial__company">{item.company}</p>
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="testimonials__btns">
          <button
            className="testimonials__btn testimonials__btn-left"
            onClick={() => handleSlider("left")}
          >
            <ArrowLargeLeftIcon />
          </button>
          <button
            className="testimonials__btn testimonials__btn-right"
            onClick={() => handleSlider("right")}
          >
            <ArrowLargeRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
