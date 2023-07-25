import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import CustomInput from "@/components/custom-input/custom-input.component";
import CustomButton from "@/components/custom-button/custom-button.component";

export const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 550px;
  max-width: 100%;
`;

export const Title = styled(Typography)`
  font-weight: 800;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Description = styled(Typography)`
  font-size: 1rem;
  line-height: 150%;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

export const Input = styled(CustomInput)`
  width: 100%;
`;
export const Button = styled(CustomButton)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 190px;
    width: 100%;
  }
`;
