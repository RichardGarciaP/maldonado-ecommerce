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
import {
  AccessTime,
  DirectionsCar,
  LocalGroceryStore,
} from "@mui/icons-material";
import CategoriesHero from "@/components/categories-hero/categories-hero";
import CategoriesRow from "@/components/categories-row/categories-row";
import React from "react";

const Categories = ({ products }) => {
  const categories = {
    title: "Tu aliado en tus compras",
    imagesGrid: [
      {
        image:
          "https://www.rd.com/wp-content/uploads/2021/10/GettyImages-1141996490-ADedit.jpg",
      },
      {
        image:
          "https://www.bankrate.com/2022/09/01102755/Grocery-shopping-in-recession.jpg",
      },
      {
        image:
          "https://media.npr.org/assets/img/2021/05/20/gettyimages-1257380452-59c88c4bb2d3ac5093e61fbec280f861a604ef71-s1100-c50.jpg",
      },
    ],
  };
  const categoriesRow = [
    {
      title: "Arroz y Fideos",
      description:
        "Explora nuestra amplia selección de arroces y fideos de primera calidad en Maldonado Store. Desde los granos más exquisitos hasta las variedades de pasta más deliciosas, estamos aquí para elevar tus platillos a otro nivel. Encuentra la base perfecta para tus creaciones culinarias en nuestra sección de Arroz y Fideos.",
      image:
        "https://www.rd.com/wp-content/uploads/2021/10/GettyImages-1141996490-ADedit.jpg",
    },
    {
      title: "Aceites y Vinagres",
      description:
        "Descubre la esencia de la cocina en nuestra sección de Aceites y Vinagres en Maldonado Store. Eleva tus preparaciones con nuestra variedad de aceites aromáticos y vinagres selectos. Desde aderezos hasta marinados, encuentra la clave para realzar el sabor en cada bocado. Tu viaje culinario comienza aquí.",
      direction: "row-reverse",
      image:
        "https://www.bankrate.com/2022/09/01102755/Grocery-shopping-in-recession.jpg",
    },
    {
      title: "Mantequilla, margarina y mantecas",
      description:"Sumérgete en la suavidad y sabor con nuestra gama de Mantequilla, Margarina y Mantecas en Maldonado Store. Ya sea horneando o cocinando, encontrarás la elección perfecta para enriquecer tus recetas. Transforma tus platillos en creaciones indulgentes con nuestros productos de alta calidad. Tu cocina merece lo mejor, y aquí lo encontrarás.",
      image:
        "https://media.npr.org/assets/img/2021/05/20/gettyimages-1257380452-59c88c4bb2d3ac5093e61fbec280f861a604ef71-s1100-c50.jpg",
    },
    {
      title: "Enlatados y Conservas",
      description: "Explora la comodidad sin sacrificar el sabor en nuestra sección de Enlatados y Conservas en Maldonado Store. Descubre una variedad de opciones listas para usar, desde vegetales enlatados hasta frutas en conserva, perfectas para tus necesidades culinarias de último momento. Simplifica tu cocina sin renunciar a la frescura y calidad que mereces.",
      direction: "row-reverse",
      image:
        "https://www.bankrate.com/2022/09/01102755/Grocery-shopping-in-recession.jpg",
    },
  ];
  return (
    <Layout>
      <main>
        <CategoriesHero {...categories} />
        {categoriesRow.map((category, index) => (
          <React.Fragment key={index}>
            <CategoriesRow {...category} />
          </React.Fragment>
        ))}
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
