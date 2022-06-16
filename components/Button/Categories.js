import React from "react";
import style from "./style.module.css";
import CategoryButton from "./CategoryButton";

import categories from "../../data/categories";

export default function Categories() {
  return (
    <div className={style.categories}>
      {categories.map((category, index) => (
        <CategoryButton key={index} {...category} />
      ))}
    </div>
  );
}
