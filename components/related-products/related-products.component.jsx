import React, { useEffect, useState } from "react";
// import {  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/product-card/product-card.component";

import "swiper/css";
import "swiper/css/navigation";
import * as S from "./related-products.styles";

const RelatedProducts = ({ title, products, category, isBestSellers }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  useEffect(() => {
    if (!isBestSellers) {
      const newProducts = products.filter(
        (product) => product.category === category,
      );
      setProductsFiltered(newProducts);
    }
    const newProducts = products.filter((product) => product?.bestSeller);
    setProductsFiltered(newProducts);
  }, []);

  if (!productsFiltered && !productsFiltered.length) return null;

  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        {title && (
          <S.Title className={isBestSellers ? "center" : ""}>{title}</S.Title>
        )}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
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
