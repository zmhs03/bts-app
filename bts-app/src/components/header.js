const React = require("react");
const { useState, useEffect } = require("react");
const { Link } = require("react-router-dom");
const classNames = require("classnames");
const bts = require("../assets/bts-logo.png");
require("../styles/Header.css");

const Header = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return React.createElement(
    "div",
    { className: classNames("header", { "header--float": floating }) },
    React.createElement("img", {
      className: "header__BTS-logo",
      src: bts,
      alt: "BTS Logo",
    }),
    React.createElement(
      "ul",
      { className: "header__nav" },
      React.createElement(
        "li",
        { className: "header__nav-item" },
        React.createElement(Link, { to: "/" }, "Home")
      ),
      React.createElement(
        "li",
        { className: "header__nav-item" },
        React.createElement(Link, { to: "/styleguide" }, "Styleguide")
      ),
      React.createElement(
        "li",
        { className: "header__nav-item" },
        React.createElement(Link, { to: "/wireframes" }, "Wireframes")
      ),
      React.createElement(
        "li",
        { className: "header__nav-item" },
        React.createElement(Link, { to: "/essay" }, "Essay")
      )
    )
  );
};

module.exports = Header;
