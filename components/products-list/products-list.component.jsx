import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "@/components/product-card/product-card.component";
import * as S from "./products-list.styles";
const ProductsList = ({ products }) => {
  if (!products || !products.length) return null;

  return (
    <S.CustomContainer>
      <Grid container spacing={4}>
        {products?.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={`product-${index}`}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </S.CustomContainer>
  );
};

export default ProductsList;
