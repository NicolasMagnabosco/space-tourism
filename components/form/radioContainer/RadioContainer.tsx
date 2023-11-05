import { ReactNode } from "react";
import styles from "./RadioContainer.module.css";
import { FormFields } from "@/types/types";
import { FieldErrors } from "react-hook-form";
export default function RadioContainer({
  fieldName,
  errors,
  children,
}: {
  fieldName: keyof FormFields;
  errors: FieldErrors<FormFields>;
  children: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles["options-container"]}>{children}</div>
      {errors[fieldName] && (
        <p className={`error-message ${styles["error-message"]}`}>
          {errors[fieldName]?.message}
        </p>
      )}
    </div>
  );
}
