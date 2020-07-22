import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropdown";
import "./Header.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.action";

class Header extends Component {
  render() {
    const { currentUser, hidden, signOutStart } = this.props;
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
            <span className="Header__nav-item" onClick={signOutStart}>
              登出
            </span>
          ) : (
            <Link to="/signin" className="Header__nav-item">
              登录
            </Link>
          )}
          <CartIcon className="Header__nav-item" />
        </nav>
        {hidden || <CartDropDown />}
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
