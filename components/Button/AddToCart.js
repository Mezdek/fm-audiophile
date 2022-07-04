import React from "react";
import style from "./style.module.css";
// import { bindActionCreators } from "redux";
import { addToCart } from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCart({ theme, productId, count }) {
  const dispatch = useDispatch();
  const quantity = count;
  // const { addToCart } = bindActionCreators(actionCreators, dispatch);
  return (
    <div
      className={`${style.button} ${style[theme]}`}
      onClick={() => {
        dispatch(addToCart({ productId, quantity }));
      }}
    >
      Add to Cart
    </div>
  );
}
