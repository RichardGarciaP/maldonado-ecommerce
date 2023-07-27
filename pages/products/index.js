import React from "react";
import { getProducts } from "@/lib/firebase";
import ProductsList from "@/components/products-list/products-list.component";
import Layout from "@/components/layout/layout.component";

export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
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
