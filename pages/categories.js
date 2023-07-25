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
import { HomeScreen } from "@/src/strings/home";
import InfoRow from "@/components/info-row/info-row";
import { AccessTime, DirectionsCar, LocalGroceryStore } from "@mui/icons-material";

const Categories = ({ products }) => {
  const info = {
    title: 'Tu tienda confiable',
    options: [
      {
        title: 'Disponibildad',
        description: 'Compra tus productos donde quieras a la hora que quieras',
        icon: <AccessTime />
      },
      {
        title: 'Comodidad',
        description: 'Recibe tus productos en la comodidad de tu hogar, tu trabajo, donde tu te encuentres',
        icon: <DirectionsCar />
      },
      {
        title: 'Variedad',
        description: 'Selecciona tus productos de nuestro amplio catalogo.',
        icon: <LocalGroceryStore />
      }
    ]
  }
  return (
    <Layout>
      <main>
        <h1>Yamete Kudasai</h1>
        <img src='https://qph.cf2.quoracdn.net/main-qimg-965b11ec95106e64d37f5c380802c305-lq'/>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const response = await getProducts();
  const products = await response?.data;

  return {
    props: { products: PRODUCTS },
    revalidate: 30,
  };
};

export default Categories;