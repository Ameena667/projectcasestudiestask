import React from "react";
import UiDisplay from "./UiDisplay";
import "./tipCalculator.css";

class TipCalculator extends React.Component {
  state = {
    billAmount: 0,
    tipAmount: 0,
    peopleShare: 0,
  };

  calculateBill = (billAmt, service, noOfPeople) => {
    const extraPay = billAmt * service;
    console.log(typeof noOfPeople);
    this.setState({
      billAmount: billAmt + extraPay,
      tipAmount: extraPay,
      peopleShare: (billAmt + extraPay) / parseInt(noOfPeople),
    });
  };

  render() {
    return (
      <div className="TipCalculator">
        <div>
          <UiDisplay calculateBill={this.calculateBill} values={this.state} />
        </div>
      </div>
    );
  }
}

export default TipCalculator;
