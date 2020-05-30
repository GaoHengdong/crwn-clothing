import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import "./Header.scss";

class Header extends Component {
  render() {
    const { currentUser } = this.props;
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
          {currentUser ? (
            <span className="Header__nav-item" onClick={() => auth.signOut()}>
              登出
            </span>
          ) : (
            <Link to="/signin" className="Header__nav-item">
              登录
            </Link>
          )}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
