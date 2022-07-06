import React from "react";

import Head from "next/head";
import style from "../styles/Home.module.css";

import Layout from "../components/Layout";
import Categories from "../components/Button/Categories";
import ProductCard from "../components/Product/ProductCard";
import Influence from "../components/Influence";

import products from "../data/products.json";
import Collage from "../components/Collage";
const test = {
  first: products[1].image,
  second: products[0].image,
  third: products[2].image,
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="This is a learning project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductCard product={products[0]} />
        <div className={style.main_section}>
          <Categories />
          <Collage data={test} />
          <Influence />
        </div>
      </Layout>
    </div>
  );
}
