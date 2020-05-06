import React from 'react';
import { ButtonsDiv, Headline, Form, Button, Input, AddClearDiv } from './AppStyles'

class TodoForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Headline>Your To-Do List</Headline>
        <AddClearDiv>
          <Input type="text" name="item" value={this.props.newItemText} onChange={this.props.handleChanges} />
          <ButtonsDiv>
            <Button>Add</Button>
            <Button onClick={this.props.clearAll}>Clear All</Button>
          </ButtonsDiv>
        </AddClearDiv>
      </Form>
    );
  }
}

export default TodoForm;
