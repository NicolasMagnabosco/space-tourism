// react
import { useState } from "react";
// next
import { useRouter } from "next/router";
// styles
import styles from "./Contact.module.css";
// constants
import { FAQ } from "@/constants/faq";
// components
import Faq from "@/components/contact/faq/Faq";
import MessageBox from "@/components/contact/messageBox/MessageBox";

export default function Contact() {
  const [isMessageBoxShown, setIsMessageBoxShown] = useState<boolean>(false);

  const hideMessageBox = () => {
    setIsMessageBoxShown(false);
  };

  const router = useRouter();
  return (
    <div className={`page ${styles.page}`}>
      <section className={styles["page-container"]} aria-label="contact">
        <h1 id="contact" className={`page-heading ${styles["page-heading"]}`}>
          CONTACT
        </h1>
        <div className={styles.section}>
          <div className={styles["question-container"]}>
            <p className={styles["question"]}>DO YOU WANT TO TALK TO US?</p>
            <button
              onClick={() => setIsMessageBoxShown(true)}
              className={styles["btn"]}
            >
              SEND A MESSAGE
            </button>
          </div>
          <div className={styles["question-container"]}>
            <p className={styles["question"]}>DO YOU WANT TO ENROLL?</p>
            <button
              onClick={() => router.push("/form")}
              className={styles["btn"]}
            >
              ENROLL
            </button>
          </div>
        </div>

        <MessageBox
          isMessageBoxShown={isMessageBoxShown}
          hideMessageBox={hideMessageBox}
        />
        <div className={styles.section}>
          <p className={styles["faq-heading"]}>FAQ</p>
          <div className={styles["faq-container"]}>
            {FAQ.map((faq, index) => {
              return <Faq key={index} {...faq} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
