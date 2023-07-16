import React from "react";
import PropTypes from "prop-types";

import CustomButton from "@/components/custom-button/custom-button.component";

import * as S from "./product-card.styles";

const ProductCard = ({ img, name, price }) => {
  return (
    <S.CardWrapper>
      <S.InnerWrapper>
        <S.ProductImage img={img} arPaddingPercentage={100} />
      </S.InnerWrapper>
      <S.ProductName>{name} </S.ProductName>
      <p>precio</p>
      <S.AddButton
        className="snipcart-add-item  red"
        data-item-url={`https://www.maldonado-store.com/product/${name}`}
        data-item-id={name}
        data-item-price={price}
        data-item-image={img}
        data-item-name={name}
      >
        Agregar
      </S.AddButton>
    </S.CardWrapper>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
