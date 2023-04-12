import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    setTodos([...todos, { do: value, date: new Date().toLocaleString() }]);
    setValue("");
  }

  function removeItem(e) {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Type here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          {" "}
          <button className="add" type="submit">
            ADD
          </button>
        </div>
      </form>
      {todos.map((item, i) => (
        <div className="todo" key={i} id={i} onClick={removeItem}>
          {item.do} - {item.date}
          <button className="remove" onClick={removeItem}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
