import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { connect } from "react-redux";

import "./CartIcon.scss";

const CartIcon = ({ className, toggleCartHidden, cartItemsNum }) => (
  <div className={`CartIcon ${className}`} onClick={toggleCartHidden}>
    <ShoppingIcon className="CartIcon__shoppingicon" />
    <span className="CartIcon__item-count">{cartItemsNum}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemsNum: cartItems.reduce((a, item) => a + item.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
