import React from "react";
import style from "./style.module.css";

export default function CardTitle({ name, newProduct = false }) {
  return (
    <div className={`${style.card_title} ${newProduct && style["newProduct"]}`}>
      {name}
    </div>
  );
}
