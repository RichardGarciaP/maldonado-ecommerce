import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomLink from "@/components/custom-link/custom-link.component";

import ProductsImage from "../../public/assets/images/productos-bg.png";

import * as S from "./hero.styles";
import { Grid } from "@mui/material";

const HeroComponent = ({ title, subtitle, description }) => {
  return (
    <section>
      <S.CustomContainer>
        <S.CustomTitle>{title}</S.CustomTitle>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <S.TitleContainer>
              <S.CustomSubtitile>{subtitle}</S.CustomSubtitile>
              <S.CustomDescription>{description}</S.CustomDescription>
              <S.StoreButtonWrapper>
                <S.Button href="/products" className="red">
                  <ArrowForwardIcon />
                </S.Button>
                <CustomLink url="/products">Comprar</CustomLink>
              </S.StoreButtonWrapper>
            </S.TitleContainer>
          </Grid>
          <Grid style={{width:'100%'}} item sm={12} md={6}>
            <S.Image img={ProductsImage} />
          </Grid>
        </Grid>

      </S.CustomContainer>
    </section>
  );
};

export default HeroComponent;
