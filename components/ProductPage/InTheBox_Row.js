import React from "react";
import style from "./style.module.css";

export default function InTheBox_Row({ item }) {
  return (
    <div className={style.box_single_row}>
      <div className={style.box_left}>{item.quantity}X</div>
      <div className={style.box_right}>{item.item}</div>
    </div>
  );
}
