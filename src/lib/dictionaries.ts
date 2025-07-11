import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  lt: () => import("./dictionaries/lt.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const dict = dictionaries[locale as keyof typeof dictionaries];
  if (!dict) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
  return dict();
};
