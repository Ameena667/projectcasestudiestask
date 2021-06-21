import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoMaticUI from "./TodoMaticUI";
class TodoMatic extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: uuidv4(), todo: "Eat", done: false },
        { id: uuidv4(), todo: "Code", done: false },
        { id: uuidv4(), todo: "Sleep", done: false },
      ],
    };
  }

  addTodo = (temp_obj) => {
    const todos = [...this.state.todos];
    this.setState({
      todos: [...todos, temp_obj],
    });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  invertDone = (index) => {
    let todos = [...this.state.todos];
    if (todos[index].done === false) {
      todos[index].done = true;
    } else {
      todos[index].done = false;
    }
    this.setState({
      todos: todos,
    });
  };

  editTodo = (editedText, index) => {
    let todos = [...this.state.todos];
    todos[index].todo = editedText;
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="tmatic">
        <TodoMaticUI
          todos={this.state.todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          invertDone={this.invertDone}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}
export default TodoMatic;
