import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todolist = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todolist
    };
  }

  toggleTodoCompleted = itemId => {
    this.setState({
      todolist: this.state.todolist.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addNewItem = itemName => {
    this.setState({
      todolist: [
        ...this.state.todolist,
        { task: itemName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todolist: this.state.todolist.filter(todo => {
        return !todo.completed
      })
    });
  };

  render() {
    return (
      <div>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList
          toggleTodoCompleted={this.toggleTodoCompleted}
          todolist={this.state.todolist}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
