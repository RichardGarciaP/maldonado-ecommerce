import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomImage from "@/components/custom-image/custom-image.component";

import * as S from "./product-description.styles";
import CustomButton from "@/components/custom-button/custom-button.component";
import { CartButton } from "./product-description.styles";

const ProductDescription = ({ id, image, description, title, price }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty((currentQty) => currentQty + 1);
  };

  const decrementQty = () => {
    setQty((currentQty) => currentQty - 1);
  };

  const changeQty = ({ target }) => {
    if (target.value) setQty(target.value);
    else setQty(1);
  };

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
          {description && (
            <S.ProductDescription>{description}</S.ProductDescription>
          )}
          <S.Price>{price * qty}</S.Price>
          <S.InputsWrapper>
            <S.InnerWrapper>
              <S.Text>Cantidad</S.Text>

              <S.QtyWrapper>
                <S.QtyButton
                  className="left"
                  onClick={decrementQty}
                  disabled={qty <= 1}
                  size="small"
                >
                  -
                </S.QtyButton>
                <S.QtyInput
                  value={qty}
                  disabled
                  size="small"
                  onChange={changeQty}
                  type="number"
                />
                <S.QtyButton
                  className="right"
                  onClick={incrementQty}
                  size="small"
                >
                  +
                </S.QtyButton>
              </S.QtyWrapper>
            </S.InnerWrapper>
            <S.CartButton
              data-item-id={id}
              data-item-name={title}
              data-item-price={price}
              data-item-quantity={qty}
              data-item-url={`${process.env.NEXT_PUBLIC_WEB_URL}/product/${id}`}
              data-item-image={image}
              className={`snipcart-add-item red`}
            >
              Agregar
            </S.CartButton>
          </S.InputsWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default ProductDescription;
