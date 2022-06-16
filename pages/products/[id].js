import React, { useEffect } from "react";
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

  const [id, setId] = React.useState();
  const [product, setProduct] = React.useState();

  useEffect(() => {
    setId(query.id);
  }, [query, router.isReady]);
  useEffect(() => {
    setProduct(products.all[id]);
  }, [id]);

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
