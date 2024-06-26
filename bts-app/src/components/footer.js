import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css";

const socialLinks = [
  {
    href: "https://www.instagram.com/bts.bighitofficial/",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/bts_bighit",
    icon: faTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/bangtan.official/",
    icon: faFacebook,
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
