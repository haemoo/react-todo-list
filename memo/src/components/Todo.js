import React from "react";


export default function Todo({ todo }) {
  
  return <li style={{ listStyle: "none" }}>{todo.todo}</li>;
}

