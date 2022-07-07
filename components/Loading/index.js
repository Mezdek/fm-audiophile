import React from "react";
import Image from "next/image";
import style from "./style.module.css";

import disc from "../../public/assets/icons/disc.webp";

export default function Loading() {
  return (
    <div className={style.main}>
      <div className={style.rolling}>
        <Image src={disc} alt="loading" layout="fill" objectFit="contain" />
      </div>
      <span className={style.text}>Loading...</span>
    </div>
  );
}
