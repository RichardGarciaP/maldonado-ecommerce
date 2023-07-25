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
import CategoriesHero from "@/components/categories-hero/categories-hero";

const Categories = ({ products }) => {
  const categories = {
    title: 'Yamete Kudasai',
    imagesGrid: [
      {
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/BEASTARS%2C_volume_1.jpg'
      },
      {
        image: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/696830.jpg'
      },
      {
        image: 'https://m.media-amazon.com/images/I/81DpwGqhnpL._AC_UF1000,1000_QL80_.jpg'
      },
    ]
  }
  return (
    <Layout>
      <main>
        <CategoriesHero {...categories}/>
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
