export enum Language {
  en,
  es,
  fr,
}
export function languageToString(lang: Language) {
  if (lang === Language.en) {
    return "en";
  } else if (lang === Language.es) {
    return "es";
  } else if (lang === Language.fr) {
    return "fr";
  }
}
