import Filters from "./Filters";
import "../assets/scss/Summary.scss";

export default function Summary() {
  return (
    <footer className="summary">
      <span>x items left</span>
      <Filters />
      <button>Clear completed</button>
    </footer>
  );
}
