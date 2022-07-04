import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Categories from "../../components/Button/Categories";
import Influence from "../../components/Influence";
import Collage from "../../components/Collage";
import ProductPage from "../../components/ProductPage";

import products from "../../data/products.json";

export default function Main() {
  const router = useRouter();
  const query = router.query;

  const [name, setName] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    setName(query.name);
  }, [query, router.isReady]);

  useEffect(() => {
    setProduct(products.find((product) => product.name === name));
  }, [name]);

  return (
    <div>
      <Layout>
        {product ? (
          <ProductPage product={product} />
        ) : (
          <h1 style={{ color: "red" }}>Loading...</h1>
        )}
        <Collage />
        <Categories />
        <Influence />
      </Layout>
    </div>
  );
}