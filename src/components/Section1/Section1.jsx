import React from "react";
import "./Section1.css";
import { BsPlay, BsShare } from "react-icons/bs";

function Section1() {
  return (
    <div className="album-intro">
        <div className="album-image">
          <div className="release-date">
            <span>Mr Spec</span> — Released June 22, 2025
          </div>
          <img
            src="https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/600.webp"
            alt=""
          />
        </div>
      <div className="album-details">
        <h1 className="text-stroke">LEVEL DAYS</h1>
        <p>CONRO</p>

        <a className="button" href="#">
          <BsPlay size="30" className="play-icon" />
          LISTEN NOW
        </a>
        <a href="#">
          <BsShare size={14} /> SHARE
        </a>
      </div>
    </div>
  );
}

export default Section1;
