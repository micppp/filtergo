import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <div className="container fl jc-sb">
      <h1 className="header__h1">FiltérGo</h1>
      <button
        className={
          props.open
            ? "hamburger hamburger--elastic is-active"
            : "hamburger hamburger--elastic"
        }
        type="button"
        onClick={props.handleMenuClick}
      >
        <span className="hamburger-text">Filters</span>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  </header>
);

export default Header;
