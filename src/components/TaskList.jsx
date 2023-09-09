import Item from "./Item";
import "../assets/scss/TaskList.scss";

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
      {view === "all" &&
        todos.map((item) => (
          <Item item={item} key={item.id} dispatch={dispatch} />
        ))}

      {view === "active" &&
        activeTodos.map((item) => (
          <Item item={item} key={item.id} dispatch={dispatch} />
        ))}

      {view === "completed" &&
        completedTodos.map((item) => (
          <Item item={item} key={item.id} dispatch={dispatch} />
        ))}
    </ul>
  );
}
