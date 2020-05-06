import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todolist.map(todo => (
          <Todo toggleTodoCompleted={this.props.toggleTodoCompleted} key={todo.id} todo={todo} />
        ))}
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  };
};

export default TodoList;
