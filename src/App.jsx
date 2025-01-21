import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    setTodos((todos) => [
      ...todos,
      { title: inputValue, id: crypto.randomUUID(), done: false },
    ]);
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
      <button className="addButton" onClick={handleAddTodo}>
        Add
      </button>
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
