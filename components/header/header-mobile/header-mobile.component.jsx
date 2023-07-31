import React from "react";
import Fade from "@mui/material/Fade";

import { useSnipcart } from "use-snipcart/useSnipcart";

import HEADER_ITEMS from "../header-items.json";

import * as S from "./header-mobile.styles.jsx";

const HeaderMobile = ({ isActiveMenu }) => {
  const { customer } = useSnipcart();

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
            {customer?.status !== "SignedIn" ? (
              <span>Iniciar sesión</span>
            ) : (
              <span>Perfil</span>
            )}
          </S.MenuLink>
        </S.InnerWrapper>
      </S.ItemsWrapper>
    </Fade>
  );
};
export default HeaderMobile;
