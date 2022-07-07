import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Categories from "../../components/Button/Categories";
import Influence from "../../components/Influence";
import Collage from "../../components/Collage";
import Product from "../../components/Product";
import Loading from "../../components/Loading";

export default function Main() {
  const router = useRouter();
  const query = router.query;

  const [name, setName] = useState();

  useEffect(() => {
    setName(query.name);
  }, [query, router.isReady]);

  return (
    <div>
      <Layout>
        {name ? <Product name={name} /> : <Loading />}
        <Collage />
        <Categories />
        <Influence />
      </Layout>
    </div>
  );
}
