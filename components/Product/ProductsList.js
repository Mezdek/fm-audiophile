import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../../data/products.json";

export default function Index({ type }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    type === "all"
      ? setList(products)
      : setList(products.filter((product) => product.type === type));
  }, [type]);

  return (
    <div>
      {list.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
