import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";

import CartItemsList from "./CartItemsList";
import CartEmpty from "./CartEmpty";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className={style.main}>
      {items && items.length > 0 ? (
        <CartItemsList items={items} />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
