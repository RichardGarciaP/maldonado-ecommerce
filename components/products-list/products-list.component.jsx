import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "@/components/product-card/product-card.component";
import OilImage from "../../public/assets/images/aceite.png";

const ProductsList = ({ products }) => {
  if (!products || !products.length) return null;

  return (
    <Grid container spacing={4}>
      {products?.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={`product-${index}`}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
