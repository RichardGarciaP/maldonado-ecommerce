import React from "react";
import { getProducts } from "@/data/products";
import PRODUCTS from "@/lib/dev-data.json";
import ProductsList from "@/components/products-list/products-list.component";
import Layout from "@/components/layout/layout.component";

export const getStaticProps = async () => {
  const response = await getProducts();
  const products = await response?.data;

  return {
    props: { products: PRODUCTS },
    revalidate: 30,
  };
};

const Products = ({ products }) => {
  return (
    <Layout>
      <div>
        <ProductsList products={products} />
      </div>
    </Layout>
  );
};

export default Products;
