import "./assets/scss/App.scss";
import ToDo from "./components/ToDo";

const todos = [
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

function App() {
  return (
    <>
      <div className="background-top"></div>
      <div className="background-bottom"></div>
      <ToDo todos={todos} />
    </>
  );
}

export default App;
