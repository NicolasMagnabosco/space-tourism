// next
import NextLink from "next/link";
// styles
import styles from "./Link.module.css";
// constants
// types
import { PageName } from "@/types/types";
import { PAGES, PagesIndex } from "@/constants/pages";

interface Props {
  number: string;
  pageName: PageName;
  currentPage: PageName | null;
}

export default function Link({ number, pageName, currentPage }: Props) {
  return (
    <li
      className={`${styles.item} ${
        currentPage === pageName && styles["item--active"]
      }`}
    >
      <p className={styles.number}>{number}</p>
      <NextLink
        className={styles.link}
        href={`/${pageName === PAGES[PagesIndex.HOME].name ? "" : pageName}`}
      >
        {pageName.toUpperCase()}
      </NextLink>
    </li>
  );
}
