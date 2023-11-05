// styles
import styles from "./PlanetsList.module.css";
// constants
import { PLANETS, PlanetsIndex } from "@/constants/planets";
// components
import PlanetLink from "./PlanetLink/PlanetLink";

interface Props {
  currentPlanet: PlanetsIndex;
  updateCurrentPlanet: (planet: PlanetsIndex) => void;
}

export default function PlanetsList({
  currentPlanet,
  updateCurrentPlanet,
}: Props) {
  return (
    <ul className={styles["planets-list"]}>
      {PLANETS.map((p, index) => {
        return (
          <PlanetLink
            key={index}
            name={p.name}
            planet={index}
            currentPlanet={currentPlanet}
            updateCurrentPlanet={updateCurrentPlanet}
          />
        );
      })}
    </ul>
  );
}
