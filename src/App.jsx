import "./assets/scss/App.scss";
import ToDo from "./components/ToDo";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app" id={theme}>
        <div className="background-top"></div>
        <div className="background-bottom"></div>
        <ToDo toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
