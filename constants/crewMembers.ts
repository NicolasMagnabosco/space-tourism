import { CrewMember } from "@/types/types";

import commanderImg from "@/assets/images/crew/image-douglas-hurley.png";
import pilotImg from "@/assets/images/crew/image-victor-glover.png";
import missionSpecialistImg from "@/assets/images/crew/image-mark-shuttleworth.png";
import flightEngineerImg from "@/assets/images/crew/image-anousheh-ansari.png";

export enum CrewMembersIndex {
  COMMANDER,
  MISSION_SPEC,
  PILOT,
  FLIGHT_ENG,
}

export const CREW_MEMBERS: Array<CrewMember> = [
  {
    name: "Douglas Hurley",
    field: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: commanderImg.src,
  },
  {
    name: "Mark Shuttleworth",
    field: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: missionSpecialistImg.src,
  },
  {
    name: "Victor Glover",
    field: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: pilotImg.src,
  },
  {
    name: "Anousheh Ansari",
    field: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: flightEngineerImg.src,
  },
];
