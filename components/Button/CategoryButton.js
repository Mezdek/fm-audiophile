import React from "react";
import Image from "next/image";
import style from "./style.module.css";

export default function CategoryButton({ name, icon, href }) {
  return (
    <div className={style.category_button}>
      <div className={style.category_button_image}>
        <Image src={icon} alt={name} layout="fill" objectFit="contain" />
      </div>
      <div className={style.category_button_title}>{name}</div>
      <div className={style.category_button_shop}>
        <a className={style.category_button_shop} href={href}>
          Shop<span className={style.category_button_shop_arrow}>{">"}</span>
        </a>
      </div>
    </div>
  );
}
