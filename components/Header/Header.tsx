// react
import { useState, useEffect } from "react";
// styles
import styles from "./Header.module.css";
// constants
import { PAGES, PagesIndex } from "@/constants/pages";
import { PageName } from "@/types/types";
import { useRouter } from "next/router";
// components
import LogoSvg from "../svg/LogoSvg";
import Link from "./Link/Link";

export default function Header() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<PageName | null>(null);

  useEffect(() => {
    if (router.pathname === "/") setCurrentPage(PAGES[PagesIndex.HOME].name);
    else if (router.pathname === "/destination")
      setCurrentPage(PAGES[PagesIndex.DESTINATION].name);
    else if (router.pathname === "/crew")
      setCurrentPage(PAGES[PagesIndex.CREW].name);
    else if (router.pathname === "/technology")
      setCurrentPage(PAGES[PagesIndex.TECHNOLOGY].name);
    else setCurrentPage(PAGES[PagesIndex.CONTACT].name);
  }, [router.pathname]);

  useEffect(() => {
    setIsBrugerMenuOpen(false);
  }, [router.pathname]);

  const [isBurgerMenuOpen, setIsBrugerMenuOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles["header__left"]}>
        <LogoSvg />
      </div>
      <div className={styles["horizontal-line"]}></div>
      <nav className={styles["header__right"]}>
        <button
          onClick={() => setIsBrugerMenuOpen((prev) => !prev)}
          className={`${styles["burger-menu"]}  ${
            isBurgerMenuOpen && styles["burger-menu--open"]
          }`}
        >
          <div className={styles["burger-menu-line"]}></div>
          <div className={styles["burger-menu-line"]}></div>
          <div className={styles["burger-menu-line"]}></div>
        </button>
        <ul
          className={`${styles["header__ul"]} ${
            isBurgerMenuOpen && styles["header__ul--open"]
          }`}
        >
          {PAGES.map((p, index) => (
            <Link
              key={index}
              number={p.number}
              pageName={p.name}
              currentPage={currentPage}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
