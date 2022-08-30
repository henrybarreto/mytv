import style from "./style.css";
import { useEffect } from "preact/hooks";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);
  return (
    <>
      <div class={style.splash}>
        <img class={style.logo} src="../../assets/logo.svg" alt="MyTV's Logo" />
      </div>
    </>
  );
};

export default Splash;
