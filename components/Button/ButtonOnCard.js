import React from "react";

import Button from ".";
import AddToCart from "./AddToCart";
import QuantitySelector from "./QuantitySelector";

export default function ButtonOnCard({ type, theme, id }) {
  switch (type) {
    case "buying":
      return (
        <div>
          <QuantitySelector />
          <AddToCart theme={theme} />
        </div>
      );
    case "shopping":
      return (
        <div>
          <Button title={"See Product"} link={`products/${id}`} theme={theme} />
        </div>
      );
    default:
      return null;
  }
}
