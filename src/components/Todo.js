import React from 'react';
import { ItemDiv, Item } from './AppStyles';

const Todo = props => {
  const handleClick = e => {
    props.toggleTodoCompleted(props.todo.id);
  };

  return (
    <ItemDiv onClick={handleClick} className={`todo${props.todo.completed ? " completed" : ""}`}>
      <Item>{props.todo.task}</Item>
    </ItemDiv>
  );
};

export default Todo;
