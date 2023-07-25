import styled from "@emotion/styled";
import CustomLink from "../custom-link/custom-link.component";
import IconButton from "@mui/material/IconButton";
import { AppBar, Badge, Box, Container, Typography } from "@mui/material";
import CustomImage from "../custom-image/custom-image.component";

const gapSpacing = "32px";

export const CustomAppBar = styled(AppBar)`
  //background-color: ${({ theme }) => theme.palette.bg.light};
  background-color: white;
`;

export const NavWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.bg.light};
`;

export const CustomContainer = styled(Container)``;

export const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${gapSpacing};
  position: relative;
`;

export const LogoWrapper = styled.div`
  position: relative;
`;

export const Logo = styled(Typography)`
  color: red;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  align-items: end;
  span {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 166px;

    font-size: 2rem;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  gap: 2rem;
  left: 50%;
  //transform: translateX(-50%);
  width: 100px;
  justify-self: center;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 166px;
  }
`;

export const Link = styled(CustomLink)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 100%;
  color: ${({ theme }) => theme.palette.primary.main};
  position: relative;
  display: flex;
  align-items: center;

  &:not(.findUs):after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    left: 0;
    bottom: -5px;
    transition: all 0.2s ease;
  }

  span {
    position: relative;
    border-bottom: 2px solid transparent;
    &:after {
      content: "";
      width: 100%;
      position: absolute;
      height: 2px;
      bottom: -5px;
      left: 0;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
  }

  &:hover {
    span {
      &:after {
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;
  cursor: pointer;

  .label {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 100%;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .MuiSvgIcon-root {
    color: red;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .label {
      visibility: hidden;
    }
  }
`;

export const CartBadge = styled(Badge)`
  .MuiBadge-badge {
    min-width: unset;
    width: 15px;
    height: 15px;
    font-size: 10px;
    color: ${({ theme }) => theme.palette.text.light};
  }
`;

export const CustomBox = styled(Box)`
  position: absolute;
  right: 0;
  z-index: 6;

  &.cart {
    right: 0;
    left: unset;
  }

  svg {
    color: white;
  }
`;

export const MenuButton = styled(IconButton)`
  padding-right: 0;
  padding-left: 0;
  svg {
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  .white {
    fill: white;
    svg,
    path {
      fill: white !important;
    }
  }

  &.cart {
    svg {
      width: 17px;
      height: 21px;
    }
  }
`;
