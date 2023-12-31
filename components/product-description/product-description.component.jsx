import React, { useState } from "react";
import { Grid } from "@mui/material";

import CustomImage from "@/components/custom-image/custom-image.component";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomLink from "@/components/custom-link/custom-link.component";

import * as S from "./product-description.styles";

const ProductDescription = ({
  id,
  image,
  description,
  title,
  price,
  qty: quantity,
}) => {
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
      <S.SlugWrapper>
        <CustomLink url="/">Shop</CustomLink> / {title}
      </S.SlugWrapper>
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
          <S.Price>{(price * qty).toFixed(2)}</S.Price>
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
                  disabled={qty <= 1 || qty === quantity}
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
              data-item-url={`${process.env.NEXT_PUBLIC_WEB_URL}/products/${id}/`}
              data-item-max-quantity={quantity}
              data-item-image={image}
              className={`snipcart-add-item red`}
              disabled={qty <= 1 || qty === quantity}
            >
              <ShoppingCartIcon />
              Agregar
            </S.CartButton>
          </S.InputsWrapper>
          <S.PaymentMethodsWrapper>
            <S.PaymentText>Métodos de pago</S.PaymentText>
            <S.ProductDescription className="no-pt">
              Hasta <span> 6 meses sin intereses</span>
            </S.ProductDescription>
            <S.IconsWrapper>
              <S.VisaIcon />
              <S.MastercardIcon />
            </S.IconsWrapper>
          </S.PaymentMethodsWrapper>
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default ProductDescription;
