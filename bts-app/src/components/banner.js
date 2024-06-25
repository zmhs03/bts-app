import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/banner.jpg"; // Replace with BTS banner images
import Banner2 from "../assets/jhope.jpg";
import Banner3 from "../assets/jimin.jpg";
import Banner4 from "../assets/jin.jpg";
import Banner5 from "../assets/jungkook.jpg";
import Banner6 from "../assets/rm.jpg";
import Banner7 from "../assets/suga.jpg";
import Banner8 from "../assets/tae.jpg";
import "../styles/homeBanner.css";

const banner = () => {
  const banners = [
    {
      image: Banner1,
      title: "BTS",
      description:
        "BTS, also known as the Bangtan Boys, is a South Korean boy band formed by Big Hit Entertainment. Consisting of seven members: RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook.",
    },
    {
      image: Banner2,
      title: "J-Hope",
      description:
        "Jung Ho-seok (정호석), better known as J-Hope, is a rapper, dancer, and songwriter in BTS. He has also released solo works, including the mixtape 'Hope World'.",
    },
    {
      image: Banner3,
      title: "Jimin",
      description:
        "Park Ji-min (박지민), known mononymously as Jimin, is a vocalist and dancer in BTS. He is celebrated for his powerful vocal range and dynamic dance performances.",
    },
    {
      image: Banner4,
      title: "Jin",
      description:
        "Kim Seok-jin (김석진), known as Jin, is a vocalist and visual of BTS. He has contributed to BTS's discography with his solo song 'Epiphany' among others.",
    },
    {
      image: Banner5,
      title: "Jungkook",
      description:
        "Jeon Jung-kook (전정국), known as Jungkook, is the youngest member and main vocalist of BTS. His solo works include 'Euphoria' and 'My Time'.",
    },
    {
      image: Banner6,
      title: "RM",
      description:
        "Kim Nam-joon (김남준), known as RM, is the leader and main rapper of BTS. He has released solo works such as the mixtapes 'RM' and 'Mono'.",
    },
    {
      image: Banner7,
      title: "Suga",
      description:
        "Min Yoon-gi (민윤기), known as Suga, is a rapper, songwriter, and producer in BTS. He has released solo works including the mixtape 'Agust D'.",
    },
    {
      image: Banner8,
      title: "V",
      description:
        "Kim Tae-hyung (김태형), known as V, is a vocalist in BTS. He has contributed to BTS's sound with his solo songs like 'Singularity' and 'Stigma'.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return React.createElement(
    "div",
    { className: "banner" },
    React.createElement(
      Slider,
      Object.assign({}, settings),
      banners.map((banner, index) =>
        React.createElement(
          "div",
          { key: index, className: "banner__slide" },
          React.createElement("img", {
            src: banner.image,
            alt: banner.title,
            className: "banner__image",
          }),
          React.createElement(
            "div",
            { className: "banner__contents" },
            React.createElement(
              "h1",
              { className: "banner__title" },
              banner.title
            ),
            React.createElement(
              "div",
              { className: "banner__buttons" },
              React.createElement(
                "button",
                {
                  className: "banner__button",
                  onClick: () =>
                    window.open(
                      "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
                      "_blank"
                    ),
                },
                "Listen on Spotify"
              ),
              React.createElement(
                "button",
                {
                  className: "banner__button",
                  onClick: () =>
                    window.open(
                      "https://www.youtube.com/user/ibighit",
                      "_blank"
                    ),
                },
                "Watch on YouTube"
              )
            ),
            React.createElement(
              "p",
              { className: "banner__description" },
              banner.description
            )
          ),
          React.createElement("div", { className: "banner__cover" })
        )
      )
    )
  );
};

export default banner;
