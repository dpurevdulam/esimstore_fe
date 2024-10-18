import React from "react";
import Svg, { Path } from "react-native-svg";

function SimCard() {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#B888F8"
        d="M18.561 7.561L14.44 3.44A1.5 1.5 0 0013.379 3H8c-2 0-3 1-3 3v12c0 2 1 3 3 3h8c2 0 3-1 3-3V8.622a1.5 1.5 0 00-.439-1.061zM11.25 17.7c0 .17-.13.3-.3.3H9.5c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5h1.45c.17 0 .3.13.3.3v7.4zM16 16.5c0 1-.5 1.5-1.5 1.5h-1.45a.297.297 0 01-.3-.3v-2.65a.3.3 0 01.3-.3h2.65c.185 0 .3.16.3.3v1.45zm0-3.55c0 .14-.115.3-.3.3h-2.65a.3.3 0 01-.3-.3V10.3c0-.161.125-.3.3-.3h1.45c1 0 1.5.5 1.5 1.5v1.45z"
      ></Path>
    </Svg>
  );
}

export default SimCard;
