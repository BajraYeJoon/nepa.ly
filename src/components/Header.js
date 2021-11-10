import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <h3>Nepa.ly</h3>
      </div>

      <div className="header__center">
        <p>Himalayas</p>
        <p>Religious</p>
        <p>Tourism</p>
        <p>Wildlife</p>
        <p>Culture</p>
      </div>

      <div className="header__right">
        <p className="first-child">Hire a Guide</p>
        <p>Call Now</p>
      </div>
    </div>
  );
};

export default Header;
