import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const reduceQuantity = (id) => ({
  type: cartActionTypes.REDUCE_QUANTITY,
  payload: id,
});

export const increaseQuantity = (id) => ({
  type: cartActionTypes.INCREASE_QUANTITY,
  payload: id,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
