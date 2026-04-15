import type { Locale } from "./config";
import type en from "./dictionaries/en";

// Use a deep-writable version so both en and fr satisfy the same type
type DeepMutable<T> = { -readonly [K in keyof T]: DeepMutable<T[K]> };
export type Dictionary = DeepMutable<typeof en>;

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default as unknown as Dictionary),
  fr: () => import("./dictionaries/fr").then((m) => m.default as unknown as Dictionary),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
