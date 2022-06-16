/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

export default function CategoryButton({ name, icon, href }) {
  return (
    <div className={style.category_button}>
      <img src={icon} alt={name} className={style.category_button_image} />
      <div className={style.category_button_title}>{name}</div>
      <div className={style.category_button_shop}>
        <a className={style.category_button_shop} href={href}>
          Shop<span className={style.category_button_shop_arrow}>{">"}</span>
        </a>
      </div>
    </div>
  );
}
