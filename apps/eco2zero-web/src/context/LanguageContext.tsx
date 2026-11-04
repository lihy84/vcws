"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { Lang } from "@vcws/content";

type Value = { lang: Lang; setLang: (lang: Lang) => void };
const LanguageContext = createContext<Value | null>(null);
const storageKey = "eco2zero-lang";
const changeEvent = "eco2zero-language-change";

function snapshot(): Lang {
  return window.localStorage.getItem(storageKey) === "zh" ? "zh" : "en";
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, snapshot, (): Lang => "en");
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }, [lang]);
  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(storageKey, next);
    window.dispatchEvent(new Event(changeEvent));
  }, []);
  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
