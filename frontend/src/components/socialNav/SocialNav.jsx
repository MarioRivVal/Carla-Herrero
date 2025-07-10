import "./SocialNav.css";
import WhatsappIcon from "../../icons/whatsapp.svg?react";
import InstagramIcon from "../../icons/instagram.svg?react";
import FacebookIcon from "../../icons/facebook.svg?react";
import LinkedinIcon from "../../icons/linkedin.svg?react";

const SocialNav = () => {
  return (
    <nav className="social__nav">
      <ul>
        <li>
          <a
            href="https://wa.me/34677129329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bycarlaherrero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61551718752845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon width={36} height={36} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carlaherrero/"
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
