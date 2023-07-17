import React from "react";

import * as S from "./footer.styles";
import { Container, Grid } from "@mui/material";

const topLinks = [
  {
    name: "Shop",
    url: "/shop/",
  },
  {
    name: "Our Story",
    url: "/our-story/",
  },
  {
    name: "Sustainability",
    url: "/sustainability/",
  },
  {
    name: "Recipes",
    url: "/recipes/",
  },
  {
    name: "Blog",
    url: "/blog/",
  },
  {
    name: "Press",
    url: "/press/",
  },
  {
    name: "Contact",
    url: "/contact-us/",
  },
];

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
                  <S.ExternalLink href="https://web.facebook.com/importadorapaezmaldonado/?_rdc=1&_rdr">
                    Facebook
                  </S.ExternalLink>
                  <S.ExternalLink href="https://www.instagram.com/importadora_paez_maldonado/">
                    Instagram
                  </S.ExternalLink>
                  <S.ExternalLink href="https://twitter.com/marco_malgut">
                    Twitter
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
