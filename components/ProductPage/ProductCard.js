/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

import ButtonOnCard from "../Button/ButtonOnCard";
import Price from "./Price";

export default function ProductCard({
  newProduct,
  flip = false,
  theme = "orange",
  product,
  type = "shopping",
  withPrice,
}) {
  return (
    <div
      className={`${style.product_card_main} ${style["product_card_theme"]} ${
        flip && style["product_card_flipped"]
      }`}
    >
      <div className={style.product_card_left}>
        {newProduct && (
          <div className={style.product_card_header}>New Product</div>
        )}
        <div className={style.product_card_title}>{product.name}</div>
        <div className={style.product_card_text}>{product.description}</div>
        {withPrice && <Price price={product.price} />}
        <div className={style.product_card_buttons_container}>
          <ButtonOnCard type={type} theme={theme} id={product.id} />
        </div>
      </div>
      <div className={style.product_card_right}>
        <img
          className={style.product_card_image}
          src={product.image}
          alt={product.name}
        />
      </div>
    </div>
  );
}
