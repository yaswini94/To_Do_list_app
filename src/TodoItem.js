import React, { useState } from 'react';

function TodoItem({ todo, removeTodo, updateTodo }) {
  let [editStatus, setEditStatus] = useState(false);
  let [updatedInput, setUpdatedInput] = useState(todo.text);
  return (
    <li>
      { editStatus ? (
        <>
          <input type="text" value={updatedInput} onChange={e => {
            setUpdatedInput(e.target.value);
          }}/>
          <button style={{margin: "8px"}} onClick={() => {setEditStatus(false); updateTodo(todo.id, updatedInput);}}>Update</button>
        </>
      ) : (
        <>
          {todo.text}
          <button style={{margin: "8px"}} onClick={() => setEditStatus(true)}>edit</button>
        </>
      )}
      <button style={{margin: "8px"}} onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
