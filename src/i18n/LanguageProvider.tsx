import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./context";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "lang";

function detectLanguage(): Language {
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "de" || param === "en") return param;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en") return stored;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("de") ? "de" : "en";
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', lang === "de" ? "de_DE" : "en_US");
    setMeta('meta[name="twitter:title"]', t.meta.title);
    setMeta('meta[name="twitter:description"]', t.meta.description);
  }, [lang, t]);

  const value = useMemo(
    () => ({
      lang,
      t,
      setLang: (next: Language) => {
        setLangState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* storage unavailable */
        }
      },
    }),
    [lang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
