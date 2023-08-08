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
        image: "/assets/images/tienda1.webp",
      },
      {
        image: "/assets/images/tienda2.jpeg",
      },
      {
        image: "/assets/images/tienda3.jpeg",
      },
    ],
  };
  const categoriesRow = [
    {
      title: "Arroz y Fideos",
      description:
        "Explora nuestra amplia selección de arroces y fideos de primera calidad en Maldonado Store. Desde los granos más exquisitos hasta las variedades de pasta más deliciosas, estamos aquí para elevar tus platillos a otro nivel. Encuentra la base perfecta para tus creaciones culinarias en nuestra sección de Arroz y Fideos.",
      image: "/assets/images/arrozyfideos.png",
    },
    {
      title: "Aceites y Vinagres",
      description:
        "Descubre la esencia de la cocina en nuestra sección de Aceites y Vinagres en Maldonado Store. Eleva tus preparaciones con nuestra variedad de aceites aromáticos y vinagres selectos. Desde aderezos hasta marinados, encuentra la clave para realzar el sabor en cada bocado. Tu viaje culinario comienza aquí.",
      direction: "row-reverse",
      image: "/assets/images/aceitesvinagres.jpeg",
    },
    {
      title: "Mantequilla, margarina y mantecas",
      description:
        "Sumérgete en la suavidad y sabor con nuestra gama de Mantequilla, Margarina y Mantecas en Maldonado Store. Ya sea horneando o cocinando, encontrarás la elección perfecta para enriquecer tus recetas. Transforma tus platillos en creaciones indulgentes con nuestros productos de alta calidad. Tu cocina merece lo mejor, y aquí lo encontrarás.",
      image: "/assets/images/mantequillas.jpeg",
    },
    {
      title: "Enlatados y Conservas",
      description:
        "Explora la comodidad sin sacrificar el sabor en nuestra sección de Enlatados y Conservas en Maldonado Store. Descubre una variedad de opciones listas para usar, desde vegetales enlatados hasta frutas en conserva, perfectas para tus necesidades culinarias de último momento. Simplifica tu cocina sin renunciar a la frescura y calidad que mereces.",
      direction: "row-reverse",
      image: "/assets/images/enlatados.jpeg",
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
