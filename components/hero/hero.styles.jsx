import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

import CustomButton from "@/components/custom-button/custom-button.component";
import CustomImage from "@/components/custom-image/custom-image.component";

export const CustomContainer = styled(Container)`
  /* margin-top: 80px; */
  padding-top: 1rem;
  padding-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CustomTitle = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    max-width: 50%;
  }
`;

export const CustomSubtitile = styled.h2`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.palette.primary.dark};
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
  } 
`

export const CustomDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin: 0;
`

export const StoreButtonWrapper = styled.div`
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
