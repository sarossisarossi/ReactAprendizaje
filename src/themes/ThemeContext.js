import { createContext, useContext, useState } from "react";

// 1️⃣ Creamos el contexto
const ThemeContext = createContext();

// 2️⃣ Implementamos el ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Hook personalizado para usar el contexto fácilmente
export const useTheme = () => {
  return useContext(ThemeContext);
};