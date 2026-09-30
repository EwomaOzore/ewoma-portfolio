"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import {
  localize,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const I18nContext = createContext<{
  locale: Locale;
  dict: Dictionary;
} | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: Readonly<{
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}>) {
  return (
    <I18nContext.Provider value={{ locale, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return value;
}

export function useLocalize() {
  const { locale } = useI18n();
  const pathname = stripLocale(usePathname() || "/");

  return {
    locale,
    href: (path: string) => localize(locale, path),
    switchTo: (next: Locale) => localize(next, pathname),
  };
}
