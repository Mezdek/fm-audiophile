import React from "react";
import style from "./style.module.css";

import Items from "./Items";
import Features from "./Features";

export default function Description({ features, items }) {
  return (
    <div className={style.description}>
      <Features features={features} />
      <Items items={items} />
    </div>
  );
}
