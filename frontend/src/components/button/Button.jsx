import { Link } from "react-router-dom";
import "./Button.css";

const isExternal = (url) => /^https?:\/\//.test(url);

const Button = ({ text, to = "#", onClick, className = "" }) => {
  if (isExternal(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`button ${className}`}
        type="button"
        onClick={onClick}
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={to} className={`button ${className}`} onClick={onClick}>
      {text}
    </Link>
  );
};

export default Button;
