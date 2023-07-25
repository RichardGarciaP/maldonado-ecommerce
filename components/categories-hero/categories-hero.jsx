import React from "react";
import { Container, Grid } from "@mui/material";

import * as S from "./categories-hero.styles";

const CategoriesHero = ({ title, imagesGrid }) => {
  if (!imagesGrid) return null;
  return (
    <S.Wrapper>
      <Container maxWidth="xl">
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        <Grid container spacing={{ xs: 1, sm: 4 }}>
          {imagesGrid.map(({ image }, index) => (
            <Grid item xs={4} key={`image-grid-${index}`}>
              <S.ImageWrapper
                className={index % 2 === 0 ? "haveTopSpacing" : ""}
              >
                <S.Image
                  sizes="33vw"
                  img={image}
                  priority="true"
                  fit="cover"
                  arPaddingPercentage={115}
                />
              </S.ImageWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Wrapper>
  );
};

export default CategoriesHero;
