import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Link className="Header__logo" to="/">
          <Logo />
        </Link>

        <nav className="Header__nav">
          <Link to="/shop" className="Header__nav-item">
            购物
          </Link>
          <Link to="/shop" className="Header__nav-item">
            联系我们
          </Link>
        </nav>
      </header>
    );
  }
}
