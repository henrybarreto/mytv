import { useEffect } from "preact/hooks";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { io } from "socket.io-client";

import style from "./style.css";

const Console = () => {
  useEffect(() => {
    const term = new Terminal();
    const addon = new FitAddon();
    term.open(document.getElementById("terminal"));
    term.loadAddon(addon);
    addon.fit();

    const socket = io("ws://localhost:3000");
    socket.on("connect", () => {
      term.onData((input) => {
        socket.emit("input", input);
      });

      socket.on("output", (data) => {
        term.write(data);
      });
    });

  }, []);

  return (
    <>

      <div>
      <button class="button-2" role="button" ><a href="/home">Home</a></button>
      </div>
      <div id="terminal" class={style.terminal} />
      
      
    </>
  );
};

export default Console;
