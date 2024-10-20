import React from "react";
import Svg, { Path } from "react-native-svg";

function InfoCircle() {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#B888F8"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.5a.75.75 0 01-1.5 0v-4.571a.75.75 0 011.5 0V16.5zm-.73-7a1.005 1.005 0 01-1.005-1c0-.552.443-1 .995-1h.01a1 1 0 110 2z"
      ></Path>
    </Svg>
  );
}

export default InfoCircle;
