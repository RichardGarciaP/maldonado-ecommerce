import styled from "@emotion/styled";
import CustomLink from "../custom-link/custom-link.component";
import { Grid, Typography } from "@mui/material";

export const CustomFooter = styled.footer`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2rem 0;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 48px;
  &.bottom {
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 18px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: end;
    align-items: center;
  }
`;

export const Link = styled(CustomLink)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 17px;
  color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;

  &.thin {
    font-weight: 400;
  }

  position: relative;

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    left: 0;
    bottom: -5px;
    transition: all 0.2s ease;
  }

  &:hover {
    &:after {
      background-color: white;
    }
  }

  // &::before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 2px;
  //   background-color: ${({ theme }) => theme.palette.secondary.light};
  //   bottom: -5px;
  //   left: 0;
  //   transform-origin: right;
  //   transform: scaleX(0);
  //   transition: transform 0.3s ease-in-out;
  // }
  // &:hover::before {
  //   transform-origin: left;
  //   transform: scaleX(1);
  // }
`;

export const BottomWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: unset;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 17px;
  color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  &.hidden {
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: none;
    }
  }
`;

export const CustomSpan = styled(Typography)`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2rem;

  color: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  align-items: end;
  span {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-style: italic;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
