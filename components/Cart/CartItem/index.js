import React from "react";
import style from "../style.module.css";

import ItemImage from "./ItemImage";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";
import ItemQuantity from "./ItemQuantity";
import ItemTotalPrice from "./ItemTotalPrice";

export default function CartItem({ item, quantity }) {
  return (
    <div className={style.item}>
      <ItemImage name={item.name} image={item.image} type={item.type} />
      <div className={style.top}>
        <div className={style.info}>
          <ItemName name={item.name} type={item.type} />
          <ItemPrice price={item.price} />
        </div>
        <div className={style.bottom}>
          <ItemQuantity id={item.id} quantity={quantity} />
          <ItemTotalPrice price={item.price} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}
