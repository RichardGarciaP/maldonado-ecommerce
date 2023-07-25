import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  &.no-overflow {
    overflow: hidden;
  }

  &.dark-background {
    background-color: ${({ theme }) => theme.palette.bg.dark};
  }

  &.light-background {
    background-color: ${({ theme }) => theme.palette.bg.light};
  }
`;
