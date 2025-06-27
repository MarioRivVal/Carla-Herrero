import "./SocialNav.css";
import WhatsappIcon from "../../icons/whatsapp.svg?react";
import InstagramIcon from "../../icons/instagram.svg?react";
import FacebookIcon from "../../icons/facebook.svg?react";
import LinkedinIcon from "../../icons/linkedin.svg?react";

const SocialNav = () => {
  return (
    <nav className="social-nav">
      <ul>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon width={36} height={36} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
