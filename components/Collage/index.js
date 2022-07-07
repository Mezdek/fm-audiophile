import React from "react";
import Image from "next/image";
import style from "./style.module.css";

import { useSelector } from "react-redux";

const temp = [
  "/assets/images/woman.webp",
  "/assets/images/earphones2.webp",
  "/assets/images/marshal.webp",
];

export default function Collage({ data }) {
  ///temporary values
  const { list } = useSelector((state) => state.products);
  const productImages = list.map((item) => item.image);
  const images = data === "products" ? productImages : temp;

  return (
    <div className={style.container}>
      <div className={style.secondary}>
        <div className={style.top}>
          <Image src={images[1]} alt="idk" layout="fill" objectFit="cover" />
        </div>
        <div className={style.bottom}>
          <Image src={images[2]} alt="idk" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={style.primary}>
        <Image
          src={images[0]}
          alt="idk"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
