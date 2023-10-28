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
        <CustomImage
          effect='blur'
          wrapperProps={{
            style: { transitionDelay: '1s' },
          }}
          // src={'/images/sagar-headshot.jpg'}
          src={localSource}
          alt='Headshot of Sagar'
        />
        <ShadowContainer />
      </ImageContainer>
    </ImageWrapper>
  )
}

export default ImageWithShadow
