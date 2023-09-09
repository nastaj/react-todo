import "../assets/scss/Filters.scss";

export default function Filters({ view, dispatch }) {
  return (
    <div className="filters">
      <button
        type="button"
        className={view === "all" ? "active" : ""}
        onClick={() => dispatch({ type: "changeView", payload: "all" })}
      >
        All
      </button>
      <button
        type="button"
        className={view === "active" ? "active" : ""}
        onClick={() => dispatch({ type: "changeView", payload: "active" })}
      >
        Active
      </button>
      <button
        type="button"
        className={view === "completed" ? "active" : ""}
        onClick={() => dispatch({ type: "changeView", payload: "completed" })}
      >
        Completed
      </button>
    </div>
  );
}
