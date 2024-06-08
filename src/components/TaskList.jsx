import Item from "./Item";
import "../assets/scss/TaskList.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function TaskList({
  todos,
  activeTodos,
  completedTodos,
  view,
  dispatch,
}) {
  return (
    <ul className="task-list">
      {todos.length === 0 && (
        <p className="tasks-empty">No tasks left on the list!</p>
      )}

      {view === "all" && (
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {todos.map((item) => (
            <Item id={item.id} item={item} key={item.id} dispatch={dispatch} />
          ))}
        </SortableContext>
      )}

      {view === "active" && (
        <SortableContext
          items={activeTodos}
          strategy={verticalListSortingStrategy}
        >
          {activeTodos.map((item) => (
            <Item id={item.id} item={item} key={item.id} dispatch={dispatch} />
          ))}
        </SortableContext>
      )}

      {view === "completed" && (
        <SortableContext
          items={completedTodos}
          strategy={verticalListSortingStrategy}
        >
          {completedTodos.map((item) => (
            <Item id={item.id} item={item} key={item.id} dispatch={dispatch} />
          ))}
        </SortableContext>
      )}
    </ul>
  );
}
