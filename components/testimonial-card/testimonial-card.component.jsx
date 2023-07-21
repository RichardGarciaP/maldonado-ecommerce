import React from "react";
import * as S from "./testimonial-card.styles";
import { Rating } from "@mui/material";
const TestimonialCard = ({ comment, user }) => {
  return (
    <S.CardWrapper>
      <Rating value={5} readOnly></Rating>
      <S.Comment>{comment}</S.Comment>
      <S.UserName>{user}</S.UserName>
    </S.CardWrapper>
  );
};

export default TestimonialCard;
