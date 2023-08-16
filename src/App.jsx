import "./assets/scss/App.scss";
import ToDo from "./components/ToDo";
import { createContext, useState } from "react";

const initialTodos = [
  {
    id: crypto.randomUUID(),
    description: "Pick up groceries",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    description: "10 minutes meditation",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Jog around the park 3x",
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    description: "Read for 1 hour",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Finish Todo App",
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    description: "Complete JavaScript course",
    completed: false,
  },
];

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app" id={theme}>
        <div className="background-top"></div>
        <div className="background-bottom"></div>
        <ToDo
          initialTodos={initialTodos}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
