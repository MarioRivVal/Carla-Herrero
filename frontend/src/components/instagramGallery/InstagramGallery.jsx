import React from "react";
import "./InstagramGallery.css";
import { instagramImages } from "../../data/instagramImages";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";

import InstagramIcon from "../../icons/instagram.svg?react";

const InstagramGallery = () => {
  return (
    <div className="instagram">
      {instagramImages.map((image) => (
        <a
          key={image.id}
          href="https://www.instagram.com/bycarlaherrero"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram__link"
        >
          <ResponsiveImage {...image} className="instagram-img" />
        </a>
      ))}
      <a
        href="https://www.instagram.com/bycarlaherrero"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram__icon"
      >
        <InstagramIcon width={75} height={75} />
      </a>
    </div>
  );
};

export default InstagramGallery;
