// styles
import styles from "./PhasesIndex.module.css";
// constants
import { TechPhasesIndex } from "@/constants/techPhases";

import Phase from "./phase/Phase";
interface Props {
  currentPhase: TechPhasesIndex;
  updateCurrentPhase: (phase: TechPhasesIndex) => void;
}
export default function PhasesIndex({
  currentPhase,
  updateCurrentPhase,
}: Props) {
  return (
    <section
      aria-labelledby="phases-container"
      className={styles["phases-container"]}
    >
      <Phase
        currentPhase={currentPhase}
        updateCurrentPhase={updateCurrentPhase}
        index={TechPhasesIndex.LAUNCH_VEHICLE}
      />
      <Phase
        currentPhase={currentPhase}
        updateCurrentPhase={updateCurrentPhase}
        index={TechPhasesIndex.SPACEPORT}
      />
      <Phase
        currentPhase={currentPhase}
        updateCurrentPhase={updateCurrentPhase}
        index={TechPhasesIndex.SPACE_CAPSULE}
      />
    </section>
  );
}
