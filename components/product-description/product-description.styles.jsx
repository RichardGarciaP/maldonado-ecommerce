import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";
import CustomButton from "@/components/custom-button/custom-button.component";

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

export const QtyWrapper = styled.div`
  display: flex;
  max-width: 200px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled(Typography)`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 1rem;
`;

export const QtyButton = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};

  border-radius: 0;
  padding: 0;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.palette.bg.main};
  color: ${({ theme }) => theme.palette.text.primary};
  flex: 1;

  &.left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &.right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.Mui-disabled {
    border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.bg.dark};
  }
`;

export const QtyInput = styled(TextField)`
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  flex: 1;
  .MuiInputBase-root {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;

    input {
      text-align: center;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    fieldset {
      border: none;
    }
  }
`;

export const CartButton = styled(CustomButton)`
  padding: 1rem 5.1rem !important;
`;
