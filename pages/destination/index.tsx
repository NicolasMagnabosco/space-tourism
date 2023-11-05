//react
import { useState } from "react";
// styles
import styles from "./Destination.module.css";
// constants
import { PlanetsIndex, PLANETS } from "@/constants/planets";
// components
import PlanetInfo from "@/components/destination/planetInfo/PlanetInfo";

import PlanetsList from "@/components/destination/PlanetsList/PlanetsList";
export default function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState<PlanetsIndex>(
    PlanetsIndex.MOON
  );
  const updateCurrentPlanet = (planet: PlanetsIndex) => {
    setCurrentPlanet(planet);
  };
  return (
    <div className={`page ${styles.page}`}>
      <h1 className="page-heading">
        02 <span>LEARN ABOUT YOUR DESTINATION</span>
      </h1>
      <div className={styles["page-container"]}>
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
        <section
          aria-labelledby="planet-info"
          className={styles["page-container__right"]}
        >
          <nav className={styles.navbar}>
            <PlanetsList
              currentPlanet={currentPlanet}
              updateCurrentPlanet={updateCurrentPlanet}
            />
          </nav>
          <PlanetInfo currentPlanet={currentPlanet} />
        </section>
      </div>
    </div>
  );
}
