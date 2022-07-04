import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Products from "../../components/Products";
import Cart from "../../components/Cart";

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
          <Products type={type} />
        ) : type === "cart" ? (
          <Cart />
        ) : type === undefined ? (
          <div style={{ color: "orange" }}> Loading...</div>
        ) : (
          <div style={{ color: "orange" }}>404 Page Does Not Exist</div>
        )}
      </Layout>
    </div>
  );
}
