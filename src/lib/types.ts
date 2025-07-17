export type Locale = "en" | "lt";

export interface NavigationItem {
  label: string;
  url: string;
  order: number;
}

export interface Dictionary {
  navigation: any;
  homepage: any;
  about: any;
}
