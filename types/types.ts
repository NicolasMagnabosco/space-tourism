export type PageName =
  | "home"
  | "destination"
  | "crew"
  | "technology"
  | "contact";
export type PageNumber = "01" | "02" | "03" | "04" | "";
export interface PageInfo {
  name: PageName;
  number: PageNumber;
}
export type PlanetName = "moon" | "titan" | "europa" | "mars";
export interface PlanetInfo {
  name: PlanetName;
  url: string;
  description: string;
  distance: string;
  travelTime: string;
}
export interface CrewMember {
  field: string;
  description: string;
  name: string;
  img: string;
}

export interface TechPhase {
  name: string;
  description: string;
  img: string;
}

export interface CurrentPageCtx {
  currentPage: PageName;
  updateCurrentPage: (pageName: PageName) => void;
}

export interface Faq {
  q: string;
  a: string;
}

export type PlanName = "standard" | "advanced" | "full";

export interface PlanInfo {
  name: PlanName;
  features: Array<String>;
  price: number;
}

export interface FormValues {
  name: string;
  lastname: string;
  age: string;
  phone: string;
  email: string;
  planet: PlanetName;
  plan: PlanName;
}
export interface FormFields {
  name: "name";
  lastname: "lastname";
  age: "age";
  email: "email";
  phone: "phone";
  planet: "planet";
  plan: "plan";
}

export type WatchedValuesTuple = [
  string,
  string,
  string,
  string,
  string,
  PlanetName,
  PlanName
];
