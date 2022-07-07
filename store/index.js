import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import cart from "./reducers/cartSlice/persisting";
import products from "./reducers/productsSlice/persisting";

export const store = configureStore({
  reducer: { cart, products },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
