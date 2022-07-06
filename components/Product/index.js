import React from "react";
import Descreption from "./Descreption";
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
      <Descreption
        items={product.itemsInTheBox}
        features={product.description}
      />
    </div>
  );
}
