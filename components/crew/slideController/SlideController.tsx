// react
import { useEffect } from "react";
// styles
import styles from "./SlideController.module.css";
// constants
import { CREW_MEMBERS } from "@/constants/crewMembers";
import { CrewMembersIndex } from "@/constants/crewMembers";
// components
import SlideBtn from "./slideBtn/SlideBtn";

export default function SlideController({
  updateCurrentMember,
  incrementCurrentMember,
  currentMember,
}: {
  updateCurrentMember: (member: CrewMembersIndex) => void;
  incrementCurrentMember: () => void;
  currentMember: CrewMembersIndex;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMember === CREW_MEMBERS.length - 1) updateCurrentMember(0);
      else incrementCurrentMember();
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentMember]);
  return (
    <section
      aria-labelledby="slide controller"
      className={styles["slide-controller"]}
    >
      <SlideBtn
        member={0}
        currentMember={currentMember}
        updateCurrentMember={updateCurrentMember}
      />
      <SlideBtn
        member={1}
        currentMember={currentMember}
        updateCurrentMember={updateCurrentMember}
      />
      <SlideBtn
        member={2}
        currentMember={currentMember}
        updateCurrentMember={updateCurrentMember}
      />
      <SlideBtn
        member={3}
        currentMember={currentMember}
        updateCurrentMember={updateCurrentMember}
      />
    </section>
  );
}
