import React from "react";
import { Link } from "react-router-dom";
import "./headercss.css";
import "./sidenavbar.css";
function ListOfTestsDisplay() {
  const linkStore = [
    { link: ["/TodoMatic", "Todo Matic"] },
    { link: ["/TipCalculator", "Tip Calculator"] },
    { link: ["/TempCalculator", "Temp Calculator"] },
    { link: ["/ExpenseTracker", "Expense Tracker"] },
    { link: ["/CovidStatus", "Covid Status"] },
    { link: ["/FacebookLite", "Facebook Lite"] },
    { link: ["/GitIssuesRepo", "Github issues Repo"] },
    { link: ["/FanWiki", "Fan Wiki"] },
    { link: ["/Movie Listing", "Movie Listing"] },
    { link: ["/TodoWithRedux", "Todo App Using Redux"] },
  ];

  return (
    <div className="sidenavbar">
      {linkStore.map((display, index) => {
        //console.log(index);
        return (
          <div key={index} className="individualrepo">
            <Link
              to={display.link[0]}
              key={index}
              style={{ textDecoration: "none", color: "white" }}
            >
              {display.link[1]}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ListOfTestsDisplay;
