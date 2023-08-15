import Item from "./Item";
import "../assets/scss/TaskList.scss";

export default function TaskList({ todos }) {
  return (
    <ul className="task-list">
      {todos.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
