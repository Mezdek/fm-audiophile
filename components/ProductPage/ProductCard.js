import React from "react";
import Image from "next/image";
import style from "./style.module.css";

import ButtonOnCard from "../Button/ButtonOnCard";
import Price from "./Price";

export default function ProductCard({
  flip = false,
  theme = "orange",
  product,
  type = "shopping",
  withPrice,
}) {
  return (
    <div
      className={`${style.product_card_main} ${
        style[`product_card_${theme}`]
      } ${flip && style["product_card_flipped"]}`}
    >
      <div className={style.product_card_left}>
        <div
          className={`${style.product_card_title} ${
            product.new && style["newProduct"]
          }`}
        >
          {product.name}
        </div>
        <div className={style.product_card_text}>{product.description}</div>
        {withPrice && <Price price={product.price} />}
        <div className={style.product_card_buttons_container}>
          <ButtonOnCard type={type} theme={theme} productId={product.id} />
        </div>
      </div>
      <div className={style.product_card_image_container}>
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
