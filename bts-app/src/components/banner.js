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

const Banner = () => {
  const banners = [
    {
      image: Banner1,
      title: "BTS",
      description:
        "BTS, also known as the Bangtan Boys, is a South Korean boy band formed by Big Hit Entertainment. Consisting of seven members: RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook.",
      spotifyLink: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX", // BTS Spotify link
    },
    {
      image: Banner2,
      title: "J-Hope",
      description:
        "Jung Ho-seok (정호석), better known as J-Hope, is a rapper, dancer, and songwriter in BTS. He has also released solo works, including the mixtape 'Hope World'.",
      spotifyLink:
        "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy?si=u5CBBpMpTEumGuJ_kpU4wA", // J-Hope Spotify link
    },
    {
      image: Banner3,
      title: "Jimin",
      description:
        "Park Ji-min (박지민), known mononymously as Jimin, is a vocalist and dancer in BTS. He is celebrated for his powerful vocal range and dynamic dance performances.",
      spotifyLink:
        "https://open.spotify.com/artist/1oSPZhvZMIrWW5I41kPkkY?si=49a7038147884b48", // Jimin Spotify link
    },
    {
      image: Banner4,
      title: "Jin",
      description:
        "Kim Seok-jin (김석진), known as Jin, is a vocalist and visual of BTS. He has contributed to BTS's discography with his solo song 'Epiphany' among others.",
      spotifyLink:
        "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV?si=5d64968ac33b45ef", // Jin Spotify link
    },
    {
      image: Banner5,
      title: "Jungkook",
      description:
        "Jeon Jung-kook (전정국), known as Jungkook, is the youngest member and main vocalist of BTS. His solo works include 'Euphoria' and 'My Time'.",
      spotifyLink:
        "https://open.spotify.com/artist/6HaGTQPmzraVmaVxvz6EUc?si=FRsCRS0dR7G0VPabVWCcMg", // Jungkook Spotify link
    },
    {
      image: Banner6,
      title: "RM",
      description:
        "Kim Nam-joon (김남준), known as RM, is the leader and main rapper of BTS. He has released solo works such as the mixtapes 'RM' and 'Mono'.",
      spotifyLink:
        "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs?si=_29dlguKQG2Q_iiY3oGbbQ", // RM Spotify link
    },
    {
      image: Banner7,
      title: "Suga",
      description:
        "Min Yoon-gi (민윤기), known as Suga or Agust D, is a rapper, songwriter, and producer in BTS. He has released solo works including the mixtape 'Agust D'.",
      spotifyLink:
        "https://open.spotify.com/artist/5RmQ8k4l3HZ8JoPb4mNsML?si=cyIVd7wBRNSohRIQqGV9vA", // Suga Spotify link
    },
    {
      image: Banner8,
      title: "V",
      description:
        "Kim Tae-hyung (김태형), known as V, is a vocalist in BTS. He has contributed to BTS's sound with his solo songs like 'Singularity' and 'Stigma'.",
      spotifyLink:
        "https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK?si=3d467ab9c424459a", // V Spotify link
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

  const openSpotifyLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner__slide">
            <img
              src={banner.image}
              alt={banner.title}
              className="banner__image"
            />
            <div className="banner__contents">
              <h1 className="banner__title">{banner.title}</h1>
              <div className="banner__buttons">
                <button
                  className="banner__button"
                  onClick={() => openSpotifyLink(banner.spotifyLink)}
                >
                  Listen on Spotify
                </button>
                <button
                  className="banner__button"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@MAMAMOO_OFFICIAL",
                      "_blank"
                    )
                  }
                >
                  Watch on YouTube
                </button>
              </div>
              <p className="banner__description">{banner.description}</p>
            </div>
            <div className="banner__cover"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
