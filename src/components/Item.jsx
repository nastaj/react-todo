import "../assets/scss/Item.scss";

export default function Item({ item }) {
  return (
    <li className="item">
      <div>
        <input type="checkbox" />
        <span>{item.description}</span>
      </div>
      <button>
        <img src="src\assets\images\icon-cross.svg" alt="Clear task button" />
      </button>
    </li>
  );
}
