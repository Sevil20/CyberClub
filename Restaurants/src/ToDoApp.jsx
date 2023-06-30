import React, { useState } from "react";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const handleAddTodo = () => {
    setTodos([...todos, { text: value }]);
    setValue(" ");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        style={{
          borderRadius: "8px",
          width: "220px",
          height: "38px",
          fontSize: "18px",
        }}
        type="text"
        placeholder="Add a todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{ marginLeft: "15px" }}
        onClick={handleAddTodo}
      >
        Add
      </button>

      <ul style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
        {todos.map((todo, index) => (
          <li style={{ listStyle: "none", color: "darkblue" }} key={index}>
            <span style={{ fontSize: "18px" }}>{todo.text}</span>
            <button
              style={{ marginLeft: "20px",marginTop:'10px'}}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
