import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomLink from "@/components/custom-link/custom-link.component";

import ProductsImage from "../../public/assets/images/productos-bg.png";

import * as S from "./hero.styles";

const HeroComponent = ({ title }) => {
  return (
    <section>
      <S.CustomContainer>
        <S.TitleContainer>
          <S.Title variant="h1">{title}</S.Title>
          <S.StoreButtonWrapper>
            <S.Button href="/products" className="red">
              <ArrowForwardIcon />
            </S.Button>
            <CustomLink url="/products">Comprar</CustomLink>
          </S.StoreButtonWrapper>
        </S.TitleContainer>
        <S.Image img={ProductsImage} />
      </S.CustomContainer>
    </section>
  );
};

export default HeroComponent;
