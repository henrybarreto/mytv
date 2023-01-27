import { Link } from "preact-router/match";
import style from "./style.css";

const Details = (props) => {
  const icon = props.icon;
  const number = props.number;
  const name = props.name;
  return (
    <>
      <div class={style.details}>
        <section class={style.details_left}>
          <img class={style.icon} src={icon} alt={name} />
          <span class={style.number}>{number}</span>
          <span class={style.name}>{name}</span>
        </section>
        <section class={style.details_right}>
          <Link href="/home">
            <img class={style.logo} src="../../../assets/logo.svg" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default Details;
