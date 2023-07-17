import React from "react";
import PropTypes from "prop-types";

import CustomLink from "@/components/custom-link/custom-link.component";

import * as S from "./product-card.styles";

const ProductCard = ({ id, title, image, price }) => {
  return (
    <S.CardWrapper>
      <CustomLink url={`/product/${id}`}>
        <S.InnerWrapper>
          <S.ProductImage img={image} arPaddingPercentage={100} />
        </S.InnerWrapper>
        <S.ProductName>{title} </S.ProductName>
        <S.Price>{price}</S.Price>
      </CustomLink>
      <S.AddButton
        className="snipcart-add-item  red"
        data-item-url={`${process.env.NEXT_PUBLIC_WEB_URL}/product/${id}`}
        data-item-id={id}
        data-item-price={price}
        data-item-image={image}
        data-item-name={title}
      >
        Agregar
      </S.AddButton>
    </S.CardWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
