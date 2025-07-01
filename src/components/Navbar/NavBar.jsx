import React from "react";
import {
  FaBars,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPlay,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./NavBar.css";
import MonsterCatIcon from "../../assets/MonsterCatIcon";

function NavBar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <a href="https://www.monstercat.com/" target="_blank">
            <img
              src="https://storage.googleapis.com/monstercat/monstercat-logo.webp"
              alt=""
            />
          </a>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/monstercat/#" target="_blank">
              <FaInstagram size={18} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@monstercat" target="_blank">
              <FaTiktok size={18} />
            </a>
          </li>
          <li>
            <a href="https://x.com/monstercat" target="_blank">
              <FaXTwitter size={18} />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/monstercat" target="_blank">
              <FaTwitch size={18} />
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/monstercat" target="_blank">
              <FaFacebook size={18} />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/monstercat" target="_blank">
              <FaDiscord size={18} />
            </a>
          </li>
          <li>
            <a href="https://player.monstercat.app/">
              <MonsterCatIcon />
            </a>
          </li>
        </ul>
        <div className="hamburger-button">
          <FaBars size={24} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
