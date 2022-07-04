import React from "react";
import style from "./style.module.css";

export default function Item({ item }) {
  return (
    <div className={style.item_main}>
      <div className={style.item_quantity}>{item.quantity}X</div>
      <div className={style.item_name}>{item.name}</div>
    </div>
  );
}
