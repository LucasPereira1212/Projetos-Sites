import React from "react";
import "./TodoItem.css";

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className='todo-content'>
        <input
          type='checkbox'
          className='todo-checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span className='todo-text'>{todo.text}</span>

        <button className='delete-button' onClick={() => onDelete(todo.id)}>
          Remover
        </button>
      </div>
    </div>
  );
}
