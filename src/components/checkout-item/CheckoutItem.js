import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  reduceQuantity,
  removeItem,
  increaseQuantity,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
  name,
  imageUrl,
  price,
  quantity,
  id,
  removeItem,
  reduceQuantity,
  increaseQuantity,
}) => (
  <div className="CheckoutItem">
    <div className="CheckoutItem__block CheckoutItem__block--image">
      <img className="CheckoutItem__image" src={imageUrl} alt={name} />
    </div>
    <div className="CheckoutItem__block">{name}</div>
    <div className="CheckoutItem__block">
      <span className="CheckoutItem__reduce" onClick={() => reduceQuantity(id)}>
        &#10094;
      </span>
      {quantity}
      <span
        className="CheckoutItem__increase"
        onClick={() => increaseQuantity(id)}
      >
        &#10095;
      </span>
    </div>
    <div className="CheckoutItem__block">{price}</div>
    <div
      className="CheckoutItem__block CheckoutItem__block--remove"
      onClick={() => removeItem(id)}
    >
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  reduceQuantity: (id) => dispatch(reduceQuantity(id)),
  removeItem: (id) => dispatch(removeItem(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
