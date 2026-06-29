export type Locale = "pt" | "en" | "zh";
let currentLocale: Locale = "pt";
const listeners: Set<() => void> = new Set();
export function setLocale(locale: Locale) { currentLocale = locale; listeners.forEach((cb) => cb()); }
export function getLocale(): Locale { return currentLocale; }
export function subscribe(callback: () => void) { listeners.add(callback); return () => listeners.delete(callback); }
export function t(key: string): string { return key; }
export function toggleLocale() { setLocale(currentLocale === "pt" ? "en" : "pt"); }
