import React, { useState } from "react";
import BillDisplay from "./BillDisplay";
const optionStore = [
  { opt: ["0.3", "30% - Outstanding"] },
  { opt: ["0.2", "20% - Good"] },
  { opt: ["0.15", "15% - OK"] },
  { opt: ["0.1", "10% - Bad"] },
  { opt: ["0.05", "5% - Terrible"] },
];

function UiDisplay(props) {
  const [billAmount, setBillAmount] = useState(0);
  const [serviceQual, setServiceQual] = useState(0);
  const [peopleShare, setPeopleShare] = useState(0);
  //const { calculate } = props.calculate;
  //console.log(props.values);
  const calculate = () => {
    props.calculateBill(billAmount, serviceQual, peopleShare);
  };
  return (
    <div id="tuidisplay">
      <div className="ttitle">Tip Calculator</div>
      <div className="tfields">
        <div className="tbill">
          <input
            placeholder="Bill amount in Rupees"
            onChange={(e) => setBillAmount(parseInt(e.target.value))}
          />
        </div>
        <div className="tservice">
          <select onChange={(e) => setServiceQual(parseFloat(e.target.value))}>
            <option value="0" key={0}>
              ---Please rate our Service---
            </option>
            {optionStore.map((option, index) => {
              //console.log(index);
              return (
                <option key={index} value={option.opt[0]}>
                  {option.opt[1]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="tpeople">
          <input
            placeholder="Number of people"
            onChange={(e) => setPeopleShare(parseInt(e.target.value))}
          />
        </div>
        <button onClick={calculate} className="tcalculate">
          Calculate
        </button>
      </div>
      <div>
        <BillDisplay values={props.values} />
      </div>
    </div>
  );
}

export default UiDisplay;
