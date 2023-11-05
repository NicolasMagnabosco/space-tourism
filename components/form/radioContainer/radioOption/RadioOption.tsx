import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./RadioOption.module.css";
import { ERROR_MESSAGES, FORM_KEYS } from "@/constants/form";
import { FormValues, PlanName, PlanetName, FormFields } from "@/types/types";
import { ReactNode } from "react";

export default function RadioOption({
  fieldName,
  value,
  fieldWatch,
  register,
  children,
}: {
  fieldName: keyof FormFields;
  value: PlanName | PlanetName;
  fieldWatch: PlanName | PlanetName;
  register: UseFormRegister<FormValues>;
  children: ReactNode;
}) {
  return (
    <label
      className={`${styles["radio-option-container"]} ${
        fieldWatch === value && styles["radio-option-container--active"]
      }`}
    >
      <input
        hidden
        {...register(FORM_KEYS[fieldName], {
          required: ERROR_MESSAGES.radio,
        })}
        type="radio"
        value={value}
      />
      {children}
    </label>
  );
}
