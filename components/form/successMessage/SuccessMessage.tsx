import styles from "./SuccessMessage.module.css";
import SuccessSvg from "@/components/svg/SuccessSvg";

export default function SuccessMessage() {
  return (
    <div className={styles.container}>
      <SuccessSvg className={styles.icon} />
      <p>You have been successfully enrolled!</p>
    </div>
  );
}
