import { PlanetInfo } from "@/types/types";

import moonImg from "@/assets/images/destination/image-moon.png";
import titanImg from "@/assets/images/destination/image-titan.png";
import europaImg from "@/assets/images/destination/image-europa.png";
import marsImg from "@/assets/images/destination/image-mars.png";
export enum PlanetsIndex {
  MOON,
  TITAN,
  EUROPA,
  MARS,
}

export const PLANETS: Array<PlanetInfo> = [
  {
    name: "moon",
    url: moonImg.src,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    travelTime: "3 days",
    distance: "384,400 km",
  },
  {
    name: "titan",
    url: titanImg.src,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    travelTime: "7 years",
    distance: "1.6 BIL. km",
  },
  {
    name: "europa",
    url: europaImg.src,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    travelTime: "3 years",
    distance: "628 MIL. km",
  },
  {
    name: "mars",
    url: marsImg.src,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    travelTime: "9 months",
    distance: "225 MIL. km",
  },
];
