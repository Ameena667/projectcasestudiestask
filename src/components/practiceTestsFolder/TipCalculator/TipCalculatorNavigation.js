import React from "react";
import "./tipCalculator.css";
import { Route, Link, Switch } from "react-router-dom";
import TipCalDescription from "./TipCalDescription";
import TipCalculator from "./TipCalculator";
import { Button } from "antd";

const TipCalculatorNavigation = (props) => {
  const { url, path } = props.match;
  return (
    <div className="container">
      <Button>
        <Link to={`${url}/description`}>Description</Link>
      </Button>
      <Switch>
        <Route
          exact
          strict
          path={`${path}/description`}
          component={TipCalDescription}
        />
        <Route path={`${path}/description/demo`} component={TipCalculator} />
      </Switch>
    </div>
  );
};

export default TipCalculatorNavigation;
