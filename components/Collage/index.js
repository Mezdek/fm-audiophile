import React from "react";
import Image from "next/image";
import style from "./style.module.css";

const data = {
  first: "/assets/woman.jpg",
  second: "/assets/earphones2.jpg",
  third: "/assets/marshal.jpg",
};

export default function Collage() {
  return (
    <div className={style.container}>
      <div className={style.secondary}>
        <div className={style.top}>
          <Image src={data.second} alt="idk" layout="fill" objectFit="cover" />
        </div>
        <div className={style.bottom}>
          <Image src={data.third} alt="idk" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={style.primary}>
        <Image src={data.first} alt="idk" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
