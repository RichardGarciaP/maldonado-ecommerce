import React from "react";
import {
  getOneProducts,
  getProducts,
  getRelatedProducts,
} from "@/lib/firebase";
import Layout from "@/components/layout/layout.component";
import ProductDescription from "@/components/product-description/product-description.component";
import RelatedProducts from "@/components/related-products/related-products.component";

export const getServerSideProps = async ({ params = {} }) => {
  const { id } = params;
  const allProducts = await getProducts();

  const products = await getRelatedProducts(id, allProducts);
  const product = await getOneProducts(id, allProducts);

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
