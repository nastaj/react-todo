import Item from "./Item";
import "../assets/scss/TaskList.scss";

export default function TaskList({
  todos,
  activeTodos,
  completedTodos,
  view,
  onDeleteTodo,
  onCompleteTodo,
}) {
  return (
    <ul className="task-list">
      {view === "all" &&
        todos.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}

      {view === "active" &&
        activeTodos.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}

      {view === "completed" &&
        completedTodos.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}
    </ul>
  );
}
