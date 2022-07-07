import React from "react";
import Image from "next/image";
import style from "../style.module.css";

export default function ItemImage({ image, name, type }) {
  return (
    <a className={style.image} href={`/${type}/${name}`}>
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
        priority
      />
    </a>
  );
}
