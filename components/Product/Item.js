import React from "react";
import style from "./style.module.css";

export default function Item({ item }) {
  return (
    <div className={style.item_main}>
      <span className={style.item_quantity}>{item.quantity}X</span>
      <span className={style.item_name}>{item.name}</span>
    </div>
  );
}
