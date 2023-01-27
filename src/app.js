import { Router } from "preact-router";

import Home from "./routes/home/index.jsx";
import Channel from "./routes/channel/index.jsx";

const channels =  [ // TODO: get channels from a API.
    {
        "stream": "https://cdn.jmvstream.com/w/LVW-8155/ngrp:LVW8155_41E1ciuCvO_all/playlist.m3u8",
        "icon": "https://i.imgur.com/xbkYDeg.png",
        "name": "1001 Noites (720p) [Not 24/7]",
        "number": 1
    },
    {
        "stream": "https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8",
        "icon": "https://i.imgur.com/wULpnYR.png",
        "name": "All Sports (720p)",
        "number": 2
    },
    {
        "stream": "https://live-hls-v3-aje.getaj.net/AJE-V3/index.m3u8",
        "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/512px-Aljazeera_eng.svg.png",
        "name": "Al Jazeera English (1080p)",
        "number": 3
    }
]

const App = () => (
  <div id="app">
    <Router>
      <Home path="/" channels={channels} />
      <Channel path="/channel/:channel" channels={channels} />
    </Router>
  </div>
);

export default App;
