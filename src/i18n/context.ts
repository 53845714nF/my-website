import { createContext, useContext } from "react";
import type { Language, Translation } from "./translations";

export type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
