import React from 'react';
import { ButtonsDiv, Form, Button, Input } from './AppStyles'

class TodoForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input type="text" name="item" value={this.props.newItemText} onChange={this.props.handleChanges} />
        <ButtonsDiv>
          <Button>Add</Button>
          <Button onClick={this.props.clearAll}>Clear All</Button>
        </ButtonsDiv>
      </Form>
    );
  }
}

export default TodoForm;
