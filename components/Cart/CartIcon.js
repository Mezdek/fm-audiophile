import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import cart_icon from "../../public/assets/icons/shopping-bag.png";

export default function CartIcon() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((sum, cur) => sum + cur.quantity, 0);
  return (
    <a className={style.icon} href={"/cart"}>
      <span className={style.count}>{cartCount}</span>
      <Image
        src={cart_icon}
        alt={"shopping cart"}
        layout="fill"
        objectFit="contain"
      />
    </a>
  );
}
