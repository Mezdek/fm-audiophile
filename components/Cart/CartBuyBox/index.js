import React from "react";
import style from "../style.module.css";
import CartCheckout from "./CartCheckout";
import CartTotalPrice from "./CartTotalPrice";

export default function CartBuyBox() {
  return (
    <div className={style.checkout_main}>
      <CartCheckout />
      <CartTotalPrice />
    </div>
  );
}
