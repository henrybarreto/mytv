import http from "http";
import pty from "node-pty";
import express from "express";
import cors from "cors";

import { Server } from "socket.io";

export default function terminal() {
    const app = express();

    app.use(
      cors({
        origin: "http://localhost:8080",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      })
    );

    const server = http.createServer(app);
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:8080",
      },
    });

    io.on("connection", (socket) => {
      console.info("client connected");
      // TODO: increase cals and rows.
      const term = pty.spawn("bash", [], {
        name: "xterm-color",
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: process.env,
      });

      term.onData((output) => {
        io.emit("output", output);
      });

      term.onExit(() => {
        console.info("terminal closed");
        socket.disconnect();
      });

      socket.on("input", (input) => {
        term.write(input);
      });

      socket.on("disconnect", () => {
        console.info("client disconnected");

        term.kill();
      });
    });

    server.listen(3000, () => {
      console.info("Terminal server on *:3000");
    });
}
