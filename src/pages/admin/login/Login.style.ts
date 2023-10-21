import { styled } from 'styled-components'

export const AdminLoginWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
`

export const AdminLoginContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const AdminLoginLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    display: none;
  }
`

export const AdminLoginBackground = styled.div`
  width: 50%;
  > img {
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`
