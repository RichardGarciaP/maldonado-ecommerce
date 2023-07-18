import React from "react";
import { getOneProduct, getProducts } from "@/data/products";
import Layout from "@/components/layout/layout.component";
import ProductDescription from "@/components/product-description/product-description.component";
import RelatedProducts from "@/components/related-products/related-products.component";
import { getPort } from "next/dist/server/lib/utils";

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
  const products = await getProducts();
  const product = await getOneProduct(id);

  return {
    props: {
      product: product.data,
      products: products.data,
    },
  };
};

const ProductItem = ({ product, products }) => {
  return (
    <Layout>
      <ProductDescription {...product} />
      <RelatedProducts products={products} category={product.category} />
    </Layout>
  );
};

export default ProductItem;
