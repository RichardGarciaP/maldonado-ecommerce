import React from "react";
import { useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import HEADER_ITEMS from "../header-items.json";

import * as S from "./header-mobile.styles.jsx";

const HeaderMobile = ({ isActiveMenu, handleOpenCart, handleClose }) => {
  const height = "100";
  const theme = useTheme();
  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit>
      <S.ItemsWrapper id="mobileItemsWrapper">
        <S.InnerWrapper>
          {HEADER_ITEMS.map(({ url, title }, index) => (
            <S.MenuLink url={url} key={`link-item-mobile-${index}`}>
              {title}
            </S.MenuLink>
          ))}
          <S.MenuLink url="#" className="snipcart-customer-signin">
            Iniciar sesión
          </S.MenuLink>
        </S.InnerWrapper>
      </S.ItemsWrapper>
    </Fade>
  );
};
export default HeaderMobile;
