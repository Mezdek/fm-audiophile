/* eslint-disable @next/next/no-img-element */
import React from "react";
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
        <div className={style.top} style={{backgroundImage:`url(${data.second})`}}>
          {/* <img className={style.image} src={data.second} alt={"pic"} /> */}
        </div>
        <div className={style.bottom} style={{backgroundImage:`url(${data.third})`}}>
          {/* <img className={style.image} src={data.third} alt={"pic"} /> */}
        </div>
      </div>
      <div className={style.primary} style={{backgroundImage:`url(${data.first})`}}>
        {/* <img className={style.image} src={data.first} alt={"pic"} /> */}
      </div>
    </div>
  );
}
