import React from 'react';
import './Header.css';

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
        <button className="first-child">Hire a Guide</button>
        <button>
          Call Now <i className="fas fa-phone"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
