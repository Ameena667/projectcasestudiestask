const BillDisplay = (props) => {
  //destructuring
  const { billAmount, tipAmount, peopleShare } = props.values;

  return (
    <div className="tbilldisplay">
      <div>Total bill : {billAmount}</div>
      <div>Total tip : {tipAmount}</div>
      <div>Bill per person :{peopleShare.toFixed(2)}</div>
    </div>
  );
};

export default BillDisplay;
