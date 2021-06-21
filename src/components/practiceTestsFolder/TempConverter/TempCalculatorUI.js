import React, { useState } from "react";
import "./TempCalculator.css";
//import MetaTags from "react-meta-tags";

const TempCalculatorUI = (props) => {
  const { result, symbol } = props;
  const [tempResult, setTempResult] = useState(0);
  const [tempSymbol, setTempSymbol] = useState("");
  return (
    <div className="container2">
      <h1>Temperature Converter</h1>
      <div className="tdegrees">
        <span> Degrees : </span>
        <input
          onChange={(e) => setTempResult(parseFloat(e.target.value))}
        />{" "}
      </div>
      <div className="tconvert">
        <span className="ttype">Type </span>:
        <select
          className="toconvert"
          onChange={(e) => setTempSymbol(e.target.value)}
        >
          <option value="F">Fahrenheit</option>
          <option value="C">Celsius</option>
        </select>
      </div>
      <div className="tbutton">
        <button onClick={() => props.calculate(tempResult, tempSymbol)}>
          Convert
        </button>
      </div>
      <div className="toutput">
        {result} &#176;{symbol}
      </div>
    </div>
  );
};

export default TempCalculatorUI;
