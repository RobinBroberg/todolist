import "./TodoList.css";
import { IoMdCheckmark } from "react-icons/io";
export default function TodoList({ todos, updateStatus, deleteTodo }) {
  return (
    <div className="container">
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="listDiv">
              <span className={todo.done ? "done" : "not-done"}>
                {todo.title}
              </span>
            </div>
            <div>
              <span className="checkmark">
                {todo.done ? <IoMdCheckmark size={25} /> : ""}
              </span>
              <button
                className={`doneButton ${todo.done ? "done2" : ""}`}
                onClick={() => updateStatus(todo.id, todo.done)}
              >
                {todo.done ? "Undo" : "Done"}
              </button>
              <button
                className="deleteButton"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
