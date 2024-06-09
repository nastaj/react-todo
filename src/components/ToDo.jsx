import { useEffect, useReducer } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import TaskList from "./TaskList";
import Summary from "./Summary";
import ErrorMsg from "./ErrorMsg";
import Footer from "./Footer";

import "../assets/scss/ToDo.scss";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
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
    case "moveTask": {
      const { originalPos, newPos } = action.payload;

      return {
        ...state,
        todos: arrayMove(state.todos, originalPos, newPos),
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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function getTasksPos(id) {
    return todos.findIndex((item) => item.id === id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPos = getTasksPos(active.id);
    const newPos = getTasksPos(over.id);

    dispatch({ type: "moveTask", payload: { originalPos, newPos } });
  }

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
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <TaskList
            todos={todos}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            view={view}
            dispatch={dispatch}
          />
        </DndContext>
        <Summary todos={todos} view={view} dispatch={dispatch} />
        {error && <ErrorMsg error={error} />}
      </Main>

      <Footer />
    </div>
  );
}
