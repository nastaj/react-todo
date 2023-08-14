import Header from "./Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Summary from "./Summary";

import "../assets/scss/ToDo.scss";

export default function ToDo() {
  return (
    <div className="todo">
      <Header />
      <Form />
      <TaskList />
      <Summary />
    </div>
  );
}
