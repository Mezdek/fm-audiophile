import React from "react";
import style from "./style.module.css";

import InTheBox_Row from "./InTheBox_Row";

export default function InTheBox({ itemsInTheBox }) {
  return (
    <div className={style.box_main}>
      <h1 style={{ margin: "0" }}>In The Box</h1>
      <div className={style.box_rows}>
        {itemsInTheBox.map((item, index) => (
          <InTheBox_Row item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
