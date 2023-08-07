import React from "react";
import { Container, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import * as S from "./footer.styles";
import Newsletter from "@/components/newsletter/newsletter.component";
import { FooterContent } from "@/src/strings/footer";

const SOCIALS = [
  {
    url: "https://web.facebook.com/importadorapaezmaldonado/?_rdc=1&_rdr",
    title: "Facebook",
    icon: <Facebook />,
  },
  {
    url: "https://www.instagram.com/importadora_paez_maldonado/",
    title: "Instagram",
    icon: <Instagram />,
  },
  {
    url: "https://twitter.com/marco_malgut",
    title: "Twitter",
    icon: <Twitter />,
  },
];

const Footer = ({}) => {
  return (
    <>
      <Newsletter />
      <S.CustomFooter>
        <Container maxWidth="xl">
          <S.MainWrapper>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <S.CustomSpan>
                  Maldonado <span>store</span>
                </S.CustomSpan>
                <S.LinksWrapper className="bottom">
                  {SOCIALS.map(({ title, url, icon }, index) => (
                    <S.ExternalLink
                      href={url}
                      target="_blank"
                      className="social-icon"
                    >
                      {icon}
                    </S.ExternalLink>
                  ))}
                </S.LinksWrapper>
              </Grid>
              <S.ContactGrid container item xs={12} md={6} spacing={4}>
                {FooterContent.contact?.map(
                  ({ title, description, link }, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={`contact-item-${index}`}
                    >
                      <S.ContactWrapper>
                        <S.ContactTitle>{title}</S.ContactTitle>
                        <S.ExternalLink href={link} target="_blank">
                          <S.ContactDescription>
                            {description}
                          </S.ContactDescription>
                        </S.ExternalLink>
                      </S.ContactWrapper>
                    </Grid>
                  ),
                )}
              </S.ContactGrid>
            </Grid>
          </S.MainWrapper>
          <S.BottomWrapper>
            <S.PoweredBy>
              Desarrollado por <span> Sandra Prado y Freddy Benitez</span>
            </S.PoweredBy>
          </S.BottomWrapper>
        </Container>
      </S.CustomFooter>
    </>
  );
};

export default Footer;
