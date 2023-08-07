import styled from "@emotion/styled";
import { Container } from "@mui/material";
import CustomImage from "@/components/custom-image/custom-image.component";

export const Title = styled.h1`
  margin: 0;
  span {
    font-size: 3rem;
    line-height: 20px;
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
  margin: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 300px;
    height: 300px;
  }
`;

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    object-fit: cover !important;
    border-radius: 50%;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  z-index: 9;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  gap: 20px;
  &.card-0 {
    top: 0;
    left: 0;
  }
  &.card-1 {
    bottom: 0;
    left: 0;
  }
  &.card-2 {
    bottom: 20px;
    right: -20px;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
