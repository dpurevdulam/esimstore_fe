import React from "react";
import Svg, { Path } from "react-native-svg";

function Close() {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#F7F7F7"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 12.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L12 13.06l-2.47 2.47c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L10.94 12 8.47 9.53a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0L12 10.94l2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.06 12l2.47 2.47z"
       />
    </Svg>
  );
}

export default Close;
