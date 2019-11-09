import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}