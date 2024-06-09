import { useSortable } from "@dnd-kit/sortable";
import "../assets/scss/Item.scss";
import { CSS } from "@dnd-kit/utilities";

export default function Item({ item, id, dispatch }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li style={style} className="item">
      <img
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="icon-dnd"
        src="/src/assets/images/icon-drag-and-drop.svg"
        alt="Drag and Drop icon"
        width={14}
        height={14}
      />
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
        <img src="/src/assets/images/icon-cross.svg" alt="Clear task button" />
      </button>
    </li>
  );
}
