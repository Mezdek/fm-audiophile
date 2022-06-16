import React from "react";
import Description from "./Description";
import ProductCard from "./ProductCard";

export default function ProductPage({ product }) {
  return (
    <div>
      <ProductCard
        product={product}
        flip={true}
        theme="white"
        withPrice={true}
        type="buying"
      />
      <Description
        itemsInTheBox={product.itemsInTheBox}
        features={product.description}
      />
    </div>
  );
}
