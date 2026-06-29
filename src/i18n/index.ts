// ============================================================
// i18n ENGINE v3.0 — PT / EN / ZH
// Sistema hibrido: pub/sub (legado) + React Context (novo)
// Componentes devem migrar para useI18n() para re-renderizacao
// ============================================================

import { pt, en, zh, type Locale } from "./translations";
export type { Locale } from "./translations";

const translations = { pt, en, zh };

let currentLocale: Locale = "pt";
const listeners: Set<() => void> = new Set();

export function setLocale(locale: Locale) {
  currentLocale = locale;
  listeners.forEach((cb) => cb());
}

export function getLocale(): Locale {
  return currentLocale;
}

export function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function t(key: string): string {
  const keys = key.split(".");
  let current: unknown = translations[currentLocale];
  for (const k of keys) {
    if (typeof current !== "object" || current === null) return key;
    current = (current as Record<string, unknown>)[k];
  }
  return typeof current === "string" ? current : key;
}

export function toggleLocale() {
  setLocale(currentLocale === "pt" ? "en" : "pt");
}
