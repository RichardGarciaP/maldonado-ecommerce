import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  svg {
    font-size: 2.5rem;
  }
`;

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 150%;
  text-align: center;
`;

export const Description = styled(Typography)`
  text-align: center;
`;
