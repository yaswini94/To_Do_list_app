import React from 'react';

function TodoItem({ todo, removeTodo }) {
  return (
    <li>
      {todo.text}
      <button style={{margin: "8px"}} onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
