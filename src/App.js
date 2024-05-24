import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    const newTodos = [...todos, { id: Date.now(), text: task, completed: false }];
    setTodos(newTodos);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <input type="text" onKeyDown={e => {
        if (e.key === 'Enter') {
          addTodo(e.target.value);
          e.target.value = ''; // Clear input after adding
        }
      }} placeholder="Add a new task" />
    </div>
  );
}

export default App;
