import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import todomaticoutput from "./todomaticoutput.PNG";

const TodoMaticDescription = (props) => {
  const { url } = props.match;
  return (
    <div>
      <div style={{ float: "right" }}>
        <b>Demo Link : </b>
        <Button type="primary">
          <Link to={`${url}/demo`}>Demo</Link>
        </Button>
      </div>
      <h2>Todo Matic Application</h2>
      <h3>Description :-</h3>
      <p style={{ fontSize: "16px" }}>
        App provides feature to keep track your All , Active , Completed todo .
        you can also edit , delete already created tasks.
      </p>
      <h3>Output :-</h3>
      <img src={todomaticoutput} alt="output" width="640px" height="320px" />
    </div>
  );
};

export default TodoMaticDescription;
