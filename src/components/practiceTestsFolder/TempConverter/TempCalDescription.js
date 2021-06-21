import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import tempconvertoutput from "./tempconvertoutput.PNG";

const TempCalDescription = (props) => {
  const { url } = props.match;
  return (
    <div>
      <h1>Temperature converter Application</h1>
      <h2>Description :-</h2>
      <p style={{ fontSize: "18px" }}>
        App converts given Temperature in Fahrenheit to Celsius (or) Celsius to
        Fahrenheit.
      </p>
      <h2>Output :-</h2>
      <img src={tempconvertoutput} alt="output" width="350px" height="250px" />
      <br />
      <b>Demo Link : </b>
      <Button type="primary">
        <Link to={`${url}/demo`}>Demo</Link>
      </Button>
    </div>
  );
};

export default TempCalDescription;
