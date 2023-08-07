import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/testimonial-card/testimonial-card.component";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";

import "swiper/css";
import "swiper/css/navigation";
import * as S from "./testimonials.styles";
import SliderArrow from "@/components/slider-arrow/slider-arrow.component";
import { Navigation } from "swiper/modules";

const testimonialsList = [
  {
    content: "Maldonado Store ha transformado mis compras semanales en una experiencia conveniente y satisfactoria. Siempre encuentro lo que necesito, desde productos frescos hasta mis snacks favoritos. ¡Definitivamente mi tienda en línea de abarrotes preferida!",
    user: "Laura G.",
  },
  {
    content: "Increíble variedad de productos en Maldonado Store. ¡Nunca pensé que podría encontrar ingredientes tan específicos para mis recetas! Sin duda, la mejor opción para hacer mis compras desde casa.",
    user: "Carlos R.",
  },
  {
    content: "Maldonado Store me ha ahorrado tiempo y esfuerzo. Su servicio confiable y entrega puntual hacen que sea mi elección número uno para abarrotes en línea. ¡Recomendado al 100%!",
    user: "Ana M.",
  },
  {
    content: "No puedo expresar lo feliz que estoy con Maldonado Store. La calidad de los productos es excepcional y su atención al cliente es impecable. ¡Finalmente encontré una tienda en línea que entiende mis necesidades!",
    user: "Juan P",
  },
];
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
          {testimonialsList?.map(({content,user}, index) => (
            <SwiperSlide key={`testimonial-slide-${index}`}>
              <TestimonialCard
                comment={content}
                user={user}
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
