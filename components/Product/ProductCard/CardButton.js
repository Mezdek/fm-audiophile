import React from "react";

import Button from "../../Button";
import AddToCart from "../../Button/AddToCart";

import products from "../../../data/products.json";

export default function CardButton({ type, productId }) {
  switch (type) {
    case "buying":
      return <AddToCart productId={productId} />;
    case "shopping":
      return (
        <Button
          title={"See Product"}
          role={`${products[productId].type}/${products[productId].name}`}
        />
      );
    default:
      return null;
  }
}
