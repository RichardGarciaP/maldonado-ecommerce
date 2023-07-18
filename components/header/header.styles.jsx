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

  display: flex;
  align-items: end;
  span {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 166px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
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
