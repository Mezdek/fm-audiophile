import React, { useEffect, useState } from "react";

import style from "./style.module.css";

import Button from ".";
import AddToCart from "./AddToCart";
import QuantitySelector from "./QuantitySelector";
import products from "../../data/products.json";

export default function ButtonOnCard({ type, theme, productId }) {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  useEffect(() => {
    setProduct(products.find((product) => product.id === productId));
  }, [productId]);
  switch (type) {
    case "buying":
      return (
        <div className={style.buttonOnCard}>
          <QuantitySelector setCount={setCount} count={count} />
          <AddToCart theme={theme} productId={productId} count={count} />
        </div>
      );
    case "shopping":
      return (
        <div>
          <Button
            title={"See Product"}
            link={`${product.type}/${product.name}`}
            theme={theme}
          />
        </div>
      );
    default:
      return null;
  }
}
