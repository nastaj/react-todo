import { useEffect, useReducer } from "react";
import "../assets/scss/ToDo.scss";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import TaskList from "./TaskList";
import Summary from "./Summary";
import ErrorMsg from "./ErrorMsg";
import Footer from "./Footer";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || null,
  view: "all",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataLoaded": {
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")) || action.payload,
      };
    }
    case "dataFailed": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "addTask": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "deleteTask": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "completeTask": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "clearCompletedTasks": {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    }
    case "changeView": {
      return {
        ...state,
        view: action.payload,
      };
    }
    default: {
      console.error("Unknown action");
    }
  }
}

export default function ToDo({ toggleTheme, theme }) {
  const [{ todos, view, error }, dispatch] = useReducer(reducer, initialState);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  useEffect(function () {
    async function loadData() {
      try {
        const res = await fetch("data.json");
        if (!res.ok) {
          throw new Error("💥 There was a problem fetching the initial data.");
        }
        const data = await res.json();
        dispatch({ type: "dataLoaded", payload: data.todos });
      } catch (error) {
        dispatch({
          type: "dataFailed",
          payload: error.message,
        });
      }
    }
    loadData();
  }, []);

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <div className="todo">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Main>
        <Form dispatch={dispatch} />
        <TaskList
          todos={todos}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          view={view}
          dispatch={dispatch}
        />
        <Summary todos={todos} view={view} dispatch={dispatch} />
        {error && <ErrorMsg error={error} />}
      </Main>

      <Footer />
    </div>
  );
}
