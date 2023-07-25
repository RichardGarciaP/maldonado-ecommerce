import { Container, Grid } from '@mui/material'
import React from 'react'
import CustomImage from '../custom-image/custom-image.component'
import ProductsImage from "../../public/assets/images/viveres.jpg";
import * as S from "./info-row.styles"

const InfoRow = ({info}) => {

  return (
    <S.Wrapper>
        <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
                <CustomImage img={ProductsImage}/>
            </Grid>
            <Grid item sm={12} md={6}>
                <S.Title>{info?.title}</S.Title>
                {info?.options.map(({title,description,icon},index) => (
                    <React.Fragment key={index}>
                        <span>{title}</span>
                        <span>{description}</span>
                        {icon}
                    </React.Fragment>
           
                ))}
            </Grid>
        </Grid>
    </S.Wrapper>
  )
}

export default InfoRow