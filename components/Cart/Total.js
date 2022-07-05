import React from "react";
import style from "./style.module.css";
import Price from "../ProductPage/Price";
import { useSelector } from "react-redux";
import products from "../../data/products.json";

export default function Total() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((sum, cur) => sum + cur.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, cur) => sum + cur.quantity * products[cur.productId].price,
    0
  );
  return (
    <div className={style.total}>
      Total ({cartCount} Items):
      <Price price={cartTotal} />
    </div>
  );
}
