import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import CustomImage from "@/components/custom-image/custom-image.component";
import * as S from "./categories-row.styles";

const CategoriesRow = ({ direction, image, title, description, button }) => {
  return (
    <Container>
      <Grid container spacing={4} direction={direction}>
        <Grid item xs={12} md={6} sx={{ width: "100%" }}>
          <CustomImage img={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.ContentWrapper>
            <span>{title}</span>
            <Typography>{description}</Typography>
          </S.ContentWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoriesRow;
