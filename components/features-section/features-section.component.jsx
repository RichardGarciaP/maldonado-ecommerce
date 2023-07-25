import React from "react";
import { Container, Grid } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper/section-wrapper.component";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import * as S from "./features-section.styles";
import { AttachMoney, Check, EmojiEmotions } from "@mui/icons-material";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Check/>,
      title: 'Bueno',
      description: 'Encuentra productos de calidad'
    },
    {
      icon: <EmojiEmotions/>,
      title: 'Bonito',
      description: 'Tenemos productos para todos los gustos'
    },
    {
      icon: <AttachMoney/>,
      title: 'Barato',
      description: 'Tenemos los mejores descuentos'
    },
  ]

  return (
    <SectionWrapper className="dark-background">
      <Container>
        <Grid container spacing={6}>
          {features.map(({icon,title,description},index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
              <S.ItemWrapper>
                <S.Icon>
                  {icon}
                </S.Icon>
                <S.Title>{title}</S.Title>
                <S.Description>
                  {description}
                </S.Description>
              </S.ItemWrapper>
          </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturesSection;
