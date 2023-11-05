import { PlanName, PlanetName } from "@/types/types";
import { PLANS, PlansIndex, CURRENCY } from "@/constants/form";
import styles from "./Summary.module.css";

interface Props {
  name: string;
  lastname: string;
  age: string;
  phone: string;
  email: string;
  planet: PlanetName;
  plan: PlanName;
}

export default function Summary({
  name,
  lastname,
  age,
  phone,
  email,
  planet,
  plan,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["upper-container"]}>
        <div className={styles["field-container"]}>
          <p>Name:</p>
          <p>{`${name} ${lastname}`}</p>
        </div>
        <div className={styles["field-container"]}>
          <p>Age:</p>
          <p>{age}</p>
        </div>
        <div className={styles["field-container"]}>
          <p>Phone:</p>
          <p>{phone}</p>
        </div>
        <div className={styles["field-container"]}>
          <p>Email:</p>
          <p>{email}</p>
        </div>
        <div className={styles["field-container"]}>
          <p>Destination:</p>
          <p className={styles.planet}>{planet}</p>
        </div>
        <div className={styles["field-container"]}>
          <p>Plan:</p>
          <p className={styles.plan}>{plan}</p>
        </div>
      </div>
      <p className={styles.price}>{`${CURRENCY}$${
        plan === "standard"
          ? PLANS[PlansIndex.STANDARD].price
          : plan === "advanced"
          ? PLANS[PlansIndex.ADVANCED].price
          : PLANS[PlansIndex.FULL].price
      }`}</p>
    </div>
  );
}
