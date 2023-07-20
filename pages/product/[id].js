import React from "react";
import { getOneProduct, getProducts } from "@/data/products";
import Layout from "@/components/layout/layout.component";
import ProductDescription from "@/components/product-description/product-description.component";
import RelatedProducts from "@/components/related-products/related-products.component";
import { getPort } from "next/dist/server/lib/utils";
import PRODUCTS from "../../lib/dev-data.json";

export const getStaticPaths = async () => {
  const response = await getProducts();
  const products = response.data;

  const paths = PRODUCTS.map(({ id }) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const { id } = params;
  // const products = await getProducts();
  const products = PRODUCTS.filter((product) => product.id !== id);
  // const product = await getOneProduct(id);
  const product = PRODUCTS.find((product) => product.id === id);

  return {
    props: {
      product,
      products,
    },
  };
};

const ProductItem = ({ product, products }) => {
  return (
    <Layout>
      <ProductDescription {...product} />
      {products && products.length && (
        <RelatedProducts products={products} category={product.category} />
      )}
    </Layout>
  );
};

export default ProductItem;
