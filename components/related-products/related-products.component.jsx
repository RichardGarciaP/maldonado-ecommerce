import React, { useEffect, useState } from "react";
// import {  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/product-card/product-card.component";

import "swiper/css";
import "swiper/css/navigation";
import * as S from "./related-products.styles";

const RelatedProducts = ({ products, category }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  useEffect(() => {
    const newProducts = products.filter(
      (product) => product.category === category,
    );

    setProductsFiltered(newProducts);
  }, []);

  if (!productsFiltered && !productsFiltered.length) return null;

  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.Title>Productos Relacionados</S.Title>
        <Swiper slidesPerView={4} spaceBetween={30}>
          {productsFiltered.map((product, index) => (
            <SwiperSlide key={`product-slide-${index}`}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};

export default RelatedProducts;
