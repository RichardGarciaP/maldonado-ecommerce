import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/testimonial-card/testimonial-card.component";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";

import "swiper/css";
import "swiper/css/navigation";
import * as S from "./testimonials.styles";
import SliderArrow from "@/components/slider-arrow/slider-arrow.component";
import { Navigation } from "swiper/modules";

const Testimonials = ({ title, testimonials }) => {
  return (
    <SectionWrapper className="no-overflow">
      <S.CustomContainer>
        {title && <S.Title>{title}</S.Title>}
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={60}
          navigation={{
            prevEl: ".prev-product-slider",
            nextEl: ".next-product-slider",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          {[0, 1, 2, 3].map((product, index) => (
            <SwiperSlide key={`testimonial-slide-${index}`}>
              <TestimonialCard
                comment="Excelenete servicio, gran atención"
                user="Rosa Ramirez"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <S.ButtonsWrapper>
          <SliderArrow className="prev-product-slider" />
          <SliderArrow className="next-product-slider" />
        </S.ButtonsWrapper>
      </S.CustomContainer>
    </SectionWrapper>
  );
};

export default Testimonials;
