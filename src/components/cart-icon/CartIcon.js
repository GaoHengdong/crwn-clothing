import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { connect } from "react-redux";

import "./CartIcon.scss";

const CartIcon = ({ className, toggleCartHidden }) => (
  <div className={`CartIcon ${className}`} onClick={toggleCartHidden}>
    <ShoppingIcon className="CartIcon__shoppingicon" />
    <span className="CartIcon__item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
