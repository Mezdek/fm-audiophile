import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import Price from "../ProductPage/Price";

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
      <div className={style.top}>
        <div className={style.info}>
          <p className={style.name}>{item.name}</p>
          <p className={style.price}>
            <span className={style.price_tag}>Price</span>
            <Price price={item.price} />
            {/* <span className={style.price_value}>{item.price}</span> */}
          </p>
        </div>
        <div className={style.bottom}>
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
              Remove
            </button>
          </div>
          <div className={style.total}>
            Subtotal ({quantity} items): <Price price={item.price * quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
