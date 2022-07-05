import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  addOneToCart,
  removeOneFromCart,
  removeFromCart,
} from "../../store/reducers/cartSlice";

export default function CartItem({ item, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className={style.item}>
      <div className={style.image}>
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={style.details}>
        <p className={style.name}>{item.name}</p>
        <p className={style.price}>Unit&apos;s Price: {item.price}</p>
        <p className={style.price}>Total Price: {item.price * quantity}</p>
        <div className={style.quantity_controller}>
          <button
            className={style.button}
            onClick={() => {
              dispatch(removeOneFromCart({ productId: item.id }));
            }}
          >
            -
          </button>
          <span className={style.quantity}>{quantity}</span>
          <button
            className={style.button}
            onClick={() => {
              dispatch(addOneToCart({ productId: item.id }));
            }}
          >
            +
          </button>
          <button
            className={style.button}
            onClick={() => {
              dispatch(removeFromCart({ productId: item.id }));
            }}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
