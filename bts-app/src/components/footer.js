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
    href: "https://www.instagram.com/mamamoo_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/RBW_MAMAMOO",
    icon: faTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/RBWMAMAMOO",
    icon: faFacebook,
    label: "Facebook",
  },
];

const footer = () => {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "footer__social" },
      socialLinks.map((link, index) =>
        React.createElement(
          "a",
          {
            key: index,
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": link.label,
          },
          React.createElement(FontAwesomeIcon, { icon: link.icon, size: "2x" })
        )
      )
    )
  );
};

export default footer;
