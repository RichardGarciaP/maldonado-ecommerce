import React from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomLink from "@/components/custom-link/custom-link.component";

import * as S from "./product-card.styles";
import { textEllipsis } from "@/lib/utils";

const ProductCard = ({ id, title, image, price }) => {
  return (
    <S.CardWrapper>
      <CustomLink url={`/products/${id}`}>
        <S.InnerWrapper className="product-image">
          <S.ProductImage img={image} arPaddingPercentage={120} />
        </S.InnerWrapper>
        <S.ProductName>{textEllipsis(title, 50)} </S.ProductName>
        <S.Price>{price}</S.Price>
      </CustomLink>
      <S.AddButton
        className="snipcart-add-item  red"
        data-item-id={id}
        data-item-name={title}
        data-item-price={price}
        data-item-quantity={1}
        data-item-url={`/products/${id}`}
        data-item-image={image}
      >
        <ShoppingCartIcon />
        <span>Agregar</span>
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
