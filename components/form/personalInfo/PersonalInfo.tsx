import styles from "./PersonalInfo.module.css";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "@/types/types";
import { FORM_KEYS, ERROR_MESSAGES, FORM_REGEX } from "@/constants/form";
import InputContainer from "./inputContainer/InputContainer";
export default function PersonalInfo({
  register,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}) {
  return (
    <div className={styles.container}>
      <InputContainer fieldName={FORM_KEYS.name} errors={errors}>
        <input
          type="text"
          {...register(FORM_KEYS.name, {
            required: ERROR_MESSAGES.required,
            minLength: {
              value: 2,
              message: ERROR_MESSAGES.minLength,
            },
            pattern: {
              value: FORM_REGEX.letters,
              message: ERROR_MESSAGES.pattern,
            },
          })}
        />
      </InputContainer>

      <InputContainer fieldName={FORM_KEYS.lastname} errors={errors}>
        <input
          type="text"
          {...register(FORM_KEYS.lastname, {
            required: ERROR_MESSAGES.required,
            minLength: {
              value: 2,
              message: ERROR_MESSAGES.minLength,
            },
            pattern: {
              value: FORM_REGEX.letters,
              message: ERROR_MESSAGES.pattern,
            },
          })}
        />
      </InputContainer>

      <InputContainer fieldName={FORM_KEYS.phone} errors={errors}>
        <input
          type="number"
          {...register(FORM_KEYS.phone, {
            required: ERROR_MESSAGES.required,
            minLength: {
              value: 5,
              message: ERROR_MESSAGES.minLength,
            },
            pattern: {
              value: FORM_REGEX.numbers,
              message: ERROR_MESSAGES.pattern,
            },
          })}
        />
      </InputContainer>

      <InputContainer fieldName={FORM_KEYS.age} errors={errors}>
        <input
          type="number"
          {...register(FORM_KEYS.age, {
            required: ERROR_MESSAGES.required,
            min: {
              value: 18,
              message: ERROR_MESSAGES.age.min,
            },
            pattern: {
              value: FORM_REGEX.numbers,
              message: ERROR_MESSAGES.pattern,
            },
          })}
        />
      </InputContainer>
      <InputContainer fieldName={FORM_KEYS.email} errors={errors}>
        <input
          type="email"
          {...register(FORM_KEYS.email, {
            required: ERROR_MESSAGES.required,
            pattern: {
              value: FORM_REGEX.email,
              message: ERROR_MESSAGES.pattern,
            },
          })}
        />
      </InputContainer>
    </div>
  );
}
