import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todolist.length > 0 ? props.todolist.map(todo => (
        <Todo toggleTodoCompleted={props.toggleTodoCompleted} key={todo.id} todo={todo} />
      )) : null}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
