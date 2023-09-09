import "../assets/scss/Item.scss";

export default function Item({ item, dispatch }) {
  return (
    <li className="item">
      <div>
        <input
          aria-label="complete-task"
          type="checkbox"
          onChange={() => dispatch({ type: "completeTask", payload: item.id })}
          checked={item.completed}
        />
        <span className={item.completed ? "completed" : ""}>
          {item.description}
        </span>
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: "deleteTask", payload: item.id })}
      >
        <img src="src\assets\images\icon-cross.svg" alt="Clear task button" />
      </button>
    </li>
  );
}
