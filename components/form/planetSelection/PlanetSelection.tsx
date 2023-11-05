import { PLANETS } from "@/constants/planets";
import styles from "./PlanetSelection.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues, PlanetName } from "@/types/types";
import { FORM_KEYS } from "@/constants/form";
import RadioContainer from "../radioContainer/RadioContainer";
import RadioOption from "../radioContainer/radioOption/RadioOption";

export default function PlanetSelection({
  register,
  planetFieldWatch,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  planetFieldWatch: PlanetName;
  errors: FieldErrors<FormValues>;
}) {
  return (
    <div className={styles["planet-selection-container"]}>
      <RadioContainer fieldName={FORM_KEYS.planet} errors={errors}>
        {PLANETS.map((planet, index) => {
          return (
            <RadioOption
              key={index}
              fieldName={FORM_KEYS.planet}
              value={planet.name}
              fieldWatch={planetFieldWatch}
              register={register}
            >
              <img
                className={styles["planet-img"]}
                src={planet.url}
                alt="planetImg"
              />
              <p className={styles["planet-name"]}>{planet.name}</p>
            </RadioOption>
          );
        })}
      </RadioContainer>
    </div>
  );
}
