import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "@/components/product-card/product-card.component";
import * as S from "./products-list.styles";
const ProductsList = ({ products }) => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    let categories = [];
    products.forEach(({ category }) => {
      categories.push(category);
    });

    setFilterCategories([...new Set(categories)]);
  }, []);

  useEffect(() => {
    let productsByCategory = filterCategories.map((category) => {
      const newProducts = products.filter(
        (product) => product.category === category,
      );

      return {
        category,
        products: newProducts,
      };
    });
    setFilterProducts(productsByCategory);
  }, [filterCategories]);

  if (!filterProducts || !filterProducts.length) return null;

  return (
    <S.CustomContainer>
      {filterProducts?.map(({ category, products }, index) => (
        <S.CategoryWrapper key={`category-${index}`}>
          <S.CategoryTitle>{category}</S.CategoryTitle>
          <Grid container spacing={4}>
            {products.map((product, indexProduct) => (
              <Grid item xs={12} sm={6} md={3} key={`product-${indexProduct}`}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </S.CategoryWrapper>
      ))}
    </S.CustomContainer>
  );
};

export default ProductsList;
