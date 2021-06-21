import React, { useState } from "react";
import { Input, Button, Checkbox, Radio } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Todos = (props) => {
  const { todos, deleteTodo, invertDone, editTodo } = props;
  const [editFlag, setEditFlag] = useState(-1);
  const [editPlaceholderData, setEditPlaceholderData] = useState("");
  const [display, setDisplay] = useState("T");

  const onSave = (text, index) => {
    if (text !== "") {
      editTodo(editPlaceholderData, index);
      setEditFlag(-1);
    }
  };
  return (
    <div>
      <Radio.Group active size="large" className="btngroup">
        <Button onClick={() => setDisplay("T")}>All</Button>
        <Button onClick={() => setDisplay(false)}>Active</Button>
        <Button onClick={() => setDisplay(true)}>Completed</Button>
      </Radio.Group>
      <br />
      <br />
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            {display === todo.done || display === "T" ? (
              <>
                <Checkbox
                  checked={todo.done}
                  onClick={() => {
                    invertDone(index);
                  }}
                />{" "}
                {editFlag === index ? (
                  <>
                    <Input
                      value={editPlaceholderData}
                      style={{ width: "50%" }}
                      onChange={(e) => setEditPlaceholderData(e.target.value)}
                    />
                    <Button
                      icon={<CheckOutlined />}
                      onClick={() => onSave(editPlaceholderData, index)}
                    />
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => setEditFlag(-1)}
                    />
                  </>
                ) : (
                  <Input
                    //placeholder={todo.todo}
                    value={todo.todo}
                    style={{ width: "60%" }}
                  />
                )}
                <Button
                  icon={<EditOutlined />}
                  onClick={() => {
                    setEditFlag(index);
                    setEditPlaceholderData(todo.todo);
                  }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    deleteTodo(index);
                  }}
                />
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default Todos;
