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
import { AccessTime } from "@mui/icons-material";

const Home = ({ products }) => {
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
        icon: <AccessTime />
      },
      {
        title: 'Variedad',
        description: 'Selecciona tus productos de nuestro amplio catalogo.',
        icon: <AccessTime />
      }
    ]
  }
  return (
    <Layout>
      <main>
        <HeroComponent title={HomeScreen.heroTitle} subtitle={HomeScreen.heroSubtitle} description={HomeScreen.heroDescription}/>
        <InfoRow info={info}/>
        <FeaturesSection />
        <ContentSection
          title={HomeScreen.contentTile}
          description={HomeScreen.contentDecription}
        />
        <Testimonials title={HomeScreen.testimonialsTitle} />
        <RelatedProducts
          title={HomeScreen.relatedProductsTitle}
          products={products}
          isBestSellers
        />
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

export default Home;
