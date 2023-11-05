import styled from 'styled-components'
import { Typography } from 'antd'
import { theme } from '../../styles/theme/theme'

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const ContactText = styled(Typography)`
  color: ${theme.colors.text.color0};
  font-size: ${theme.fontSize.h0}px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: ${theme.colors.text.color1};
  }
`
