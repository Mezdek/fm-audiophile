import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addOneToCart: (state, action) => {
      const { cart } = state;
      const { productId } = action.payload;
      const item = cart.find((item) => item.productId === productId);
      item ? item.quantity++ : cart.push({ productId, quantity: 1 });
    },
    addToCart: (state, action) => {
      const { cart } = state;
      const { productId, quantity } = action.payload;
      if (cart.find((item) => item.productId === productId)) {
        cart.find((item) => item.productId === productId).quantity += quantity;
      } else {
        cart.push(action.payload);
      }
    },
    removeOneFromCart: (state, action) => {
      const { cart } = state;
      const { productId } = action.payload;
      const item = cart.find((item) => item.productId === productId);
      item
        ? item.quantity > 1
          ? item.quantity--
          : cart.splice(cart.indexOf(item), 1)
        : null;
    },
    removeFromCart: (state, action) => {
      const { cart } = state;
      const { productId } = action.payload;
      cart.splice(
        cart.indexOf((item) => item.productId === productId),
        1
      );
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addOneToCart, addToCart, removeOneFromCart, removeFromCart } =
  actions;
export default reducer;
