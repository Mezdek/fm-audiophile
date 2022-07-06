import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import ProductsList from "../../components/Product/ProductsList";
import Cart from "../../components/Cart";
import NoPage from "../../components/NoPage";
import Loading from "../../components/Loading";

export default function Index() {
  const router = useRouter();
  const query = router.query;

  const [type, setType] = useState();
  const categories = ["all", "earphones", "speakers", "headphones"];

  useEffect(() => {
    setType(query.type);
  }, [query, router.isReady]);

  return (
    <div>
      <Layout>
        {categories.find((category) => category === type) ? (
          <ProductsList type={type} />
        ) : type === "cart" ? (
          <Cart />
        ) : type === undefined ? (
          <Loading />
        ) : (
          <NoPage />
        )}
      </Layout>
    </div>
  );
}
