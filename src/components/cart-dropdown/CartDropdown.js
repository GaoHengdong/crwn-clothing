import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="CartDropdown">
    <div className="CartDropdown__item">
      {console.log(cartItems)}
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem {...cartItem} key={cartItem.id} />
        ))
      ) : (
        <p className="CartDropdown__prompt">购物车是空的</p>
      )}
    </div>
    <CustomButton
      className="CartDropdown__button"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      去结算
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
