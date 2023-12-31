import React, { useContext, useEffect, useState } from "react";
import * as S from "./header.styles.jsx";
import { Box, useScrollTrigger } from "@mui/material";
import CustomLink from "../custom-link/custom-link.component";
import { isBrowser } from "../../lib/utils";
import PersonIcon from "@mui/icons-material/Person";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import { useSnipcart } from "use-snipcart/useSnipcart";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import HeaderMobile from "@/components/header/header-mobile/header-mobile.component";
// import { AccountContext } from "../../context/account-provider";

const Header = ({}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const { cart = {} } = useSnipcart();
  const { items } = cart;

  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  const handleOpenCart = () => {
    if (isBrowser() && window.Snipcart) {
      window.Snipcart.api.theme.cart.open();
    }
  };

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {}, []);

  return (
    <S.CustomAppBar position="fixed" elevation={scrollTrigger ? 4 : 0}>
      <S.NavWrapper>
        <S.CustomContainer maxWidth="xl">
          <S.MainNav>
            <S.LogoWrapper>
              <CustomLink url="/">
                <S.Logo>
                  Maldonado <span>store</span>
                </S.Logo>
              </CustomLink>
            </S.LogoWrapper>
            <S.CenterWrapper>
              <S.Link url="/">
                <span> Inicio</span>
              </S.Link>
              <S.Link url="/categories">
                <span>Categorias</span>
              </S.Link>
              <S.Link url="/products">
                <span>Tienda</span>
              </S.Link>
            </S.CenterWrapper>
            <S.RightWrapper>
              <S.IconWrapper onClick={handleOpenCart}>
                <S.CartBadge badgeContent={items?.count ?? 0} color="primary">
                  <CartIcon />
                </S.CartBadge>
                <span className="label">Cart</span>
              </S.IconWrapper>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <S.IconWrapper className="snipcart-customer-signin">
                  <PersonIcon />
                </S.IconWrapper>
              </Box>
            </S.RightWrapper>
            <S.CustomBox sx={{ display: { md: "none", xs: "block" } }}>
              <S.MenuButton onClick={handleToggleMenu}>
                {isActiveMenu ? <CloseIcon className="white" /> : <MenuIcon />}
              </S.MenuButton>
            </S.CustomBox>
          </S.MainNav>
        </S.CustomContainer>
      </S.NavWrapper>
      <HeaderMobile
        isActiveMenu={isActiveMenu}
        handleClose={() => setIsActiveMenu(false)}
        handleOpenCart={handleOpenCart}
      />
    </S.CustomAppBar>
  );
};
export default Header;
