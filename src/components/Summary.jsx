import Filters from "./Filters";
import "../assets/scss/Summary.scss";

export default function Summary({ todos, view, dispatch }) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="summary">
        {itemsLeft === 0 && <span>All tasks complete!</span>}
        {itemsLeft === 1 && <span>{itemsLeft} item left</span>}
        {itemsLeft > 1 && <span>{itemsLeft} items left</span>}

        <button
          type="button"
          onClick={() => dispatch({ type: "clearCompletedTasks" })}
        >
          Clear completed
        </button>
      </div>
      <Filters view={view} dispatch={dispatch} />
    </>
  );
}
