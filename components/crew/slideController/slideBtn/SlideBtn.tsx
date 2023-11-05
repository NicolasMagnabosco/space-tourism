// styles
import styles from "./SlideBtn.module.css";
// constants
import { CrewMembersIndex } from "@/constants/crewMembers";

interface Props {
  member: CrewMembersIndex;
  currentMember: CrewMembersIndex;
  updateCurrentMember: (member: CrewMembersIndex) => void;
}
export default function SlideBtn({
  member,
  currentMember,
  updateCurrentMember,
}: Props) {
  return (
    <button
      onClick={() => updateCurrentMember(member)}
      className={`${styles["slide-btn"]} ${
        currentMember === member && styles["slide-btn--active"]
      }`}
    ></button>
  );
}
