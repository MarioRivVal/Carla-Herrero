import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import { getYear } from "../../utils/getYear";

import LogoIcon from "../../icons/logo.svg?react";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="footer__nav">
        <ul>
          <li>
            <a
              href="https://wa.me/34677129329"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bycarlaherrero"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlaherrero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__img">
        <LogoIcon />
      </div>
      <div className="footer__copyright u--white">
        <p>
          <span className="u--red">by Carla Herrero </span>
          {getYear()}
        </p>
        <p>Todos los derechos reservados</p>
        <p className="footer__legal">
          <NavLink to="/politicas">Políticas de uso</NavLink>
        </p>
        <p>
          Desarrollado con pasión por{" "}
          <span>
            <a
              href="https://netneo.es"
              target="_blank"
              rel="noopener noreferrer"
              className="u--red"
            >
              netneo
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
