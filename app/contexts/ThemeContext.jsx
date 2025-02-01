import React from "react";
import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    setIsEnabled(previousState => !previousState);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, isDarkMode, isEnabled, setIsEnabled}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
