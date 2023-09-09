import { useState } from "react";
import "../assets/scss/Form.scss";

export default function Form({ dispatch }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: crypto.randomUUID(),
      description,
      completed: false,
    };

    dispatch({ type: "addTask", payload: newItem });
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        aria-label="task-description"
        type="text"
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
