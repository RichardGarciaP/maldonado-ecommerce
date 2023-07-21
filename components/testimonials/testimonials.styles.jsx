import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

export const CustomContainer = styled(Container)`
  .swiper {
    padding-bottom: 1rem;
    overflow: visible;
  }
`;

export const Title = styled(Typography)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1em;
`;
