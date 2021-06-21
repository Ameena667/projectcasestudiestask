import React from "react";
import "./todomaticcss.css";
import { Route, Link, Switch } from "react-router-dom";
import TodoMaticDescription from "./TodoMaticDescription";
import TodoMatic from "./TodoMatic";
import { Button } from "antd";
const TodoMaticNavigation = (props) => {
  const { url, path } = props.match;
  return (
    <>
      <div className="container">
        <Button>
          <Link to={`${url}/description`}>Description</Link>
        </Button>
        <Switch>
          <Route
            exact
            strict
            path={`${path}/description`}
            component={TodoMaticDescription}
          />
          <Route path={`${path}/description/demo`} component={TodoMatic} />
        </Switch>
      </div>
    </>
  );
};

export default TodoMaticNavigation;
