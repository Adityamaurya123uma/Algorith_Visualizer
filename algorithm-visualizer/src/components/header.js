import React from "react";
import "../components/css/header.css";
import DarkMode from "./darkmode";

const Header = () => {
  return (
    <div className="maiHeader">
      <div className="headerTitle">
        <span className="title">Algorithm Visaulizer</span>
      </div>
      <div className="actionBtn">
        <div className="links">
          <span>
            <i class="fab fa-github fa-xs"></i>
          </span>
          <span>
            <i class="fab fa-linkedin fa-xs"></i>
          </span>
        </div>
        <div className="themeChange">
          <span>
            <DarkMode />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
