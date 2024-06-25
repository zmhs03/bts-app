import React, { useState } from "react"; // Import React and the useState hook
import VideoPlayer from "./videoplayer"; // Import the VideoPlayer component
import "../styles/mediaSlider.css"; // Import CSS for styling the component

// Cards component definition
const cards = ({ isLarge, media }) => {
  // State to control the visibility of the video player
  const [showVideo, setShowVideo] = useState(false);

  // Function to handle playing the video
  const handlePlay = () => {
    setShowVideo(true);
  };

  // Function to handle closing the video player
  const handleClose = () => {
    setShowVideo(false);
  };

  return React.createElement(
    "div",
    { className: `card ${isLarge ? "card-large" : ""}` },
    showVideo
      ? // If showVideo is true, render the VideoPlayer component
        React.createElement(VideoPlayer, {
          videoId: media.videoId,
          onClose: handleClose,
        })
      : // If showVideo is false, render the thumbnail and title
        React.createElement(
          "div",
          null,
          React.createElement("img", {
            className: "card-image",
            src: `https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`,
            alt: media.title,
            onClick: handlePlay, // On click, call the handlePlay function
          }),
          React.createElement("h4", { className: "card-title" }, media.title)
        )
  );
};

export default cards; // Export the Cards component as the default export
