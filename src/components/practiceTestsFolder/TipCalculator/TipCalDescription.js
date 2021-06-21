import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import tipcalculatoroutput from "./tipcalculatoroutput.PNG";

const TipCalDescription = (props) => {
  const { url } = props.match;
  return (
    <div>
      <div style={{ float: "right" }}>
        <b>Demo Link : </b>
        <Button type="primary">
          <Link to={`${url}/demo`}>Demo</Link>
        </Button>
      </div>
      <h2>Tip Calculator Application</h2>
      <h3>Description :-</h3>
      <p style={{ fontSize: "16px" }}>
        App calculates total bill with tip and bill per person , using actual
        bill amount , the service rating , the number of people sharing that
        bill .
      </p>
      <h3>Output :-</h3>
      <img
        src={tipcalculatoroutput}
        alt="output"
        width="450px"
        height="360px"
      />
    </div>
  );
};

export default TipCalDescription;
