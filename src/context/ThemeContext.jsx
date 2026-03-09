import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ isDark: true, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("wedding-theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      localStorage.setItem("wedding-theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("wedding-theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((d) => !d) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
