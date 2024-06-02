import React, { ReactNode } from "react";
import styles from "./Step.module.css";
import { FORM_HEADINGS, FormStepsIndex } from "@/constants/form";

export default function Step({
  children,
  currentStep,
  onNextStep,
  onPrevStep,
  isLastStep,
}: {
  children: ReactNode;
  currentStep: FormStepsIndex;
  onNextStep: () => void;
  onPrevStep: () => void;
  isLastStep: () => boolean;
}) {
  return (
    <section className={styles.step} aria-label="heading">
      <h1 className={styles["step-heading"]} id="heading">
        {FORM_HEADINGS[currentStep]}
      </h1>
      {children}
      <div className={styles["step-footer"]}>
        <button
          type="button"
          className={styles["step-btn"]}
          onClick={onPrevStep}
        >
          go back
        </button>

        <button className={styles["step-btn"]}>
          {!isLastStep() ? "next" : "submit"}
        </button>
      </div>
    </section>
  );
}
