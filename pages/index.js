import Head from "next/head";
import style from "../styles/Home.module.css";

import Layout from "../components/Layout";
import Categories from "../components/Button/Categories";
import ProductCard from "../components/ProductPage/ProductCard";
import Influence from "../components/Influence";

import products from "../data/products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="This is a learning project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductCard newProduct={true} product={products.new} />
        <div className={style.main_section}>
          <Categories />
          {products.all.map((product, index) => (
            <ProductCard key={index} product={product} flip={index % 2} />
          ))}
          <Influence />
        </div>
      </Layout>
    </div>
  );
}
