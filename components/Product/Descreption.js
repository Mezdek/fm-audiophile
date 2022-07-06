import React from "react";
import style from "./style.module.css";

import Items from "./Items";
import Features from "./Features";

export default function Descreption({ features, items }) {
  return (
    <div className={style.descreption}>
      <Features features={features} />
      <Items items={items} />
    </div>
  );
}
