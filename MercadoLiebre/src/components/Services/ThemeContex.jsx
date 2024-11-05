import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themeValue = localStorage.getItem("theme");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue ?? "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", themeValue);
  }, []);

  const handleToggleTheme = (newTheme) => {
    if (newTheme === "DARK") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } else if (newTheme === "LIGHT") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } else {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
      <div id="" className="" data-bs-theme="dark"></div>
    </ThemeContext.Provider>
  );
};
