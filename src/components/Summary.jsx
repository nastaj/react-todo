import Filters from "./Filters";
import "../assets/scss/Summary.scss";

export default function Summary({ todos, onClearComplete, view, onView }) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="summary">
      {itemsLeft === 0 && <span>All tasks complete!</span>}
      {itemsLeft === 1 && <span>{itemsLeft} item left</span>}
      {itemsLeft > 1 && <span>{itemsLeft} items left</span>}
      <Filters view={view} onView={onView} />
      <button onClick={onClearComplete}>Clear completed</button>
    </footer>
  );
}
