import { Router } from "preact-router";

import Home from "./routes/home/index.jsx";
import Channel from "./routes/channel/index.jsx";
import Splash from "./routes/splash/index.jsx";
import Console from "./routes/console/index.jsx";

const App = () => (
  <div id="app">
    <Router>
      <Splash path="/" />
      <Home path="/home" />
      <Channel path="/channel/:channel" />
      <Console path="/console" />
    </Router>
  </div>
);

export default App;
