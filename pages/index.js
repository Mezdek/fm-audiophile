import React from "react";

import Head from "next/head";
import style from "../styles/Home.module.css";

import Layout from "../components/Layout";
import Categories from "../components/Button/Categories";
import ProductCard from "../components/Product/ProductCard";
import Influence from "../components/Influence";
import Collage from "../components/Collage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="This is a learning project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductCard productId={1} />
        <div className={style.main_section}>
          <Categories />
          <Collage data={"products"} />
          <Influence />
        </div>
      </Layout>
    </div>
  );
}
