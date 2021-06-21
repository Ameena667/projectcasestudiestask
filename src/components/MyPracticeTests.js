import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Switch } from "react-router";
import ListOfTestsDisplay from "./ListOfTestsDisplay";
import TempCalculator from "./practiceTestsFolder/TempConverter/TempCalculator";
import HeaderDisplay from "./HeaderDisplay";
import TipCalculatorNavigation from "./practiceTestsFolder/TipCalculator/TipCalculatorNavigation";
import TodoMaticNavigation from "./practiceTestsFolder/TodoMatic/TodoMaticNavigation";

const MyPracticeTests = (props) => {
  console.log(props);
  return (
    <>
      <Router>
        <Route path="/">
          <HeaderDisplay />
        </Route>
        <Route path="/">
          <ListOfTestsDisplay />
        </Route>
        <Route path="/TipCalculator" component={TipCalculatorNavigation} />
        <Route path="/TempCalculator" component={TempCalculator} />
        <Route path="/TodoMatic" component={TodoMaticNavigation} />
      </Router>
    </>
  );
};

export default MyPracticeTests;
