import styled from 'styled-components'
import { Typography } from 'antd'
import { theme } from '../../styles/theme/theme'

const { Text } = Typography

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`

export const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 5rem;
`

export const TitleText = styled(Text)`
  color: ${theme.colors.text.color0};
  font-size: ${theme.fontSize.h0}px;
  font-weight: 500;
`
