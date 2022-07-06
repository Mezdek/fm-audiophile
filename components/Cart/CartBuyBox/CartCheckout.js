import React from "react";
import style from "../style.module.css";
import Button from "../../Button";

export default function CartCheckout() {
  const onCheckout = (x) => console.log(x);
  return (
    <div className={style.checkout_buttons}>
      <Button role={onCheckout} title="checkout" theme="orange" />
    </div>
  );
}
