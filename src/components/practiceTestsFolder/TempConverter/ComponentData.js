import React, { Component } from "react";
import TempCalculatorUI from "./TempCalculatorUI";

class ComponentData extends Component {
  state = {
    result: "------",
    symbol: "-",
  };
  calculate = (degreeTemp, toConvert) => {
    const symbol = toConvert === "F" ? "C" : "F";
    const res =
      toConvert === "F"
        ? parseFloat((degreeTemp - 32) * (5 / 9)).toFixed(4)
        : parseFloat((9 * degreeTemp) / 5 + 32).toFixed(4);

    this.setState({
      result: res,
      symbol: symbol,
    });
  };
  render() {
    const { result, symbol } = this.state;
    return (
      <div>
        <TempCalculatorUI
          result={result}
          symbol={symbol}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

export default ComponentData;
