// styles
import styles from "./PhasesInfo.module.css";
// constants
import { TechPhasesIndex } from "@/constants/techPhases";
import { TECH_PHASES } from "@/constants/techPhases";

export default function PhasesInfo({
  currentPhase,
}: {
  currentPhase: TechPhasesIndex;
}) {
  return (
    <section
      className={styles["phase-information"]}
      aria-labelledby="phase-information"
    >
      <p className={styles["phase-information__introduction"]}>
        THE TERMINOLOGY...
      </p>
      <h1 className={styles["phase-information__name"]}>
        {TECH_PHASES[currentPhase].name}
      </h1>
      <p className={`description ${styles["phase-information__description"]}`}>
        {TECH_PHASES[currentPhase].description}
      </p>
    </section>
  );
}
