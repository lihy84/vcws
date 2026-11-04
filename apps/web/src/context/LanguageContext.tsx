"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Lang } from "@vcws/content/vcws";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "vcws-lang";
const languageChangeEvent = "vcws-language-change";

function getStoredLanguage(): Lang {
  const saved = window.localStorage.getItem(languageStorageKey);
  return saved === "zh" ? "zh" : "en";
}

function subscribeToLanguage(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === languageStorageKey) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(languageChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(languageChangeEvent, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeToLanguage,
    getStoredLanguage,
    (): Lang => "en",
  );

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(languageStorageKey, next);
    window.dispatchEvent(new Event(languageChangeEvent));
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "zh" ? "en" : "zh");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
