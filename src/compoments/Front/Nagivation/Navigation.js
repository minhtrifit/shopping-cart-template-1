import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Nagivation = () => {
  return (
    <div className="nav">
      <div className="nav-top">
        <NavLink to="/" className="nav-top-left">
          <p className="nav-top-left-logo-first">Shopping</p>
          <p className="nav-top-left-logo-second">Hubz.</p>
        </NavLink>
        <div className="nav-top-mid">
          <input
            type="text"
            className="nav-top-mid-input"
            placeholder="Search here..."
          />
          <i className="fa-solid fa-magnifying-glass nav-top-mid-btn"></i>
        </div>
        <div className="nav-top-right">
          <NavLink to="/cart">
            <i className="fa-solid fa-basket-shopping nav-top-right-icon"></i>
          </NavLink>
          <p className="nav-top-right-title">Cart</p>
        </div>
      </div>
      <div className="nav-bot">
        <div className="nav-bot-links">
          <NavLink to="/category/clothes" activeClassName="target">
            Clothes
          </NavLink>
          <NavLink to="/category/shoes" activeClassName="target">
            Shoes
          </NavLink>
          <NavLink to="/category/backpack" activeClassName="target">
            Backpack
          </NavLink>
          <NavLink to="/category/electronics" activeClassName="target">
            Electronics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nagivation;
