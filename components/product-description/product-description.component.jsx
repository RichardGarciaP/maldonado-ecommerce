import React from "react";
import { Grid } from "@mui/material";
import CustomImage from "@/components/custom-image/custom-image.component";

import * as S from "./product-description.styles";

const ProductDescription = ({ image, description, title, price }) => {
  return (
    <S.Wrapper>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <S.ImageWrapper>
            <CustomImage
              img={image}
              alt={description}
              arPaddingPercentage={100}
            />
          </S.ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductDescription>{description}</S.ProductDescription>
          <S.Price>{price}</S.Price>
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default ProductDescription;
