import Layout from "@/components/layout/layout.component";
import { getProducts } from "@/lib/firebase";
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
  StartOutlined,
} from "@mui/icons-material";
import CircleHero from "@/components/circle-hero/circle-hero";

const Home = ({ products }) => {
  const info = {
    title: "Tu tienda confiable",
    options: [
      {
        title: "Disponibildad",
        description: "Compra tus productos donde quieras a la hora que quieras",
        icon: <AccessTime />,
      },
      {
        title: "Comodidad",
        description:
          "Recibe tus productos en la comodidad de tu hogar, tu trabajo, donde tu te encuentres",
        icon: <DirectionsCar />,
      },
      {
        title: "Variedad",
        description: "Selecciona tus productos de nuestro amplio catalogo.",
        icon: <LocalGroceryStore />,
      },
    ],
  };
  const homeHero = {
    brownTitle: "A foodie guide by",
    redTitle: "Vietnamase regial specialties",
    description: "Lorem ipsum",
    image:
      "https://i.pinimg.com/originals/45/e2/4f/45e24f73c2e15b890b6e254c49f13ff2.jpg",
    floatingCards: [
      {
        icon: <StartOutlined />,
        title: "Title",
        description: "Description",
      },
      {
        icon: <StartOutlined />,
        title: "Title",
        description: "Description",
      },
      {
        icon: <StartOutlined />,
        title: "Title",
        description: "Description",
      },
    ],
  };
  return (
    <Layout>
      <main>
        {/*<HeroComponent*/}
        {/*  title={HomeScreen.heroTitle}*/}
        {/*  subtitle={HomeScreen.heroSubtitle}*/}
        {/*  description={HomeScreen.heroDescription}*/}
        {/*/>*/}
        <CircleHero {...homeHero} />
        <InfoRow info={info} />
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

export const getServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
  };
};

export default Home;
