import styled from "@emotion/styled";
import { Container } from "@mui/material";
import CustomImage from "@/components/custom-image/custom-image.component";

export const Title = styled.h1`
  margin: 0;
  span {
    font-size: 3rem;
    &.red {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const CustomContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  //height: 100%;
`;

export const TextWrapper = styled.div``;

export const CircleWrapper = styled.div`
  height: 400px;
  width: 400px;
  border: 6px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover !important;
  }
`;
