import React from "react";
import { Container, Grid } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import * as S from "./features-section.styles";

const FeaturesSection = () => {
  return (
    <SectionWrapper className="dark-background">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <S.ItemWrapper>
              <S.Icon>
                <CreditCardIcon />
              </S.Icon>
              <S.Title>Tarjetas de credito</S.Title>
              <S.Description>
                Aceptamos tarjetas de credito a 3 y 6 meses sin interes
              </S.Description>
            </S.ItemWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <S.ItemWrapper>
              <S.Icon>
                <CreditCardIcon />
              </S.Icon>
              <S.Title>Tarjetas de credito</S.Title>
              <S.Description>
                Aceptamos tarjetas de credito a 3 y 6 meses sin interes
              </S.Description>
            </S.ItemWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <S.ItemWrapper>
              <S.Icon>
                <CreditCardIcon />
              </S.Icon>
              <S.Title>Tarjetas de credito</S.Title>
              <S.Description>
                Aceptamos tarjetas de credito a 3 y 6 meses sin interes
              </S.Description>
            </S.ItemWrapper>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturesSection;
