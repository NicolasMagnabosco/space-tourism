// components
import Link from "next/link";
// styles
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`page ${styles.page}`}>
      <div className={styles["page-container"]}>
        <section aria-labelledby="hero-section" className={styles.hero}>
          <h1 className={styles.heading}>
            SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
          </h1>
          <p className={`description ${styles.description}`}>
            We assume that you won't be satsified with just exploring the edge
            of it. In that case, sit back and relax. We’ll give you a truly out
            of this world complete experience!
          </p>
        </section>
        <section aria-labelledby="explore" className={styles.explore}>
          <Link href="/form" className={styles["explore-link"]}>
            ENROLL
          </Link>
        </section>
      </div>
    </div>
  );
}
