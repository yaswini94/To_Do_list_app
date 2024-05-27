import React, { useState } from 'react';
import './App.css';
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

  const updateTodo = (id, task) => {
    let updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.text = task;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <div>
      <h1 className='Center-text'>Todo List</h1>
      { todos?.length > 0 ? (
        <p className='Margin-left'>Here are list of Todo's.</p>
      ) : (
        <p className='Margin-left'>No Todo's left.</p>
      )}
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      <input className='Margin-left' type="text" onKeyDown={e => {
        if (e.key === 'Enter') {
          addTodo(e.target.value);
          e.target.value = ''; // Clear input after adding
        }
      }} placeholder="Add a new task" />
    </div>
  );
}

export default App;
