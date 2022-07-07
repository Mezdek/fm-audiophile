import React from "react";
import style from "../style.module.css";
import Price from "../../Product/Price";
import { useSelector } from "react-redux";

export default function CartTotalPrice() {
  const { items } = useSelector((state) => state.cart);
  const { list } = useSelector((state) => state.products);
  const itemsCount = items.reduce((sum, cur) => sum + cur.quantity, 0);
  const itemsTotal = items.reduce(
    (sum, cur) => sum + cur.quantity * list[cur.productId].price,
    0
  );
  return (
    <div className={style.total}>
      Total ({itemsCount} Items):
      <Price price={itemsTotal} />
    </div>
  );
}
