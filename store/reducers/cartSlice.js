import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const { cart } = state;
      const { productId, quantity } = action.payload;
      if (cart.find((item) => item.productId === productId)) {
        cart.find((item) => item.productId === productId).quantity += quantity;
      } else {
        cart.push(action.payload);
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart } = actions;
export default reducer;
