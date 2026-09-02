import { en } from "./en";
import { lt } from "./lt";
import type { Translation } from "./types";

export const translations: Record<"en" | "lt", Translation> = {
  en,
  lt,
};

export type Locale = "en" | "lt";
