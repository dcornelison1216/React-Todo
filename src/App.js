import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { AppContainer } from './components/AppStyles';

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
      todolist,
      newItemText: ""
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
        { task: itemName, id: Date.now(), completed: false }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todolist: this.state.todolist.filter(todo => {
        return !todo.completed
      }),
    });
  };

  clearAll = () => {
    if(this.state.todolist.length > 0) {
      this.setState({
        todolist: []
      });
    }
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      newItemText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.newItemText) {
      this.addNewItem(this.state.newItemText)
      this.setState({
        newItemText: ""
      })
    };
  };

  render() {
    return (
      <AppContainer>
        <TodoForm
          addNewItem={this.addNewItem}
          clearAll={this.clearAll}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          newItemText={this.state.newItemText}
        />
        <TodoList
          toggleTodoCompleted={this.toggleTodoCompleted}
          todolist={this.state.todolist}
          clearCompleted={this.clearCompleted}
        />
      </AppContainer>
    );
  }
}

export default App;
