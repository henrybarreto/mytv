import { useEffect } from "preact/hooks";

const HOME_KEY = 36;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const PLUS_KEY = 107;
const MINUS_KEY = 109;

const ZERO_KEY = 48;
const ONE_KEY = 49;
const TWO_KEY = 50;
const THREE_KEY = 51;
const FOUR_KEY = 52;
const FIVE_KEY = 53;
const SIX_KEY = 54;
const SEVEN_KEY = 55;
const EIGHT_KEY = 56;
const NINE_KEY = 57;

function isNumberKey(evt){
    return evt.keyCode >= ZERO_KEY && evt.keyCode <= NINE_KEY;
}

function isVolumeKey(evt){
    return evt.keyCode == PLUS_KEY || evt.keyCode == MINUS_KEY;
}

function isControlKey(evt) {
    return evt.keyCode == HOME_KEY || evt.keyCode == LEFT_KEY || evt.keyCode == RIGHT_KEY;
}

const Controls = () => {
  useEffect(() => {
    document.onkeydown = function (e) {
      console.debug(e);
    };
  }, []);

  return (
    <>
      <div id="controls"></div>
    </>
  );
};

export default Controls;
