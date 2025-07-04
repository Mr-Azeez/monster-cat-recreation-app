import { useEffect, useState } from "react";
import { BsPlay } from "react-icons/bs";
import "./Section2.css";
import MonsterCat from "../../assets/MonstercCat";
import {
  FaApple,
  FaBandcamp,
  FaShareAlt,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const albumID = "40Yky457gNkU3chdZUIoTY";

function Section2() {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const tokenRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/token`
      );
      const { access_token } = await tokenRes.json();

      const response = await fetch(
        `https://api.spotify.com/v1/albums/${albumID}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = await response.json();
      setAlbum(data);
    };
    fetchAlbum();
  }, []);

  function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function playOnYoutube(track){
    const query = `${track.name} ${track.artists[0].name}`.replace(/\s+/g, '+');
    const searchUrl = `https://www.youtube.com/results?search_query=${query}`;
    window.open(searchUrl, '_blank');
  }

  if (!album) {
    return <div>Loading...</div>;
  }

  // console.log(album.tracks.href);

  return (
    <div className="section2">
      <div className="stream-platforms">
        <h1>Stream It Your Way</h1>
        <ul>
          <li>
            <a href="https://player.monstercat.app/release/MCLP017">
              <MonsterCat />
            </a>
          </li>
          <li>
            <a
              href="https://monstercatmedia.bandcamp.com/album/level-days"
              target="_blank"
            >
              <FaBandcamp size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/monstercat/sets/conro-level-days"
              target="_blank"
            >
              <FaSoundcloud size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/ca/album/level-days/1508531211"
              target="_blank"
            >
              <FaApple size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=7nObtWENgxA&list=PLyBpB3ighZijdaq0QsA77iQVvE39gJ9-U&index=2&t=0s"
              target="_blank"
            >
              <FaYoutube size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/playlist/4vM8ONc8HQ9odCaEZTEv89?si=7DJVqY5dTJm6rfylntpAHg&nd=1&dlsi=5b52de8f2d504548"
              target="_blank"
            >
              <FaSpotify size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="track-list">
        <h1>Track List</h1>
        <table>
          <tbody>
            {album.tracks.items.map((track) => (
              <tr key={track.id}>
                <td className="track-number">{track.track_number}</td>
                <td>
                  <button
                    onClick={() =>
                      playOnYoutube(track)
                    }
                  >
                    <BsPlay size={30} className="play-icon" />
                  </button>
                  <div className="track-title">
                    {track.name}
                    <span>{track.artists.map((a) => a.name).join(", ")}</span>
                  </div>
                </td>
                <td className="track-duration">
                  {formatDuration(track.duration_ms)}
                </td>
                <td>
                  <FaShareAlt size={18} className="share-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="underline" />
    </div>
  );
}

export default Section2;
