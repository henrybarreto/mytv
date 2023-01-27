import * as fs from "fs";
import parser from "iptv-playlist-parser";

const playlist = fs.readFileSync("channels.m3u", "utf8");
const parsed = parser.parse(playlist);

let number = 1;
let list = parsed.items.map((item) => {
  return {
    stream: item.url,
    icon: item.tvg.logo,
    name: item.name,
    number: number++,
  };
});

fs.writeFileSync("channels.json", JSON.stringify(list, null, 2));