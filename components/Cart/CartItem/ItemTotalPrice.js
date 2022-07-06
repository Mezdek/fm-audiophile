import React from "react";
import style from "../style.module.css";
import Price from "../../Product/Price";

export default function ItemTotalPrice({ price, quantity }) {
  return (
    <div className={style.total}>
      Subtotal ({quantity} items): <Price price={price * quantity} />
    </div>
  );
}
