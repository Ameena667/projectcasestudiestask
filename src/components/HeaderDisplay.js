import React from "react";
import { Link } from "react-router-dom";
import "./headercss.css";
function HeaderDisplay() {
  return (
    <div className="header">
      Welcome to my practice tests Repo
      <div className="headerRight">
        <button>
          <Link to="/repos" style={{ textDecoration: "none" }} className="link">
            Repo
          </Link>
        </button>
        <button>
          <Link to="/repos" style={{ textDecoration: "none" }} className="link">
            BackToHome
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeaderDisplay;
