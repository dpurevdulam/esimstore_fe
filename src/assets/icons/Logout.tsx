import React from "react";
import Svg, { Path } from "react-native-svg";

function Logout() {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#B888F8"
        d="M21 6v12c0 2-1 3-3 3h-6c-2 0-3-1-3-3v-5.25h5.189l-1.72 1.72a.75.75 0 001.06 1.061l3-3a.749.749 0 00.162-.817.749.749 0 00-.162-.244l-3-3a.75.75 0 10-1.061 1.061l1.72 1.72H9V6c0-2 1-3 3-3h6c2 0 3 1 3 3zM3 11.25a.75.75 0 000 1.5h6v-1.5H3z"
      ></Path>
    </Svg>
  );
}

export default Logout;
