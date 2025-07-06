import "./Nav.css";
import { NavLink } from "react-router-dom";

import LogoIcon from "../../icons/logo.svg?react";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation__img">
        <LogoIcon />
      </div>

      <nav className="nav">
        <ul>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/servicios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Servicios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/proyectos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Proyectos
            </NavLink>
          </li>
          <li className="nav-item nav-item--red">
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
