import React from "react";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";
import { Container, Grid } from "@mui/material";

import CustomImage from "@/components/custom-image/custom-image.component";
import CustomButton from "@/components/custom-button/custom-button.component";

import STORE from "../../public/assets/images/viveres.jpg";

import * as S from "./content-section.styles";

const ContentSection = ({ title, description, img }) => {
  return (
    <SectionWrapper>
      <Container>
        <Grid container spacing={4} alignItems="center" direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <CustomButton href="/products" className="red">
              Comprar
            </CustomButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomImage img={STORE} />
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ContentSection;
