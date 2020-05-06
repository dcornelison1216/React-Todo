import React from 'react';
import Todo from './Todo';
import { ClearButton } from './AppStyles';

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todolist.map(todo => (
          <Todo toggleTodoCompleted={this.props.toggleTodoCompleted} key={todo.id} todo={todo} />
        ))}
        <ClearButton className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </ClearButton>
      </div>
    );
  };
};

export default TodoList;
