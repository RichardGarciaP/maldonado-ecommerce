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
      title: "Tu aliado en tus compras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit vel lobortis primis sociis, est hac feugiat vitae vivamus",
      image:
        "https://www.rd.com/wp-content/uploads/2021/10/GettyImages-1141996490-ADedit.jpg",
      button: {
        title: "Ver categoria",
        url: "/",
      },
    },
    {
      title: "Tu aliado en tus compras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit vel lobortis primis sociis, est hac feugiat vitae vivamus",
      direction: "row-reverse",
      image:
        "https://www.bankrate.com/2022/09/01102755/Grocery-shopping-in-recession.jpg",
      button: {
        title: "Ver categoria",
        url: "/",
      },
    },
    {
      title: "Tu aliado en tus compras",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit vel lobortis primis sociis, est hac feugiat vitae vivamus",
      image:
        "https://media.npr.org/assets/img/2021/05/20/gettyimages-1257380452-59c88c4bb2d3ac5093e61fbec280f861a604ef71-s1100-c50.jpg",
      button: {
        title: "Ver categoria",
        url: "/",
      },
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
