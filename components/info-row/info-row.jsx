import { Container, Grid } from '@mui/material'
import React from 'react'
import CustomImage from '../custom-image/custom-image.component'
import ProductsImage from "../../public/assets/images/viveres.jpg";
import * as S from "./info-row.styles"

const InfoRow = ({info}) => {

  return (
    <S.Wrapper>
        <Grid container spacing={4} direction='row-reverse'>
            <Grid item sm={12} md={6} style={{width:'100%'}}>
                <CustomImage img={ProductsImage}/>
            </Grid>
            <Grid item sm={12} md={6}>
                <S.ContentWrapper>
                    <S.Title>{info?.title}</S.Title>
                    {info?.options.map(({title,description,icon},index) => (
                        <React.Fragment key={index}>
                            <S.FeatureWrapper>
                                {icon}
                                <span>{title}</span>
                            </S.FeatureWrapper>
                            <span>{description}</span>
                        </React.Fragment>
            
                    ))}
                </S.ContentWrapper>
            </Grid>
        </Grid>
    </S.Wrapper>
  )
}

export default InfoRow