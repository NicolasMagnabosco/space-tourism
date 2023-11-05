// styles
import styles from "./PlanetInfo.module.css";
// components
import { PLANETS, PlanetsIndex } from "@/constants/planets";
export default function PlanetInfo({
  currentPlanet,
}: {
  currentPlanet: PlanetsIndex;
}) {
  return (
    <section className={styles["planet-info"]} aria-labelledby="planet-info">
      <h2 className={styles["planet-info__name"]}>
        {PLANETS[currentPlanet].name}
      </h2>
      <p className={styles["planet-info__description"]}>
        {PLANETS[currentPlanet].description}
      </p>
      <div className={styles["planet-info-bottom"]}>
        <div className={styles["planet-info__block"]}>
          <p>AVG. DISTANCE</p>
          <p>{PLANETS[currentPlanet].distance}</p>
        </div>
        <div className={styles["planet-info__block"]}>
          <p>EST. TRAVEL TIME</p>
          <p>{PLANETS[currentPlanet].travelTime}</p>
        </div>
      </div>
    </section>
  );
}
