import React from "react";
import { Grid } from "@mui/material";
import * as S from "./circle-hero.styles";

const CircleHero = ({
  brownTitle,
  redTitle,
  description,
  image,
  floatingCards,
}) => {
  return (
    <S.CustomContainer>
      <Grid container spacing={{ xs: 4, md: 0 }}>
        <Grid item xs={12} md={6}>
          <S.Wrapper>
            <S.TextWrapper>
              <S.Title>
                <span>{brownTitle}</span>{" "}
                <span className="red">{redTitle}</span>
              </S.Title>
              <p>{description}</p>
            </S.TextWrapper>
          </S.Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <S.CircleWrapper>
            <S.Image img={image} />
          </S.CircleWrapper>
        </Grid>
      </Grid>
    </S.CustomContainer>
  );
};

export default CircleHero;
