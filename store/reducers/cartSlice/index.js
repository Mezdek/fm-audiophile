import { createSlice } from "@reduxjs/toolkit";
import methods from "./methods";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    ...methods,
  },
});

const { reducer, actions } = cartSlice;
export const { addOneToCart, addToCart, removeOneFromCart, removeFromCart } =
  actions;
export default reducer;
