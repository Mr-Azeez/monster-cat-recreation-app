import React from "react";
import "./MusicVideo.css";

function MusicVideo() {
  return (
    <div className="music-video-container">
      <h1>Music Video</h1>
      <div className="music-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7nObtWENgxA?si=sAtz2x7kGW0ik9cB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MusicVideo;
