import React from "react";
import { useSelector } from "react-redux";

import Descreption from "./Descreption";
import ProductCard from "./ProductCard";
import NoPage from "../NoPage";

export default function Product({ name }) {
  const { list } = useSelector((state) => state.products);
  const product = list.find((product) => product.name === name);
  return product ? (
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
  ) : (
    <NoPage />
  );
}
