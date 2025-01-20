import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [lastId, setLastId] = useState(0);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function keyDown(e) {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  }

  function handleAddTodo() {
    if (inputValue.trim() === "") return;
    const newId = lastId + 1;
    setTodos((todos) => [
      ...todos,
      { title: inputValue, id: newId, done: false },
    ]);
    setLastId(newId);
    setInputValue("");
  }

  function updateStatus(id, done) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, done: !done } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="contaienr">
      <label htmlFor="addTodo">Add todo</label>
      <br />
      <input
        type="text"
        id="addTodo"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={keyDown}
      />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <TodoList
        todos={todos}
        updateStatus={updateStatus}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
