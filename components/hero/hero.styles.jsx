import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

import CustomButton from "@/components/custom-button/custom-button.component";
import CustomImage from "@/components/custom-image/custom-image.component";

export const CustomContainer = styled(Container)`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div``;

export const Title = styled(Typography)`
  font-size: 4rem;
  max-width: 450px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
  text-transform: uppercase;
`;

export const StoreButtonWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
  }
`;

export const Button = styled(CustomButton)`
  padding: 0.5rem;
  margin-right: 0.5rem;
  svg {
    font-size: 1.5rem;
  }
`;

export const Image = styled(CustomImage)`
  width: 100%;
  max-width: 550px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
`;
