import { FormValues, PlanName } from "@/types/types";
import styles from "./PlanSelection.module.css";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import RadioContainer from "../radioContainer/RadioContainer";
import { CURRENCY, FORM_KEYS, PLANS } from "@/constants/form";
import RadioOption from "../radioContainer/radioOption/RadioOption";
import SuccessSvg from "@/components/svg/SuccessSvg";
import TickSvg from "@/components/svg/TickSvg";
export default function PlanSelection({
  register,
  planFieldWatch,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  planFieldWatch: PlanName;
  errors: FieldErrors;
}) {
  return (
    <div className={styles["plan-selection-container"]}>
      <RadioContainer fieldName={FORM_KEYS.plan} errors={errors}>
        {PLANS.map((plan, index) => {
          return (
            <RadioOption
              key={index}
              fieldName={FORM_KEYS.plan}
              value={plan.name}
              fieldWatch={planFieldWatch}
              register={register}
            >
              <p
                className={`${styles["plan-name"]} ${
                  plan.name === "standard"
                    ? styles.standard
                    : plan.name === "advanced"
                    ? styles.advanced
                    : styles.full
                } `}
              >
                {plan.name}
              </p>
              <div className={styles["plan-bottom"]}>
                <div className={styles["plan-features"]}>
                  {plan.features.map((feature, index) => {
                    return (
                      <div key={index} className={styles.feature}>
                        <TickSvg className={styles.tick} />
                        <p>{feature}</p>
                      </div>
                    );
                  })}
                </div>
                <p
                  className={styles["plan-price"]}
                >{`${CURRENCY}$${plan.price}`}</p>
              </div>
            </RadioOption>
          );
        })}
      </RadioContainer>
    </div>
  );
}
