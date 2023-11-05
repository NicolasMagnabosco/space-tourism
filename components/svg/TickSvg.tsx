import * as React from "react";
import { SVGProps } from "react";
const TickSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="m760 380.4-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z" />
  </svg>
);
export default TickSvg;
