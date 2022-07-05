import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import products from "../../data/products.json";

export default function Index() {
  const cart = useSelector((state) => state.cart);
  return (
    <div style={{ color: "orange" }} className={style.main}>
      {cart.length > 0 ? (
        cart.map((kind, index) => (
          <CartItem
            key={index}
            item={products[kind.productId]}
            quantity={kind.quantity}
          />
        ))
      ) : (
        <div className={style.empty}>Cart Is Empty</div>
      )}
    </div>
  );
}
