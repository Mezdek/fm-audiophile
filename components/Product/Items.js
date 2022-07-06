import React from "react";
import style from "./style.module.css";

import Item from "./Item";

export default function Items({ items }) {
  return (
    <div className={style.items_main}>
      <h1 className={style.items_header}>In The Box</h1>
      <div className={style.items_content}>
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
