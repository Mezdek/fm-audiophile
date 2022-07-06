import React from "react";
import style from "./style.module.css";

export default function Features({ features }) {
  return (
    <div className={style.features_main}>
      <h1 className={style.features_header}>Features</h1>
      <p className={style.features_content}>{features}</p>
    </div>
  );
}
