import React from "react";
import style from "./style.module.css";

import InTheBox from "./InTheBox";

export default function Description({ features, itemsInTheBox }) {
  return (
    <div className={style.description_main}>
      <div className={style.description_features}>
        <h1 className={style.description_header}>Features</h1>
        <p>{features}</p>
      </div>
      <InTheBox itemsInTheBox={itemsInTheBox} />
    </div>
  );
}
