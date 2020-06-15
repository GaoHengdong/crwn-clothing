import React from "react";
import "./CartItem.scss";

const CartItem = ({ name, imageUrl, price, id, quantity }) => (
  <div className="CartItem">
    <img src={imageUrl} alt={name} className="CartItem__image" />
    <div className="CartItem__rightside">
      <div className="CartItem__name">{name}</div>
      <div className="CartItem__price">
        {quantity} × ￥{price}
      </div>
    </div>
  </div>
);
export default CartItem;
