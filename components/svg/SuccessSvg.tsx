import * as React from "react";
import { SVGProps } from "react";
const SuccessSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px}"
        }
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g
        id="E408_Success_Media_media_player_multimedia"
        data-name="E408, Success, Media, media player, multimedia"
      >
        <circle cx={256} cy={256} r={246} className="cls-1" />
        <path d="m115.54 268.77 85.13 85.13 195.79-195.8" className="cls-1" />
      </g>
    </g>
  </svg>
);
export default SuccessSvg;
