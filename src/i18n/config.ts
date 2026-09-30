export const locales = ["en", "es", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; name: string; og: string }
> = {
  en: { label: "EN", name: "English", og: "en_US" },
  es: { label: "ES", name: "Español", og: "es_ES" },
  fr: { label: "FR", name: "Français", og: "fr_FR" },
  de: { label: "DE", name: "Deutsch", og: "de_DE" },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type Country = {
  code: string;
  group: "europe" | "english";
  en: string;
  es: string;
  fr: string;
  de: string;
};

export const hiringCountries: Country[] = [
  { code: "DE", group: "europe", en: "Germany", es: "Alemania", fr: "Allemagne", de: "Deutschland" },
  { code: "AT", group: "europe", en: "Austria", es: "Austria", fr: "Autriche", de: "Österreich" },
  { code: "CH", group: "europe", en: "Switzerland", es: "Suiza", fr: "Suisse", de: "Schweiz" },
  { code: "FR", group: "europe", en: "France", es: "Francia", fr: "France", de: "Frankreich" },
  { code: "BE", group: "europe", en: "Belgium", es: "Bélgica", fr: "Belgique", de: "Belgien" },
  { code: "ES", group: "europe", en: "Spain", es: "España", fr: "Espagne", de: "Spanien" },
  { code: "GB", group: "english", en: "United Kingdom", es: "Reino Unido", fr: "Royaume-Uni", de: "Vereinigtes Königreich" },
  { code: "IE", group: "english", en: "Ireland", es: "Irlanda", fr: "Irlande", de: "Irland" },
  { code: "US", group: "english", en: "United States", es: "Estados Unidos", fr: "États-Unis", de: "Vereinigte Staaten" },
  { code: "CA", group: "english", en: "Canada", es: "Canadá", fr: "Canada", de: "Kanada" },
  { code: "AU", group: "english", en: "Australia", es: "Australia", fr: "Australie", de: "Australien" },
];

export function countryNames(locale: Locale, group: Country["group"]) {
  return hiringCountries.filter((country) => country.group === group).map((country) => country[locale]);
}

const localePrefix = /^\/(en|es|fr|de)(?=\/|$)/;

export function stripLocale(pathname: string) {
  const match = pathname.match(localePrefix);
  if (!match) return pathname || "/";
  const rest = pathname.slice(match[0].length);
  return rest === "" ? "/" : rest;
}

export function fill(template: string, name: string) {
  return template.replaceAll("{name}", name);
}

export function localize(locale: Locale, href: string) {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  let path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  if (path === "") path = "/";
  if (!path.startsWith("/")) path = `/${path}`;
  path = stripLocale(path);

  if (locale === defaultLocale) return `${path}${hash}`;
  if (path === "/") return `/${locale}${hash}`;
  return `/${locale}${path}${hash}`;
}
