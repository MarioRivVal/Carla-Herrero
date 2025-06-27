import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation__img">
        <img src="/img/logos/logo-r.png"></img>
      </div>

      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className="nav-item nav-item--red">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
