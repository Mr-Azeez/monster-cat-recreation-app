import React from "react";
import "./Footer.css";
import {
  FaApple,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLongArrowAltRight,
  FaSpotify,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MonsterCatIcon from "../../assets/MonsterCatIcon";
import MonsterCatTriller from "../../assets/MonsterCatTriller";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <nav className="top-footer">
          <ul>
            <li>
              <a href="https://www.monstercat.com/about">About MonsterCat</a>
            </li>
            <li>
              <a href="https://www.monstercat.com/contact-us">Contact us</a>
            </li>
            <li>
              <a href="https://www.monstercat.com/careers">Careers</a>
            </li>
            <li>
              <a href="https://www.monstercat.com/news">News</a>
            </li>
            <li>
              <a href="https://www.monstercat.com/press">Press</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.monstercat.com/terms-of-service">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="https://www.monstercat.com/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
          <div>
            <p className="news-title">MonsterCat News</p>
            <p className="news-desc">
              Don't miss a thing, stay up to date with the latest from us.
            </p>
            <form action="">
              <input type="text" placeholder="Enter email" />
              <button type="submit">
                <FaLongArrowAltRight />
              </button>
            </form>
          </div>
        </nav>
        <hr />
        <div className="bottom-footer">
          <p>2011 - 2025 © Monstercat, All Rights Reserved</p>
          <div>
            <ul>
              <li>
                <a href="" target="_blank">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaSpotify />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaApple />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaTwitch />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaDiscord />
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  <MonsterCatTriller />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <MonsterCatIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-acknowledgment1">
          <small>
            We acknowledge with gratitude the traditional, ancestral and unceded
            land of the Coast Salish peoples, including the territories of the
            Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
            (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
            Monstercat's Vancouver HQ stands.
          </small>
        </p>
        <p className="footer-acknowledgment2">
          <small>
            We acknowledge the unceded and ancestral territories of the
            Gabrielino/Tongva peoples on which our LA team live and work.
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
