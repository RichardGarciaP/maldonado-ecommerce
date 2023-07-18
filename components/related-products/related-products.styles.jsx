import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

export const SectionWrapper = styled.section`
  overflow: hidden;
`;

export const CustomContainer = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;

  .swiper {
    overflow: visible;
  }
`;

export const Title = styled(Typography)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
