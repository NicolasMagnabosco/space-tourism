import { FormValues, WatchedValuesTuple } from "@/types/types";
import { useState } from "react";
import { FORM_KEYS, FormStepsIndex } from "@/constants/form";
import { useForm as useFormReactHookForm, useWatch } from "react-hook-form";

export default function useForm() {
  const [currentStep, setCurrentStep] = useState<FormStepsIndex>(0);
  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormReactHookForm<FormValues>({
    defaultValues: { name: "", age: "", email: "", phone: "", lastname: "" },
  });
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const formValues = watch();
  const onWasSubmitted = () => {
    setWasSubmitted(true);
  };

  const isLastStep = () => {
    if (currentStep == FormStepsIndex.REVIEW) return true;
    else return false;
  };

  const isFirstStep = () => {
    if (currentStep == FormStepsIndex.PERSONAL) return true;
    else return false;
  };

  const onPrevStep = () => {
    if (!isFirstStep()) setCurrentStep((prev) => prev - 1);
  };

  const onNextStep = () => {
    if (!isLastStep()) setCurrentStep((prev) => prev + 1);
  };

  return {
    currentStep,
    getValues,
    register,
    onNextStep,
    onPrevStep,
    isLastStep,
    wasSubmitted,
    onWasSubmitted,
    handleSubmit,
    errors,
    formValues,
  };
}
