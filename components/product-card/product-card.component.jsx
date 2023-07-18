import React from "react";
import PropTypes from "prop-types";

import CustomLink from "@/components/custom-link/custom-link.component";

import * as S from "./product-card.styles";
import { textEllipsis } from "@/lib/utils";

const ProductCard = ({ id, title, image, price, category }) => {
  return (
    <S.CardWrapper>
      <CustomLink url={`/product/${id}`}>
        <S.InnerWrapper>
          <S.ProductImage img={image} arPaddingPercentage={120} />
        </S.InnerWrapper>
        <S.ProductName>{textEllipsis(title, 50)} </S.ProductName>
        <S.Category>{category}</S.Category>
        <S.Price>{price}</S.Price>
      </CustomLink>
      <S.AddButton
        className="snipcart-add-item  red"
        data-item-url={`${process.env.NEXT_PUBLIC_WEB_URL}/product/${id}`}
        data-item-id={id}
        data-item-price={price}
        data-item-image={image}
        data-item-name={title}
        data-item-quantity={1}
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
