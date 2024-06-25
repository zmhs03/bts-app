import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Slider from "../components/slider";
import Footer from "../components/footer";

const btsVideos = [
  { videoId: "pBuZEGYXA6E", title: "Epiphany" },
  { videoId: "C7gq8ZPuGwY", title: "Black Swan" },
  { videoId: "LIlMTg6LyF0", title: "Boy With Luv (feat. Halsey)" },
  // Add more BTS music videos as needed
];

const btsSoloProjects = {
  jin: [
    { videoId: "VIDEO_ID", title: "Jin's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "Jin's Solo Project 2" },
    // Add Jin's solo projects
  ],
  suga: [
    { videoId: "VIDEO_ID", title: "Suga's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "Suga's Solo Project 2" },
    // Add Suga's solo projects
  ],
  jhope: [
    { videoId: "VIDEO_ID", title: "J-Hope's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "J-Hope's Solo Project 2" },
    // Add J-Hope's solo projects
  ],
  rm: [
    { videoId: "VIDEO_ID", title: "RM's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "RM's Solo Project 2" },
    // Add RM's solo projects
  ],
  jimin: [
    { videoId: "VIDEO_ID", title: "Jimin's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "Jimin's Solo Project 2" },
    // Add Jimin's solo projects
  ],
  v: [
    { videoId: "VIDEO_ID", title: "V's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "V's Solo Project 2" },
    // Add V's solo projects
  ],
  jungkook: [
    { videoId: "VIDEO_ID", title: "Jungkook's Solo Project 1" },
    { videoId: "VIDEO_ID", title: "Jungkook's Solo Project 2" },
    // Add Jungkook's solo projects
  ],
};

const bangtanTvVideos = [
  { videoId: "1kKuGYEtisw", title: "BTS V (Taehyung) Funny Moments" },
  { videoId: "s6Li-dQ0pN4", title: "BTS Jimin (지민) Funny & Cute Moments" },
  { videoId: "9EzvLh4-3Qg", title: "BTS RM (Namjoon) English Compilation" },
  // Add more BangtanTV videos as needed
];

const homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider title="BTS's Music Videos" videos={btsVideos} />
      <Slider title="BangtanTV" videos={bangtanTvVideos} />
      <Slider title="Jin's Solo Projects" videos={btsSoloProjects.jin} />
      <Slider title="Suga's Solo Projects" videos={btsSoloProjects.suga} />
      <Slider title="J-Hope's Solo Projects" videos={btsSoloProjects.jhope} />
      <Slider title="RM's Solo Projects" videos={btsSoloProjects.rm} />
      <Slider title="Jimin's Solo Projects" videos={btsSoloProjects.jimin} />
      <Slider title="V's Solo Projects" videos={btsSoloProjects.v} />
      <Slider
        title="Jungkook's Solo Projects"
        videos={btsSoloProjects.jungkook}
      />
      <Footer />
    </div>
  );
};

export default homepage;
