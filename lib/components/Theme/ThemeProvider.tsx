"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { THEMES, ThemeInfo, ThemeName } from "./types";

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeInfo[];
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "DEFAULT",
  setTheme: () => {},
  availableThemes: THEMES,
});

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export interface ThemeProviderProps {
  defaultTheme?: ThemeName;
  storageKey?: string;
  targetElement?: HTMLElement | null;
  children?: ReactNode;
}

export const ThemeProvider = ({
  defaultTheme = "DEFAULT",
  storageKey = "examsocial-theme",
  targetElement,
  children,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== "undefined" && storageKey) {
      try {
        const stored = localStorage.getItem(storageKey) as ThemeName | null;
        return stored && THEMES.some((t) => t.name === stored)
          ? stored
          : defaultTheme;
      } catch (err) {
        void err;
        return defaultTheme;
      }
    }
    return defaultTheme;
  });

  const applyThemeToDOM = useCallback(
    (nextTheme: ThemeName) => {
      const el =
        targetElement ??
        (typeof document !== "undefined" ? document.documentElement : null);

      if (!el) return;

      // Clean up previous theme classes defined by themer
      THEMES.forEach((t) => {
        if (t.name !== "DEFAULT") {
          el.classList.remove(t.name);
        }
      });

      // Apply new theme class if not DEFAULT
      if (nextTheme !== "DEFAULT") {
        el.classList.add(nextTheme);
      }
    },
    [targetElement],
  );

  const setTheme = useCallback(
    (newTheme: ThemeName) => {
      setThemeState(newTheme);
      applyThemeToDOM(newTheme);

      if (typeof window !== "undefined" && storageKey) {
        try {
          localStorage.setItem(storageKey, newTheme);
        } catch (err) {
          void err;
        }
      }
    },
    [applyThemeToDOM, storageKey],
  );

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme, applyThemeToDOM]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        availableThemes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
