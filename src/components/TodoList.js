import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todolist.map(todo => (
        <Todo toggleTodoCompleted={props.toggleTodoCompleted} key={todo.id} todo={todo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
