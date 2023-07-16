import React from "react";
import { useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import HEADER_ITEMS from "../header-items.json";

import * as S from "./header-mobile.styles.jsx";

const HeaderMobile = ({
  isActiveMenu,
  bannerHeight,
  handleOpenCart,
  handleClose,
}) => {
  const height = "100";
  const theme = useTheme();
  const wrapperHeight = height
    ? `${height - theme.navHeight - bannerHeight}px`
    : `calc(100vh - ${theme.navHeight - bannerHeight}px)`;
  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit>
      <S.ItemsWrapper
        id="mobileItemsWrapper"
        bannerHeight={bannerHeight}
        style={{ height: wrapperHeight }}
      >
        <S.InnerWrapper>
          {HEADER_ITEMS.map(({ url, title }, index) => (
            <S.MenuLink url={url} key={`link-item-mobile-${index}`}>
              {title}
            </S.MenuLink>
          ))}
          {/*<S.MenuLink*/}
          {/*  onClick={() => {*/}
          {/*    handleOpenCart();*/}
          {/*    handleClose();*/}
          {/*  }}*/}
          {/*  url="#"*/}
          {/*>*/}
          {/*  Cart*/}
          {/*</S.MenuLink>*/}
          <S.MenuLink url="#" className="snipcart-customer-signin">
            Sign In
          </S.MenuLink>
        </S.InnerWrapper>
      </S.ItemsWrapper>
    </Fade>
  );
};
export default HeaderMobile;
