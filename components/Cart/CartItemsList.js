import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import CartBuyBox from "./CartBuyBox";

export default function CartItemsList({ items }) {
  const { list } = useSelector((state) => state.products);
  return (
    <div className={style.cart_items_list}>
      {items.map((item, index) => (
        <CartItem
          key={index}
          item={list[item.productId]}
          quantity={item.quantity}
        />
      ))}
      <CartBuyBox />
    </div>
  );
}
