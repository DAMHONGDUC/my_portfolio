import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'
import { Card } from 'antd'
import Image from 'next/image'
import { Typography } from 'antd'

const { Text } = Typography

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled(Card)`
  background-color: ${theme.colors.primary};

  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px ${theme.colors.card.boxShadow1};
`

export const CustomImage = styled(Image)`
  width: 5rem;
`

export const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  list-style-type: disc;
  padding: 0px 0px 0px 0.8rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`

export const ContentText = styled.li`
  font-size: ${theme.fontSize.h5}px;
  color: ${theme.colors.text.color1};
`

export const DateText = styled(Text)`
  color: ${theme.colors.text.color1};
`

export const CompanyNameText = styled(Text)`
  font-size: ${theme.fontSize.h4}px;
`

export const TimeDetailText = styled(Text)`
  font-size: ${theme.fontSize.h6}px;
  color: ${theme.colors.text.color1};
`
