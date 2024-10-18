import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

function Facebook() {
  return (
    <Svg
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <Rect
        width="48"
        height="48"
        fill="#0866FF"
        fillOpacity="0.15"
        rx="24"
      ></Rect>
      <G clipPath="url(#clip0_19_616)">
        <Path
          fill="#0866FF"
          d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V24H21.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.299v3.323c-.283-.03-.775-.044-1.386-.044-1.967 0-2.728.745-2.728 2.683V24h3.92l-.673 3.667h-3.247v8.245c5.942-.717 10.547-5.777 10.547-11.912H36z"
        ></Path>
        <Path
          fill="#fff"
          d="M28.7 27.667L29.374 24h-3.92v-1.297c0-1.938.76-2.683 2.728-2.683.61 0 1.103.015 1.386.044v-3.323c-.537-.15-1.848-.299-2.609-.299-4.01 0-5.858 1.893-5.858 5.978V24h-2.474v3.667H21.1v7.98a12.02 12.02 0 004.352.265v-8.245H28.7z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_19_616">
          <Path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(12 12)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Facebook;
