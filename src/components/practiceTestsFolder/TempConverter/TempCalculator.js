import React from "react";
import "./TempCalculator.css";
//import MetaTags from "react-meta-tags";
import { Route, Link, Switch } from "react-router-dom";
import TempCalDescription from "./TempCalDescription";
//import TempCalculatorUI from "./TempCalculatorUI";
import ComponentData from "./ComponentData";
import { Button } from "antd";

class TempCalculator extends React.Component {
  render() {
    const { url, path } = this.props.match;
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
              component={TempCalDescription}
            />
            <Route
              path={`${path}/description/demo`}
              component={ComponentData}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default TempCalculator;
