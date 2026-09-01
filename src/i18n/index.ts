import { en } from "./en";
import { lt } from "./lt";

export const translations = {
  en,
  lt,
};

export type Locale = keyof typeof translations;
