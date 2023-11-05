import { TechPhase } from "@/types/types";

import launchVehicleImg from "@/assets/images/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleImg from "@/assets/images/technology/image-space-capsule-landscape.jpg";
import spaceportImg from "@/assets/images/technology/image-spaceport-landscape.jpg";

export enum TechPhasesIndex {
  LAUNCH_VEHICLE,
  SPACEPORT,
  SPACE_CAPSULE,
}
export const TECH_PHASES: Array<TechPhase> = [
  {
    name: "Lauch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: launchVehicleImg.src,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: spaceportImg.src,
  },

  {
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: spaceCapsuleImg.src,
  },
];
