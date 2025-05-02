import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PlayVideo = (props:SvgProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2 13.05V4.95L12.6 9L7.2 13.05ZM9 0C4.02705 0 0 4.02705 0 9C0 13.9729 4.02705 18 9 18C13.9729 18 18 13.9729 18 9C18 4.02705 13.9729 0 9 0Z"
      fill="#0961F5"
    />
  </Svg>
);
export default PlayVideo;
