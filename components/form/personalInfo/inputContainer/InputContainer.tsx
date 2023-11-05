import { ReactNode } from "react";
import { FieldValues, FieldErrors } from "react-hook-form";
import styles from "./InputContainer.module.css";
export default function InputContainer({
  fieldName,
  children,
  errors,
}: {
  fieldName: keyof FieldValues;
  children: ReactNode;
  errors: FieldErrors;
}) {
  return (
    <div className={styles["input-container"]}>
      <div className={styles["inner-container"]}>
        <label htmlFor="email">{`${fieldName}:`}</label>
        {children}
      </div>
      {errors[fieldName] && (
        <p className={`error-message ${styles["error-message"]}`}>
          {errors[fieldName]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
