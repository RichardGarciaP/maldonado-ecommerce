import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 150%;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Description = styled(Typography)`
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.01rem;
  max-width: 400px;
  margin-bottom: 2rem;
`;
