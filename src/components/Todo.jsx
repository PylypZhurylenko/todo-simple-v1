import React from "react";

export const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const editHandler = (e) => {
    let currValue = e.target.value;
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, text: currValue };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <input
          onChange={editHandler}
          //  id={todo.id}
          className={`todo-input--text ${todo.completed ? "completed" : ""}`}
          type="text"
          value={text}
        />
      </li>
      <button
        onClick={completeHandler}
        className={`complete-btn ${
          todo.completed ? "complete-btn-checked" : ""
        }`}
      >
        <i
          className={`fas fa-check ${
            todo.completed ? "fa-solid fa-square-xmark" : ""
          }`}
        ></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      {/* <button className="edit-btn">
        <i className="fa-solid fa-pen"></i>
      </button> */}
    </div>
  );
};
