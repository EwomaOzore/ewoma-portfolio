"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useServerInsertedHTML } from "next/navigation";

const STORAGE_KEY = "ewoma-theme";

const themeScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t!=="dark")t="light";var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(t);d.style.colorScheme=t;}catch(e){}})();`;

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  resolvedTheme: "light",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  ));

  const [theme, setThemeState] = useState<Theme>(readTheme);

  useEffect(() => {
    const stored = readTheme();
    applyTheme(stored);
    setThemeState(stored);

    function onStorage(event: StorageEvent) {
      if (event.key !== STORAGE_KEY) return;
      const next: Theme = event.newValue === "dark" ? "dark" : "light";
      applyTheme(next);
      setThemeState(next);
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    setThemeState(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ resolvedTheme: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
