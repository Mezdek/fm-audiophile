import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import CartItemsList from "./CartItemsList";

export default function Index() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={style.main}>
      {cart && cart.length > 0 ? (
        <CartItemsList cart={cart} />
      ) : (
        <div className={style.empty}>Cart Is Empty</div>
      )}
    </div>
  );
}
