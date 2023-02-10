import { Link } from "preact-router/match";

import style from "./style.css";

const Home = (props) => {
  const channels = props.channels;

  return (
    <>
      <div class={style.home}>
        <header class={style.header}>
          <div class={style.logo}>
            <img class={style.logo_img} src="../../../assets/logo_black.svg" alt="MyTV's Logo" />
          </div>
        </header>

        <main class={style.main}>
          <span class={style.title}>Channels</span>
          <ul class={style.channels}>
            {channels.map((channel) => (
              <li key={channel.number}>
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
