import React, { FC } from 'react'
import {
  ImageWrapper,
  ImageContainer,
  CustomImage,
  ShadowContainer,
  CustomImage2,
} from './ImageWithShadow.style'

interface IProps {
  localSource: string
}

const ImageWithShadow: FC<IProps> = ({ localSource }) => {
  return (
    <ImageWrapper>
      <CustomImage2
        effect='blur'
        wrapperProps={{
          style: { transitionDelay: '1s' },
        }}
        // src={'/images/sagar-headshot.jpg'}
        src={localSource}
        alt='Headshot of Sagar'
      />
    </ImageWrapper>
  )
}

export default ImageWithShadow
