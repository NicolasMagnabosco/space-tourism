// react
import { useState } from "react";
// styles
import styles from "./Technology.module.css";
// constants
import { TECH_PHASES, TechPhasesIndex } from "@/constants/techPhases";
// components
import PhasesIndex from "@/components/technology/phasesIndex/PhasesIndex";
import PhasesInfo from "@/components/technology/phasesInfo/PhasesInfo";

export default function Technology() {
  const [currentPhase, setCurrentPhase] = useState<TechPhasesIndex>(
    TechPhasesIndex.LAUNCH_VEHICLE
  );
  const updateCurrentPhase = (phase: TechPhasesIndex) => {
    setCurrentPhase(phase);
  };
  return (
    <div className={`page ${styles.page}`}>
      <h1 className="page-heading">
        04 <span>CHECK OUT THE TECHNOLOGY BEHIND</span>
      </h1>
      <div className={styles["page-container"]}>
        <div className={styles["page-container__left"]}>
          <PhasesIndex
            currentPhase={currentPhase}
            updateCurrentPhase={updateCurrentPhase}
          />
          <PhasesInfo currentPhase={currentPhase} />
        </div>
        <section className={styles["img-container"]}>
          <img
            className={styles.img}
            src={TECH_PHASES[currentPhase].img}
            alt="technological-phase-image"
          />
        </section>
      </div>
    </div>
  );
}
