import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="item" value={this.props.newItemText} onChange={this.props.handleChanges} />
        <button>Submit</button>
        <button onClick={this.props.clearAll}>Clear All</button>
      </form>
    );
  }
}

export default TodoForm;
