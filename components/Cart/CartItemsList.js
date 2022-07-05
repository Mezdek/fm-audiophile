import React from "react";
import style from "./style.module.css";
import CartItem from "./CartItem";
import products from "../../data/products.json";
import Total from "./Total";

export default function CartItemsList({ cart }) {
  return (
    <div className={style.cart_items_list}>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={products[item.productId]}
          quantity={item.quantity}
        />
      ))}
      <Total />
    </div>
  );
}
