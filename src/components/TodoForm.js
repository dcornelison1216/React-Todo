import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItemText: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      newItemText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.newItemText) {
      this.props.addNewItem(this.state.newItemText);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="item" value={this.state.newItemText} onChange={this.handleChanges} />
        <button>Submit</button>
        <button>Clear All</button>
      </form>
    );
  }
}

export default TodoForm;
