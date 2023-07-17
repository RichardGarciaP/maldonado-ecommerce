import React from "react";
import { Container, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import * as S from "./footer.styles";

const Footer = ({}) => {
  return (
    <>
      <S.CustomFooter>
        <Container maxWidth="xl">
          <S.BottomWrapper>
            <Grid container>
              <Grid item xs={12} md={6}>
                <S.CustomSpan>
                  Maldonado <span>store</span>
                </S.CustomSpan>
              </Grid>
              <Grid item xs={12} md={6}>
                <S.LinksWrapper className="bottom">
                  <S.ExternalLink
                    href="https://web.facebook.com/importadorapaezmaldonado/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <Facebook />
                  </S.ExternalLink>
                  <S.ExternalLink
                    href="https://www.instagram.com/importadora_paez_maldonado/"
                    target="_blank"
                  >
                    <Instagram />
                  </S.ExternalLink>
                  <S.ExternalLink
                    href="https://twitter.com/marco_malgut"
                    target="_blank"
                  >
                    <Twitter />
                  </S.ExternalLink>
                </S.LinksWrapper>
              </Grid>
            </Grid>
          </S.BottomWrapper>
        </Container>
      </S.CustomFooter>
    </>
  );
};

export default Footer;
