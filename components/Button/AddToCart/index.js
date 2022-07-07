import React, { useState } from "react";
import style from "../style.module.css";

import Button from "..";
import QuantitySelector from "./QuantitySelector";
import Price from "../../Product/Price";

import { addToCart } from "../../../store/reducers/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AddToCart({ productId }) {
  const { list } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={style.buttonOnCard}>
      <Price price={list[productId].price} />
      <QuantitySelector setCount={setCount} count={count} />
      <Button
        title={"add to cart"}
        role={() => {
          dispatch(addToCart({ productId, quantity: count }));
        }}
      />
    </div>
  );
}
