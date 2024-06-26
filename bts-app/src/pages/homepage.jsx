import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Slider from "../components/slider";
import Footer from "../components/footer";

const btsVideos = [
  { videoId: "kXpOEzNZ8hQ", title: "FAKE LOVE" },
  { videoId: "ymaIzkXY8nQ", title: "MIC Drop (Steve Aoki Remix)" },
  { videoId: "CuklIb9d3fI", title: "Boy With Luv (feat. Halsey)" },
  { videoId: "ilqQJrbXghQ", title: "Black Swan" },
  { videoId: "YLXfyHsfFz0", title: "IDOL" },
  { videoId: "WMweEpGlu_U", title: "Life Goes On" },
  { videoId: "zFT3f9biz68", title: "DNA" },
  { videoId: "2N-Fsa9Evo0", title: "Dynamite" },
  { videoId: "RvcP6V4h_q4", title: "Spring Day" },
  { videoId: "yIvb4csSgcs", title: "Blood Sweat & Tears" },
  { videoId: "-5q5mZbe3V8", title: "Run BTS" },
  { videoId: "BflFNMl_UWY", title: "We Are Bulletproof: The Eternal" },
  { videoId: "BV2FdDmGiW0", title: "Make It Right" },
  { videoId: "gdZLi9oWNZg", title: "Fire" },
  { videoId: "0lapF4DQPKQ", title: "ON" },
  { videoId: "gwMa6gpoE9I", title: "Film out" },
  { videoId: "LmApDbvNCXg", title: "Butter" },
  { videoId: "PV1gCvzpSy0", title: "Stay Gold" },
  { videoId: "CInMhOtzb3U", title: "Permission to Dance" },
  { videoId: "eaUpme4jalE", title: "Lights" },
  { videoId: "62E_xyj_oDA", title: "Not Today" },
  { videoId: "XsX3ATc3FbA", title: "Save ME" },
  { videoId: "M9Uy0opVF3s", title: "Serendipity (Full Length Edition)" },
  { videoId: "CxnJf0tWu48", title: "Epiphany" },
  { videoId: "K1scjjbfNsk", title: "Singularity" },
  { videoId: "pBuZEGYXA6E", title: "Euphoria" },
  { videoId: "fIkZOLsnoqY", title: "No More Dream" },
  { videoId: "D_6QmL6rExk", title: "Danger" },
  { videoId: "7C2z4GqqS5E", title: "Just One Day" },
  { videoId: "p8npDG2ulKQ", title: "War of Hormone" },
  { videoId: "kX0vO4vlJuU", title: "I NEED U" },
  { videoId: "kTlv5_Bs8aw", title: "Dope" },
  { videoId: "MBdVXkSdhwU", title: "Run" },
  { videoId: "BEMaH9Sm3lQ", title: "Young Forever" },
  { videoId: "xEeFrLSkMm8", title: "Fire" },
  { videoId: "nKDppUjuvdM", title: "Save ME" },
  { videoId: "9DwzBICPhdM", title: "Blood Sweat & Tears" },
  { videoId: "hmE9f-TEutc", title: "Spring Day" },
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
