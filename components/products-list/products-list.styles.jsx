import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

export const CustomContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const CategoryWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const CategoryTitle = styled(Typography)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;
