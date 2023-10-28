import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'
import { Typography } from 'antd'

const { Text } = Typography

export const HeaderCustom = styled.header<{ scrolled: boolean }>`
  position: sticky;
  top: 0px;
  z-index: 999;
  width: 100%;
  background-color: ${theme.colors.primary};
  padding: 1rem;

  border-bottom: ${(props) =>
    props.scrolled
      ? `1px solid ${theme.colors.header.borderColor}`
      : 'transparent'};
  opacity: ${(props) => (props.scrolled ? `0.95` : '1')};
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 2rem 0rem 2rem;
  width: 100%;
  max-width: 80rem;

  @media (max-width: 768px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLinkContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  list-style-type: none;
`
export const NavLinkItem = styled(Text)`
  font-size: ${theme.fontSize.h4}px;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${theme.colors.text.color1};

  &:hover {
    color: ${theme.colors.text.color1Hover};
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
