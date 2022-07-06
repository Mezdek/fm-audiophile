import React from "react";
import style from "./style.module.css";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export default function Price({ price }) {
  return <span className={style.price}>{formatter.format(price)}</span>;
}
