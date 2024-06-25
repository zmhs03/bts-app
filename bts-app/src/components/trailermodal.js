import React from "react";
import "../styles/trailerModal.css";

const trailermodal = ({ videoId, onClose }) => {
  return (
    <>
      <div className="trailer-modal-backdrop" onClick={onClose} />
      <div className="trailer-modal">
        {videoId && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <button className="trailer-modal__close" onClick={onClose}>
          ✕
        </button>
      </div>
    </>
  );
};

export default trailermodal;
