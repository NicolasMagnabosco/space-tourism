import styles from "./Form.module.css";
import useForm from "../../hooks/useForm";
// components
import PersonalInfo from "@/components/form/personalInfo/PersonalInfo";
import PlanSelection from "@/components/form/planSelection/PlanSelection";
import PlanetSelection from "@/components/form/planetSelection/PlanetSelection";
import SuccessMessage from "@/components/form/successMessage/SuccessMessage";
import Summary from "@/components/form/summary/Summary";
import Step from "@/components/form/step/Step";
// react-hook-form
import { SubmitHandler, useWatch } from "react-hook-form";
import { FormValues } from "@/types/types";
import { FORM_KEYS, FormFieldsIndex, FormStepsIndex } from "@/constants/form";

export default function Form() {
  const {
    onNextStep,
    onPrevStep,
    currentStep,
    wasSubmitted,
    onWasSubmitted,
    isLastStep,
    handleSubmit,
    register,
    errors,
    formValues,
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isLastStep()) onNextStep();
    else {
      alert(JSON.stringify(data));
      onWasSubmitted();
    }
  };
  return (
    <div className={`page ${styles.page}`}>
      <h1 className={`page-heading ${styles["page-heading"]}`}>
        ENROLLMENT FORM
      </h1>

      <div className={styles["page-container"]}>
        {!wasSubmitted ? (
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <Step
              currentStep={currentStep}
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
              isLastStep={isLastStep}
            >
              {currentStep === FormStepsIndex.PERSONAL ? (
                <PersonalInfo register={register} errors={errors} />
              ) : currentStep === FormStepsIndex.PLANET ? (
                <PlanetSelection
                  register={register}
                  planetFieldWatch={formValues.planet}
                  errors={errors}
                />
              ) : currentStep === FormStepsIndex.PLAN ? (
                <PlanSelection
                  register={register}
                  errors={errors}
                  planFieldWatch={formValues.plan}
                />
              ) : (
                <Summary {...formValues} />
              )}
            </Step>
          </form>
        ) : (
          <SuccessMessage />
        )}
      </div>
    </div>
  );
}
