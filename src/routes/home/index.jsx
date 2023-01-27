import { Link } from "preact-router/match";

import style from "./style.css";

const Home = (props) => {
  const channels = props.channels;

  return (
    <>
      <div class={style.home}>
        <header class={style.header}>
          <aside class={style.header_left}>
            <img class={style.logo} src="../../../assets/logo.svg" alt="MyTV's Logo" />
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
