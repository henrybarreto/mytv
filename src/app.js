import { Router } from "preact-router";
import {useEffect, useState} from "preact/hooks";

import Home from "./routes/home/index.jsx";
import Channel from "./routes/channel/index.jsx";
import parser from "iptv-playlist-parser";
import axios from "axios";

import envs from "../envs.json";

const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("channels") === "" || localStorage.getItem("channels") == null) {
      axios.get(envs.playlist).then((response) => {
        let channels = parser.parse(response.data).items.map((item, index) => {
          console.log(item)
          return {
            stream: item.url,
            icon: item.tvg.logo,
            name: item.name,
            number: index+1,
          };
        });

        setChannels(channels);
        localStorage.setItem("channels", JSON.stringify(channels));
        setLoaded(true);
      })
    } else {
      setChannels(JSON.parse(localStorage.getItem("channels")));
      setLoaded(true);
    }
  })

  return (
      <div id="app">
        {isLoaded &&
          <Router>
            <Home path="/" channels={channels} />
            <Channel path="/channel/:channel" channels={channels} />
          </Router>
        }
      </div>
  );
}

export default App;
