import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "@/components/product-card/product-card.component";
import OilImage from "../../public/assets/images/aceite.png";

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <ProductCard name="Aceite Girasol" price="3" img={OilImage} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ProductCard name="Mantequilla" price="3" img={OilImage} />
      </Grid>
    </Grid>
  );
};

export default ProductsList;
