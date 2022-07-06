import React from "react";
import style from "../style.module.css";

export default function ItemName({ name, type }) {
  return (
    <a className={style.name} href={`/${type}/${name}`}>
      {name}
    </a>
  );
}
