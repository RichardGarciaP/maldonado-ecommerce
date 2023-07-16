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
                  <S.Link url="/privacy-policy/" className="thin">
                    Privacy Policy
                  </S.Link>
                  <S.Link url="/terms-of-service/" className="thin">
                    Terms of Service
                  </S.Link>
                  <S.Link url="/refunds/" className="thin">
                    Refunds
                  </S.Link>
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
