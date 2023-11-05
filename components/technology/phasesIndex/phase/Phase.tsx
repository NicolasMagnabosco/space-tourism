// styles
import styles from "./Phase.module.css";
// constants
import { TechPhasesIndex } from "@/constants/techPhases";

interface Props {
  currentPhase: TechPhasesIndex;
  updateCurrentPhase: (phase: TechPhasesIndex) => void;
  index: TechPhasesIndex;
}

export default function Phase({
  currentPhase,
  updateCurrentPhase,
  index,
}: Props) {
  return (
    <button
      className={`${styles["phase"]} ${
        currentPhase === index && styles["phase--active"]
      }`}
      onClick={() => updateCurrentPhase(index)}
    >
      <p>{index + 1}</p>
    </button>
  );
}
