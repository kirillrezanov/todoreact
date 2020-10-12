import React from 'react';
import './App.css';
import TodoHeader from './todoHeader/todoHeader';
import TodoList from './todoList/todoList';

function App({ state, dispatch }) {
  return (
    <div className="container">
      <TodoHeader inputVal={state.todo.taskInputValue} dispatch={dispatch} />
      <TodoList tasks={state.todo.tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
