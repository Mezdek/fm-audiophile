import React from "react";
import style from "./style.module.css";

export default function QuantitySelector({ setCount, count }) {
  return (
    <div className={style.quantity_selector}>
      <div
        className={style.quantity_selector_button}
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
      >
        -
      </div>
      <div className={style.quantity_selector_count}>{count}</div>
      <div
        className={style.quantity_selector_button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
}
