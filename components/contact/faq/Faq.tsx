// react
import { useState } from "react";
// styles
import styles from "./Faq.module.css";
// types
import { Faq } from "@/types/types";

export default function Faq({ q, a }: Faq) {
  const [isFullView, setIsFullView] = useState<boolean>(false);
  return (
    <div className={`${styles.faq} ${isFullView && styles["faq--open"]}`}>
      <p
        onClick={() => setIsFullView((prev) => !prev)}
        className={`${styles["faq-question"]} ${
          isFullView && styles["faq-question--open"]
        }`}
      >
        {q}
      </p>
      <p
        className={`${styles["faq-answer"]} ${
          isFullView && styles["faq-answer--show"]
        }`}
      >
        {a}
      </p>
    </div>
  );
}
