import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors({
  origin: "https://mr-azeez.github.io/monster-cat-recreation-app"
}));

const Client_ID = process.env.SPOTIFY_CLIENT_ID;
const Client_Secret = process.env.SPOTIFY_CLIENT_SECRET;

console.log("Client ID:", Client_ID);
console.log("Client Secret:", Client_Secret ? "Exists" : "Missing");

app.get("/api/token", async (req, res) => {
  try {
    const auth = Buffer.from(`${Client_ID}:${Client_Secret}`).toString(
      "base64"
    );

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ grant_type: "client_credentials" }),
    });
    const data = await tokenRes.text();
    console.log("Raw Spotify Response:", data);
    try {
      const json = JSON.parse(data);
      res.json(json);
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      res
        .status(500)
        .json({ error: "Spotify returned non-JSON response", data });
    }
  } catch (err) {
    console.error("Token fetch failed:", err);
    res.status(500).json({ error: "Token fetch failed" });
  }
});
app.listen(3001, () => {
  console.log("Backend running at http://localhost:3001");
});
