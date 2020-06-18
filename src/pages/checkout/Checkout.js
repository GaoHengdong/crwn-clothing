import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./Checkout.scss";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = ({ cartItems, cartTotal }) => (
  <div className="Checkout">
    <ul className="Checkout__header">
      <li className="Checkout__header-item">产品</li>
      <li className="Checkout__header-item">描述</li>
      <li className="Checkout__header-item">数量</li>
      <li className="Checkout__header-item">价格</li>
      <li className="Checkout__header-item">移除</li>
    </ul>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} {...item} />
    ))}
    <div className="Checkout__total">总计：￥{cartTotal}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
