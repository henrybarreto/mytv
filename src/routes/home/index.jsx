import { Link } from "preact-router/match";

import channels from "../../../channels.json";
import style from "./style.css";

const Home = () => {
  return (
    <>
      <div class={style.home}>
        <header class={style.header}>
          <aside class={style.header_left}>
            <img class={style.logo} src="../../assets/logo.svg" alt="MyTV's Logo" />
          </aside>
          <aside class={style.header_right}>
            <Link class={style.console} href="/console">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z" />
              </svg>
            </Link>
          </aside>
        </header>

        <main class={style.main}>
          <span class={style.title}>Channels</span>
          <ul class={style.channels}>
            {channels.map((channel) => (
              <li>
                <Link class={style.channel} href={`/channel/${channel.number}`}>
                  <img
                    class={style.icon}
                    src={channel.icon}
                    alt={channel.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Home;
