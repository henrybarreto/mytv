import { useEffect, useState } from "preact/hooks";
import Details from "../../components/details/index.jsx";

import style from "./style.css";

const Channel = (props) => {
  if (props.channel <= 0) {
    console.error("channel invalid");
  }

  const [isFound, setFound] = useState(true);

  const channel = props.channels[props.channel - 1];
  if (channel === {} || channel === undefined) {
    setFound(false);
  }

  const [isError, setError] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isDetailsOpen, setDetailOpen] = useState(false);

  const onClick = () => {
    setDetailOpen(!isDetailsOpen);

    console.info("video clicked");
    console.debug(isDetailsOpen);
  };

  useEffect(() => {
    try {
      console.info("loading the channel");
      const video = document.getElementById("video");

      const hls = new Hls();
      hls.loadSource(channel.stream);
      hls.attachMedia(video);
      hls.on("hlsError", (event, data) => {
        console.error("hls error");
        console.debug(data);

        setLoaded(true);
        setError(true);
      });

      video.oncanplay = () => {
        video
          .play()
          .then(() => {
            console.info("channel played");

            setLoaded(true);
            setError(false);
          })
          .catch((error) => {
            console.error("channel not played");
            console.error(error);

            setLoaded(false);
            setError(true);
          });
      };
      video.onabort = () => {
        console.error("channel aborted");
        setLoaded(false);
        setError(true);
      };
    } catch (error) {
      console.error("failed to play the video");
      console.error(error);

      setLoaded(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isDetailsOpen) {
        setDetailOpen(false);
      }
    }, 3000);
  }, [isDetailsOpen]);

  return (
    <div class={style.screen}>
      {isDetailsOpen && (
        <Details
          icon={channel.icon}
          name={channel.name}
          number={channel.number}
        />
      )}
      {!isFound && (
          <>
            <div class={style.error} />
            <span class={style.error_message}>Channel not found</span>
          </>
      )}
      {(isError && isFound) && (
          <>
            <div class={style.error} />
            <span class={style.error_message}>Could not loading the channel</span>
          </>
      )}
      {(!isLoaded && !isError && isFound) && <div class={style.loader} />}

      <video id="video" class={style.video} autoPlay onClick={onClick} />
    </div>
  );
};

export default Channel;
