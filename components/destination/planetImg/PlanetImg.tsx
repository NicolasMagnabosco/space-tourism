// styles
import styles from "./PlanetImg.module.css";
// components
import { PLANETS, PlanetsIndex } from "@/constants/planets";

export default function PlanetImg({
  currentPlanet,
}: {
  currentPlanet: PlanetsIndex;
}) {
  return (
    <section
      aria-describedby="planet-image"
      className={styles["page-container__left"]}
    >
      <img
        className={styles["planet-img"]}
        src={PLANETS[currentPlanet].url}
        alt="planet-mage"
      />
    </section>
  );
}
