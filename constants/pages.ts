import { PageInfo } from "@/types/types";

export enum PagesIndex {
  HOME,
  DESTINATION,
  CREW,
  TECHNOLOGY,
  CONTACT,
}

export const PAGES: Array<PageInfo> = [
  { name: "home", number: "01" },
  { name: "destination", number: "02" },
  { name: "crew", number: "03" },
  { name: "technology", number: "04" },
  { name: "contact", number: "" },
];
