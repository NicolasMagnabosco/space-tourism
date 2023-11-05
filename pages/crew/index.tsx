// react
import { useState } from "react";
// styles
import styles from "./Crew.module.css";
// constants
import { CREW_MEMBERS, CrewMembersIndex } from "@/constants/crewMembers";
// components
import MemberInfo from "@/components/crew/memberInfo/MemberInfo";
import SlideController from "@/components/crew/slideController/SlideController";

export default function Crew() {
  const [currentMember, setCurrentMember] = useState<CrewMembersIndex>(
    CrewMembersIndex.COMMANDER
  );
  const updateCurrentMember = (member: CrewMembersIndex) => {
    setCurrentMember(member);
  };

  const incrementCurrentMember = () => {
    setCurrentMember(
      (prev) =>
        (prev === Object.keys(CrewMembersIndex).length
          ? CrewMembersIndex.COMMANDER
          : prev + 1) as CrewMembersIndex
    );
  };
  return (
    <div className={`page ${styles.page}`}>
      <h1 className="page-heading">
        03 <span>MEET YOUR CREW</span>
      </h1>
      <div className={styles["page-container"]}>
        <div className={styles["page-container__left"]}>
          <MemberInfo currentMember={currentMember} />
          <SlideController
            updateCurrentMember={updateCurrentMember}
            currentMember={currentMember}
            incrementCurrentMember={incrementCurrentMember}
          />
        </div>
        <div className={styles["page-container__right"]}>
          <img
            className={styles["member-img"]}
            src={CREW_MEMBERS[currentMember].img}
            alt="crew-member-image"
          />
        </div>
      </div>
    </div>
  );
}
