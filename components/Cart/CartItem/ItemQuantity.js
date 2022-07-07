import React from "react";
import style from "../style.module.css";
import Button from "../../Button";

import { useDispatch } from "react-redux";
import {
  addOneToCart,
  removeOneFromCart,
  removeFromCart,
} from "../../../store/reducers/cartSlice";

export default function ItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={style.quantity_controller}>
      <Button
        role={() => {
          dispatch(removeOneFromCart({ productId: id }));
        }}
        title="-"
        theme="counter"
      />
      <span className={style.quantity}>{quantity}</span>
      <Button
        role={() => {
          dispatch(addOneToCart({ productId: id }));
        }}
        title="+"
        theme="counter"
      />
      <Button
        role={() => {
          dispatch(removeFromCart({ productId: id }));
        }}
        title="Remove"
        theme="counter"
      />
    </div>
  );
}
