import { createSlice } from "@reduxjs/toolkit";
import products from "../../../data/products.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: { list: products },
  reducers: {
    doNothing: (state, action) => state,
  },
});

const { reducer, actions } = productsSlice;
export const { doNothing } = actions;
export default reducer;
