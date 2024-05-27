import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <ul className='Margin-left'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;
