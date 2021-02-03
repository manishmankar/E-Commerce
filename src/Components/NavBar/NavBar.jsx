import React, { Component } from "react";
import logo from "../../Assete/logo.svg";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm  navbar-dark px-sm-5"
        style={{ backgroundColor: "brown" }}
      >
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/" style={{ width: "50px" }}>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              PRODUCT
            </Link>
          </li>
        </ul>
        <Link to="/card" className="ml-auto">
          <span className="mr-2">
            <i className="fas fa-cart-plus " />
          </span>
          my cart
        </Link>
      </nav>
    );
  }
}
