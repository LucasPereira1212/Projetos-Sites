import React from "react";
import { TodoItem } from "./TodoItem.jsx";
import "./TodoList.css";

export function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className='todo-list'>
        <p className='empty-message'>Nenhuma tarefa adicionada ainda!</p>
      </div>
    );
  }
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  );
}
