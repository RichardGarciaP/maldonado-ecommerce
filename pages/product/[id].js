import React from "react";
import { getOneProduct, getProducts } from "@/data/products";
import Layout from "@/components/layout/layout.component";
import ProductDescription from "@/components/product-description/product-description.component";

export const getStaticPaths = async () => {
  const response = await getProducts();
  const products = response.data;

  const paths = products.map(({ id }) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const { id } = params;
  const product = await getOneProduct(id);

  return {
    props: {
      product: product.data,
    },
  };
};

const ProductItem = ({ product }) => {
  return (
    <Layout>
      <ProductDescription {...product} />
    </Layout>
  );
};

export default ProductItem;
