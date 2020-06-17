import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems }) => (
  <div className="CartDropdown">
    <div className="CartDropdown__item">
      {cartItems.map((cartItem) => (
        <CartItem {...cartItem} key={cartItem.id} />
      ))}
    </div>
    <CustomButton className="CartDropdown__button">去结算</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
