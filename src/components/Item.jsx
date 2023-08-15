import "../assets/scss/Item.scss";

export default function Item({ item, onDeleteTodo, onCompleteTodo }) {
  function handleDelete(id) {
    onDeleteTodo(id);
  }

  function handleComplete(id) {
    onCompleteTodo(id);
  }

  return (
    <li className="item">
      <div>
        <input
          type="checkbox"
          onChange={() => handleComplete(item.id)}
          checked={item.completed}
        />
        <span className={item.completed ? "completed" : ""}>
          {item.description}
        </span>
      </div>
      <button onClick={() => handleDelete(item.id)}>
        <img src="src\assets\images\icon-cross.svg" alt="Clear task button" />
      </button>
    </li>
  );
}
