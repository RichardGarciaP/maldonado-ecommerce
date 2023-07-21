import Head from "next/head";
import Layout from "@/components/layout/layout.component";
import ProductsList from "@/components/products-list/products-list.component";
import { getProducts } from "@/data/products";
import PRODUCTS from "../lib/dev-data.json";
import Testimonials from "@/components/testimonials/testimonials.component";
import RelatedProducts from "@/components/related-products/related-products.component";
import HeroComponent from "@/components/hero/hero.component";
import FeaturesSection from "@/components/features-section/features-section.component";
import ContentSection from "@/components/content-section/content-section.component";

export const getStaticProps = async () => {
  const response = await getProducts();
  const products = await response?.data;

  return {
    props: { products: PRODUCTS },
    revalidate: 30,
  };
};

const Home = ({ products }) => {
  return (
    <Layout>
      <main>
        <HeroComponent title="Los mejores productos del mercado " />
        <FeaturesSection />
        <ContentSection
          title="Variedad"
          description="Disponemos de una gran variedad de productos al mejor precio del mercado"
        />
        <Testimonials title="Qué dicen nuestros clientes" />
        <RelatedProducts
          title="Productos más vendidos"
          products={products}
          isBestSellers
        />
      </main>
    </Layout>
  );
};

export default Home;
