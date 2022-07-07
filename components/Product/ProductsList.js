import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductsList({ type }) {
  const { list } = useSelector((state) => state.products);

  return (
    <div>
      {list
        .filter((item) => {
          return type === "all" ? item : item.type === type;
        })
        .map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
}
