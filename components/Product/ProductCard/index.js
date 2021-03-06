import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import themes from "../../../styles/themes.module.css";

import { useSelector } from "react-redux";

import CardButton from "./CardButton";
import CardTitle from "./CardTitle";
import CardDescreption from "./CardDescreption";

export default function ProductCard({
  flip = false,
  theme = "orange",
  type = "shopping",
  productId,
}) {
  const { list } = useSelector((state) => state.products);
  const product = list.find((item) => item.id === productId) || list[0];
  return (
    <div
      className={`${style.main} ${themes[theme]} ${flip && themes["flipped"]}`}
    >
      <div className={style.left}>
        <CardTitle name={product.name} newProduct={product.newProduct} />
        <CardDescreption descreption={product.descreption} />
        <CardButton type={type} productId={product.id} />
      </div>
      <div className={style.image}>
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
