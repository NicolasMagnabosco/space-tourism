// styles
import styles from "./PlanetLink.module.css";
// types
import { PlanetName } from "@/types/types";
// components
import { PLANETS, PlanetsIndex } from "@/constants/planets";

interface Props {
  name: PlanetName;
  planet: PlanetsIndex;
  updateCurrentPlanet: (index: number) => void;
  currentPlanet: number;
}

export default function PlanetLink({
  name,
  planet,
  updateCurrentPlanet,
  currentPlanet,
}: Props) {
  return (
    <li className={styles.item}>
      <p
        className={`${styles.name} ${
          PLANETS[currentPlanet].name === name && styles["name--active"]
        }`}
        onClick={() => updateCurrentPlanet(planet)}
      >
        {name.toUpperCase()}
      </p>
    </li>
  );
}
