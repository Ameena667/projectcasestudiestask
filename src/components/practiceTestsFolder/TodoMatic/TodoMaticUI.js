import React from "react";
import Todos from "./Todos";
import "./todomaticcss.css";
import { v4 as uuidv4 } from "uuid";
import { Input } from "antd";
const { Search } = Input;
const Add = Search;

const TodoMaticUI = (props) => {
  const { todos, addTodo, deleteTodo, invertDone, editTodo } = props;

  const onAdd = (value) => {
    if (value !== "") {
      addTodo({ id: uuidv4(), todo: value, done: false });
    }
  };

  return (
    <div className="tmaticui">
      <div>
        <h1>Todo Matic</h1>

        <Add
          placeholder="input todo task "
          allowClear
          enterButton="Add"
          size="large"
          onSearch={onAdd}
        />
      </div>
      <br />
      <div>
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          invertDone={invertDone}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoMaticUI;
