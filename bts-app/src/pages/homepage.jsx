import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Slider from "../components/slider";
import Footer from "../components/footer";

const btsVideos = [
  { videoId: "kXpOEzNZ8hQ", title: "Yet to Come" },
  { videoId: "ymaIzkXY8nQ", title: "Butter (feat. Megan Thee Stallion)" },
  { videoId: "CuklIb9d3fI", title: "Permission to Dance" },
  { videoId: "ilqQJrbXghQ", title: "Butter (Cooler Remix)" },
  { videoId: "YLXfyHsfFz0", title: "Butter (Hotter Remix)" },
  { videoId: "WMweEpGlu_U", title: "Butter" },
  { videoId: "zFT3f9biz68", title: "Film Out" },
  { videoId: "-5q5mZbe3V8", title: "Life Goes On" },
  { videoId: "gdZLi9oWNZg", title: "Dynamite" },
  { videoId: "0lapF4DQPKQ", title: "Black Swan" },
  { videoId: "gwMa6gpoE9I", title: "ON" },
  { videoId: "LmApDbvNCXg", title: "Outro: Ego" },
  { videoId: "PV1gCvzpSy0", title: "Interlude: Shadow" },
  { videoId: "eaUpme4jalE", title: "Lights" },
  {
    videoId: "XsX3ATc3FbA",
    title: "Boy With Luv (feat. Halsey)",
  },
  { videoId: "M9Uy0opVF3s", title: "Intro: Persona" },
  { videoId: "CxnJf0tWu48", title: "Airplane pt.2-Japanese ver." },
  { videoId: "K1scjjbfNsk", title: "IDOL (feat. Nicki Minaj" },
  { videoId: "pBuZEGYXA6E", title: "IDOL" },
  { videoId: "fIkZOLsnoqY", title: "Epiphany" },
  { videoId: "D_6QmL6rExk", title: "FAKE LOVE" },
  { videoId: "p8npDG2ulKQ", title: "Intro: Singularity" },
  { videoId: "kX0vO4vlJuU", title: "Euphoria" },
  { videoId: "kTlv5_Bs8aw", title: "MIC Drop (Steve Aoki Remix)" },
  { videoId: "MBdVXkSdhwU", title: "DNA" },
  { videoId: "BEMaH9Sm3lQ", title: "Intro: Serendipity" },
  { videoId: "xEeFrLSkMm8", title: "Spring Day" },
  { videoId: "9DwzBICPhdM", title: "Not Today" },
  { videoId: "hmE9f-TEutc", title: "Blood Sweat & Tears" },
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
      <Slider title="Music Videos" videos={btsVideos} />
      <Slider title="BangtanTV" videos={bangtanTvVideos} />
      <Slider title="Jin" videos={btsSoloProjects.jin} />
      <Slider title="Suga" videos={btsSoloProjects.suga} />
      <Slider title="J-Hope" videos={btsSoloProjects.jhope} />
      <Slider title="RM" videos={btsSoloProjects.rm} />
      <Slider title="Jimin" videos={btsSoloProjects.jimin} />
      <Slider title="V" videos={btsSoloProjects.v} />
      <Slider title="Jungkook" videos={btsSoloProjects.jungkook} />
      <Footer />
    </div>
  );
};

export default homepage;
