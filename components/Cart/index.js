import React from "react";
import { useSelector } from "react-redux";
import products from "../../data/products.json";

export default function Index() {
  const cart = useSelector((state) => state.cart);
  return (
    <div style={{ color: "orange" }}>
      {cart.length > 0 ? (
        cart.map((kind, index) => (
          <div key={index}>
            {products[kind.productId].name}
            {" x "}
            {kind.quantity}
            {" = "}
            {products[kind.productId].price * kind.quantity}
          </div>
        ))
      ) : (
        <div>No items in cart</div>
      )}
    </div>
  );
}
