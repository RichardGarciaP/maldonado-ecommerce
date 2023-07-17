import styled from "@emotion/styled";
import CustomImage from "@/components/custom-image/custom-image.component";
import { Typography } from "@mui/material";
import CustomButton from "@/components/custom-button/custom-button.component";

export const CardWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;

  &:hover {
    .overlay-btn {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const InnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  position: relative;
  padding: 0.5rem;
`;

export const ProductImage = styled(CustomImage)``;

export const ProductName = styled(Typography)`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Price = styled(Typography)`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-weight: 600;

  &::before {
    content: "$";
  }
`;

export const AddButton = styled(CustomButton)`
  margin-top: 0.5rem;
  width: 100%;
`;
