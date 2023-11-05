import { FormFields, PlanInfo } from "@/types/types";

export enum FormStepsIndex {
  PERSONAL,
  PLANET,
  PLAN,
  REVIEW,
}

export const FORM_HEADINGS: Array<String> = [
  "personal information",
  "select a destination",
  "select a plan",
  "summary",
];

export enum FormFieldsIndex {
  NAME,
  LASTNAME,
  AGE,
  PHONE,
  EMAIL,
  PLANET,
  PLAN,
}

export const FORM_KEYS: FormFields = {
  name: "name",
  lastname: "lastname",
  age: "age",
  phone: "phone",
  email: "email",
  planet: "planet",
  plan: "plan",
};
export enum PlansIndex {
  STANDARD,
  ADVANCED,
  FULL,
}

export const CURRENCY = "USD";

export const PLANS: Array<PlanInfo> = [
  {
    name: "standard",
    features: ["planet tour", "up to 2 people"],
    price: 700,
  },

  {
    name: "advanced",
    features: [
      "planet tour",
      "up to 4 people",
      "exclusive gifts",
      "private room on spacecraft",
    ],
    price: 900,
  },

  {
    name: "full",
    features: [
      "planet tour",
      "up to 5 people",
      "exclusive gifts",
      "private room on spacecraft",
      "private room service",
      "exclusive activities in destination",
    ],
    price: 1200,
  },
];

export const ERROR_MESSAGES = {
  required: "This field is empty",
  pattern: "Your input is not valid",
  minLength: "Your input is too short",
  age: {
    min: "You must be +18 to continue",
    max: "Your input is too high",
  },
  radio: "An option must be selected",
};

export const FORM_REGEX = {
  letters: /^[A-Za-z]+$/,
  numbers: /^[1-9]\d*$/,
  email: /^\S+@\S+\.\S+$/,
};
