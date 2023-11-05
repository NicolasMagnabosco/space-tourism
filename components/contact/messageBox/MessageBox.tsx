// react
import { FormEvent, useState } from "react";
// styles
import styles from "./MessageBox.module.css";

interface Props {
  isMessageBoxShown: boolean;
  hideMessageBox: () => void;
}

export default function MessageBox({
  isMessageBoxShown,
  hideMessageBox,
}: Props) {
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (currentEmail !== "" && currentMessage !== "") setWasSubmitted(true);
    else alert("Please, fill the fields");
  };

  const handleCloseMessageBox = () => {
    hideMessageBox();
    setWasSubmitted(false);
    setCurrentEmail("");
    setCurrentMessage("");
  };
  return (
    <div
      className={`${styles["message-box--hidden"]} ${
        isMessageBoxShown && styles["message-box"]
      }`}
    >
      <p onClick={handleCloseMessageBox} className={styles.cross}>
        &#215;
      </p>
      <h1 className={styles["message-box__heading"]}>SEND A MESSAGE</h1>
      {!wasSubmitted ? (
        <form onSubmit={onSubmit} action="#">
          <div className={styles["message-box__container"]}>
            <div className={styles["input-container"]}>
              <label className={styles["message-box__label"]} htmlFor="email">
                Email:
              </label>
              <input
                className={styles["message-box__email"]}
                id="message"
                type="email"
                placeholder="Enter your email..."
                onChange={(ev) => setCurrentEmail(ev.target.value)}
              />
            </div>
            <div className={styles["input-container"]}>
              <label className={styles["message-box__label"]} htmlFor="message">
                Message:
              </label>
              <textarea
                className={styles["message-box__message"]}
                name="message"
                id="message"
                cols={50}
                rows={10}
                placeholder="Enter the full message..."
                onChange={(ev) => setCurrentMessage(ev.target.value)}
              ></textarea>
            </div>
          </div>
          <button className={styles["submit-btn"]} type="submit">
            SUBMIT
          </button>
        </form>
      ) : (
        <p className={styles.successfuly}>&#9993; Message Sent Successfuly!</p>
      )}
    </div>
  );
}
