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
    title: 'Tu aliado en tus compras',
    imagesGrid: [
      {
        image: 'https://www.rd.com/wp-content/uploads/2021/10/GettyImages-1141996490-ADedit.jpg'
      },
      {
        image: 'https://www.bankrate.com/2022/09/01102755/Grocery-shopping-in-recession.jpg'
      },
      {
        image: 'https://media.npr.org/assets/img/2021/05/20/gettyimages-1257380452-59c88c4bb2d3ac5093e61fbec280f861a604ef71-s1100-c50.jpg'
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
