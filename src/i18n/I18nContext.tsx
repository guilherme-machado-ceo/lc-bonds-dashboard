import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { pt, en, zh } from "./translations";
import { getLocale, subscribe, setLocale as setLegacyLocale } from "./index";

export type Locale = "pt" | "en" | "zh";

const translations = { pt, en, zh };

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

function lookupTranslation(key: string, locale: Locale): string {
  const tr = translations[locale] as Record<string, unknown>;
  if (!tr) return key;
  const keys = key.split(".");
  let current: unknown = tr;
  for (const k of keys) {
    if (typeof current !== "object" || current === null) return key;
    current = (current as Record<string, unknown>)[k];
  }
  return typeof current === "string" ? current : key;
}

const I18nContext = createContext<I18nContextType>({
  locale: "pt",
  setLocale: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getLocale());

  // Sync with legacy pub/sub system
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setLocaleState(getLocale());
    });
    return () => { unsubscribe(); };
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLegacyLocale(l);
    setLocaleState(l);
  }, []);

  const t = useCallback(
    (key: string) => lookupTranslation(key, locale),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
