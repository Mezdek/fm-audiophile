import React from "react";
import { useSelector } from "react-redux";

import Button from "../../Button";
import AddToCart from "../../Button/AddToCart";

export default function CardButton({ type, productId }) {
  const { list } = useSelector((state) => state.products);
  switch (type) {
    case "buying":
      return <AddToCart productId={productId} />;
    case "shopping":
      return (
        <Button
          title={"See Product"}
          role={`${list[productId].type}/${list[productId].name}`}
        />
      );
    default:
      return null;
  }
}
