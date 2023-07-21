import React from "react";
import * as S from "./slider-arrow.styles.jsx";
import Arrow from "@mui/icons-material/ArrowForwardIos";

const SliderArrow = (props) => (
  <S.Button {...props} component="div">
    <Arrow />
  </S.Button>
);

export default SliderArrow;
