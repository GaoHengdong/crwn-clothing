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

export const reduceQuantity = (cartItems, id) => {
  //找到购物车里id相符的，数量减一
  const idx = cartItems.findIndex((item) => item.id === id);
  if (cartItems[idx].quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  } else {
    const newCartItems = [...cartItems];
    newCartItems[idx].quantity--;
    return newCartItems;
  }
};

export const removeItem = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

export const increaseQuantity = (cartItems, id) => {
  return cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });
};
