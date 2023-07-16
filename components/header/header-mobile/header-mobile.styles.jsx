import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CustomButton from "../../custom-button/custom-button.component";
import CustomLink from "../../custom-link/custom-link.component";

export const ItemsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: 2em 1.5em 2em;
  //height: calc(100vh - ${({ theme }) => theme.navHeight}px);
  z-index: 5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .search {
    margin-bottom: 1em;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 9rem;

  width: 100%;
  height: 100%;
`;

export const MenuLink = styled(CustomLink)`
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.pxToRem(20)};
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  letter-spacing: 0.005em;
  margin-bottom: 2.5rem;
`;
