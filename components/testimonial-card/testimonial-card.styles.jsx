import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 100%;
    max-width: 360px;
  }
`;

export const Comment = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: ${({ theme }) => theme.typography.pxToRem(28.8)};
  letter-spacing: 0.005em;
  color: ${({ theme }) => theme.palette.text.content};
  text-align: center;
  margin-top: 0.5rem;
  width: 100%;
`;

export const UserName = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: ${({ theme }) => theme.typography.pxToRem(22)};
  letter-spacing: 0.005em;
  color: ${({ theme }) => theme.palette.text.content};
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
`;
