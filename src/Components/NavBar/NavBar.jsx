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
              <h2> PRODUCT</h2>
            </Link>
          </li>
        </ul>
        <Link to="/card" className="ml-auto">
          <button className="btn btn-primary px-5"> My Cart</button>
        </Link>
      </nav>
    );
  }
}
