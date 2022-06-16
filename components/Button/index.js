import React from "react";
import style from "./style.module.css";

export default function Button({ title, link, theme }) {
  return (
    <div className={`${style.button} ${style[theme]}`}>
      <a href={link}>{title}</a>
    </div>
  );
}
