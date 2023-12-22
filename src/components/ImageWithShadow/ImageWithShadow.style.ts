import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const ImageContainer = styled.div`
  position: relative;

  height: 360px;
  width: 320px;

  @media (max-width: 768px) {
    height: 300px;
    width: 260px;
  }
`

export const CustomImage = styled(LazyLoadImage)`
  object-fit: cover;
  border: 8px solid #ffffff;
  z-index: 10;

  position: absolute;
  top: 0;
  left: 0;

  height: 320px;
  width: 280px;

  @media (max-width: 768px) {
    height: 280px;
    width: 240px;
  }
`
export const ShadowContainer = styled.div`
  border-width: 8px;
  border-color: transparent;
  background-color: #e5e7eb;

  position: absolute;
  right: 0;
  bottom: 0;

  height: 320px;
  width: 280px;

  @media (max-width: 768px) {
    height: 280px;
    width: 280px;
  }
`

export const CustomImage2 = styled(LazyLoadImage)`
  object-fit: cover;
  height: 320px;
  width: 280px;
  border-radius: 0.25rem;

  @media (max-width: 768px) {
    height: 280px;
    width: 240px;
  }
`
