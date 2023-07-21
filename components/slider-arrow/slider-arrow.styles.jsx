import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const Button = styled(IconButton)`
  border-radius: 100px;
  transition: 0.3s all ease;
  background-color: ${({ theme }) => theme.palette.primary.main};

  :not(&.swiper-button-disabled) {
    border: 2px solid ${({ theme }) => theme.palette.primary.main}!important;
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      path {
        fill: white;
      }
    }
  }
  width: 42px !important;
  height: 42px !important;
  display: flex !important;
  //padding: 1.75rem !important;

  &.swiper-button-disabled {
    border: 2px solid #ccc2b4;
    background-color: lightgray;
    color: white;
    pointer-events: none;
    svg {
      opacity: 0.5;
    }
  }
  &.prev,
  &.prev-slider,
  &.prev-product-slider {
    transform: rotate(180deg);
  }
  svg {
    width: 20px;
    color: ${({ theme }) => theme.palette.text.light};
  }
`;
