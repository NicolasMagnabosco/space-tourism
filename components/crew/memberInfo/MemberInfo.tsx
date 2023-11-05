//styles
import styles from "./MemberInfo.module.css";
// constants
import { CREW_MEMBERS } from "@/constants/crewMembers";

export default function MemberInfo({
  currentMember,
}: {
  currentMember: number;
}) {
  return (
    <section aria-labelledby="member-info" className={styles["member-info"]}>
      <div className={styles["member-info__left"]}>
        <p className={styles["member-info__field"]}>
          {CREW_MEMBERS[currentMember].field}
        </p>
        <p className={styles["member-info__name"]}>
          {CREW_MEMBERS[currentMember].name}
        </p>
        <p className={`description ${styles["member-info__description"]}`}>
          {CREW_MEMBERS[currentMember].description}
        </p>
      </div>
    </section>
  );
}
