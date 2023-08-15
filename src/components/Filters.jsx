import "../assets/scss/Filters.scss";

export default function Filters({ view, onView }) {
  return (
    <div className="filters">
      <button
        className={view === "all" ? "active" : ""}
        onClick={() => onView("all")}
      >
        All
      </button>
      <button
        className={view === "active" ? "active" : ""}
        onClick={() => onView("active")}
      >
        Active
      </button>
      <button
        className={view === "completed" ? "active" : ""}
        onClick={() => onView("completed")}
      >
        Completed
      </button>
    </div>
  );
}
