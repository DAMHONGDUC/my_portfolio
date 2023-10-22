import React, { FC } from 'react'
import {
  ImageWrapper,
  ImageContainer,
  CustomImage,
  ShadowContainer,
} from './ImageWithShadow.style'

interface IProps {
  localSource: string
}

const ImageWithShadow: FC<IProps> = ({ localSource }) => {
  return (
    <ImageWrapper>
      <ImageContainer>
        <CustomImage src={localSource} alt='Headshot of Sagar'></CustomImage>
        <ShadowContainer />
      </ImageContainer>
    </ImageWrapper>
  )
}

export default ImageWithShadow
