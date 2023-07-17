import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const ImageWrapper = styled.div`
  padding: 3rem 3rem;
  background-color: ${({ theme }) => theme.palette.text.light};
`;

export const ProductTitle = styled(Typography)`
  font-size: 2rem;
  line-height: 140%;
  font-weight: 600;
`;

export const ProductDescription = styled(Typography)`
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 1.5rem;
`;

export const Price = styled(Typography)`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 150%;
  margin-top: 1.5rem;
  &:before {
    content: "$ ";
  }
`;
