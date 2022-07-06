import React from "react";
import style from "../style.module.css";
import Price from "../../Product/Price";

export default function ItemPrice({ price }) {
  return (
    <div className={style.price}>
      <span className={style.price_tag}>Price</span>
      <Price price={price} />
    </div>
  );
}
