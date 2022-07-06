import React, { useState } from "react";
import style from "../style.module.css";

import Button from "..";
import QuantitySelector from "./QuantitySelector";
import Price from "../../Product/Price";

import { addToCart } from "../../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";

import products from "../../../data/products.json";

export default function AddToCart({ productId }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const quantity = count;

  return (
    <div className={style.buttonOnCard}>
      <Price price={products[productId].price} />
      <QuantitySelector setCount={setCount} count={count} />
      <Button
        title={"add to cart"}
        role={() => {
          dispatch(addToCart({ productId, quantity }));
        }}
      />
    </div>
  );
}
