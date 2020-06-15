/**
 *
 * @param {*} cartItems 购物车的所有商品
 * @param {*} newItem 新商品
 */
export const addItemToCart = (cartItems, newItem) => {
  //先找购物车里有无商品，如果有，增加现有商品的数量，如果无，加入购物车
  const idx = cartItems.findIndex((item) => item.id === newItem.id);
  if (idx !== -1) {
    const newCartItems = [...cartItems];
    newCartItems[idx].quantity++;
    return newCartItems;
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};
