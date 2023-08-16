import Header from "./Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Summary from "./Summary";

import { useState, useEffect } from "react";
import "../assets/scss/ToDo.scss";

export default function ToDo({ initialTodos, toggleTheme, theme }) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [...initialTodos]
  );
  const [view, setView] = useState("all");
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(newItem) {
    setTodos((todos) => [...todos, newItem]);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleCompleteTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleClearComplete() {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  }

  return (
    <main className="todo">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Form onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        view={view}
        onDeleteTodo={handleDeleteTodo}
        onCompleteTodo={handleCompleteTodo}
      />
      <Summary
        todos={todos}
        onClearComplete={handleClearComplete}
        view={view}
        onView={setView}
      />
    </main>
  );
}
