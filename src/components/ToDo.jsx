import Header from "./Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Summary from "./Summary";

import "../assets/scss/ToDo.scss";
import { useState } from "react";

export default function ToDo({ initialTodos }) {
  const [todos, setTodos] = useState([...initialTodos]);
  const [view, setView] = useState("all");
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

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
      <Header />
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
